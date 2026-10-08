import { create } from "zustand";
import { SALON, getService, type Service } from "@/data/salon";
import { formatLongDateFr, formatTimeFr } from "@/lib/hours";

type BookingState = {
  open: boolean;
  serviceId: string;
  openWith: (serviceId?: string) => void;
  close: () => void;
  setServiceId: (id: string) => void;
};

export const useBooking = create<BookingState>((set) => ({
  open: false,
  serviceId: "retwist",
  openWith: (serviceId) =>
    set({
      open: true,
      serviceId: serviceId ?? "retwist",
    }),
  close: () => set({ open: false }),
  setServiceId: (id) => set({ serviceId: id }),
}));

type LightboxState = {
  index: number | null;
  openAt: (index: number) => void;
  close: () => void;
  next: (total: number) => void;
  prev: (total: number) => void;
};

export const useLightbox = create<LightboxState>((set, get) => ({
  index: null,
  openAt: (index) => set({ index }),
  close: () => set({ index: null }),
  next: (total) => {
    const i = get().index;
    if (i === null) return;
    set({ index: (i + 1) % total });
  },
  prev: (total) => {
    const i = get().index;
    if (i === null) return;
    set({ index: (i - 1 + total) % total });
  },
}));

export function buildWhatsAppMessage(input: {
  service: Service;
  date: string;
  time: string;
  name: string;
  note: string;
}): string {
  const lines = [
    "Bonjour La Main d’Or,",
    "",
    "Je souhaite prendre rendez-vous.",
    "",
    `Prestation : ${input.service.name}`,
    `Date : ${formatLongDateFr(input.date)}`,
    `Heure : ${formatTimeFr(input.time)}`,
    `Prénom : ${input.name.trim()}`,
  ];
  const note = input.note.trim();
  if (note) lines.push(`Note : ${note}`);
  lines.push("", "Merci.");
  return lines.join("\n");
}

export function openWhatsAppBooking(message: string) {
  const url = `https://wa.me/${SALON.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function getServiceOrDefault(id: string): Service {
  return getService(id) ?? getService("retwist")!;
}
