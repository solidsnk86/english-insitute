import Link from "next/link";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; email?: string }>;
}) {
  const { name, email } = await searchParams;

  return (
    <main className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <Header />

      {/* Background Elements from Hero */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] pointer-events-none" />
      <svg id="texture" className="fixed top-0 left-0 w-full h-dvh opacity-20">
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

      <section className="flex-1 flex items-center justify-center p-4 pt-24 relative z-10">
        <div className="max-w-lg w-full">
          <Card className="border-border bg-card/60 backdrop-blur-2xl shadow-2xl overflow-hidden relative group">
            {/* Decorative top gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-primary to-blue-600" />

            <CardContent className="p-8 md:p-12 text-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse w-44 h-44 -top-12 left-[50%] -translate-x-[50%]" />
                <div className="relative mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                  ¡Turno Confirmado!
                </h1>
                <p className="text-muted-foreground text-pretty text-lg">
                  {name} tu cita ha sido agendada con éxito. Te hemos enviado un
                  correo electrónico a {email}.
                </p>
              </div>

              <div className="bg-secondary/40 border border-border/50 rounded-xl p-6 text-sm text-left space-y-4">
                <p className="text-foreground/80 text-center font-medium">
                  ¿Qué sigue ahora?
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3 text-left">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Revisá tu bandeja de entrada (y spam).</span>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Agendá la fecha en tu calendario.</span>
                  </li>
                  <li className="flex gap-3 text-left">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Prepará tus dudas para la reunión.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border hover:bg-secondary/80"
                >
                  <Link href="/#servicios">
                    Explorar Servicios
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
