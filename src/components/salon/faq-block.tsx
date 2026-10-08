import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/data/salon";
import { Reveal } from "@/components/salon/reveal";
import { cn } from "@/lib/utils";

export function FaqBlock() {
  const [open, setOpen] = useState<string | null>(FAQ[0]?.id ?? null);

  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-32">
        <Reveal className="text-center lg:col-span-4 lg:sticky lg:top-24 lg:self-start lg:text-left">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted">
            Questions
          </p>
          <h2 className="mt-3 font-display text-5xl font-medium leading-none tracking-[-0.03em] text-ink sm:text-6xl">
            Avant de venir
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted lg:mx-0">
            Des réponses simples, seulement avec ce que le salon fait vraiment.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-line border-y border-line">
            {FAQ.map((item) => {
              const isOpen = open === item.id;
              return (
                <li key={item.id} className="faq-item" data-open={isOpen}>
                  <button
                    type="button"
                    className="flex w-full items-start gap-3 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : item.id)}
                  >
                    <span className="flex-1 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                      {item.question}
                    </span>
                    <Plus
                      className={cn(
                        "faq-chevron mt-1 size-5 shrink-0 text-clay transition-transform duration-300",
                      )}
                      aria-hidden
                    />
                  </button>
                  <div className="faq-panel">
                    <div className="faq-panel-inner">
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-muted sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
