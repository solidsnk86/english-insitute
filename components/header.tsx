"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getSupabase } from "@/lib/supabase";
import { FancyButton } from "./fancy-button";
import { useLocation } from "@/app/contexts/use-location";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/#precios", label: "Precios" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ip, city, country, sysInfo } = useLocation();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 20) {
        setScrolled(true)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuIsOpen = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const sendDataLocation = useCallback(async () => {
    const supabase = await getSupabase();
    const currentIp = ip;

    try {
      const { data, error } = await supabase
        .from("sn_visitors")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) {
        throw new Error(error.message);
      }

      const lastIp = data[0].ip;

      if (lastIp !== currentIp) {
        setTimeout(async () => {
          await fetch("/api/analytics", {
            method: "POST",
            headers: { "Content-Type": "aplication/json" },
            body: JSON.stringify({
              ip,
              city: city.name,
              country: country.name,
              sysInfo,
            }),
          }).catch((err) => console.error(err));
        }, 900);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    sendDataLocation();
  }, []);

  return (
    <header className="fixed top-4 md:left-8 md:right-8 left-3 right-3 rounded-xl z-50 bg-white/60 dark:bg-black/50 backdrop-blur-lg border-b border-border shadow-lg dark:shadow-2xl dark:shadow-slate-900/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={handleMenuIsOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              className="bg-transparent"
              src="/logo-instituto.png"
              width={80}
              height={80}
              alt="Instituto logo"
            />
          </Link>

          <ThemeToggle className="md:hidden" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground font-semibold hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Admin Link */}
          <div className="items-center gap-3 hidden md:flex">
            <ThemeToggle />
            <div className="w-44">
              <Link
                href="/admin"
                className=" text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Ingresar
              </Link>
            </div>

            {/* CTA Button */}
            <FancyButton
              isLink
              linkURL="/admin/register"
              inset={1}
              duration={3}
              className="w-full py-2 px-2 justify-center text-center"
            >
              <span className="relative">Inscribirme</span>
            </FancyButton>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden items-center h-dvh grid z-50 relative">
            <div className="flex flex-col text-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-2xl font-medium py-2"
                  onClick={handleMenuIsOpen}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant={"secondary"}
                className="mt-2 text-2xl hover:brightness-125 rounded-md border"
              >
                <Link href="/admin" onClick={handleMenuIsOpen}>
                  Ingresar
                </Link>
              </Button>
              <FancyButton
                inset={1}
                duration={3}
                fancyColor="#98E7E5"
                className="w-[100%] py-2 px-2 justify-center text-center"
              >
                <a href="#contacto" className="relative">
                  Inscribirme
                </a>
              </FancyButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
