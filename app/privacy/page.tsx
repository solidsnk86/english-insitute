import React from "react";
import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { Mail, Shield, Lock, Eye } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Política de Privacidad | StudioNeo",
  description:
    "Cómo recopilamos, usamos y protegemos tus datos personales en StudioNeo.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl mt-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tu privacidad es importante para nosotros. Aquí explicamos cómo
            gestionamos tu información.
          </p>
        </div>

        <div className="space-y-12">
          {/* Sección 1: Responsable */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              1. Responsable del Tratamiento
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos personales recabados a través del sitio web{" "}
              <strong>StudioNeo</strong> son responsabilidad de StudioNeo (en
              adelante, "el Responsable"). Nuestro compromiso es tratar tus
              datos con confidencialidad y de acuerdo con las normativas de
              protección de datos vigentes.
            </p>
          </section>

          <Separator />

          {/* Sección 2: Qué datos recopilamos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              2. Información que Recopilamos
            </h2>
            <p className="text-muted-foreground mb-4">
              Recopilamos información únicamente cuando nos la proporcionas
              voluntariamente, por ejemplo, al completar nuestro formulario de
              contacto o solicitar un presupuesto.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Datos de Contacto</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Nombre y Apellido</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Detalles sobre tu proyecto o consulta</li>
                </ul>
              </div>
              <h3 className="font-semibold mb-2">Datos de Navegación</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Dirección IP (anonimizada)</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>
                  Datos estadísticos vía sistema de analítica propio (Sin
                  terceros)
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Sección 3: Finalidad */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">3. Finalidad del Tratamiento</h2>
            <p className="text-muted-foreground">
              Utilizamos tus datos para los siguientes fines legítimos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Responder a tus consultas:</strong> Procesar las
                solicitudes enviadas a través de nuestro formulario de contacto.
              </li>
              <li>
                <strong>Presupuestación:</strong> Evaluar las necesidades de tu
                proyecto para enviarte una propuesta comercial adecuada.
              </li>
              <li>
                <strong>Prestación del servicio:</strong> En caso de convertirte
                en cliente, utilizaremos tus datos para la gestión
                administrativa, facturación y comunicación durante el desarrollo
                del proyecto.
              </li>
              <li>
                <strong>Mejora del sitio:</strong> Analizar tendencias de
                tráfico (de forma anónima) para optimizar la experiencia de
                usuario en nuestra web.
              </li>
            </ul>
          </section>

          <Separator />

          {/* Sección 4: Compartir datos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              4. Protección y Cesión de Datos
            </h2>
            <p className="text-muted-foreground">
              <strong>
                No vendemos, alquilamos ni comercializamos tus datos personales
                a terceros.
              </strong>
            </p>
            <p className="text-muted-foreground">
              Sin embargo, podemos compartir información estrictamente necesaria
              con proveedores de servicios de confianza que nos ayudan a operar
              nuestro negocio (por ejemplo, servicios de hosting, herramientas
              de análisis web o plataformas de correo electrónico), siempre bajo
              acuerdos de confidencialidad.
            </p>
          </section>

          <Separator />

          {/* Sección 5: Tus Derechos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">5. Tus Derechos</h2>
            <p className="text-muted-foreground">
              Como titular de tus datos, tienes derecho a acceder, rectificar o
              solicitar la eliminación de tu información personal de nuestros
              registros en cualquier momento.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Ejerce tus derechos</h3>
                <p className="text-muted-foreground mb-2">
                  Para ejercer cualquiera de tus derechos o si tienes dudas
                  sobre nuestra política de privacidad, contáctanos
                  directamente.
                </p>
                <a
                  href="mailto:studioneo.contacto@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  studioneo.contacto@gmail.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
