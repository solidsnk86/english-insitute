import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/lib/supabase-server";
import Link from "next/link";
import { RegisterForm } from "@/components/admin/register-form";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { ArrowLeft } from "lucide-react";

export default async function RegisterPage() {
  const supabase = await getSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md my-6">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
