export const ConfirmTemplate = ({
  name,
  date,
  time,
}: {
  name: string;
  date: string | Date;
  time: string;
}) => `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Turno Confirmado | Studio Neo</title>
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
          ¡Turno Confirmado!
        </h2>
        
        <p>Hola <strong>${name}</strong>,</p>
        <p>Tu reunión con <strong>Studio Neo</strong> ha sido agendada exitosamente. Esperamos conversar sobre tu proyecto pronto.</p>

        <!-- Appointment Details Box -->
        <div style="background-color: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin: 24px 0; text-align: center;">
          <p style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Fecha y Hora</p>
          <div style="font-size: 20px; font-weight: 700; color: #f8fafc;">
            ${date}
          </div>
          <div style="font-size: 24px; font-weight: 700; color: #3b82f6; margin-top: 5px;">
            ${time} hs
          </div>
        </div>
        
        <p style="text-align: center;">
          Te recomendamos estar atento unos minutos antes del horario pactado.
        </p>

        <!-- Action Buttons -->
        <div style="text-align: center; margin-top: 32px; margin-bottom: 32px;">
          <a href="https://studio-neo.vercel.app/" target="_blank" style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.5);">
            Ir al sitio web
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #1e293b; margin: 30px 0;" />

        <p style="font-size: 14px;">
          Si necesitas reprogramar o cancelar, por favor respondé a este correo o contactanos por WhatsApp.
          <br /><br />
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
