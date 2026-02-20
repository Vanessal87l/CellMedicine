import {
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
  Microscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import logoBez from "@/assets/images/logoBez.png";
import footer from "@/assets/video/footer.mp4";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_15%_10%,rgba(36,158,148,.28),transparent_60%),radial-gradient(900px_420px_at_85%_20%,rgba(12,119,121,.25),transparent_60%),linear-gradient(180deg,#0C7779,#0A5F5F)]" />
      <div className="absolute inset-0 opacity-[0.09] bg-[url('/noise.png')] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14">
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="text-[18px] md:text-[20px] font-extrabold">
              Cell Medicine — Регенеративная терапия, основанная на
              доказательствах
              <span className="block text-white/75 text-sm font-medium mt-1">
                GMP-подход • клинические протоколы • научная база
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                label="ISO 9001"
                icon={<BadgeCheck className="h-4 w-4" />}
              />
              <Badge label="GMP" icon={<Microscope className="h-4 w-4" />} />
              <Badge label="EBM" icon={<ShieldCheck className="h-4 w-4" />} />
            </div>
          </div>

          {/* ECG линия */}
          <div className="mt-4 h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[35%] bg-[linear-gradient(90deg,transparent,rgba(62,242,194,.85),rgba(255,255,255,.35),transparent)] animate-[footerFlow_3.6s_linear_infinite]" />
          </div>
        </div>

        {/* основная сетка */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* бренд */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className=" place-items-center">
                <Link to="">
                  <img
                    src={logoBez}
                    alt="Logo"
                    className="h-[180px] w-[150px] "
                  />
                </Link>
              </div>
              <div>
                <div className="text-xl font-extrabold">CELL MEDICINE</div>
                <div className="text-xs tracking-[0.22em] text-white/70 font-semibold">
                  WE CARE ABOUT YOU
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-[30px] font-extrabold leading-tight">
              Регенерация и наука
            </h3>
            <p className="mt-4 text-white/80 max-w-[430px] leading-relaxed">
              Передовые биотехнологии для сохранения здоровья и молодости. Мы
              создаём будущее персонализированной медицины уже сегодня.
            </p>
          </div>

          <FooterCol
            title="Технологии"
            items={["Клеточная терапия", "Биохакинг", "Криобанк", "Генетика"]}
          />
          <FooterCol
            title="Пациентам"
            items={[
              "Программы лечения",
              "Второе мнение",
              "Реабилитация",
              "FAQ",
            ]}
          />
          <FooterCol
            title="Компания"
            items={["О нас", "Лицензии", "Научная база", "Контакты"]}
          />

          {/* контакты */}
          <div>
            <div className="text-[20px] font-extrabold mb-4">
              Свяжитесь с нами
            </div>

            <div className="space-y-4 text-white/85">
              <InfoRow
                icon={<Phone className="h-4 w-4" />}
                text="+998 (33) 033-33-03"
              />
              <InfoRow
                icon={<Clock className="h-4 w-4" />}
                text="пн–пт • 10:00–20:00"
              />
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                text="Ташкент, Узбекистан • Мирабадский р-н 12-я"
              />
            </div>

            <div className="mt-6 flex gap-3 cursor-pointer">
              <SocialBtn label="Telegram" icon={<Send className="h-4 w-4" />} />
            </div>
          </div>
          <div className="ml-50 -mt-[160px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="min-w-[890px] h-[400px]  rounded-3xl object-cover"
            >
              <source src={footer} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-white/65 text-sm">
          <div>
            © {new Date().getFullYear()} Cell Medicine. Все права защищены.
          </div>
          <div className="flex gap-5">
            <a className="hover:text-white transition" href="#">
              Политика конфиденциальности
            </a>
            <a className="hover:text-white transition" href="#">
              Условия использования
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footerFlow {
          from { transform: translateX(-60%); }
          to { transform: translateX(220%); }
        }
      `}</style>
    </footer>
  );
}

function Badge({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
      {icon}
      {label}
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[20px] font-extrabold mb-4">{title}</div>
      <ul className="space-y-3">
        {items.map((t) => (
          <li key={t}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/35 group-hover:bg-white transition" />
              {t}
              <span className="opacity-0 group-hover:opacity-100 transition text-white/80">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-white/80">{icon}</div>
      <div>{text}</div>
    </div>
  );
}

function SocialBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15 transition backdrop-blur">
      {icon}
      {label}
    </button>
  );
}
