"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export const ForgottenPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<Error | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const supabese = await getSupabase();
      const { data, error } = await supabese.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/admin/pass-recovery",
      });
      console.log(data);
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      setError(error as TypeError);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 bg-card/50 w-full">
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (error) {
    toast.error(error.message);
  }

  return (
    <section className="h-dvh items-center grid">
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto justify-center">
        <div className="flex justify-center">
          <Link href="/admin" className="flex items-center">
            <Image
              className="bg-transparent relative"
              src="/logo-instituto.png"
              width={85}
              height={85}
              alt=""
            />
          </Link>
        </div>
        <Card className="bg-card/50 md:w-100 border-border">
          <CardContent className="grid gap-4">
            <div className="text-center">
              <h3 className="font-semibold uppercase text-xl text-center justify-center mb-4">
                confirma tu email
              </h3>
              <p className="text-muted-foreground mt-2">
                Te enviaremos un token para verificar que la cuenta te pertenece
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@institutoitegralingles.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={() => {
                    setError(undefined);
                  }}
                  required
                  disabled={isLoading}
                  className="bg-input border-border"
                />
              </div>

              <Button
                type="submit"
                className="w-full hover:bg-primary/80 transition-colors duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Restableciendo..."
                ) : (
                  <>
                    Confirmar
                    <Check className="w-4 h-4 ml-2" />
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
