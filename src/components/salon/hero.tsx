import { useEffect, useRef } from "react";
import { CalendarCheck } from "lucide-react";
import { useBooking } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/salon/open-status";

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const book = useBooking((s) => s.openWith);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onScroll = () => {
      const y = Math.min(window.scrollY, 700);
      wrap.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-paper"
    >
      <div className="absolute inset-0">
        <div ref={wrapRef} className="h-full w-full will-change-transform">
          <img
            src="/images/hero-locks.jpg"
            alt="Dreadlocks soigneusement formées, lumière rasante"
            width={1248}
            height={832}
            fetchPriority="high"
            className="hero-photo h-full w-full origin-center object-cover object-[center_28%] outline-none"
          />
        </div>
        <div className="hero-veil pointer-events-none absolute inset-0 bg-linear-to-t from-ink/90 via-ink/25 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-end px-5 pb-14 pt-24 text-center sm:justify-center sm:pb-20">
        <h1 className="font-display text-[3.35rem] font-medium leading-[0.84] tracking-[-0.04em] text-paper sm:text-8xl lg:text-[7.25rem]">
          <span className="hero-line">
            <span>La Main</span>
          </span>
          <span className="hero-line italic text-sand">
            <span>d’Or</span>
          </span>
        </h1>

        <p className="hero-sub mt-4 font-display text-lg italic text-paper/90 sm:mt-6 sm:text-2xl">
          Coiffure · Locks
        </p>

        <div className="hero-cta mt-7 sm:mt-9">
          <Button type="button" variant="invert" size="lg" onClick={() => book()}>
            <CalendarCheck className="size-4" aria-hidden />
            Prendre rendez-vous
          </Button>
        </div>

        <div className="hero-status mt-5 hidden sm:block">
          <OpenStatus invert className="justify-center" />
        </div>
      </div>
    </section>
  );
}
