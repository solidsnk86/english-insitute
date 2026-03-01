"use client";

import { BookOpen, Users, User, Award, Briefcase, Laptop } from "lucide-react";
import { ChangeEvent, useEffect, useRef } from "react";

const rollingWords = [
  "Cursos para niños",
  "Cursos para adolescentes",
  "Cursos para adultos",
  "Preparación de exámenes",
  "Inglés para empresas",
  "Clases online",
];

export const Marquee = () => {
  return (
    <div className="w-full overflow-hidden py-6 mask-r-from-[80%] mask-l-from-[80%]">
      <div 
      onMouseEnter={(e) => {
        e.currentTarget.style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.animationPlayState = "running";
      }}
      id="marquee" className="flex whitespace-nowrap marquee">
        {[
          ...rollingWords,
          ...rollingWords,
          ...rollingWords,
          ...rollingWords,
        ].map((word, i) => (
          <div key={i} className="flex items-center">
            <div className="flex gap-2 items-center text-primary/70 text-xl justify-center md:text-2xl font-bold mx-8 uppercase tracking-wider border border-border dark:border-teal-950/80 bg-primary/10 p-4 rounded-md">
              {word.toLowerCase().includes("cursos para niños") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-teal-100/20 dark:border-teal-900/45">
                  <BookOpen />
                </div>
              )}
              {word.toLowerCase().includes("cursos para adolescentes") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-teal-100/20 dark:border-teal-900/45">
                  <Users />
                </div>
              )}
              {word.toLowerCase().includes("cursos para adultos") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-teal-100/20 dark:border-teal-900/45">
                  <User />
                </div>
              )}
              {word.toLowerCase().includes("preparación de exámenes") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-teal-100/20 dark:border-teal-900/45">
                  <Award />
                </div>
              )}
              {word.toLowerCase().includes("inglés para empresas") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-teal-100/20 dark:border-teal-900/45">
                  <Briefcase />
                </div>
              )}
              {word.toLowerCase().includes("clases online") && (
                <div className="border px-2 py-1 rounded-md bg-primary/20 border-teal-100/20 dark:border-teal-900/45">
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
