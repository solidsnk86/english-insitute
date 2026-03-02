import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { XIcon } from "./ui/icons/x-icon";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  weight: ["300", "400", "800"],
  subsets: ["latin"]
})

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const navigationLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/#acerca" },
  { name: "Cursos", href: "/#cursos" },
  { name: "Precios", href: "/#precios" },
  { name: "Testimonios", href: "/#testimonios" },
  { name: "Contacto", href: "/#contacto" },
];

const servicesLinks = [
  { name: "Cursos para niños", href: "/#cursos" },
  { name: "Cursos para adolescentes", href: "/#cursos" },
  { name: "Cursos para adultos", href: "/#cursos" },
  { name: "Preparación de exámenes", href: "/#cursos" },
  { name: "Inglés para empresas", href: "/#cursos" },
];

const legalLinks = [
  { name: "Términos y Condiciones", href: "/terms" },
  { name: "Política de Privacidad", href: "/privacy" },
  { name: "Política de Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border border-border bg-white/50 dark:bg-card/30 z-999 rounded-xl md:mx-8 md:mb-6 mb-4 mx-3">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Image
                className="bg-transparent"
                src="/logo-instituto.png"
                width={60}
                height={60}
                alt="Instituto Inglés Logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Academia de inglés con cursos presenciales y online, docentes
              certificados y programas para todas las edades y necesidades.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => (
                <span
                  key={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-teal-700 hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Navegación</h4>
            <ul className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="flex flex-col gap-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">San Rafael, Mendoza - Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:mcristinaherrera20@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  mcristinaherrera20@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+5492604405974"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +54 9 2604 405974
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Instituto Integral del Idioma Inglés. Todos los derechos reservados.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
