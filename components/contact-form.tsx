"use client";

import type React from "react";
import { useState } from "react";
import { CircleAlert } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useLocation } from "@/app/contexts/use-location";
import Image from "next/image";
import { validateForm } from "@/app/utils/form-validator";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tel: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { ip, city, country, sysInfo } = useLocation();

  const playSound = () => {
    const audio = new Audio("/sounds/send-notificacion.mp3");
    if (audio) {
      audio.volume = 0.3;
      audio.play();

      if (audio.ended) {
        audio.pause();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const result = validateForm(formData);

      if (!result.success) {
        setErrorMessage(
          result.errors?.name ||
            result.errors?.email ||
            result.errors?.message ||
            "",
        );
        return;
      }

      const supabase = await getSupabase();
      const { error } = await supabase.from("contact_message").insert([
        {
          name: result.data?.name,
          email: result.data?.email,
          message: result.data?.message,
          ip,
          city: city.name,
          country: country.name,
          system: sysInfo?.system,
          browser: sysInfo?.webBrowser.browser,
          browser_version: sysInfo?.webBrowser.version,
          timezone: country.timezone,
        },
      ]);

      if (error) {
        setStatus("error");
        setErrorMessage("There was an error sending the message. Please try again.");

        const leads = JSON.parse(
          localStorage.getItem("studioneo_leads") || "[]",
        );

        leads.push({ ...formData, created_at: new Date().toISOString() });
        localStorage.setItem("studioneo_leads", JSON.stringify(leads));
      }

      const response = await fetch("/api/email-sender", {
        method: "POST",
        body: JSON.stringify({
          name: result.data?.name,
          email: result.data?.email,
        }),
      });

      const data = await response.json();

      if (response.status === 500) {
        toast.error(data.message);
        setStatus("error");
        return;
      }

      playSound();
      setStatus("success");
      toast.info(data.message);
      setFormData({ name: "", email: "", message: "", tel: "" });
    } catch (error) {
      setErrorMessage((error as TypeError).message);
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section id="contacto" className={`relative`}>
      <div className="absolute bottom-0 left-5.5 w-80 h-80 bg-primary/30 dark:bg-primary/22 rotate-120 animate-aurora drop-shadow-2xl drop-shadow-primary/50 blur-3xl -z-50" />
      <div className="absolute top-[50%] animate-pulse animation-duration-[10s] right-5.5 w-44 h-44 bg-primary/30 dark:bg-primary/25 rotate-120 drop-shadow-2xl drop-shadow-primary/50 blur-3xl -z-50 bg-animate" />

      <div className="container mx-auto px-4 z-50">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center relative">
            <div className="absolute bg-primary/20 rounded-full w-56 h-56 -top-2 left-[50%] -translate-x-[50%] blur-2xl animate-ping animation-duration-[3s]" />
            <Image
              className="shadow-black drop-shadow-2xl hover:scale-110 transition-transform duration-400"
              src="/envelope-contact.png"
              width={200}
              height={200}
              alt="Envelope image"
            />
          </div>
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance section-title" data-anim="bottom">
              Consulta sobre cupos disponibles
            </h2>
            <p className="text-muted-foreground text-pretty">
              Te acompañamos con clases claras, prácticas y enfocadas en resultados reales.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative mt-6 flex w-full bg-white/50 dark:bg-card/50 flex-col items-stretch justify-stretch gap-4 rounded-xl p-4 xl:p-1 transition-all md:mt-8 md:flex-row md:items-center md:gap-0 md:rounded-xl"
          >
            <div className="pointer-events-none absolute inset-0 hidden rounded-lg border border-border md:block" />
            <input
              className="flex-1 px-4 py-3.5 text-base/none text-foreground rounded-lg placeholder:text-muted-foreground outline-none ring-1 ring-border transition-all focus:ring-2 focus:ring-primary md:rounded-md md:bg-transparent md:px-4 md:py-3 md:text-sm/none md:ring-0 ring-inset"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              onClick={() => {
                setErrorMessage("");
              }}
              placeholder="Tu nombre"
              type="text"
              value={formData.name}
              name="name"
            />
            <div className="hidden items-center md:flex">
              <div className="h-6 w-[1.5px] bg-border" />
            </div>
            <input
              className="flex-1 rounded-lg px-4 py-3.5 text-base/none text-foreground placeholder:text-muted-foreground outline-none ring-1 ring-border transition-all focus:ring-2 focus:ring-primary md:rounded-md md:bg-transparent md:px-4 md:py-3 md:text-sm/none md:ring-0 ring-inset"
              placeholder="Tu email"
              type="email"
              value={formData.email}
              name="email"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              onClick={() => {
                setErrorMessage("");
              }}
            />

            <button
              className="group relative flex items-center justify-center rounded-lg overflow-hidden whitespace-nowrap mt-1 h-12 bg-linear-to-b from-primary/80 to-primary w-full px-6 md:ml-1 md:mt-0 bg-gradient-to-b from-primary-500 to-primary-600 text-base/none text-white transition-all duration-300 ease-in-out active:translate-y-px active:bg-primary/30 from-primary-500 via-primary-600 to-primary-800 shadow-xl shadow-primary-500/5 ring-offset-slate-700 focus:ring-primary/50 md:h-11 md:ring-offset-gray-900 hover:shadow-2xl hover:shadow-primary/50 hover:brightness-125"
              type="submit"
            >
              <span className="absolute">
                <span
                  className="text-shadow z-10 font-medium"
                  style={{ opacity: 1, transform: "none" }}
                >
                  {status === "loading" ? (
                    "Enviando..."
                  ) : (
                    <div className="flex gap-2 items-center">Enviar Mensaje</div>
                  )}
                </span>
              </span>
              <div className="hidden group-hover:block" />
              <div className="pointer-events-none absolute inset-0 rounded-md border border-gray-900/10" />
              <div className="pointer-events-none absolute inset-0 z-10 !bg-[length:120px] opacity-[0.07] bg-blend-overlay transition-opacity" />
            </button>
          </form>

          {errorMessage && (
            <div className="flex gap-2 items-center ml-1 mt-1">
              <CircleAlert size={14} className="text-destructive" />
              <small className="text-destructive">{errorMessage}</small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
