import type React from "react";
import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "./contexts/use-projects";
import { LeadsProvider } from "./contexts/use-messages";
import { Toaster } from "@/components/ui/sonner";
import { LocationProvider } from "./contexts/use-location";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({ weight: ["300"], subsets: ["latin"] });
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
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <meta name="theme-color" content="#00586B" />
      <body
        className={`font-sans antialiased overflow-x-hidden bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LocationProvider>
            <ProjectProvider>
              <LeadsProvider>{children}</LeadsProvider>
            </ProjectProvider>
          </LocationProvider>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
