import { CalendarCheck } from "lucide-react";
import { COIFFURE_SERVICES, ENTRETIEN_SERVICES } from "@/data/salon";
import { useBooking } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/salon/reveal";
import { cn } from "@/lib/utils";

function byId(id: string) {
  return [...COIFFURE_SERVICES, ...ENTRETIEN_SERVICES].find((s) => s.id === id);
}

export function ServicesBlock() {
  const book = useBooking((s) => s.openWith);
  const homme = byId("coiffure-homme");
  const femme = byId("coiffure-femme");
  const coupeH = byId("coupe-homme");
  const coupeF = byId("coupe-femme");
  const enfant = byId("coiffure-enfant");
  const barbe = byId("barbe");
  const lavage = byId("lavage");
  const small = [coupeH, coupeF, enfant].filter(Boolean);

  return (
    <section id="services" className="bg-foam">
      <div className="mx-auto max-w-[92rem] px-4 py-16 pb-28 sm:px-6 sm:py-24 lg:px-10 lg:py-32 lg:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
            Prestations
          </p>
          <h2 className="mt-3 font-display text-5xl font-medium leading-none tracking-[-0.03em] text-ink sm:text-7xl">
            Coiffure
            <span className="italic text-muted"> et entretien</span>
          </h2>
        </Reveal>
        <Reveal variant="line" className="mx-auto mt-8 max-w-xs bg-ink/20" delay={60} />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {homme ? (
            <Reveal>
              <article className="relative flex min-h-[24rem] flex-col justify-end overflow-hidden bg-ink p-6 text-paper sm:min-h-[28rem] sm:p-10">
                <img
                  src="/images/mirror.jpg"
                  alt="Fauteuil et miroir, lumière d’après-midi"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-45 outline-none"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-ink/20" />
                <div className="relative">
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-sand">
                    Coiffure
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
                    {homme.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/80">
                    {homme.description}
                  </p>
                  <Button
                    type="button"
                    variant="invert"
                    size="sm"
                    className="mt-6"
                    onClick={() => book(homme.id)}
                  >
                    <CalendarCheck className="size-3.5" aria-hidden />
                    Réserver
                  </Button>
                </div>
              </article>
            </Reveal>
          ) : null}

          {femme ? (
            <Reveal delay={80}>
              <article className="flex min-h-[24rem] flex-col justify-between bg-ink p-6 text-paper sm:min-h-[28rem] sm:p-10">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.24em] text-sand">
                    Coiffure
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
                    {femme.name}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/75">
                    {femme.description}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="invert"
                  size="sm"
                  className="mt-8 w-fit"
                  onClick={() => book(femme.id)}
                >
                  <CalendarCheck className="size-3.5" aria-hidden />
                  Réserver
                </Button>
              </article>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-4 grid gap-px bg-line sm:grid-cols-3">
          {small.map((service, i) =>
            service ? (
              <Reveal key={service.id} delay={i * 50}>
                <article
                  className={cn(
                    "flex h-full flex-col justify-between bg-foam p-6 sm:p-8",
                    i === 1 && "sm:bg-paper",
                  )}
                >
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                      0{i + 3}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-medium leading-tight text-ink">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => book(service.id)}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-ink transition-colors hover:text-clay"
                  >
                    <CalendarCheck className="size-3.5" aria-hidden />
                    Réserver
                  </button>
                </article>
              </Reveal>
            ) : null,
          )}
        </div>

        {barbe ? (
          <Reveal className="mt-4">
            <article className="grid overflow-hidden bg-ink text-paper lg:grid-cols-2">
              <img
                src="/images/beard.jpg"
                alt="Ligne de barbe nette, finition soignée"
                width={1200}
                height={1600}
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-sand">
                  Finition
                </p>
                <h3 className="mt-3 font-display text-4xl font-medium">
                  {barbe.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/75">
                  {barbe.description}
                </p>
                <Button
                  type="button"
                  variant="invert"
                  size="sm"
                  className="mt-6 w-fit"
                  onClick={() => book(barbe.id)}
                >
                  <CalendarCheck className="size-3.5" aria-hidden />
                  Réserver
                </Button>
              </div>
            </article>
          </Reveal>
        ) : null}

        {lavage ? (
          <Reveal className="mt-4">
            <article className="grid gap-8 bg-sand p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
              <img
                src="/images/wash.jpg"
                alt="Dreadlocks encore humides, lavage"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted">
                  Entretien
                </p>
                <h3 className="mt-3 font-display text-4xl font-medium text-ink">
                  {lavage.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/80">
                  {lavage.description}
                </p>
                <Button
                  type="button"
                  size="sm"
                  className="mt-6"
                  onClick={() => book(lavage.id)}
                >
                  <CalendarCheck className="size-3.5" aria-hidden />
                  Réserver
                </Button>
              </div>
            </article>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
