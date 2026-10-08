import { REVIEWS } from "@/data/salon";
import { Reveal } from "@/components/salon/reveal";

const edwige = REVIEWS.find((r) => r.id === "edwige")!;
const latifou = REVIEWS.find((r) => r.id === "latifou")!;
const honfo = REVIEWS.find((r) => r.id === "honfo")!;

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-[92rem] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
        <div className="relative lg:col-span-7">
          <Reveal variant="image" className="group overflow-hidden">
            <img
              src="/images/hands-retwist.jpg"
              alt="Mains resserrant des dreadlocks"
              width={1600}
              height={1200}
              loading="lazy"
              className="zoom-img aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={160}
            className="relative z-10 -mt-16 ml-auto max-w-sm bg-ink p-6 text-paper sm:-mt-24 sm:p-8 lg:-mr-8"
          >
            <p className="font-display text-2xl italic leading-snug whitespace-pre-line sm:text-3xl">
              « {edwige.text} »
            </p>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-sand">
              {edwige.name}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-5 lg:pl-8">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
              L’expérience
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
              Un travail soigné.
              <br />
              Un accueil simple.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-base leading-relaxed text-ink/80">
              Les avis parlent du travail sur les locks, du résultat, de
              l’accueil, et de prix accessibles. Ce sont leurs mots, tels
              qu’ils les ont écrits.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-10 border-t border-line pt-8">
            <p className="font-display text-xl italic leading-snug text-ink">
              « {latifou.text} »
            </p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              {latifou.name}
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-8 border-t border-line pt-8">
            <p className="font-display text-xl italic leading-snug text-ink">
              « {honfo.text} »
            </p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted">
              {honfo.name}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
