"use client";

import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, CalendarDays, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAppointments } from "@/app/contexts/use-appointments";
import { closeDialog, showDialog } from "../showDialog";
import { formatDate, formatTime } from "@/app/utils/format-date";

// Tipos para los turnos
type AppointmentStatus = "available" | "confirmed" | "blocked" | "cancelled";

interface Appointment {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  time: string; // HH:mm
  client_name?: string;
  status: AppointmentStatus;
}

export const schedule = [
  "09:00:00",
  "10:00:00",
  "11:00:00",
  "12:00:00",
  "17:00:00",
  "18:00:00",
];

export function AppointmentsManager() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const {
    appointments,
    isLoading: loading,
    getAppointments,
    sendAppointment,
    getSlotStatus,
    cancelAppointment,
    markAsAvalaibleAppointment,
  } = useAppointments();

  // Manejar reserva
  const handleBooking = async () => {
    if (!date || !selectedSlot) return;

    const dateStr = format(date, "yyyy-MM-dd");

    setIsDialogOpen(false);
    setClientName("");
    setSelectedSlot(null);

    toast.success("Turno reservado con éxito");

    try {
      await sendAppointment({
        date: dateStr,
        time: selectedSlot,
        client_name: clientName,
        status: "confirmed",
      });
      playSound();
      setTimeout(async () => {
        await getAppointments();
      }, 300);
    } catch (error) {
      toast.error("Error al guardar en base de datos");
    }
  };

  const handleSlotClick = (time: string) => {
    const status = getSlotStatus(time);
    if (status === "available") {
      setSelectedSlot(time);
      setIsDialogOpen(true);
    } else {
      // Ver detalles si ya está ocupado
      const dateStr = format(date!, "yyyy-MM-dd");
      const appt = appointments.find(
        (a) => a.date === dateStr && a.time === time,
      );
      if (appt && appt.client_name) {
        showDialog({
          title:
            appt.status === "cancelled"
              ? "Turno: " +
                formatDate(`${appt.date}, ${appt.time}`) +
                " Cancelado"
              : "Turno: " + formatDate(`${appt.date}, ${appt.time}`),
          headerColor: "oklch(14.1% 0.005 285.823)",
          content: (
            <div className="p-5 text-center space-y-3">
              <p>
                {appt.status === "cancelled"
                  ? `Este turno de ${appt.client_name} Fué cancelado.`
                  : `Turno reservado para ${appt.client_name}.`}
              </p>
              <aside className="flex justify-center mx-auto gap-3">
                {appt.status !== "cancelled" && (
                  <Button
                    onClick={async () => {
                      closeDialog();
                      await cancelAppointment(appt.id!);
                      toast.warning(
                        `Turno de las ${appt.client_name} cancelado.`,
                      );
                      await getAppointments();
                    }}
                    variant={"destructive"}
                  >
                    Cancelear Turno
                  </Button>
                )}
                {appt.status === "cancelled" && (
                  <Button onClick={() => closeDialog()} variant={"outline"}>
                    Cancelar
                  </Button>
                )}
                <Button
                  onClick={async () => {
                    closeDialog();
                    await markAsAvalaibleAppointment(appt.id!);
                    toast.info("Se marcó el horario como disponible.");
                    await getAppointments();
                  }}
                  variant={"default"}
                >
                  Marcar como Disponible
                </Button>
              </aside>
            </div>
          ),
        });
      }
    }
  };

  function playSound() {
    const audio = new Audio("/noti-appt.mp3");
    if (audio) {
      audio.volume = 0.5;
      audio.play();
    }

    if (audio.ended) {
      audio.pause();
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <CalendarDays className="w-6 h-6 text-primary" />
          Gestión de Turnos
        </h2>
        <p className="text-muted-foreground">
          Administra tu disponibilidad y reservas de clientes.
        </p>
      </div>

      <div className="grid md:grid-cols-[auto_1fr] gap-8">
        {/* Calendar Column */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-base">Seleccionar Fecha</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex justify-center pb-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={es}
              className="rounded-md border-none"
              disabled={(date) =>
                date < new Date(new Date().setHours(0, 0, 0, 0))
              }
            />
          </CardContent>
        </Card>

        {/* Time Slots Column */}
        <Card className="flex-1">
          <CardHeader className="border-b mb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  {date
                    ? format(date, "EEEE d 'de' MMMM", { locale: es })
                    : "Seleccione una fecha"}
                </CardTitle>
                <CardDescription className="mt-1">
                  Horarios disponibles para agendar
                </CardDescription>
              </div>
              {date && (
                <Badge variant="outline" className="capitalize">
                  {format(date, "MMMM yyyy", { locale: es })}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : !date ? (
              <div className="text-center py-12 text-muted-foreground">
                <CalendarDays className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>Por favor seleccioná una fecha en el calendario</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {schedule.map((time, i) => {
                  const status = getSlotStatus(time);
                  const isSelected = selectedSlot === time;

                  return (
                    <Button
                      key={time}
                      variant={
                        status === "confirmed"
                          ? "secondary"
                          : isSelected
                            ? "default"
                            : "outline"
                      }
                      className={`h-auto py-3 flex flex-col items-center gap-1 transition-all ${
                        status === "confirmed"
                          ? "opacity-50 border-transparent bg-muted/50"
                          : status === "blocked"
                            ? "hidden"
                            : "hover:border-blue-300 border"
                      }`}
                      onClick={() => handleSlotClick(time)}
                    >
                      <Clock className="w-4 h-4 mb-1 opacity-50" />
                      <span className="font-mono text-base font-medium">
                        {formatTime(time)}
                      </span>
                      {status === "confirmed" ? (
                        <span className="text-[10px] uppercase font-bold text-destructive">
                          Ocupado
                        </span>
                      ) : null}
                      {status === "available" && (
                        <span className="text-[10px] text-green-500 font-bold">
                          Libre
                        </span>
                      )}
                      {status === "cancelled" && (
                        <span className="text-[10px] text-amber-500 font-bold">
                          Cancelado
                        </span>
                      )}
                    </Button>
                  );
                })}
              </div>
            )}

            {/* Leyenda */}
            <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t text-sm text-muted-foreground justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-input bg-background" />
                <span>Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span>Seleccionado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/50 border border-transparent" />
                <span>Ocupado</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Booking Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reservar Turno</DialogTitle>
            <DialogDescription>
              Ingresá los datos para bloquear el horario de las{" "}
              <span className="font-bold text-foreground">
                {formatTime(selectedSlot as string)}
              </span>{" "}
              hs el día{" "}
              <span className="font-bold text-foreground">
                {date && format(date, "d 'de' MMMM", { locale: es })}
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="client">Nombre del Cliente / Nota</Label>
              <Input
                id="client"
                placeholder="Ej. Patricio - Blog Interactivo"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleBooking}>Confirmar Reserva</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
