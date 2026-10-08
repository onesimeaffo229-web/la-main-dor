import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "p" | "h2" | "h3";
  variant?: "text" | "image" | "line";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "text",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: variant === "line" ? 0.01 : 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [variant]);

  const cls =
    variant === "image" ? "img-mask" : variant === "line" ? "draw-line" : "reveal";

  return (
    <Tag
      ref={ref as never}
      className={cn(cls, shown && "is-in", className)}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
