import { getSupabaseServer } from "@/lib/supabase-server";
import { RecoveryForm } from "./recovery-form";
import { redirect } from "next/navigation";
import { getSupabase } from "@/lib/supabase";

export default async function RecoveryPage() {
  const supabase = await getSupabase();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // if (!session) {
  //   redirect("/admin/login");
  // }

  return <RecoveryForm />;
}
