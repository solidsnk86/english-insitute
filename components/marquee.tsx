"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { BookOpen, Users, User, Award, Briefcase, Laptop } from "lucide-react";

const rollingWords = [
  "Cursos para niños",
  "Cursos para adolescentes",
  "Cursos para adultos",
  "Preparación de exámenes",
  "Inglés para empresas",
  "Clases online",
];

export const Marquee = () => {
  const rollingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rollingRef.current) {
      gsap.to(rollingRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-6 bg-primary/10 border-dashed border-y border-primary/20">
      <div ref={rollingRef} className="flex whitespace-nowrap">
        {[
          ...rollingWords,
          ...rollingWords,
          ...rollingWords,
          ...rollingWords,
        ].map((word, i) => (
          <div key={i} className="flex items-center">
            <div className="flex gap-2  items-center text-primary/70 text-xl justify-center md:text-2xl font-bold mx-8 uppercase tracking-wider border border-border dark:border-blue-950/80 bg-primary/10 px-4 rounded-md py-1">
              {word.toLowerCase().includes("cursos para niños") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-blue-100/60 dark:border-blue-900/45">
                  <BookOpen />
                </div>
              )}
              {word.toLowerCase().includes("cursos para adolescentes") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-blue-100/60 dark:border-blue-900/45">
                  <Users />
                </div>
              )}
              {word.toLowerCase().includes("cursos para adultos") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-blue-100/60 dark:border-blue-900/45">
                  <User />
                </div>
              )}
              {word.toLowerCase().includes("preparación de exámenes") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-blue-100/60 dark:border-blue-900/45">
                  <Award />
                </div>
              )}
              {word.toLowerCase().includes("inglés para empresas") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-blue-100/60 dark:border-blue-900/45">
                  <Briefcase />
                </div>
              )}
              {word.toLowerCase().includes("clases online") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-blue-100/60 dark:border-blue-900/45">
                  <Laptop />
                </div>
              )}
              <span>{word}</span>
            </div>
            <span className="text-primary/70">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
