import { Footer } from "@/components/footer";
import { ProjectClient } from "../project-client";
import { Header } from "@/components/header";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
    <Header />
    <section className="md:p-6 p-3">
      <ProjectClient id={id} />
    </section>
    <Footer />
    </>
  );
}
