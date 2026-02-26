"use client";

import { getSupabase } from "@/lib/supabase";
import { format } from "date-fns";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

type StatusProps = "available" | "confirmed" | "blocked" | "cancelled";

export interface Appointment {
  id?: string;
  date: Date | string | number;
  time: Date | string | number;
  client_name: string;
  status: StatusProps;
  created_at?: Date | string | number;
}

interface AppointmentsContextType {
  appointments: Appointment[];
  isLoading: boolean;
  error: TypeError | undefined | null;
  confirmedAppointmentsToday: Appointment[];
  sendAppointment: ({
    date,
    time,
    status,
    client_name,
  }: Appointment) => Promise<void>;
  getAppointments: () => Promise<void>;
  cancelAppointment: (id: string) => Promise<void>;
  markAsAvalaibleAppointment: (id: string) => Promise<void>;
  getSlotStatus: (time: string) => StatusProps;
  isSlotAvailable: (time: string) => boolean;
  setDate: (str: Date | undefined) => void;
  date: Date | undefined;
}

const AppointmentsContext = createContext<AppointmentsContextType | undefined>(
  undefined,
);

export const AppointmentsProvider = ({ children }: { children: ReactNode }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<TypeError | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const getAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      const supabase = await getSupabase();
      const { data, error } = await supabase.from("appointments").select("*");

      if (error) throw new Error(error.message);

      setAppointments(data);
    } catch (error) {
      setError(error as TypeError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAppointments();
  }, []);

  const sendAppointment = async ({
    date,
    time,
    client_name,
    status,
  }: Appointment) => {
    try {
      const response = await fetch("/api/appointments/send", {
        method: "POST",
        body: JSON.stringify({ date, time, client_name, status }),
      });

      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // Turnos confirmados para la fecha seleccionada
  const getConfirmedByDate = useCallback(
    (selectedDate: Date | undefined) => {
      if (!selectedDate) return [];
      const dateStr = format(selectedDate, "yyyy-MM-dd");
      return appointments.filter(
        (appt) => appt.status === "confirmed" && appt.date === dateStr,
      );
    },
    [appointments],
  );

  // Para mantener compatibilidad, usa la fecha seleccionada
  const confirmedAppointmentsToday = getConfirmedByDate(date);

  const getSlotStatus = (time: string): StatusProps => {
    if (!date) return "available";
    const dateStr = format(date, "yyyy-MM-dd");
    const appointment = appointments.find(
      (a) => a.date === dateStr && a.time === time,
    );
    return appointment ? appointment.status : "available";
  };

  /**
   * Determina si un slot está disponible para seleccionar
   * @param time - Hora en formato "HH:mm:ss"
   * @returns true si está disponible, false si no
   */
  const isSlotAvailable = (time: string): boolean => {
    if (!date) return false;

    const status = getSlotStatus(time);
    if (status === "confirmed" || status === "blocked") return false;

    // Parsear la hora del slot
    const [hours, minutes] = time.split(":").map(Number);

    // Crear timestamp del slot (fecha seleccionada + hora del turno)
    const slotDate = new Date(date);
    slotDate.setHours(hours, minutes, 0, 0);

    // Comparar con ahora
    const now = Date.now();

    // Si el slot ya pasó, no está disponible
    return slotDate.getTime() > now;
  };

  const cancelAppointment = async (id: string) => {
    setIsLoading(true);
    try {
      const suapabase = await getSupabase();
      const { error } = await suapabase
        .from("appointments")
        .update({ status: "cancelled", cancelled: true })
        .eq("id", id);

      if (error) throw new Error(error.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsAvalaibleAppointment = async (id: string) => {
    setIsLoading(true);
    try {
      const suapabase = await getSupabase();
      const { error } = await suapabase
        .from("appointments")
        .update({ status: "available" })
        .eq("id", id);

      if (error) throw new Error(error.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppointmentsContext.Provider
      value={{
        confirmedAppointmentsToday,
        getSlotStatus,
        isSlotAvailable,
        sendAppointment,
        getAppointments,
        cancelAppointment,
        markAsAvalaibleAppointment,
        setDate,
        date,
        appointments,
        isLoading,
        error,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export const useAppointments = (): AppointmentsContextType => {
  const context = useContext(AppointmentsContext);
  if (context === undefined) {
    throw new Error(
      "useAppointments must be used within an AppointmentsProvider",
    );
  }
  return context;
};
