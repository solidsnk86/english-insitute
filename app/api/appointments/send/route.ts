import { getSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { date, time, client_name, status } = await req.json();
  try {
    const supabase = await getSupabase();
    const { data, error } = await supabase
      .from("appointments")
      .select("id")
      .eq("date", date)
      .eq("time", time)
      .limit(1);

    if (error) {
      return Response.json({ message: error.message }, { status: 400 });
    }

    if (!data || data.length === 0) {
      const { error: insertError } = await supabase
        .from("appointments")
        .insert([
          {
            client_name,
            date,
            time,
            status,
          },
        ]);
      if (insertError) return Response.json(insertError.message);
      return Response.json({ message: "Datos enviados" }, { status: 200 });
    } else {
      return Response.json(
        { message: "Este turno ya está reservado!" },
        { status: 409 },
      );
    }
  } catch (error) {
    return Response.json(
      { message: "Error en el servidor", error: error },
      { status: 500 },
    );
  }
}
