"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Eye, EyeOff, Key } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import Image from "next/image";

export const RecoveryForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const supabase = await getSupabase();
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      setError((error as TypeError).message);
    }
  };
  return (
    <section className="h-dvh items-center grid ">
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
      {/* Go Back Button */}
      <div className="absolute top-10 left-10">
        <Link
          href="/admin/forgotten-password"
          className="flex justify-center rounded-md w-28 text-center gap-1.5 mx-auto py-2 bg-blue-600/50 hover:bg-blue-500/80 transition-colors duration-300"
        >
          <ArrowLeft />
          <div className="text-md font-bold text-white">Volver</div>
        </Link>
      </div>
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto justify-center">
        <div className="flex justify-center">
          <Link href="/admin" className="flex items-center">
            <Image
              className="bg-transparent"
              src="/logo.png"
              width={45}
              height={45}
              alt=""
            />
            <div className="flex font-bold text-xl text-foreground">
              <span>
                Studio
                <span className="bg-clip-text text-transparent bg-linear-120 from-blue-400 via-blue-600 to-blue-700">
                  Neo
                </span>
              </span>
            </div>
          </Link>
        </div>

        <Card className="bg-card/50 border-border shadow-lg shadow-blue-500/50 mt-8">
          <CardContent className="grid gap-4">
            <div className="text-center">
              <h1 className="font-bold text-2xl text-center justify-center mb-4">
                Cambia tu contraseña
              </h1>
              <p className="text-muted-foreground mt-2">
                Crea una nueva contraseña para volver a iniciar sesión
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Nueva contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
              <div className="space-y-2">
                <Label htmlFor="confirmedPassword">Confirmar contraseña</Label>
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
              <Button
                type="submit"
                className="w-full mt-4 bg-blue-600/50 hover:bg-blue-500/80 transition-colors duration-300 ml-1"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Restableciendo..."
                ) : (
                  <>
                    Restablecer
                    <Key className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
