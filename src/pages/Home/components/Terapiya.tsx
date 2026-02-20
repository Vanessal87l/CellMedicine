import { Link } from "react-router-dom";
import ortopedya from "@/assets/images/ortopedya.jpg";
import nevrologya from "@/assets/images/nevrologya.jpg";
import antiAge from "@/assets/images/anti-age.jpg";
import restorative from "@/assets/images/restorative.jpg";
import SplitScroll from "./SplitScroll";

type TherapyCard = {
  title: string;
  desc: string;
  to: string;
  img: string;
  tag?: string;
};

const THERAPY: TherapyCard[] = [
  {
    title: "Ортопедия",
    desc: "Восстановление суставов и связок без агрессивного вмешательства.",
    to: "/therapy/orthopedics",
    img: ortopedya,
  },
  {
    title: "Неврология",
    desc: "Нейрорегенерация и поддержка при хронических состояниях.",
    to: "/therapy/neurology",
    img: nevrologya,
  },
  {
    title: "Анти-возраст",
    desc: "Замедление возрастных изменений на клеточном уровне.",
    to: "/therapy/longevity",
    img: antiAge,
  },
  {
    title: "Восстановительная медицина",
    desc: "Комплексное восстановление систем организма после нагрузок.",
    to: "/therapy/restorative",
    img: restorative,
  },
];

export default function Terapiya() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-0 py-2">
      <div className="flex items-end justify-between gap-6">
        <div>
          <SplitScroll
            mode="lines"
            start="top 90%"
            className="mt-3 text-[42px]  font-bold text-[#0C7779]"
          >
            Направления терапии
          </SplitScroll>
          <SplitScroll
            mode="lines"
            start="top 90%"
            className="mt-2 text-slate-600 max-w-[680px]"
          >
            Выберите направление — мы применяем доказательные протоколы и
            современные клеточные технологии.
          </SplitScroll>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {THERAPY.map((c) => (
          <Link
            key={c.title}
            to={c.to}
            className="group relative h-[420px]  rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          >
            <img
              src={c.img}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/5" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -top-24 -right-24 w-[280px] h-[280px] rounded-full bg-white/10 blur-2xl" />
            </div>

            <div className="relative h-full p-6 flex flex-col justify-end">
              {c.tag ? (
                <div className="mb-3 inline-flex w-fit items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[12px] font-semibold text-white border border-white/20">
                  {c.tag}
                </div>
              ) : null}

              <h3 className="text-white text-[30px] font-extrabold leading-tight">
                {c.title}
              </h3>
              <p className="mt-2 text-white text-[19px] max-w-[520px] leading-relaxed">
                {c.desc}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-[18px] font-medium text-[#0C7779]">
                Подробнее
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
