import { MARQUEE, SALON } from "@/data/salon";
import { Reveal } from "@/components/salon/reveal";

export function Identity() {
  const loop = [...MARQUEE, ...MARQUEE];
  return (
    <section aria-label="Identité" className="overflow-hidden bg-paper">
      <div className="border-y border-line py-4">
        <div className="marquee-track gap-10 px-6 text-[0.72rem] uppercase tracking-[0.32em] text-muted">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              {item}
              <span className="text-clay" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[92rem] px-4 py-16 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
            À Zopah
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
            Un salon de locks,
            <span className="italic text-clay"> et plus encore.</span>
          </h2>
          <div className="mx-auto mt-8 max-w-[9rem] text-clay">
            <Reveal variant="line" className="bg-clay" delay={40} />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
            La Main d’Or Coiffure accueille hommes, femmes et enfants à{" "}
            {SALON.addressLine}. Le salon est spécialisé dans les dreadlocks :
            création, entretien, réparation, délockage. On y fait aussi les
            coupes, les coiffures, la taille de barbe et le lavage, dans un
            cadre soigné.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 text-center sm:grid-cols-3 sm:gap-6">
          <Reveal delay={80}>
            <div className="border-t border-line pt-6">
              <p className="font-display text-6xl font-medium leading-none tracking-tight text-ink sm:text-7xl">
                5,0
              </p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                sur Google · {SALON.reviewCount} avis
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="border-t border-line pt-6">
              <p className="font-display text-3xl italic leading-snug text-ink">
                Tous les jours
              </p>
              <p className="mt-2 text-sm text-muted">de 08h00 à 21h30</p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="border-t border-line pt-6">
              <p className="font-display text-3xl italic leading-snug text-ink">
                Fin du pavé ICC
              </p>
              <p className="mt-2 text-sm text-muted">Zopah, Abomey-Calavi</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
