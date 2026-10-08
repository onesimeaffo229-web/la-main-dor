import { useEffect, useState } from "react";
import { getSalonStatus, type SalonStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function OpenStatus({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const [status, setStatus] = useState<SalonStatus | null>(null);

  useEffect(() => {
    const tick = () => setStatus(getSalonStatus());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const shown = status ?? {
    isOpen: false,
    label: "FERMÉ" as const,
    detail: "Tous les jours, de 08h00 à 21h30",
  };

  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-sm",
        invert ? "text-paper/80" : "text-muted",
        className,
      )}
      aria-live="polite"
    >
      <span
        className={cn(
          "status-dot",
          status ? (shown.isOpen ? "open" : "closed") : "opacity-30",
        )}
        aria-hidden
      />
      <span>
        <span
          className={cn(
            "font-medium tracking-[0.14em] uppercase text-[0.7rem]",
            invert ? "text-paper" : "text-ink",
          )}
        >
          {status ? shown.label : "HORAIRES"}
        </span>
        <span className="mx-2 opacity-40" aria-hidden>
          ·
        </span>
        <span>{shown.detail}</span>
      </span>
    </p>
  );
}
