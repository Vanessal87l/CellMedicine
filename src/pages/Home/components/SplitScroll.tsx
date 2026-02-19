import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);

type SplitMode = "lines" | "words" | "chars";

type Props = {
  /** можно строку или JSX (например <span>...) */
  children: React.ReactNode;
  /** классы для обёртки */
  className?: string;
  /** классы для самого текста */
  textClassName?: string;

  mode?: SplitMode; // default: lines
  start?: string; // default: "top 80%"
  once?: boolean; // default: true

  duration?: number; // default: 0.9
  stagger?: number; // default: 0.12

  fromYPercent?: number; // default: 120
  fromX?: number; // default: 0
  fromOpacity?: number; // default: 0
};

export default function SplitScroll({
  children,
  className,
  textClassName,
  mode = "lines",
  start = "top 80%",
  once = true,
  duration = 0.9,
  stagger = 0.12,
  fromYPercent = 120,
  fromX = 0,
  fromOpacity = 0,
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current || !textRef.current) return;
    const ctx = gsap.context(() => {
      // Если внутри есть <li>, не используем SplitText: анимируем элементы списка напрямую,
      // чтобы не ломать структуру ul/ol и сохранились стили списка.
      const listItems = textRef.current!.querySelectorAll("li");

      if (listItems && listItems.length > 0) {
        const targets = Array.from(listItems) as Element[];

        gsap.set(targets, {
          yPercent: fromYPercent,
          x: fromX,
          opacity: fromOpacity,
        });

        const tl = gsap.to(targets, {
          yPercent: 0,
          x: 0,
          opacity: 1,
          duration,
          ease: "power4.out",
          stagger,
          scrollTrigger: {
            trigger: rootRef.current,
            start,
            once,
          },
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      }

      // Обычное поведение: SplitText для строк/слов/символов
      const split = SplitText.create(textRef.current!, { type: mode });

      if (mode === "lines") {
        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });
      }

      const targets =
        mode === "chars"
          ? split.chars
          : mode === "words"
            ? split.words
            : split.lines;

      gsap.set(targets, {
        yPercent: mode === "lines" ? fromYPercent : 0,
        x: fromX,
        opacity: fromOpacity,
      });

      const tl = gsap.to(targets, {
        yPercent: 0,
        x: 0,
        opacity: 1,
        duration,
        ease: "power4.out",
        stagger,
        scrollTrigger: {
          trigger: rootRef.current,
          start,
          once,
        },
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
        split.revert();
      };
    }, rootRef);

    return () => ctx.revert();
  }, [mode, start, once, duration, stagger, fromYPercent, fromX, fromOpacity]);

  return (
    <div ref={rootRef} className={className}>
      <div ref={textRef} className={cn("will-change-transform", textClassName)}>
        {children}
      </div>
    </div>
  );
}
