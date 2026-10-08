import { Navigation, Phone, Star } from "lucide-react";
import { NAV, SALON } from "@/data/salon";
import { openItinerary } from "@/lib/maps";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[92rem] px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-24 lg:text-left">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-display text-5xl font-medium leading-none tracking-[-0.03em] sm:text-7xl">
              LA MAIN
              <br />
              <em className="italic text-sand">D’OR</em>
            </p>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.32em] text-sand">
              Coiffure
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-sand">
              Adresse
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              {SALON.addressLine}
              <br />
              {SALON.city}, {SALON.country}
            </p>
            <a
              href={`tel:${SALON.phoneTel}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-paper hover:text-sand"
            >
              <Phone className="size-3.5" aria-hidden />
              {SALON.phoneDisplay}
            </a>
          </div>
          <div className="flex flex-col items-center gap-3 lg:col-span-3 lg:items-start">
            <button
              type="button"
              onClick={openItinerary}
              className="inline-flex items-center gap-2 text-sm text-paper/85 hover:text-paper"
            >
              <Navigation className="size-3.5" aria-hidden />
              Itinéraire
            </button>
            <a
              href={SALON.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper/85 hover:text-paper"
            >
              <Star className="size-3.5" aria-hidden />
              Laisser un avis
            </a>
            <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2" aria-label="Pied de page">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[0.7rem] uppercase tracking-[0.16em] text-paper/55 hover:text-paper"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-paper/15 pt-8 text-xs text-paper/45 sm:flex-row sm:items-end sm:justify-between">
          <p>© 2026 La Main d’Or Coiffure</p>
          <p>
            Site conçu par{" "}
            <a
              href={SALON.creator.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-paper/70 underline decoration-paper/20 underline-offset-4 hover:text-paper"
            >
              Trésor AFFOKPE
            </a>
            {" · "}
            <a
              href={SALON.creator.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="text-paper/70 hover:text-paper"
            >
              {SALON.creator.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
