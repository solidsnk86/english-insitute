"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhyUs = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const itemsRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }

    if (itemsRef.current) {
      const nodes = itemsRef.current.querySelectorAll("li");

      gsap.fromTo(
        nodes,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} id="por-que" className="relative p-4">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 rounded-full bg-primary/40 w-56 h-56 blur-3xl pointer-events-none" />

      <div className="container mx-auto border border-border rounded-xl backdrop-blur-2xl bg-white/50 dark:bg-card/30 overflow-hidden p-6 lg:p-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Texto principal */}
          <div className="space-y-5">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
              Por qué elegirnos
            </span>

            <h2
              ref={titleRef}
              className="text-3xl lg:text-4xl font-bold leading-tight"
            >
              La experiencia y la enseñanza que marcan la diferencia
            </h2>

            <p className="text-muted-foreground text-pretty text-base lg:text-lg">
              Combinamos métodos modernos, materiales actualizados y más de 52
              años de experiencia para brindar una enseñanza eficaz, clara y
              accesible, cuidando el tiempo y la inversión de cada familia.
            </p>
          </div>

          {/* Lista */}
          <div className="text-left">
            <ul ref={itemsRef} className="space-y-4">
              {[
                {
                  title: "Docentes profesionales",
                  text: "Equipo altamente capacitado, con vocación y compromiso pedagógico.",
                },
                {
                  title: "Competencia comunicativa",
                  text: "Enfoque en hablar, comprender y comunicarse con fluidez y seguridad.",
                },
                {
                  title: "Grupos reducidos y homogéneos",
                  text: "Aprendizaje personalizado, sin mezclar edades ni niveles.",
                },
                {
                  title: "Seguimiento individual",
                  text: "Atención constante al progreso y evolución de cada alumno.",
                },
                {
                  title: "Flexibilidad horaria",
                  text: "Cursos adaptados a distintas edades, ritmos y disponibilidades.",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start p-3 rounded-lg transition hover:bg-primary/5"
                >
                  <svg
                    className="w-6 h-6 text-primary mt-1 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="leading-snug">
                    <strong className="block">{item.title}:</strong>
                    <span className="text-muted-foreground text-sm lg:text-base">
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
