"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutCardClient, setAboutCardClient] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animción del card
      gsap.from(".about-card", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animación del badge
      gsap.from(".about-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animación del título
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animación de los párrafos (stagger)
      if (paragraphsRef.current) {
        const paragraphs = paragraphsRef.current.querySelectorAll("p");
        gsap.from(paragraphs, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="acerca" className="relative p-4">
  <div className="absolute top-14 left-1/2 rounded-full bg-primary/50 w-56 h-56 blur-3xl" />

  <div
    ref={aboutRef}
    className="about-card container mx-auto border border-border rounded-xl backdrop-blur-2xl bg-white/50 dark:bg-card/30 overflow-hidden p-4 lg:p-0"
  >
    <div className="grid lg:grid-cols-2 gap-6 items-center">
      
      {/* Visual element */}
          <div className="relative">
            <div className="aspect-square">
         
                <div className="flex items-center justify-center z-10">
                  <Image
                    src={"/foto-instituto.jpeg"}
                    alt=""
                    fill
                    className="w-full h-full relative object-cover rounded-xl md:rounded-none"
                  />

              </div>
            </div>
      </div>

      {/* Texto derecha */}
      <div className="text-left space-y-4">
        <span className="about-badge text-primary text-sm font-semibold tracking-wider uppercase">
          Sobre nosotros
        </span>

        <p className="text-muted-foreground text-pretty">
          El Instituto Integral del Idioma Inglés inició su actividad en 1974, fundado por la profesora María Cristina Herrera como un emprendimiento unipersonal. Con el paso del tiempo, creció hasta convertirse en uno de los institutos de enseñanza de inglés más destacados de San Rafael.
        </p>

        <p className="text-muted-foreground text-pretty">
          Su propuesta educativa se basa en el desarrollo integral de la competencia comunicativa en inglés, abarcando todas las habilidades necesarias para un aprendizaje completo del idioma.
        </p>

        <p className="text-muted-foreground text-pretty">
          Desde sus comienzos, la institución se distingue por la alta calidad de su enseñanza, impartida por docentes tituladas, altamente capacitadas y con verdadera vocación, incorporando de manera constante recursos didácticos y tecnológicos para mejorar la calidad educativa.
        </p>
      </div>

    </div>
  </div>
</section>
  );
};
