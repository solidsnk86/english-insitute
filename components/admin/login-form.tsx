"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { getSupabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { BackButton } from "../back-button";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const initSessionSound = () => {
    const audio = new Audio("/sounds/win11.ogv");
    if (audio) {
      audio.volume = 0.8;
      audio.play();
    }

    if (audio.ended) {
      audio.pause();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const supabase = await getSupabase();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Credenciales inválidas. Verifica tu email y contraseña.");
      setIsLoading(false);
      return;
    }
    initSessionSound();
    router.push("/admin");
    router.refresh();
  };

  return (
    <section>
      <div className="flex justify-center mb-4">
        <div>
          <Link href="/" className="flex items-center justify-center">
            <Image
              className="bg-transparent relative"
              src="/logo-instituto.png"
              width={85}
              height={85}
              alt=""
            />
          </Link>
          <h3 className="text-2xl font-bold">Panel de administración</h3>
        </div>
      </div>
      <Card className="bg-card/50 border-border">
        <div className="text-center px-4">
          <h3 className="font-semibold uppercase text-xl text-center justify-center">
            iniciar sesión
          </h3>
          <p className="text-muted-foreground mt-2">
            Ingresá tus datos para continuar gestionando tu contenido
          </p>
        </div>
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@studioneo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="bg-input border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="bg-input border-border"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="relative text-muted-foreground text-sm text-right ">
              <Link
                className="hover:text-primary transition-colors duration-300"
                href={"/admin/forgotten-password"}
              >
                ¿Has olvidado la contraseña?
              </Link>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full hover:bg-primary/80 transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                "Ingresando..."
              ) : (
                <>
                  Ingresar
                  <LogIn className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
            <div className="relative flex gap-2 justify-center text-muted-foreground text-sm">
              ¿Aún no tienes una cuenta?
              <Link
                className="hover:text-primary transition-colors duration-300 ml-1"
                href={"/admin/register"}
              >
                Regístrate aquí
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
