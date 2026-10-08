import { CalendarCheck } from "lucide-react";
import { LOCKS_SERVICES } from "@/data/salon";
import { useBooking } from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/salon/reveal";
import { cn } from "@/lib/utils";

const LAYOUT: Record<
  string,
  { image?: string; alt?: string; size: "lg" | "md" | "sm"; indent?: boolean }
> = {
  "creation-dreadlocks": {
    image: "/images/texture.jpg",
    alt: "Texture rapprochée d’une dreadlock",
    size: "lg",
  },
  retwist: {
    image: "/images/hands-retwist.jpg",
    alt: "Mains resserrant des dreadlocks",
    size: "md",
  },
  reparation: { size: "sm" },
  delockage: { size: "md", indent: true },
  "dreadlocks-enfant": { size: "md" },
};

const JOURNEY = ["Création", "Entretien", "Réparation", "Délockage", "Enfants"];

export function LocksChapter() {
  const book = useBooking((s) => s.openWith);

  return (
    <section id="locks" className="bg-indigo text-paper">
      <div className="lg:grid lg:grid-cols-2">
        <div className="relative min-h-[70vh] overflow-hidden lg:sticky lg:top-0 lg:h-screen">
          <img
            src="/images/look-back.jpg"
            alt="Longues dreadlocks vues de dos"
            width={1152}
            height={1728}
            className="h-full w-full object-cover object-center outline-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-indigo via-indigo/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-center sm:p-10 lg:text-left">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-sand">
              Spécialité
            </p>
            <h2 className="mt-3 font-display text-6xl font-medium italic leading-none sm:text-8xl">
              Locks
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-paper/80 lg:mx-0">
              Création, retwist, réparation, délockage. Pour les hommes, les
              femmes et les enfants. Le geste qui tient.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-16 pb-28 sm:px-8 lg:px-16 lg:py-28">
          <Reveal className="text-center lg:text-left">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-sand">
              Le parcours
            </p>
            <p className="mt-3 font-display text-lg italic leading-snug text-paper/80 sm:text-xl">
              {JOURNEY.join(" · ")}
            </p>
          </Reveal>
          <Reveal variant="line" className="mt-8 bg-paper/25" delay={80} />

          <ol className="mt-4">
            {LOCKS_SERVICES.map((service, i) => {
              const layout = LAYOUT[service.id] ?? { size: "md" as const };
              return (
                <li
                  key={service.id}
                  className={cn(
                    "border-b border-paper/12",
                    layout.size === "lg" && "py-12",
                    layout.size === "md" && "py-9",
                    layout.size === "sm" && "py-7",
                    layout.indent && "sm:pl-10",
                    i === 0 && "pt-10",
                  )}
                >
                  <Reveal delay={i * 50}>
                    <div
                      className={cn(
                        layout.image && "grid gap-6 sm:grid-cols-5 sm:items-end",
                      )}
                    >
                      <div className={layout.image ? "sm:col-span-3" : undefined}>
                        <p className="font-display text-5xl font-medium leading-none text-paper/20 sm:text-6xl">
                          0{i + 1}
                        </p>
                        <h3
                          className={cn(
                            "mt-2 font-display font-medium leading-tight",
                            layout.size === "lg"
                              ? "text-4xl sm:text-5xl"
                              : "text-3xl sm:text-4xl",
                          )}
                        >
                          {service.shortName}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/75">
                          {service.description}
                        </p>
                        <Button
                          type="button"
                          variant="invertLine"
                          size="sm"
                          className="mt-5"
                          onClick={() => book(service.id)}
                        >
                          <CalendarCheck className="size-3.5" aria-hidden />
                          Réserver
                        </Button>
                      </div>
                      {layout.image ? (
                        <div className="overflow-hidden sm:col-span-2">
                          <img
                            src={layout.image}
                            alt={layout.alt ?? ""}
                            width={800}
                            height={600}
                            loading="lazy"
                            className="aspect-4/5 h-44 w-full object-cover sm:h-56"
                          />
                        </div>
                      ) : null}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
