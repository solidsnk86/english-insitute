import React from "react";
import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";
import { Cookie, Settings, ShieldCheck, Info } from "lucide-react";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Política de Cookies | StudioNeo",
  description:
    "Información sobre el uso de cookies y tecnologías similares en StudioNeo.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 md:py-24 max-w-4xl md:mt-8 mt-24">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            Política de Cookies
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            Utilizamos cookies para mejorar tu experiencia de navegación y
            analizar el tráfico de nuestro sitio.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Sección 1: Qué son */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Cookie className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
              1. ¿Qué son las Cookies?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Las cookies son pequeños archivos de texto que los sitios web
              guardan en tu computadora o dispositivo móvil cuando los visitas.
              Permiten que el sitio recuerde tus acciones y preferencias (como
              inicio de sesión, idioma, tamaño de fuente y otras preferencias de
              visualización) durante un período de tiempo, para que no tengas
              que volver a introducirlas cada vez que regresas al sitio o
              navegas de una página a otra.
            </p>
          </section>

          <Separator />

          {/* Sección 2: Tipos de Cookies */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Info className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
              2. ¿Qué tipos de Cookies utilizamos?
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4 md:pl-6 py-2">
                <h3 className="font-semibold text-base md:text-lg">
                  Cookies Esenciales
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                  Son necesarias para que el sitio web funcione correctamente.
                  Incluyen, por ejemplo, cookies que te permiten iniciar sesión
                  en áreas seguras de nuestro sitio web o utilizar el carrito de
                  compras. Sin estas cookies, no podemos ofrecerte los servicios
                  que solicitas.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 md:pl-6 py-2">
                <h3 className="font-semibold text-base md:text-lg">
                  Cookies de Análisis y Rendimiento
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                  Nos permiten reconocer y contar el número de visitantes y ver
                  cómo se mueven los visitantes por nuestro sitio web cuando lo
                  están utilizando. Esto nos ayuda a mejorar la forma en que
                  funciona nuestro sitio web. Utilizamos un sistema de analítica
                  propio y privado (sin terceros) que respeta al máximo la
                  privacidad del usuario, anonimizando las IPs y evitando el
                  rastreo cruzado entre sitios.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 md:pl-6 py-2">
                <h3 className="font-semibold text-base md:text-lg">
                  Cookies de Funcionalidad
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                  Se utilizan para reconocerte cuando regresas a nuestro sitio
                  web. Esto nos permite personalizar nuestro contenido para ti,
                  saludarte por tu nombre y recordar tus preferencias (por
                  ejemplo, tu elección de idioma o región).
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Sección 3: Gestión */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Settings className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
              3. ¿Cómo controlar las Cookies?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Puedes controlar y/o eliminar las cookies según desees. Puedes
              eliminar todas las cookies que ya están en tu computadora y puedes
              configurar la mayoría de los navegadores para evitar que se
              coloquen. Sin embargo, si haces esto, es posible que tengas que
              ajustar manualmente algunas preferencias cada vez que visites un
              sitio y que algunos servicios y funcionalidades no funcionen.
            </p>
            <div className="bg-muted/30 p-4 rounded-lg text-sm text-muted-foreground mt-4">
              <p className="mb-2 font-medium text-foreground">
                Para más información sobre cómo gestionar las cookies en tu
                navegador, visita:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Sección 4: Actualizaciones */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
              4. Actualizaciones de la Política
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Podemos actualizar esta Política de Cookies de vez en cuando para
              reflejar, por ejemplo, cambios en las cookies que utilizamos o por
              otras razones operativas, legales o reglamentarias. Por favor,
              vuelve a visitar esta Política de Cookies regularmente para
              mantenerte informado sobre nuestro uso de cookies y tecnologías
              relacionadas.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
              })}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
