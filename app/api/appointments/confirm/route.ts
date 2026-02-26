import { getSupabase } from "@/lib/supabase";
import nodemailer from "nodemailer";
import { ConfirmTemplate } from "./confirm-template";
import { formatTime } from "@/app/utils/format-date";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const time = url.searchParams.get("time");
  const name = url.searchParams.get("name");
  const email = url.searchParams.get("email");

  try {
    if (!time || !name || !email)
      return Response.json({ message: "Faltan parámetros" });

    const supabase = await getSupabase();
    const { error } = await supabase.from("appointments").insert({
      date: new Date().toISOString(),
      time,
      client_name: name,
      status: "confirmed",
    });
    if (error) return Response.json({ message: error.message });

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "studioneo.contacto@gmail.com",
        pass: process.env.GMAIL_PASS,
      },
    });

    const send = await transport.sendMail({
      html: ConfirmTemplate({
        name,
        date: new Date().toLocaleDateString("es-AR", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        time: formatTime(time),
      }),
      from: "studioneo.contacto@gmail.com",
      to: email,
      subject: `Gracias ${name} por contactarme!`,
    });

    if (send.rejected.length > 0) {
      return Response.json(
        {
          message: `Email rechazado: ${send.rejected.join(", ")}`,
        },
        { status: 400 },
      );
    }

    return Response.redirect(
      new URL(
        `/confirmed?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`,
        req.url,
      ),
      303,
    );
  } catch (error) {
    return Response.json({ message: "Error en el servidor: " + error });
  }
}
