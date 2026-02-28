"use client";

import { useProjects } from "../contexts/use-projects";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../utils/format-date";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Share } from "lucide-react";
import { share } from "@/lib/share";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const ProjectClient = ({ id }: { id: string }) => {
  const { getProjectById, projects } = useProjects();
  const [swiperRef, setSwiperRef] = useState<SwiperType | undefined>();

  const projectData = getProjectById(id);
  // Obtener proyectos relacionados (otros proyectos, excluyendo el actual)
  const relatedProjects = projects.filter((p) => p.id !== id).slice(0, 3);

  if (!projectData) {
    return (
      <section className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Proyecto no encontrado
          </h2>
          <p className="text-muted-foreground">
            El proyecto que buscás no existe o fue eliminado.
          </p>
          <Button asChild>
            <Link href="/#proyectos">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a proyectos
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <Header />
      <section className="">
        <article className="container mx-auto px-4 max-w-4xl mt-20 md:mt-24">
          {/* Breadcrumbs */}
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <span className="mx-1">&#8250;</span>
              <li>
                <Link
                  href="/#proyectos"
                  className="hover:text-primary transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <span className="mx-1">&#8250;</span>
              <li className="truncate max-w-[180px] text-foreground font-medium">
                {projectData.title}
              </li>
            </ol>
          </nav>

          {/* Imagen principal */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src={projectData.image_url || "/fondo2.jpg"}
              fill
              className="object-cover w-full h-full rounded-xl"
              alt={projectData.title}
              priority
            />
          </div>

          {/* Tags */}
          {projectData.tags && projectData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {projectData.tags.split(",").map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  {tag.trim()}
                </Badge>
              ))}
            </div>
          )}

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {projectData.title}
          </h1>

          {/* Fecha */}
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <time>{formatDate(projectData.created_at)}</time>
          </div>

          {/* Descripción */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {projectData.long_description}
          </p>

          <div className="flex gap-3 items-center">
            {/* Botón ver proyecto */}
            {projectData.link && (
              <Button asChild className="mb-12">
                <a
                  href={projectData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  Ver proyecto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
            <Button
              asChild
              className="mb-12 cursor-pointer"
              onClick={() =>
                share({
                  title: projectData.title,
                  text: projectData.description,
                  url: window.location.href,
                })
              }
            >
              <span className="gap-2">
                Compartir
                <Share className="w-4 h-4" />
              </span>
            </Button>
          </div>

          {/* Proyectos destacados */}
          <div className="text-center py-4">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Otros Proyectos
            </span>
          </div>

          <section className="mb-8 gap-3 overflow-x-hidden">
            <Swiper
              onSwiper={setSwiperRef}
              className="w-full !overflow-visible"
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {relatedProjects.map((project) => (
                <SwiperSlide>
                  <Link
                    key={project.id}
                    href={`/project/${project.id}`}
                    className="bg-card/50 border-border border rounded-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={
                          project.image_url ||
                          "/placeholder.svg?height=300&width=500&query=web project"
                        }
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="text-xs font-semibold font-mono uppercase flex gap-3 items-center text-foreground mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          fill="none"
                          className="-translate-y-[1px]"
                        >
                          <path fill="#FF3621" d="m12 7-9 5.196V1.804z" />
                        </svg>
                        {project.title}
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </article>
      </section>
      <Footer />
    </>
  );
};
