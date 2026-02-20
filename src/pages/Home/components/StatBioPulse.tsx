import { Phone, ArrowRight } from "lucide-react";

export default function CtaBioPulse() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
          {/* Background glow */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#0C7779]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 -right-44 h-[560px] w-[560px] rounded-full bg-[#249E94]/20 blur-3xl" />

          {/* Grid */}
          <div className="relative grid gap-10 px-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-14">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-[12px] font-semibold text-slate-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#0C7779]" />
                Основано на доказательствах • Надлежащая производственная
                практика (GMP) • Клинические протоколы{" "}
              </div>

              <h2 className="mt-5 text-[34px] leading-[1.05] md:text-[44px] font-extrabold text-slate-900">
                Запустим восстановление
                <span className="block bg-gradient-to-r from-[#0C7779] via-[#249E94] to-slate-900 bg-clip-text text-transparent">
                  на клеточном уровне
                </span>
              </h2>

              <p className="mt-4 max-w-[560px] text-slate-600 text-[15px] md:text-[16px] leading-relaxed">
                Персональная консультация врача и научного куратора. Подберём
                протокол, объясним шаги и оценим возможности терапии — прозрачно
                и по стандартам.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <button className="group inline-flex items-center gap-2 rounded-full bg-[#0C7779] px-6 py-3 text-white font-semibold shadow-[0_14px_30px_rgba(12,119,121,0.28)] hover:bg-[#0A5F5F] transition">
                  Получить план терапии
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Contacts */}
              <div className="mt-8 flex flex-wrap items-center gap-5 text-[13px] text-slate-600">
                <a
                  className="inline-flex items-center gap-2 hover:text-slate-900 transition"
                  href="tel:+998712000000"
                >
                  <Phone className="h-4 w-4 text-[#0C7779]" />
                  +998 (71) 200-00-00
                </a>
              </div>
            </div>

            {/* Right: mini “pulse card” */}
            <div className="relative">
              <div className="h-full rounded-3xl border border-black/5 bg-white/55 backdrop-blur p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="text-[12px] tracking-[0.22em] font-semibold text-slate-500">
                  FAST CHECK
                </div>

                <div className="mt-3 text-slate-900 font-extrabold text-[18px]">
                  Бесплатная оценка запроса
                </div>

                <ul className="mt-4 space-y-3 text-[14px] text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#249E94]" />
                    10–15 минут: цель и симптомы
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#249E94]" />
                    Предварительный протокол
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#249E94]" />
                    Рекомендации по шагам
                  </li>
                </ul>

                {/* Pulse line */}
                <div className="mt-6 rounded-2xl bg-slate-900/5 p-4">
                  <div className="text-[11px] font-semibold text-slate-500 mb-2">
                    SIGNAL • regeneration
                  </div>
                  <svg
                    viewBox="0 0 120 12"
                    preserveAspectRatio="none"
                    className="w-full h-5"
                  >
                    <defs>
                      <linearGradient
                        id="pulseGrad"
                        x1="0"
                        y1="0"
                        x2="120"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#0C7779" />
                        <stop offset="50%" stopColor="#249E94" />
                        <stop offset="100%" stopColor="#0C7779" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 6 H120"
                      fill="none"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="1"
                    />
                    <path
                      d="M0 6 L12 6 L18 2 L24 10 L30 6 L42 6 L48 4 L54 8 L60 6 L72 6 L78 2 L84 10 L90 6 L120 6"
                      fill="none"
                      stroke="url(#pulseGrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ strokeDasharray: 150 }}
                      className="[animation:pulseFlow_2.4s_linear_infinite]"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes pulseFlow {
              from { stroke-dashoffset: 150; }
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
