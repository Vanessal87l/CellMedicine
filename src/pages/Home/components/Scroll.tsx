import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** появляться один раз (по умолчанию да) */
  once?: boolean;
  /** 0..1 — сколько элемента должно попасть в экран */
  amount?: number;
  /** задержка в мс */
  delayMs?: number;
};

export default function Scroll({
  children,
  className,
  once = true,
  amount = 0.18,
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: amount },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, amount]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 will-change-transform",
        shown
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-6 blur-[2px]",
        className,
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
