import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Stat = {
  id: string;
  label: string; // CELL PURITY
  kind: "number" | "text";
  valueText: string; // "99.8%" | "ISO" | ...
  target?: number; // 99.8 | 15
  decimals?: number; // 1
  suffix?: string; // "%" | "+"
  progress?: number;
};

function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(opts: {
  end: number;
  durationMs: number;
  decimals: number;
  enabled: boolean;
}) {
  const { end, durationMs, decimals, enabled } = opts;
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs);
      const eased = easeOutCubic(p);
      const next = end * eased;

      const factor = Math.pow(10, decimals);
      setVal(Math.round(next * factor) / factor);

      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs, decimals, enabled]);

  return val;
}

export default function StatsStrip({ className }: { className?: string }) {
  const stats: Stat[] = useMemo(
    () => [
      {
        id: "purity",
        kind: "number",
        valueText: "97.6%",
        target: 97.6,
        decimals: 1,
        suffix: "%",
        label: "Чистота клеток",
        progress: 97.6,
      },
      {
        id: "iso",
        kind: "text",
        valueText: "ISO",
        label: " Сертифицированная лабаратория",
        progress: 82,
      },
      {
        id: "years",
        kind: "number",
        valueText: "15+",
        target: 15,
        decimals: 0,
        suffix: "+",
        label: "Годы исследований",
        progress: 70,
      },
      {
        id: "ebm",
        kind: "text",
        valueText: "EBM",
        label: "Обосновано на доказательствах",
        progress: 78,
      },
    ],
    [],
  );

  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.35);

  return (
    <section ref={ref} className={cn("w-full", className)}>
      <div
        className={cn(
          "mx-auto min-w-[1366px]",
          "rounded-2xl",
          "bg-white/5", // как на скрине (мед тёмный)
          "border border-white/10",
          "px-6 py-6 md:px-12 md:py-8 backdrop-blur-sm",
        )}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, idx) => (
            <StatCell key={s.id} stat={s} play={inView} delay={idx * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({
  stat,
  play,
  delay,
}: {
  stat: Stat;
  play: boolean;
  delay: number;
}) {
  const count = useCountUp({
    end: stat.target ?? 0,
    durationMs: 1100 + delay,
    decimals: stat.decimals ?? 0,
    enabled: play && stat.kind === "number",
  });

  const shownValue =
    stat.kind === "number"
      ? `${count.toFixed(stat.decimals ?? 0)}${stat.suffix ?? ""}`
      : stat.valueText;

  // progress line (плавно заполняется)
  const prog = useCountUp({
    end: stat.progress ?? 0,
    durationMs: 1200 + delay,
    decimals: 0,
    enabled: play,
  });

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-white text-[26px] md:text-[30px] font-extrabold tracking-tight">
        {shownValue}
      </div>

      <div className="mt-1 text-[10px] md:text-[11px] tracking-[0.22em] font-semibold text-white">
        {stat.label}
      </div>

      {/* тонкая линия “заполнения” */}
      <div className="mt-3 h-[4px] w-[110px] md:w-[140px] rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.max(0, Math.min(100, prog))}%`,
            background:
              "linear-gradient(90deg, rgba(36,158,148,0.0), rgba(36,158,148,0.85), rgba(62,242,194,0.65))",
          }}
        />
      </div>
    </div>
  );
}
