import { Star } from "lucide-react";
import { FEATURED_REVIEW, REVIEWS, SALON } from "@/data/salon";
import { Reveal } from "@/components/salon/reveal";
import { Button } from "@/components/ui/button";

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-clay" aria-label="5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-clay" aria-hidden />
      ))}
    </span>
  );
}

export function ReviewsBlock() {
  const others = REVIEWS.filter((r) => r.id !== FEATURED_REVIEW.id);
  const featuredPair = others.slice(0, 2);
  const rest = others.slice(2);

  return (
    <section id="avis" className="relative z-10 bg-ink text-paper">
      <div className="mx-auto max-w-[92rem] px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-sand">
            Google
          </p>
          <p className="mt-4 font-display text-[7rem] font-medium leading-none tracking-tight sm:text-[9rem]">
            5,0
          </p>
          <p className="mt-2 text-sm text-paper/70">
            {SALON.reviewCount} avis, la note que l’on voit sur Google
          </p>
          <Reveal variant="line" className="mx-auto mt-8 max-w-[8rem] bg-paper/25" />
          <Button asChild variant="invert" size="sm" className="mt-8">
            <a href={SALON.googleReviewUrl} target="_blank" rel="noreferrer">
              <Star className="size-3.5" aria-hidden />
              Laisser un avis Google
            </a>
          </Button>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote>
            <Stars />
            <p className="mt-4 font-display text-3xl italic leading-snug sm:text-5xl">
              {FEATURED_REVIEW.text.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
            <footer className="mt-6 text-[0.7rem] uppercase tracking-[0.2em] text-sand">
              {FEATURED_REVIEW.name}
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-paper/15 pt-12 lg:grid-cols-2">
          {featuredPair.map((review, i) => (
            <Reveal key={review.id} delay={i * 80}>
              <article className={i === 1 ? "lg:text-right" : undefined}>
                <Stars />
                <p className="mt-4 font-display text-2xl italic leading-snug text-paper/95 sm:text-3xl">
                  « {review.text} »
                </p>
                <p className="mt-5 text-[0.65rem] uppercase tracking-[0.18em] text-sand">
                  {review.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 border-t border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((review, i) => (
            <Reveal key={review.id} delay={i * 40}>
              <article>
                <p className="text-sm leading-relaxed text-paper/80">
                  « {review.text} »
                </p>
                <p className="mt-4 text-[0.65rem] uppercase tracking-[0.18em] text-sand">
                  {review.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

