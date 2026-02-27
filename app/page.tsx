"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { Marquee } from "@/components/marquee";
import { Pricing } from "@/components/pricing";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WhyUs } from "@/components/why-us";
import { GoogleMap } from "@/components/google-map";

export default function HomePage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray<HTMLElement>(".section-title");
      titles.forEach((t) => {
        const dir = (t.dataset as DOMStringMap).anim || "bottom";
        const base: any = {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: t, start: "top 80%" },
        };

        // Title animation
        if (dir === "left") gsap.from(t, { ...base, x: -80 });
        else if (dir === "right") gsap.from(t, { ...base, x: 80 });
        else if (dir === "top") gsap.from(t, { ...base, y: -60 });
        else gsap.from(t, { ...base, y: 60 });

        // Animate following header children (paragraphs, subtitles) with stagger
        const header = t.closest(".text-center") || t.parentElement;
        if (header) {
          const children = Array.from(header.children) as HTMLElement[];
          const idx = children.indexOf(t as HTMLElement);
          const following = idx >= 0 ? children.slice(idx + 1) : [];

          if (following.length) {
            gsap.from(following, {
              opacity: 0,
              y: 24,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.15,
              delay: 0.2,
              scrollTrigger: { trigger: t, start: "top 80%" },
            });
          }
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="min-h-screen overflow-x-hidden space-y-22">
      <Header />
      <Hero />
      <About />
      <Services />
      <Marquee />
      <Projects />
      <Pricing />
      <WhyUs />
      <ContactForm />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
