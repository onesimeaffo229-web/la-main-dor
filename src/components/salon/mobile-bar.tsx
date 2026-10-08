import { useEffect, useState } from "react";
import { CalendarCheck, Navigation, Phone } from "lucide-react";
import { SALON } from "@/data/salon";
import { useBooking, useLightbox } from "@/lib/booking";
import { openItinerary } from "@/lib/maps";

export function MobileBar() {
  const book = useBooking((s) => s.openWith);
  const modalOpen = useBooking((s) => s.open);
  const lightbox = useLightbox((s) => s.index);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom = y + window.innerHeight > doc.scrollHeight - 360;
      setHidden(y < 280 || nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gone = hidden || modalOpen || lightbox !== null;

  return (
    <div
      className="mobile-bar lg:hidden"
      data-hidden={gone}
      role="navigation"
      aria-label="Actions rapides"
    >
      <button
        type="button"
        className="inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-[0.68rem] uppercase tracking-[0.14em] text-paper"
        onClick={() => book()}
      >
        <CalendarCheck className="size-3.5" aria-hidden />
        Réserver
      </button>
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-full text-paper"
        aria-label="Itinéraire"
        onClick={openItinerary}
      >
        <Navigation className="size-4" />
      </button>
      <a
        href={`tel:${SALON.phoneTel}`}
        className="inline-flex size-11 items-center justify-center rounded-full text-paper"
        aria-label="Appeler le salon"
      >
        <Phone className="size-4" />
      </a>
    </div>
  );
}
