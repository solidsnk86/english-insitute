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
