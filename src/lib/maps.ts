import { SALON } from "@/data/salon";

export function openItinerary() {
  const dest = encodeURIComponent(SALON.mapsQuery);

  const go = (origin?: string) => {
    const url = origin
      ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${dest}&travelmode=driving`
      : `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=driving`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (typeof navigator === "undefined" || !navigator.geolocation) {
    go();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => go(`${pos.coords.latitude},${pos.coords.longitude}`),
    () => go(),
    { enableHighAccuracy: true, timeout: 4500, maximumAge: 120000 },
  );
}

export const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(SALON.mapsQuery)}&hl=fr&z=16&output=embed`;
