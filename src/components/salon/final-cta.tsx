import { CalendarCheck, Navigation } from "lucide-react";
import { useBooking } from "@/lib/booking";
import { openItinerary } from "@/lib/maps";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/salon/reveal";

export function FinalCta() {
  const book = useBooking((s) => s.openWith);

  return (
    <section className="relative overflow-hidden bg-indigo text-paper">
      <img
        src="/images/texture.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30 outline-none"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-indigo/75" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:py-36">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-sand">
            À vous
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Vous avez vu le geste.
            <br />
            <em className="italic text-sand">Choisissez votre style.</em>
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button type="button" variant="invert" size="lg" onClick={() => book()}>
            <CalendarCheck className="size-4" aria-hidden />
            Prendre rendez-vous
          </Button>
          <Button type="button" variant="invertLine" size="lg" onClick={openItinerary}>
            <Navigation className="size-4" aria-hidden />
            Nous trouver
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
