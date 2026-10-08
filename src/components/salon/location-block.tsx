import { CalendarCheck, Navigation, Phone } from "lucide-react";
import { SALON } from "@/data/salon";
import { MAPS_EMBED, openItinerary } from "@/lib/maps";
import { useBooking } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { OpenStatus } from "@/components/salon/open-status";
import { Reveal } from "@/components/salon/reveal";

export function LocationBlock() {
  const book = useBooking((s) => s.openWith);

  return (
    <section id="contact" className="relative z-0 bg-foam">
      <div className="mx-auto grid max-w-[92rem] lg:grid-cols-2">
        <div className="relative isolate z-0 min-h-[22rem] overflow-hidden bg-sand lg:min-h-[42rem]">
          <iframe
            title={`Carte de ${SALON.name}`}
            src={MAPS_EMBED}
            className="absolute inset-0 h-full w-full scale-110 border-0 grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/15" />
          <div className="pointer-events-none absolute bottom-5 left-5 bg-ink px-4 py-3 text-paper">
            <p className="text-[0.62rem] uppercase tracking-[0.24em] text-sand">
              Carte
            </p>
            <p className="mt-1 font-display text-xl italic">Zopah</p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-16 pb-28 text-center sm:px-10 lg:px-16 lg:pb-16 lg:text-left">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
              Nous trouver
            </p>
            <h2 className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-ink sm:text-6xl">
              {SALON.addressLine}
            </h2>
            <p className="mt-3 text-lg text-muted">
              {SALON.city}, {SALON.country}
            </p>
          </Reveal>
          <Reveal variant="line" className="mx-auto mt-8 max-w-[7rem] bg-ink/25 lg:mx-0" delay={60} />

          <Reveal delay={80} className="mt-8">
            <OpenStatus className="justify-center lg:justify-start" />
            <p className="mt-2 text-sm text-muted">{SALON.hoursLabel}</p>
          </Reveal>

          <Reveal delay={140} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:items-start lg:justify-start">
            <Button asChild>
              <a href={`tel:${SALON.phoneTel}`}>
                <Phone className="size-4" aria-hidden />
                Appeler
              </a>
            </Button>
            <Button type="button" variant="line" onClick={openItinerary}>
              <Navigation className="size-4" aria-hidden />
              Itinéraire
            </Button>
            <Button type="button" variant="ghost" onClick={() => book()}>
              <CalendarCheck className="size-4" aria-hidden />
              Réserver
            </Button>
          </Reveal>

          <a
            href={`tel:${SALON.phoneTel}`}
            className="mt-8 inline-block font-display text-2xl italic text-ink"
          >
            {SALON.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
