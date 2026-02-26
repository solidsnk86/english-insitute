import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "./contexts/use-projects";
import { LeadsProvider } from "./contexts/use-messages";
import { Toaster } from "@/components/ui/sonner";
import { AppointmentsProvider } from "./contexts/use-appointments";
import { LocationProvider } from "./contexts/use-location";
import { ThemeProvider } from "@/components/theme-provider";

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.instituto-ingles.com"),
  title: {
    default: "Instituto Integral del Idioma Inglés",
    template: "%s | Instituto Integral del Idioma Inglés",
  },
  description:
    "Ofrecemos métodos y material novedosos respaldados por 52 años de experiencia. Clases con docentes profesionales, grupos reducidos, seguimiento individual y flexibilidad horaria.",
  keywords: [
    "Inglés",
    "Clases de inglés",
    "Instituto de inglés",
    "Competencia comunicativa",
    "Grupos reducidos",
    "San Rafael",
  ],
  authors: [{ name: "Instituto Integral del Idioma Inglés" }],
  creator: "Instituto Integral del Idioma Inglés",
  publisher: "Instituto Integral del Idioma Inglés",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Instituto Integral del Idioma Inglés",
    description:
      "Métodos modernos y 52 años de experiencia para desarrollar la competencia comunicativa en inglés.",
    url: "https://www.instituto-ingles.com",
    siteName: "Instituto Integral del Idioma Inglés",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Integral del Idioma Inglés",
    description:
      "Clases de inglés con docentes profesionales, grupos reducidos y seguimiento individual.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <meta name="theme-color" content="#193cb8" />
      <body
        className={`font-sans antialiased overflow-x-hidden bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <svg
            id="texture"
            className="fixed top-0 left-0 w-full h-dvh opacity-20 dark:opacity-20 -z-10"
          >
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".8"
                numOctaves="4"
                stitchTiles="stitch"
              ></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)"></rect>
          </svg>
          <LocationProvider>
            <ProjectProvider>
              <AppointmentsProvider>
                <LeadsProvider>{children}</LeadsProvider>
              </AppointmentsProvider>
            </ProjectProvider>
          </LocationProvider>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
