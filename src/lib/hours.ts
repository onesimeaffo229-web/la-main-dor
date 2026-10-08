import { TIMEZONE, WEEKLY_HOURS } from "@/data/salon";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function parseHm(hm: string): number {
  const [h, m] = hm.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

function formatHm(hm: string): string {
  const [h, m] = hm.split(":");
  return `${h}h${m}`;
}

export function getBeninNow(date = new Date()): {
  day: number;
  minutes: number;
  hour: number;
  minute: number;
  ymd: string;
} {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIMEZONE,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const day = map[weekday] ?? 0;
  const ymd = `${get("year")}-${get("month")}-${get("day")}`;
  return { day, minutes: hour * 60 + minute, hour, minute, ymd };
}

export type SalonStatus = {
  isOpen: boolean;
  label: "OUVERT" | "FERMÉ";
  detail: string;
};

export function getSalonStatus(date = new Date()): SalonStatus {
  const now = getBeninNow(date);
  const hours = WEEKLY_HOURS[now.day] ?? WEEKLY_HOURS[1];
  const openM = parseHm(hours.open);
  const closeM = parseHm(hours.close);

  if (now.minutes >= openM && now.minutes < closeM) {
    return {
      isOpen: true,
      label: "OUVERT",
      detail: `Ferme à ${formatHm(hours.close)}`,
    };
  }

  if (now.minutes < openM) {
    return {
      isOpen: false,
      label: "FERMÉ",
      detail: `Ouvre à ${formatHm(hours.open)}`,
    };
  }

  return {
    isOpen: false,
    label: "FERMÉ",
    detail: `Ouvre demain à ${formatHm(hours.open)}`,
  };
}

export function todayYmd(): string {
  return getBeninNow().ymd;
}

export function addDaysYmd(ymd: string, days: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  dt.setUTCDate(dt.getUTCDate() + days);
  return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
}

export function formatLongDateFr(ymd: string): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1, 12));
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(dt);
}

export function formatDayChip(ymd: string): { dow: string; num: string; mon: string } {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1, 12));
  const dow = new Intl.DateTimeFormat("fr-FR", { weekday: "short", timeZone: "UTC" })
    .format(dt)
    .replace(".", "");
  const mon = new Intl.DateTimeFormat("fr-FR", { month: "short", timeZone: "UTC" })
    .format(dt)
    .replace(".", "");
  return { dow, num: String(d), mon };
}

export function formatTimeFr(hm: string): string {
  const [h, m] = hm.split(":");
  return m === "00" ? `${h}h` : `${h}h${m}`;
}

export function isSlotPast(ymd: string, hm: string, now = new Date()): boolean {
  const benin = getBeninNow(now);
  if (ymd > benin.ymd) return false;
  if (ymd < benin.ymd) return true;
  return parseHm(hm) <= benin.minutes;
}
