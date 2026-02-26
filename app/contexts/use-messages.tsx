"use client";

import { getSupabase, type ContactMessage } from "@/lib/supabase";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type LeadsContextType = {
  messages: ContactMessage[];
  getMessages: () => Promise<void>;
  error: TypeError | undefined;
  isLoading: boolean;
  notReadMessages: ContactMessage[];
  deleteMessage: (id: string) => Promise<void>;
  markMessageAsRead: (id: string) => Promise<void>;
  markMessageAsNotRead: (id: string) => Promise<void>;
} | null;

const LeadsContext = createContext<LeadsContextType | null>(null);

export const LeadsProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [error, setError] = useState<TypeError | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const getMessages = useCallback(async () => {
    const supabase = await getSupabase();
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("contact_message")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);

      setMessages(data || []);
    } catch (error) {
      setError(error as TypeError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteMessage = async (id: string) => {
    try {
      const supabase = await getSupabase();
      const { error } = await supabase
        .from("contact_message")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting lead:", error);
      } else {
        getMessages();
      }
    } catch (error) {
      setError(error as TypeError);
    } finally {
      setIsLoading(false);
    }
  };

  const markMessageAsRead = async (id: string) => {
    try {
      const supabase = await getSupabase();
      const { error } = await supabase
        .from("contact_message")
        .update({ status: true })
        .eq("id", id);

      if (error) {
        console.error("Error deleting lead:", error);
      } else {
        getMessages();
      }
    } catch (error) {
      setError(error as TypeError);
    } finally {
      setIsLoading(false);
    }
  };

  const markMessageAsNotRead = async (id: string) => {
    try {
      const supabase = await getSupabase();
      const { error } = await supabase
        .from("contact_message")
        .update({ status: false })
        .eq("id", id);

      if (error) {
        console.error("Error deleting lead:", error);
      } else {
        getMessages();
      }
    } catch (error) {
      setError(error as TypeError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const notReadMessages = messages.filter(
    (message) => message.status === false,
  );

  const value = {
    messages,
    getMessages,
    error,
    isLoading,
    notReadMessages,
    deleteMessage,
    markMessageAsRead,
    markMessageAsNotRead,
  };
  return (
    <LeadsContext.Provider value={value}>{children}</LeadsContext.Provider>
  );
};

export function useMessages() {
  const context = useContext(LeadsContext);
  if (!context) {
    throw new Error("useLeads debe usarse dentro de un LeadsProvider");
  }
  return context;
}
