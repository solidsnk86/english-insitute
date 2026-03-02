const phoneNumber = "+5492604405974";
const email = "mcristinaherrera20@gmail.com";
const defaultMessage =
  "👋 ¡Hola! Me interesa conocer más sobre los cursos de inglés del Instituto. ¿Podrían asesorarme?";

export const HTMLTemplate = ({
  name,
}: {
  name: string;
}) => `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <title>Gracias por contactarnos | Instituto Integral del Idioma Inglés</title>
    <style>
      :root {
        color-scheme: light dark;
      }
      @media (prefers-color-scheme: dark) {
        .email-body { background-color: #0a0a0a !important; }
        .email-container { background-color: #171717 !important; border-color: #262626 !important; }
        .text-primary { color: #2dd4bf !important; }
        .text-heading { color: #fafafa !important; }
        .text-body { color: #a3a3a3 !important; }
        .text-muted { color: #737373 !important; }
        .divider { border-color: #262626 !important; }
        .btn-secondary { background-color: #262626 !important; border-color: #404040 !important; }
        .footer-bg { background-color: #0a0a0a !important; border-top: 1px solid #262626; }
      }
      @media (prefers-color-scheme: light) {
        .email-body { background-color: #f5f5f5 !important; }
        .email-container { background-color: #ffffff !important; border-color: #e5e5e5 !important; }
        .text-primary { color: #0d9488 !important; }
        .text-heading { color: #171717 !important; }
        .text-body { color: #525252 !important; }
        .text-muted { color: #737373 !important; }
        .divider { border-color: #e5e5e5 !important; }
        .btn-secondary { background-color: #f5f5f5 !important; border-color: #d4d4d4 !important; }
        .footer-bg { background-color: #fafafa !important; border-top: 1px solid #e5e5e5; }
      }
    </style>
  </head>
  <body class="email-body" style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 16px;">
    <div class="email-container" style="background-color: #ffffff; max-width: 600px; margin: 40px auto; border-radius: 16px; border: 1px solid #e5e5e5; box-shadow: 0 4px 20px rgba(0,0,0,0.08); overflow: hidden;">
      
      <!-- Hero Image -->
      <div style="width: 100%; height: 200px; overflow: hidden;">
        <img 
          src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/section_block_landing_image/public/field/image/RS8966_GettyImages-658984437.jpg?itok=PBqaXMkV" 
          alt="Learn English" 
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>

      <!-- Header / Logo -->
      <div style="text-align: center; padding: 30px 40px 20px;">
        <img 
          src="https://english-insitute.vercel.app/logo-instituto.png" 
          alt="Instituto Logo" 
          style="width: 80px; height: 80px; margin-bottom: 16px;"
        />
        <h1 class="text-heading" style="margin: 0; font-size: 22px; font-weight: 700; color: #171717; letter-spacing: -0.5px;">
          Instituto Integral del <span class="text-primary" style="color: #0d9488;">Idioma Inglés</span>
        </h1>
      </div>

      <!-- Main Content -->
      <div style="padding: 0 40px 40px; line-height: 1.7; font-size: 15px;">
        <h2 class="text-heading" style="text-align: center; color: #171717; margin-bottom: 24px; font-size: 20px; font-weight: 600;">
          ¡Gracias por contactarnos!
        </h2>
        
        <p class="text-body" style="color: #525252;">Hola <strong class="text-heading" style="color: #171717;">${name}</strong>,</p>
        
        <p class="text-body" style="color: #525252;">
          Gracias por tu interés en el <strong>Instituto Integral del Idioma Inglés</strong>. Hemos recibido tu consulta y nos pondremos en contacto contigo a la brevedad.
        </p>
        
        <p class="text-body" style="color: #525252;">
          Desde 1974, nos dedicamos a brindar una enseñanza de calidad con docentes profesionales y un enfoque comunicativo integral. Ofrecemos cursos para todas las edades: niños, adolescentes y adultos.
        </p>

        <!-- Action Buttons -->
        <div style="text-align: center; margin-top: 32px; margin-bottom: 32px;">
          <a href="https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hola, mi nombre es " + name + ". " + defaultMessage)}" target="_blank" style="display: inline-block; padding: 14px 28px; background-color: #0d9488; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin-right: 10px; box-shadow: 0 4px 6px -1px rgba(13, 148, 136, 0.3);">
            Escribinos por WhatsApp
          </a>
        </div>

        <p class="text-body" style="color: #525252; margin-top: 24px;">
          Mientras tanto, te invitamos a conocer más sobre nuestros cursos y metodología:
        </p>

        <div style="text-align: center; margin: 20px 0;">
          <a href="https://english-insitute.vercel.app/#cursos" target="_blank" class="text-primary" style="color: #0d9488; text-decoration: none; font-weight: 500;">
            Ver nuestros cursos &rarr;
          </a>
        </div>

        <hr class="divider" style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;" />

        <!-- Contact Info -->
        <div style="text-align: center; margin-bottom: 20px;">
          <h3 class="text-heading" style="color: #171717; font-size: 16px; margin-bottom: 16px;">Información de contacto</h3>
          
          <p class="text-body" style="color: #525252; margin: 8px 0; font-size: 14px;">
            <strong>Directora:</strong> María Cristina Herrera
          </p>
          <p class="text-body" style="color: #525252; margin: 8px 0; font-size: 14px;">
            <strong>Email:</strong> 
            <a href="mailto:${email}" class="text-primary" style="color: #0d9488; text-decoration: none;">${email}</a>
          </p>
          <p class="text-body" style="color: #525252; margin: 8px 0; font-size: 14px;">
            <strong>Teléfono:</strong> 
            <a href="tel:${phoneNumber}" class="text-primary" style="color: #0d9488; text-decoration: none;">+54 9 2604 405974</a>
          </p>
          <p class="text-body" style="color: #525252; margin: 8px 0; font-size: 14px;">
            <strong>Dirección:</strong> Maza 621, San Rafael, Mendoza
          </p>
        </div>

        <p class="text-body" style="font-size: 14px; color: #525252;">
          Atentamente,<br />
          <strong class="text-heading" style="color: #171717;">El equipo del Instituto Integral del Idioma Inglés</strong>
        </p>
      </div>

      <!-- Footer -->
      <div class="footer-bg" style="background-color: #fafafa; padding: 24px 40px; text-align: center; font-size: 12px;">
        <p class="text-muted" style="color: #737373; margin: 0 0 8px;">© ${new Date().getFullYear()} Instituto Integral del Idioma Inglés. Todos los derechos reservados.</p>
        <p class="text-muted" style="color: #737373; margin: 0;">San Rafael, Mendoza - Argentina</p>
      </div>
    </div>
  </body>
</html>
`;
