"use client";

import { Check, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const pricingPlans = [
  {
    name: "Cursos para niños",
    description: "Programa lúdico y comunicativo para edades tempranas",
    price: "Consultar Precio",
    currency: "",
    popular: false,
    features: [
      "Clases semanales adaptadas a la edad",
      "Material didáctico incluido",
      "Actividades lúdicas y juegos comunicativos",
      "Informe de progreso trimestral",
    ],
  },
  {
    name: "Cursos para adolescentes",
    description: "Desarrollo de habilidades académicas y conversación",
    price: "Consultar Precio",
    currency: "",
    popular: false,
    features: [
      "Clases enfocadas en comprensión y expresión",
      "Preparación para niveles escolares",
      "Tareas guiadas y feedback personalizado",
    ],
  },
  {
    name: "Cursos para adultos",
    description: "Clases prácticas para mejorar fluidez y confianza",
    price: "Consultar Precio",
    currency: "",
    popular: true,
    features: [
      "Conversación y gramática aplicada",
      "Horarios vespertinos y fines de semana",
      "Seguimiento individual",
    ],
  },
  {
    name: "Preparación de exámenes",
    description: "Cursos intensivos para IELTS, TOEFL y Cambridge",
    price: "Consultar Precio",
    currency: "",
    popular: false,
    features: [
      "Práctica de exámenes reales",
      "Estrategias de lectura y escritura",
      "Simulacros cronometrados",
    ],
  },
];

export function Pricing() {
  const popularBtnRef = useRef<HTMLAnchorElement>(null);
  const popularTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = popularBtnRef.current;
    const textEl = popularTextRef.current;

    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power3.out",
      });

      if (textEl) {
        gsap.to(textEl, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.4,
          ease: "power3.out",
        });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(btn, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1.2, 0.4)",
      });

      if (textEl) {
        gsap.to(textEl, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1.2, 0.4)",
        });
      }
    };

    const handleMouseDown = () => {
      gsap.to(btn, {
        scale: 0.9,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(btn, {
        scale: 1.1,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("mousedown", handleMouseDown);
    btn.addEventListener("mouseup", handleMouseUp);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("mousedown", handleMouseDown);
      btn.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <section id="precios" className="relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Planes Mensuales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Opciones pensadas para cada edad y necesidad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mensualidades y cursos intensivos. Ofrecemos clases presenciales y
            online, seguimiento docente y posibilidad de clases particulares.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative backdrop-blur-lg border-border hover:border-primary/50 transition-all duration-300 group ${
                plan.popular
                  ? "border-primary bg-primary/5 scale-105 lg:scale-110"
                  : "bg-white/50 dark:bg-card/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Más Popular
                  </span>
                </div>
              )}
              <CardContent className="p-6 flex flex-col h-full">
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {plan.popular ? (
                  <a
                    ref={popularBtnRef}
                    href="#contacto"
                    className="group relative inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md overflow-hidden cursor-pointer"
                    style={{ willChange: "transform" }}
                  >
                    <span ref={popularTextRef} className="relative z-10">
                      Inscribirme
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                ) : (
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-primary transition-colors hover:text-white"
                  >
                    {plan.price === "Consultar" ? "Contactar" : "Inscribirme"}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-muted-foreground text-sm mt-12 relative z-40">
          ¿Querés una clase de prueba o un presupuesto a medida? Contactanos a
          través del formulario o por email y te orientamos.
        </p>
      </div>
    </section>
  );
}
