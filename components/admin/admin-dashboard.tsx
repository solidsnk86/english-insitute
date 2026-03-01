"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import {
  Mail,
  LogOut,
  X,
  Home,
  BarChart3,
  Crown,
  NewspaperIcon,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSupabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { ProjectsManager } from "./projects-manager";
import { MessagesManager } from "./messages-manager";
import { AnalyticsManager } from "./analytics-manager";
import { AppointmentsManager } from "./appointments-manager";
import { useMessages } from "@/app/contexts/use-messages";
import Link from "next/link";
import { useTheme } from "next-themes";

type TabType = "projects" | "messages" | "analytics" | "home" | "appointments";

const tabs = [
  { id: "projects" as TabType, label: "Publicaciones", icon: NewspaperIcon },
  { id: "messages" as TabType, label: "Mensajes", icon: Mail },
  { id: "analytics" as TabType, label: "Analytics", icon: BarChart3 },
];

export function AdminDashboard({ user }: { user: User }) {
  const { getMessages, notReadMessages } = useMessages();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme()

  const logoutSessionSound = () => {
    const audio = new Audio("/sounds/win11shutdown.ogv");
    if (audio) {
      audio.volume = 0.5;
      audio.play();
    }

    if (audio.ended) {
      audio.pause();
    }
  };

  const handleLogout = async () => {
    const supabase = await getSupabase();
    logoutSessionSound();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Toggle */}
      {!isSidebarOpen ? (
        <div className="fixed top-0 left-0 bg-card p-4 w-full z-50 md:hidden mask-b-from-3">
          <button
            className="p-2 bg-linear-to-b from-zinc-900 to-zinc-700 rounded-lg border-t border-zinc-800 border-x border-b border-b-zinc-500 hover:brightness-125"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 5H3" />
              <path d="M15 12H3" />
              <path d="M17 19H3" />
            </svg>
          </button>
        </div>
      ) : null}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky inset-y-0 left-0 z-50 w-64 h-dvh backdrop-blur-lg border-r border-border transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2.5">
              <div className="aspect-square w-12 flex items-center justify-center">
                <video
                  loop
                  autoPlay
                  src="/video-peebles.webm"
                  className="w-full bg-transparent rounded blur-[0.8px]"
                />
                {/* <Image
                  className="bg-transparent"
                  src="/logo.png"
                  width={45}
                  height={45}
                  alt=""
                /> */}
              </div>
              <div>
                <span className="font-bold text-xl text-foreground">
                  Instituto
                </span>
                <p className="text-xs text-muted-foreground">Panel Admin</p>
              </div>
            </div>
            <span
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex md:hidden absolute top-6 right-2 p-2 bg-card rounded-lg border border-border"
            >
              <X className="" size={20} />
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-teal-700/10 hover:text-foreground"
                >
                  <Home className="w-5 h-5" />
                  <span>Inicio</span>
                </Link>
              </li>
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-teal-700/10 hover:text-foreground"
                    }`}
                  >
                    <div className="relative">
                      <tab.icon className="w-5 h-5" />
                      {tab.id === "messages" ? (
                        notReadMessages.length !== 0 ? (
                          <>
                            <div
                              className={`absolute -top-2 -left-1.5 w-4 h-4 text-[11px] grid items-center bg-linear-to-br from-red-400 to-red-600 rounded-full text-white z-50`}
                            >
                              <small>{notReadMessages.length}</small>
                            </div>
                            <div className="absolute sonner -top-2.25 -left-1.75 w-4 h-4 bg-red-400 rounded-full" />
                          </>
                        ) : null
                      ) : null}
                    </div>  
                    <span>{tab.label}</span>
                    {tab.id === "analytics" ? (
                      <div className="absolute top-4 right-3 text-[10px] bg-linear-to-b from-teal-600 to-teal-800 border border-teal-600 rounded-full text-white px-2">
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold tracking-widest">
                            PRO
                          </span>
                          <Crown className="-translate-y-px" size={13} />
                        </div>
                      </div>
                    ) : null}
                  </button>
                </li>
              ))}
              <li
               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
               className="w-full flex items-center text-muted-foreground gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-teal-700/10 hover:text-foreground cursor-default">
                {theme === "dark" ? <Moon size={22} /> : <Sun size={22} />}
                <span>Tema {theme === "dark" ? "Oscuro" : "Claro"}</span>
              </li>
            </ul>
          </nav>

          {/* User Info & Logout */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="truncate">
                <p className="text-sm font-medium text-foreground truncate">
                  {user.email}
                </p>
                <p className="text-xs text-muted-foreground">Administrador</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 pt-16 md:pt-8 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          {activeTab === "projects" && <ProjectsManager />}
          {activeTab === "messages" && <MessagesManager />}
          {activeTab === "analytics" && <AnalyticsManager />}
          {activeTab === "appointments" && <AppointmentsManager />}
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
