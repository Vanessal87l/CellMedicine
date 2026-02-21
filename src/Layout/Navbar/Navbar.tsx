import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Container from "../Container/container";
import { cn } from "@/lib/utils";

import LogoWhite from "@/assets/images/logoWhite.png";
// import LogoSeriy from "@/assets/images/logoSeriy.png";

type ECGLinkProps = {
  to?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  asButton?: boolean;
};

const ECGLink = ({
  to = "/",
  children,
  className,
  onClick,
  asButton,
}: ECGLinkProps) => {
  const base =
    "group relative inline-flex items-center justify-center text-white   transition-colors duration-200 select-none";

  const content = (
    <>
      {children}

      <span className="pointer-events-none absolute left-0 right-0 -bottom-2 h-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <svg
          viewBox="0 0 120 12"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="ecgGradMed" x1="0" y1="0" x2="120" y2="0">
              <stop offset="0%" stopColor="#E4004B" />
              <stop offset="50%" stopColor="#3EF2C2" />
              <stop offset="100%" stopColor="#E4004B" />
            </linearGradient>
          </defs>

          <path
            d="M0 6 H120"
            fill="none"
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="1"
          />

          <path
            d="M0 6 
               L10 6
               L14 6
               L18 2
               L22 10
               L26 6
               L34 6
               L38 4
               L42 8
               L46 6
               L58 6
               L62 6
               L66 2
               L70 10
               L74 6
               L86 6
               L90 6
               L94 4
               L98 8
               L102 6
               L120 6"
            fill="none"
            stroke="url(#ecgGradMed)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 160 }}
            className="group-hover:[animation:ecg-flow_2.5s_linear_infinite,ecg-soft-glow_2.5s_ease-in-out_infinite]"
          />
        </svg>
      </span>
    </>
  );

  if (asButton) {
    return (
      <button type="button" onClick={onClick} className={cn(base, className)}>
        {content}
      </button>
    );
  }

  return (
    <Link to={to} onClick={onClick} className={cn(base, className)}>
      {content}
    </Link>
  );
};

type MenuKey =
  | "home"
  | "about"
  | "tech"
  | "therapy"
  | "team"
  | "science"
  | "patients"
  | "projects"
  | "contacts";

type MenuItem = {
  key: MenuKey;
  label: string;
  to?: string;
  dropdown?: {
    title?: string;
    items: { label: string; to?: string; onClick?: () => void }[];
  };
};

const Navbar = () => {
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setOpenKey(null), [location.pathname]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpenKey(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const menus: MenuItem[] = useMemo(
    () => [
      {
        key: "home",
        label: "Главная",
        to: "/",
        dropdown: {
          items: [
            {
              label: "Home",
              to: "/home",
            },
          ],
        },
      },
      {
        key: "texnologiy",
        label: "Технологии",
        to: "/texnologiy",
        dropdown: {
          items: [
            {
              label: "Клеточные технологии",
              to: "/texnologiy/kletocniyeTexnologiy",
            },
            {
              label: "Регенеративная терапия",
              to: "/texnologiy/regenerativnayaTerapiya",
            },
            { label: "Биоматериалы", to: "/texnologiyBiomateriyali" },
            {
              label: "Персонализированная медицина",
              to: "/texnologiy/personalizirovannayaMeditsina",
            },
            {
              label: "Инфографика / схемы / анимации",
              to: "/texnologiy/infografikaSxemiyAnimatsiy",
            },
          ],
        },
      },
      {
        key: "Terapiy",
        label: "Направления терапии",
        to: "/terapiy",
        dropdown: {
          items: [
            { label: "Ортопедия", to: "/terapiy/ortopedya" },
            { label: "Неврология", to: "/terapiy/nevrologiya" },
            { label: "Anti-age / longevity", to: "/terapiy/anti-vozrast" },
            {
              label: "Восстановительная медицина",
              to: "/terapiy/vosstanovitelnaya-meditsina",
            },
          ],
        },
      },
      {
        key: "kompaniy",
        label: "О Компаний",
        to: "/kompaniy",
        dropdown: {
          items: [
            { label: "Миссия и философия", to: "/kompaniy/missiya-filosofiya" },
            { label: "Научный подход", to: "/kompaniy/naucniy-podxod" },
            { label: "Лабораторная база", to: "/kompaniy/labaratorniy-baza" },
            {
              label: "Сертификация, стандарты, протоколы",
              to: "/kompaniy/sertifikatiy-standartiy-protokoliy",
            },
            {
              label: "Международные связи",
              to: "/kompaniy/mejdunarodniye-svyaziy",
            },
          ],
        },
      },
      {
        key: "Komanda",
        label: "Команда",
        to: "/komanda",
        dropdown: {
          items: [
            { label: "Врачи, ученые, эксперты", to: "/komanda/personal" },
            {
              label: "Фото + научный профиль",
              to: "/komanda/foto-naucniy-profil",
            },
            {
              label: "Квалификация и опыт",
              to: "/komanda/kvalifikatsiya/opit",
            },
          ],
        },
      },
      {
        key: "Nauka",
        label: "Наука и исследования",
        to: "/nauka",
        dropdown: {
          items: [
            { label: "Клинические исследования", to: "/nauka" },
            { label: "Публикации", to: "/nauka/publikatsiy" },
            { label: "Научные партнерства", to: "/nauka/partnyorstva" },
          ],
        },
      },
      {
        key: "Patsiyent",
        label: "Пациентам",
        to: "/patients",
        dropdown: {
          items: [
            { label: "Как проходит лечение", to: "/patsiyentam" },
            { label: "Безопасность", to: "/patsiyentam/bezopasnost" },
            { label: "Вопросы и ответы", to: "/patsiyentam/voprosiy-otvetiy" },
            {
              label: "Этика и доказательная медицина",
              to: "/patsiyentam/etika-dokazatelnaya-meditsina",
            },
          ],
        },
      },
      {
        key: "Proyektiy",
        label: "Наши проекты",
        to: "/proektiy",
        dropdown: {
          items: [{ label: "Проекты (добавим позже)", to: "/proyektiy" }],
        },
      },
      {
        key: "Kontaktiy",
        label: "Контакты",
        to: "/kontaktiy",
        dropdown: {
          items: [
            { label: "Интерактивная карта", to: "/kontaktiy#karta" },
            { label: "Форма заявки", to: "/kontaktiy#form" },
            { label: "Способы связи", to: "/kontaktiy#infa" },
          ],
        },
      },
    ],
    [],
  );

  const toggle = (k: MenuKey) => setOpenKey((prev) => (prev === k ? null : k));

  return (
    <>
      <div
        ref={wrapRef}
        className={cn(
          "fixed top-0 left-0 w-full z-50",
          "flex items-center justify-center",
          "bg-[#0C7779]/90",
          "h-[85px]",
        )}
      >
        <div className="shrink-0 ">
          <Link to="">
            <img src={LogoWhite} alt="Logo" className="h-[120px] w-[140px] " />
          </Link>
        </div>

        <div className="flex items-center justify-center px-4">
          <nav className="flex items-center gap-8 text-center">
            {menus.map((m) => {
              const isOpen = openKey === m.key;

              return (
                <div key={m.key} className="relative">
                  <ECGLink
                    asButton
                    className={cn("px-2 py-2", isOpen && "text-white")}
                    onClick={(e) => {
                      e.preventDefault();
                      toggle(m.key);
                    }}
                  >
                    <span className="inline-flex items-center gap-1">
                      {m.label}
                      <svg
                        className={cn(
                          "h-3 w-3 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </ECGLink>

                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-[58px] z-[9999]",
                      "transition-all duration-200",
                      isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none",
                    )}
                  >
                    <div
                      className={cn(
                        "min-w-[320px]  rounded-2xl bg-white",
                        "shadow-[0_18px_60px_rgba(0,0,0,0.25)]",
                        "border border-black/10 overflow-hidden",
                      )}
                    >
                      {m.dropdown?.title ? (
                        <div className="px-4 py-3 text-[12px] font-semibold text-[#0C7779] tracking-wide ">
                          {m.dropdown.title}
                        </div>
                      ) : null}

                      <div className="py-2">
                        {m.dropdown?.items.map((it, idx) => (
                          <button
                            key={it.label + idx}
                            type="button"
                            className={cn(
                              "w-full text-left px-4 py-3",
                              "text-[14px] font-medium text-[#0C7779]",
                              "hover:bg-slate-100 hover:text-slate-900 transition-colors",
                            )}
                            onClick={() => {
                              setOpenKey(null);
                              if (it.onClick) it.onClick();
                              else if (it.to) navigate(it.to);
                              else if (m.to) navigate(m.to);
                            }}
                          >
                            {it.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes ecg-flow {
          from { stroke-dashoffset: 160; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ecg-soft-glow {
          0%,100% { filter: drop-shadow(0 0 0 rgba(62,242,194,0)); }
          50% { filter: drop-shadow(0 0 6px rgba(62,242,194,0.55)); }
        }
      `}</style>
      <Outlet />
    </>
  );
};

export default Navbar;
