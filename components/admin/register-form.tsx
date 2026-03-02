"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { getSupabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

export function RegisterForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (password !== confirmedPassword) {
        setError("Las contraseñas no coinciden");
        return;
      }

      setError("");
      const supabase = await getSupabase();
      const { error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        setError("Credenciales inválidas. Verifica tu email y contraseña.");
        return;
      }

      toast.success(`Se ha enviado un correo de confirmación a ${email}`)
      router.push("/admin");
      router.refresh();
    } catch (error) {
      setError((error as TypeError).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="flex justify-center mb-4">
        <Link href="/" className="flex items-center">
          <Image
            className="bg-transparent relative"
            src="/logo-instituto.png"
            width={85}
            height={85}
            alt="Logo insituto"
          />
        </Link>
      </div>
      <Card className="bg-card/50 border-border">
        <div className="text-center mb-4 px-4">
          <h3 className="font-semibold uppercase text-xl text-center justify-center mb-4">
            registra tu cuenta
          </h3>
          <p className="text-muted-foreground mt-2">
            Llená el formulario con tus datos y comenzá a gestionar tu web
          </p>
        </div>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="ej.: 2664268668"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={isLoading}
                className="bg-input border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="ej.: tucorreo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="bg-input border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña *</Label>
              <div className="relative">
                <Input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="bg-input border-border pr-10"
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
            <div className="space-y-2">
              <Label htmlFor="confirmedPassword">Confirmar contraseña *</Label>
              <div className="relative">
                <Input
                  name="confirmedPassword"
                  id="confirmedPassword"
                  type={showConfirmedPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="bg-input border-border pr-10"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmedPassword(!showConfirmedPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmedPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="">
              <p className="text-muted-foreground text-xs">
                (*) Campos obligatorios
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full mt-4 bg-primary hover:bg-primary/80 transition-colors duration-300 ml-1"
              disabled={isLoading}
            >
              {isLoading ? (
                "Ingresando..."
              ) : (
                <>
                  Registrarme
                  <LogIn className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
            <div className="relative flex gap-2 justify-center text-muted-foreground text-sm">
              ¿Ya estás registrado?
              <Link
                className="hover:text-primary transition-colors duration-300 ml-1"
                href={"/admin/login"}
              >
                Inicia sesión aquí
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
