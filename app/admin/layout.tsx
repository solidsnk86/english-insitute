import type React from "react";
import type { Metadata } from "next";
import { BackButton } from "@/components/back-button";

export const metadata: Metadata = {
  title: "Admin | StudioNeo",
  description: "Panel de administración de StudioNeo",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh">
      {/* Aurora Background Effect */}
      <div className="absolute top-1/4 -left-1/4 w-150 h-150 bg-primary/30 dark:bg-primary/70 rounded-full blur-[120px] animate-aurora opacity-80" />
      <div
        className="absolute bottom-1/4 -right-1/4 w-125 h-125 bg-primary/25 dark:bg-primary/60 rounded-full blur-[100px] animate-aurora"
        style={{ animationDelay: "-4s" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 dark:opacity-100 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <BackButton />
      {children}
    </div>
  );
}
