import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Info } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Términos y Condiciones | StudioNeo",
  description:
    "Información sobre nuestros servicios, costos de infraestructura y términos de contratación.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl mt-12 md: overflow-hidden">
        <div className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparencia en nuestros servicios, costos de infraestructura y
            modalidades de trabajo.
          </p>
        </div>

        <div className="space-y-12">
          {/* Sección 1: Introducción */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              1. Visión General del Servicio
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              En StudioNeo desarrollamos soluciones digitales a medida. Es
              fundamental comprender que, además del costo de desarrollo (pago
              único o por hitos), existen costos recurrentes asociados a la
              infraestructura necesaria para mantener su sitio o aplicación en
              línea (hosting, dominios, bases de datos, etc.). Estos servicios
              son provistos por terceros y sus tarifas pueden variar.
            </p>
          </section>

          <Separator />

          {/* Sección 2: Costos de Infraestructura */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl md:text-2xl font-bold">
                2. Costos de Infraestructura y Terceros
              </h2>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3 text-sm text-primary/80 mb-6">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p>
                Los precios mencionados a continuación son{" "}
                <strong>estimados</strong> en dólares estadounidenses (USD) y
                pueden variar según el proveedor, la carga de impuestos locales
                y las actualizaciones de tarifas de cada plataforma.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-1 overflow-auto">
              {/* Opción A: Alto Rendimiento */}
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg md:text-xl">
                        Opción A: Alto Rendimiento (App Web / E-Commerce)
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Ideal para aplicaciones complejas, alto tráfico y
                        escalabilidad. Stack: Next.js (Vercel) + Supabase.
                      </CardDescription>
                    </div>
                    <Badge variant="default">Recomendado</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Servicio</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead className="text-right">
                          Costo Estimado
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Vercel Pro
                        </TableCell>
                        <TableCell>
                          Hosting de alto rendimiento, CI/CD, Serverless
                          Functions.
                        </TableCell>
                        <TableCell className="text-right">
                          $20 USD / mes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Supabase Pro
                        </TableCell>
                        <TableCell>
                          Base de datos PostgreSQL, Autenticación, Storage.
                        </TableCell>
                        <TableCell className="text-right">
                          $25 USD / mes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Dominio (.com)
                        </TableCell>
                        <TableCell>
                          Nombre de su sitio web (pago anual dividido).
                        </TableCell>
                        <TableCell className="text-right">
                          ~ $1.25 USD / mes
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/50 font-bold">
                        <TableCell colSpan={2}>
                          Total Mensual Estimado
                        </TableCell>
                        <TableCell className="text-right">
                          ~ $46.25 USD
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 text-xs text-muted-foreground">
                    * Nota: Existen planes gratuitos (Hobby) en Vercel y
                    Supabase para proyectos pequeños o de prueba, pero no se
                    recomiendan para uso comercial serio debido a los límites de
                    recursos y soporte.
                  </div>
                </CardContent>
              </Card>

              {/* Opción B: Económica */}
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg md:text-xl">
                        Opción B: Sitios Institucionales / Landing Pages
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Solución cost-effective para sitios informativos o
                        portafolios. Stack: Hostinger / Hosting Compartido.
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Económico</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Servicio</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead className="text-right">
                          Costo Estimado
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Hostinger Premium
                        </TableCell>
                        <TableCell>
                          Hosting web estándar + SSL + Email corporativo.
                        </TableCell>
                        <TableCell className="text-right">
                          ~ $3 - $6 USD / mes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Dominio (.com)
                        </TableCell>
                        <TableCell>
                          A menudo incluido el 1er año, luego precio regular.
                        </TableCell>
                        <TableCell className="text-right">
                          Incluido / Variable
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/50 font-bold">
                        <TableCell colSpan={2}>
                          Total Mensual Estimado
                        </TableCell>
                        <TableCell className="text-right">~ $5 USD</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 text-xs text-muted-foreground">
                    * Nota: Los precios de hosting compartido suelen requerir
                    pago anual o cuatrienal anticipado para obtener la mejor
                    tarifa mensual.
                  </div>
                </CardContent>
              </Card>

              {/* Opción C: Railway */}
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg md:text-xl">
                        Opción C: Flexibilidad Dinámica
                      </CardTitle>
                      <CardDescription className="mt-1">
                        Alternativa para apps que requieren backend custom
                        (Node.js/Docker) y base de datos. Stack: Railway.
                      </CardDescription>
                    </div>
                    <Badge variant="outline">Flexible</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Servicio</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead className="text-right">
                          Costo Estimado
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Railway (Base)
                        </TableCell>
                        <TableCell>
                          Plan Hobby / Pro según uso de recursos (CPU/RAM).
                        </TableCell>
                        <TableCell className="text-right">
                          ~ $5 USD / mes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          PostgreSQL
                        </TableCell>
                        <TableCell>
                          Base de datos gestionada dentro de Railway.
                        </TableCell>
                        <TableCell className="text-right">
                          ~ $5 - $10 USD / mes
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Dominio</TableCell>
                        <TableCell>Costo externo.</TableCell>
                        <TableCell className="text-right">
                          ~ $1.25 USD / mes
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/50 font-bold">
                        <TableCell colSpan={2}>
                          Total Mensual Estimado
                        </TableCell>
                        <TableCell className="text-right">
                          ~ $12 - $17 USD
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Sección 3: Mantenimiento StudioNeo */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              3. Servicio de Mantenimiento StudioNeo
            </h2>
            <p className="text-muted-foreground">
              Ofrecemos planes de mantenimiento opcionales para asegurar que su
              sitio funcione correctamente, se mantenga seguro y actualizado.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border rounded-lg p-6 bg-card/50">
                <h3 className="font-semibold text-lg mb-3">
                  Mantenimiento Básico
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Monitoreo de disponibilidad (Uptime)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Renovación de certificados SSL
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Gestión de pagos de infraestructura (opcional)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Soporte por email (respuesta 48hs)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border border-primary/20 rounded-lg p-6 bg-primary/5">
                <h3 className="font-semibold text-lg mb-3">
                  Mantenimiento Premium
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Todo lo incluido en Básico
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Actualizaciones menores de contenido mensual
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Optimización de rendimiento continua
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Soporte prioritario (WhatsApp / Google Meeting)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mt-2">
              * Los costos de los planes de mantenimiento se cotizan según la
              complejidad del proyecto.
            </p>
          </section>

          <Separator />

          {/* Sección 4: Política de Pagos y Moneda */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              4. Política de Pagos y Moneda
            </h2>
            <div className="prose prose-muted text-muted-foreground w-full max-w-none">
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Moneda de Referencia:</strong> Todos los presupuestos
                  se exprasan en <strong>Dólares Estadounidenses (USD)</strong>{" "}
                  para preservar el valor del trabajo frente a la inflación y
                  devaluación local.
                </li>
                <li>
                  <strong>Pagos en Pesos Argentinos (ARS):</strong> Se aceptan
                  pagos en moneda local. La conversión se realizará tomando como
                  referencia el valor de venta del{" "}
                  <strong>Dólar MEP/Blue</strong> del día efectivo de pago
                  (según cotización promedio en fuentes reconocidas como
                  DolarHoy).
                </li>
                <li>
                  <strong>Esquema de Pagos:</strong>
                  <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>
                      <strong>50% de anticipo:</strong> Requerido para agendar
                      el proyecto y comenzar el desarrollo. No reembolsable una
                      vez iniciado el trabajo.
                    </li>
                    <li>
                      <strong>50% contra entrega:</strong> Se abona al finalizar
                      el desarrollo, <strong>antes</strong> de la migración al
                      servidor final del cliente o la entrega de credenciales
                      administrativas.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Impuestos:</strong> Los precios de lista no incluyen
                  IVA salvo que se especifique lo contrario. Para facturación
                  "A" o "B", se adicionarán los impuestos correspondientes según
                  la normativa vigente de AFIP (ARCA).
                </li>
                <li>
                  <strong>Falta de Pago de Infraestructura:</strong> Si el
                  cliente incumple con el pago de los servicios de terceros
                  (Hosting, Dominios), StudioNeo no se responsabiliza por la
                  baja del servicio, pérdida de datos o correos electrónicos.
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Sección 5: Propiedad Intelectual y Entregables */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              5. Propiedad Intelectual
            </h2>
            <p className="text-muted-foreground">
              Es fundamental definir quién es dueño de qué al finalizar el
              proyecto.
            </p>
            <div className="bg-muted/30 p-4 rounded-lg border border-border">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Código Fuente:</strong> Una vez abonado el 100% del
                    proyecto, el cliente obtiene la propiedad intelectual del
                    código fuente desarrollado específicamente para su sitio
                    web.
                  </div>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Activos del Cliente:</strong> Todas las imágenes,
                    textos y logos provistos por el cliente siguen siendo de su
                    exclusiva propiedad.
                  </div>
                </li>
                <li className="flex gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Herramientas y Librerías:</strong> StudioNeo utiliza
                    librerías de código abierto (Open Source) y herramientas
                    propias reutilizables. Estas partes del código no son
                    propiedad exclusiva del cliente, quien recibe una licencia
                    de uso perpetua para su proyecto.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* Sección 6: Tiempos, Alcance y Garantía */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              6. Alcance del Trabajo y Garantía
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-base md:text-lg">
                  Garantía de Soporte (30 Días)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Todo proyecto incluye un periodo de garantía de 30 días
                  corridos post-entrega. Durante este tiempo, StudioNeo
                  corregirá sin cargo cualquier{" "}
                  <strong>error de programación (bug)</strong> o fallo en las
                  funcionalidades acordadas.
                </p>
                <div className="text-sm bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 p-3 rounded">
                  <strong>Exclusión:</strong> La garantía no cubre cambios de
                  diseño ("no me gusta este color ahora"), nuevas
                  funcionalidades ("faltó agregar esta sección") ni errores
                  causados por manipulación del cliente o terceros en el código.
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Cambios y Adicionales</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cualquier tarea fuera del presupuesto original se considera un
                  adicional y se cotizará por separado a valor hora o por
                  presupuesto cerrado. Esto incluye cambios estructurales una
                  vez aprobado el diseño o nuevas funcionalidades no
                  especificadas al inicio.
                </p>
                <h3 className="font-semibold text-lg mt-4">
                  Tiempos de Entrega
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Los plazos de entrega son estimados y comienzan a correr una
                  vez que el cliente entrega{" "}
                  <strong>todo el material necesario</strong> (textos, logos,
                  fotos). Si el cliente demora en entregar el material o en dar
                  feedback, la fecha de entrega final se desplazará
                  proporcionalmente.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Sección 7: Suspensión por Inactividad */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              7. Suspensión por Inactividad
            </h2>
            <p className="text-muted-foreground">
              Para garantizar la fluidez de nuestro trabajo y agenda:
            </p>
            <div className="border border-destructive/20 bg-destructive/5 p-4 rounded-lg">
              <p className="text-muted-foreground text-sm">
                Si un proyecto se detiene por <strong>más de 30 días</strong>{" "}
                debido a falta de respuesta, material o aprobación por parte del
                cliente, StudioNeo se reserva el derecho de:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Archivar el proyecto y retirarlo de la agenda activa.</li>
                <li>
                  Aplicar un cargo de reactivación (10% - 15% del valor total)
                  para retomar el trabajo.
                </li>
                <li>
                  Recotizar el saldo pendiente si hubo inflación o cambio de
                  tarifas durante el período de inactividad.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
