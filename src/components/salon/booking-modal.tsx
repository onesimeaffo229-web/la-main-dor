import { useEffect, useMemo, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Calendar,
  CalendarCheck,
  ChevronDown,
  Clock,
  MessageSquare,
  Scissors,
  User,
  X,
} from "lucide-react";
import { SERVICES, TIME_SLOTS } from "@/data/salon";
import {
  addDaysYmd,
  formatDayChip,
  formatLongDateFr,
  formatTimeFr,
  isSlotPast,
  todayYmd,
} from "@/lib/hours";
import {
  buildWhatsAppMessage,
  getServiceOrDefault,
  openWhatsAppBooking,
  useBooking,
} from "@/lib/booking";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/salon/icons";
import { cn } from "@/lib/utils";

function upcomingDays(count: number) {
  const start = todayYmd();
  return Array.from({ length: count }, (_, i) => addDaysYmd(start, i));
}

export function BookingModal() {
  const open = useBooking((s) => s.open);
  const close = useBooking((s) => s.close);
  const serviceId = useBooking((s) => s.serviceId);
  const setServiceId = useBooking((s) => s.setServiceId);

  const [date, setDate] = useState(() => todayYmd());
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const days = useMemo(() => upcomingDays(10), [open]);

  useEffect(() => {
    if (open) {
      setDate(todayYmd());
      setTime("");
    }
  }, [open]);

  const service = getServiceOrDefault(serviceId);
  const canSend = Boolean(service && date && time && name.trim());

  const send = () => {
    if (!canSend) return;
    openWhatsAppBooking(
      buildWhatsAppMessage({
        service,
        date,
        time,
        name,
        note,
      }),
    );
    close();
  };

  return (
    <Dialog.Root open={open} onOpenChange={(v) => (!v ? close() : undefined)}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay fixed inset-0 bg-ink/55 backdrop-blur-[6px]" />
        <Dialog.Content
          className="dialog-content fixed inset-x-3 bottom-3 mx-auto flex max-h-[92svh] w-auto max-w-md flex-col overflow-hidden bg-paper text-ink shadow-2xl sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-h-[90vh] sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2"
          aria-describedby="booking-desc"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div className="flex items-center gap-2">
              <CalendarCheck className="size-4 text-clay" aria-hidden />
              <Dialog.Title className="font-display text-xl font-medium">
                Prendre rendez-vous
              </Dialog.Title>
            </div>
            <Dialog.Close
              className="inline-flex size-10 items-center justify-center text-ink"
              aria-label="Fermer"
            >
              <X className="size-4" />
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <p id="booking-desc" className="sr-only">
              Demande de rendez-vous : prestation, date, heure et prénom. Envoi
              via WhatsApp. Le salon confirme ensuite.
            </p>

            <div className="field">
              <label htmlFor="booking-service">
                <Scissors className="size-3.5" aria-hidden />
                Prestation
              </label>
              <div className="relative">
                <select
                  id="booking-service"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="appearance-none pr-10"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
                  aria-hidden
                />
              </div>
            </div>

            <div className="field mt-5">
              <span className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                <Calendar className="size-3.5" aria-hidden />
                Date
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1 hide-scrollbar">
                {days.map((d) => {
                  const chip = formatDayChip(d);
                  const active = d === date;
                  return (
                    <button
                      key={d}
                      type="button"
                      className="chip min-w-[3.4rem] flex-col py-2"
                      data-active={active}
                      onClick={() => {
                        setDate(d);
                        setTime("");
                      }}
                      aria-pressed={active}
                    >
                      <span className="text-[0.6rem] uppercase tracking-[0.12em] opacity-70">
                        {chip.dow}
                      </span>
                      <span className="text-sm font-medium tabular-nums">
                        {chip.num}
                      </span>
                    </button>
                  );
                })}
              </div>
              <input
                type="date"
                min={todayYmd()}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setTime("");
                }}
                aria-label="Choisir une autre date"
              />
            </div>

            <div className="field mt-5">
              <span className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                <Clock className="size-3.5" aria-hidden />
                Heure
              </span>
              <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-5">
                {TIME_SLOTS.map((slot) => {
                  const past = isSlotPast(date, slot);
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={past}
                      className="chip text-[0.72rem] tabular-nums"
                      data-active={time === slot}
                      onClick={() => setTime(slot)}
                      aria-pressed={time === slot}
                    >
                      {formatTimeFr(slot)}
                    </button>
                  );
                })}
              </div>
              <p className="text-[0.7rem] text-muted">
                Créneaux de demande. Le salon confirme ensuite la disponibilité.
              </p>
            </div>

            <div className="field mt-5">
              <label htmlFor="booking-name">
                <User className="size-3.5" aria-hidden />
                Prénom
              </label>
              <input
                id="booking-name"
                type="text"
                autoComplete="given-name"
                placeholder="Trésor"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="field mt-5">
              <label htmlFor="booking-note">
                <MessageSquare className="size-3.5" aria-hidden />
                Note facultative
              </label>
              <textarea
                id="booking-note"
                placeholder="Une précision pour le salon…"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <div
              className={cn("mt-6 grid gap-3 border border-line bg-foam p-4 text-sm")}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                Récapitulatif
              </p>
              <RecapRow
                icon={<Scissors className="size-3.5" />}
                label="Service"
                value={service.name}
              />
              <RecapRow
                icon={<Calendar className="size-3.5" />}
                label="Date"
                value={date ? formatLongDateFr(date) : "À choisir"}
              />
              <RecapRow
                icon={<Clock className="size-3.5" />}
                label="Heure"
                value={time ? formatTimeFr(time) : "Choisir une heure"}
              />
              <RecapRow
                icon={<User className="size-3.5" />}
                label="Prénom"
                value={name.trim() || "Votre prénom"}
              />
              {note.trim() ? (
                <RecapRow
                  icon={<MessageSquare className="size-3.5" />}
                  label="Note"
                  value={note.trim()}
                />
              ) : null}
            </div>
          </div>

          <div className="border-t border-line px-5 py-4">
            <Button
              type="button"
              variant="clay"
              size="lg"
              className="w-full"
              disabled={!canSend}
              onClick={send}
            >
              <WhatsAppIcon className="size-4" />
              Envoyer la demande sur WhatsApp
            </Button>
            <p className="mt-2 text-center text-[0.7rem] text-muted">
              Le salon vous confirmera ensuite le rendez-vous.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function RecapRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <p className="grid grid-cols-[1.1rem_5.5rem_1fr] items-start gap-2 text-ink/90">
      <span className="mt-0.5 text-muted">{icon}</span>
      <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      <span>{value}</span>
    </p>
  );
}
