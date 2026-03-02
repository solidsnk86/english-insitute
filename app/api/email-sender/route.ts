import nodemailer from "nodemailer";
import { HTMLTemplate } from "./html-template";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return Response.json({ message: "Faltan parámetros" }, { status: 400 });
  }

  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "studioneo.contacto@gmail.com",
        pass: process.env.GMAIL_PASS,
      },
    });

    const send = await transport.sendMail({
      html: HTMLTemplate({ name }),
      from: "studioneo.contacto@gmail.com",
      to: email,
      subject: `Gracias ${name} por contactarnos - Instituto Integral del Idioma Inglés`,
    });

    if (send.accepted) {
      return Response.json(
        {
          message: `Gracias por contactarnos, se ha enviado un mensaje a tu correo ${email}.`,
        },
        { status: 200 },
      );
    }

    if (send.rejected.length > 0) {
      return Response.json(
        {
          message: `La dirección de correo es inexistente: ${email}.`,
        },
        { status: 404 },
      );
    }
  } catch (error) {
    return Response.json(
      {
        message: "Error en el servidor: " + error,
      },
      { status: 500 },
    );
  }
}
