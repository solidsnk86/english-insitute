const number = "+5492665290020";
const defaultMessage =
  "👋 ¡Hola! Me interesa conocer más sobre los servicios de Studio Neo. ¿Podrían asesorarme con mi proyecto? 🚀";

export const HTMLTemplate = ({
  name,
  email,
  time,
  appointment,
}: {
  name: string;
  email: string;
  time?: string;
  appointment: string;
}) => `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gracias por contactarnos | Studio Neo</title>
  </head>
  <body style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #020617; margin: 0; padding: 16px; color: #e2e8f0;">
    <div style="background-color: #0f172a; max-width: 600px; margin: 40px auto; padding: 40px; border-radius: 16px; border: 1px solid #1e293b; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
      
      <!-- Header / Logo -->
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #f8fafc; letter-spacing: -0.5px;">
          Studio<span style="color: #3b82f6;">Neo</span>
        </h1>
      </div>

      <!-- Main Content -->
      <div style="color: #94a3b8; line-height: 1.7; font-size: 15px;">
        <h2 style="text-align: center; color: #f1f5f9; margin-bottom: 24px; font-size: 22px; font-weight: 600;">
          ¡Mensaje Recibido!
        </h2>
        
        <p>Hola <strong>${name}</strong>,</p>
        <p>Gracias por contactarte con <strong>Studio Neo</strong>. Hemos recibido tu consulta y estamos entusiasmados por conocer más sobre tu proyecto.</p>
        <p>Has seleccionado el turno para ${appointment}. ¿Te gustaría confirmarlo?</p>
         <div style="display: flex; justify-content: center; margin: 4px auto;">
            <a href="https://studio-neo.vercel.app/api/appointments/confirm?time=${time}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}" target="_blank" style="display: inline-block; padding: 4px 8px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin-right: 10px; box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5);">
          Confirmar turno
        </a>
         </div>
        
        <p>
          Si querés agilizar el proceso, podés enviarnos los detalles directamente a nuestro WhatsApp y confirmando el turno o responder a este correo.
        </p>

        <!-- Action Buttons -->
        <div style="text-align: center; margin-top: 32px; margin-bottom: 32px; display: flex; justify-content: center;">
          <a href="https://wa.me/${number}?text=${encodeURIComponent("Hola mi nombre es " + name + " estoy interesado/a en tus servicios." || defaultMessage)}" target="_blank" style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin-right: 10px;">
            WhatsApp
          </a>
          <a href="mailto:agustin.calcagni@gmail.com?subject=${encodeURIComponent("Consulta sobre servicios - Studio Neo")}" style="display: inline-block; padding: 12px 24px; background-color: #1e293b; color: #e2e8f0; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; border: 1px solid #334155;">
            Email
          </a>
        </div>

        <p style="margin-top: 24px;">
          Mientras esperás nuestra respuesta, te invitamos a explorar nuestros últimos trabajos y soluciones digitales:
        </p>

        <div style="text-align: center; margin: 20px 0;">
          <a href="https://studio-neo.vercel.app/#proyectos" target="_blank" style="color: #60a5fa; text-decoration: none; font-weight: 500;">
            Ver Proyectos &rarr;
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #1e293b; margin: 30px 0;" />

        <p style="font-size: 14px;">
          Atentamente,<br />
          <strong style="color: #f8fafc;">El equipo de Studio Neo</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #475569;">
        <p>© ${new Date().getFullYear()} Studio Neo. Todos los derechos reservados.</p>
        <p>San Luis, Argentina</p>
      </div>
    </div>
  </body>
</html>
`;
