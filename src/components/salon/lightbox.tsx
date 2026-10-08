import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "@/data/salon";
import { useLightbox } from "@/lib/booking";

export function Lightbox() {
  const index = useLightbox((s) => s.index);
  const close = useLightbox((s) => s.close);
  const next = useLightbox((s) => s.next);
  const prev = useLightbox((s) => s.prev);
  const total = GALLERY.length;
  const image = index !== null ? GALLERY[index] : null;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next(total);
      if (e.key === "ArrowLeft") prev(total);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, next, prev, total]);

  if (!image || index === null) return null;

  return (
    <div
      className="dialog-overlay fixed inset-0 flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Agrandissement photo"
      onClick={close}
    >
      <button
        type="button"
        className="absolute right-3 top-3 inline-flex size-11 items-center justify-center text-paper"
        aria-label="Fermer"
        onClick={close}
      >
        <X className="size-6" />
      </button>
      <button
        type="button"
        className="absolute left-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center text-paper sm:inline-flex"
        aria-label="Photo précédente"
        onClick={(e) => {
          e.stopPropagation();
          prev(total);
        }}
      >
        <ChevronLeft className="size-8" />
      </button>
      <figure
        className="max-h-[86svh] max-w-[92vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="max-h-[78svh] w-auto max-w-full object-contain outline-none"
        />
        <figcaption className="mt-3 text-center text-[0.7rem] uppercase tracking-[0.22em] text-paper/70">
          {image.caption}
        </figcaption>
      </figure>
      <button
        type="button"
        className="absolute right-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center text-paper sm:inline-flex"
        aria-label="Photo suivante"
        onClick={(e) => {
          e.stopPropagation();
          next(total);
        }}
      >
        <ChevronRight className="size-8" />
      </button>
    </div>
  );
}
