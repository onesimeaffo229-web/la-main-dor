import { useEffect, useState } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";
import { NAV, SALON } from "@/data/salon";
import { useBooking } from "@/lib/booking";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/salon/open-status";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const book = useBooking((s) => s.openWith);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,color] duration-300",
          solid
            ? "border-b border-line bg-paper/92 text-ink backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-paper",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[92rem] items-center justify-between px-4 sm:px-6 lg:px-10">
          <a href="#top" className="group flex flex-col leading-none">
            <span className="font-display text-[1.15rem] font-medium tracking-[0.08em]">
              LA MAIN D’OR
            </span>
            <span
              className={cn(
                "mt-0.5 text-[0.62rem] uppercase tracking-[0.28em]",
                solid ? "text-muted" : "text-paper/70",
              )}
            >
              Coiffure
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[0.72rem] uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-clay after:transition-[width] after:duration-300 hover:after:w-full",
                  solid ? "text-ink/80 hover:text-ink" : "text-paper/80 hover:text-paper",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              size="sm"
              variant={solid ? "solid" : "invert"}
              className="hidden sm:inline-flex"
              onClick={() => book()}
            >
              <CalendarCheck className="size-3.5" aria-hidden />
              Réserver
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-paper pt-16 transition-[opacity,visibility] duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        hidden={!open}
      >
        <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-8" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-5xl italic leading-[0.95] text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-5">
            <OpenStatus />
            <p className="text-sm text-muted">{SALON.addressFull}</p>
            <Button
              type="button"
              size="lg"
              className="w-full"
              onClick={() => {
                setOpen(false);
                book();
              }}
            >
              <CalendarCheck className="size-4" aria-hidden />
              Prendre rendez-vous
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
