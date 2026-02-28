import { BookOpen, Users, User, Briefcase, Award, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: BookOpen,
    title: "Cursos para niños",
    description:
      "Clases dinámicas y lúdicas diseñadas para fomentar la comunicación desde temprana edad.",
  },
  {
    icon: Users,
    title: "Cursos para adolescentes",
    description:
      "Programas enfocados en habilidades académicas y conversación para adolescentes.",
  },
  {
    icon: User,
    title: "Cursos para adultos",
    description: "Clases prácticas y personalizadas para mejorar fluidez y confianza.",
  },
  {
    icon: Briefcase,
    title: "Inglés para empresas",
    description: "Formación para equipos: negocios, presentaciones y comunicación profesional.",
  },
  {
    icon: Award,
    title: "Preparación de exámenes",
    description: "Cursos específicos para IELTS, TOEFL y certificados Cambridge.",
  },
  {
    icon: Laptop,
    title: "Clases online y particulares",
    description: "Modalidad flexible: 1 a 1 o grupos reducidos, online o presencial.",
  },
];

export function Services() {
  return (
    <section id="cursos" className="relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nuestros cursos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance section-title" data-anim="left">
            Programas diseñados para todos los niveles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos una amplia variedad de cursos: desde niños hasta
            formación corporativa y preparación para exámenes. Modalidades
            presenciales y online con seguimiento personalizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Efecto de background superior */}
          <div className="absolute -left-50 -top-25 w-120 h-120 rounded-full blur-3xl bg-teal-500/10 dark:bg-teal-800/20 opacity-40"></div>
          <div className="absolute -left-14 top-7 w-120 h-120 rounded-full blur-3xl bg-teal-400/15 dark:bg-teal-700/25 opacity-40"></div>
          {/* Efecto de background inferior */}
          <div className="absolute -right-50 -bottom-25 w-120 h-120 rounded-full blur-3xl bg-teal-500/10 dark:bg-teal-800/20 opacity-50 dark:opacity-30"></div>
          <div className="absolute -right-14 bottom-1 w-120 h-120 rounded-full blur-3xl bg-teal-400/15 dark:bg-teal-700/25 opacity-50 dark:opacity-30"></div>
          {services.map((service) => (
            <Card
              key={service.title}
              className="text-center overflow-hidden border-border transition-all duration-300 group card-comp btn-animation"
            >
              {/* Efecto luz */}
              <div className="absolute -top-4 left-[50%] -translate-x-[50%] w-6 h-6 bg-zinc-200 rounded-full opacity-5 group-hover:opacity-100 transition-opacity duration-300 blink" />
              <div className="absolute top-18 left-[50%] -translate-x-[50%] w-78 h-78 rotate-135 bg-linear-to-tr dark:from-blue-100/40 via-slate-100/15 dark:via-zinc-900/15 to-slate-200/50 dark:to-zinc-950/50 blur-xl opacity-2 group-hover:opacity-80 transition-opacity duration-300 blink" />
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-primary/10 z-10 flex items-center justify-center mx-auto mb-4 dark:group-hover:bg-primary/50 
                  border border-border dark:group-hover:border-t-blue-100/70 dark:group-hover:border-l-blue-100/30 dark:group-hover:border-r-blue-100/30 dark:group-hover:border-b-blue-100/15 
                  transition-colors group-hover:shadow-black shadow-2xl btn-animation`}
                >
                  <service.icon className="w-6 h-6 text-primary dark:group-hover:text-teal-400 card-icon svg-animation" />
                </div>
                <h3 className="text-muted-foreground transition-colors duration-150 text-lg font-semibold mb-2 card-title">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground dark:group-hover:text-zinc-200 transition-colors duration-150 text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
