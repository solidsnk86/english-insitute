import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { ip, city, country, timezone, system, browser, emoji_flag } = await req.json();

  if (!ip || !city || !country || !timezone || !system || !browser || !emoji_flag) {
    return Response.json({ message: "No se porque termina acá el error" }, { status: 400 })
  }

  try {
    const supabase = await getSupabase();
    const locationData = {
      ip,
      city,
      country,
      timezone,
      system,
      browser,
      emoji_flag,
    };
    const { error } = await supabase.from("visitors").insert([locationData]);

    if (error) {
      return Response.json({ message: "Error al insertar datos en la DB: " + error.message }, { status: 400 });
    }

    return Response.json({
      message: "¡Los datos se han enviado correctamente!",
    }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error al enviar datos al servidor" }, { status: 500 });
  }
}
