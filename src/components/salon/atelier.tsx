import { GALLERY } from "@/data/salon";
import { useLightbox } from "@/lib/booking";
import { Reveal } from "@/components/salon/reveal";
import { cn } from "@/lib/utils";

const SIZES = [
  "h-[22rem] w-[30rem] sm:h-[28rem] sm:w-[40rem]",
  "h-[30rem] w-[20rem] sm:h-[36rem] sm:w-[24rem]",
  "h-[24rem] w-[26rem] sm:h-[30rem] sm:w-[32rem]",
  "h-[28rem] w-[18rem] sm:h-[34rem] sm:w-[22rem]",
  "h-[24rem] w-[24rem] sm:h-[30rem] sm:w-[30rem]",
  "h-[20rem] w-[30rem] sm:h-[26rem] sm:w-[38rem]",
  "h-[28rem] w-[18rem] sm:h-[34rem] sm:w-[22rem]",
  "h-[26rem] w-[18rem] sm:h-[32rem] sm:w-[22rem]",
  "h-[20rem] w-[32rem] sm:h-[26rem] sm:w-[42rem]",
  "h-[22rem] w-[28rem] sm:h-[28rem] sm:w-[36rem]",
];

export function Atelier() {
  const openAt = useLightbox((s) => s.openAt);

  return (
    <section id="atelier" className="bg-paper py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
              Atelier
            </p>
            <h2 className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-ink sm:text-7xl">
              Le travail, <em className="italic text-clay">de près.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted lg:text-base">
              On voit le geste de près. La matière, la lumière, la patience.
              Faites glisser, puis ouvrez.
            </p>
          </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-center text-[0.68rem] uppercase tracking-[0.22em] text-muted sm:grid-cols-4">
          {["Texture", "Geste", "Précision", "Résultat"].map((word, i) => (
            <Reveal key={word} delay={i * 80}>
              <p className="border-t border-line pt-3 font-display text-lg italic tracking-normal text-ink sm:text-xl">
                {word}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:mt-16 sm:gap-5 sm:px-6 lg:px-10 hide-scrollbar"
        aria-label="Galerie atelier"
      >
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openAt(i)}
            className={cn(
              "group relative shrink-0 snap-center overflow-hidden bg-sand text-left",
              SIZES[i] ?? SIZES[0],
            )}
            aria-label={`Agrandir : ${img.caption}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
              className="zoom-img h-full w-full object-cover outline-none"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-1 bg-linear-to-t from-ink/75 to-transparent p-4 text-[0.7rem] uppercase tracking-[0.22em] text-paper opacity-90 transition-transform duration-500 group-hover:translate-y-0">
              {img.caption}
            </span>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-[92rem] px-4 sm:px-6 lg:mt-10 lg:px-10">
        <button
          type="button"
          onClick={() => openAt(4)}
          className="group relative block w-full overflow-hidden bg-sand text-left"
          aria-label="Agrandir : Matière"
        >
          <img
            src="/images/texture.jpg"
            alt="Texture rapprochée d’une dreadlock"
            width={1408}
            height={1408}
            loading="lazy"
            className="zoom-img h-[18rem] w-full object-cover sm:h-[26rem] lg:h-[32rem]"
          />
          <span className="absolute bottom-4 left-4 text-[0.7rem] uppercase tracking-[0.24em] text-paper">
            Matière
          </span>
        </button>
      </div>
    </section>
  );
}
