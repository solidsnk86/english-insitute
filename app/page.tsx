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
import {WhyUs} from "@/components/why-us";
import { GoogleMap } from "@/components/google-map";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden space-y-22">
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
