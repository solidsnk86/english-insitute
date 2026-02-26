"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useProjects } from "@/app/contexts/use-projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

export function Projects() {
  const { projects, isLoading } = useProjects();
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [currentProject, setCurrentProject] = useState<number>(
    swiperRef ? swiperRef?.activeIndex + 1 : 1,
  );

  const featuredProjects = projects.filter(
    (project) => project.featured === true,
  );

  return (
    <section id="proyectos" className="relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Proyectos destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una selección de nuestros trabajos más recientes y exitosos.
          </p>
        </div>

        {/* Projects Grid Skelleton */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-white/50 dark:bg-card/50 border-border animate-pulse"
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-muted rounded w-2/3" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="flex gap-2">
                      <div className="h-6 bg-muted rounded w-16" />
                      <div className="h-6 bg-muted rounded w-16" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            No hay proyectos disponibles actualmente.
          </div>
        ) : (
          <div>
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              spaceBetween={20}
              className="w-full !overflow-visible"
              style={{
                height: 500,
              }}
              onSlideChange={(swiper) => {
                setCurrentProject(swiper.activeIndex + 1);
              }}
            >
              {featuredProjects && featuredProjects.length > 0 ? (
                featuredProjects.map((project, i) => {
                  return (
                    <SwiperSlide key={project.id}>
                      <Link
                        id={`project-${i}`}
                        href={`/project/${project.id}`}
                        key={project.id}
                        className="h-125 w-full bg-white/5 dark:bg-card/50 relative border border-border rounded-xl transition-all duration-300 group overflow-hidden hover:shadow-lg dark:hover:shadow-none"
                      >
                        {/* Project Image */}

                        <Image
                          src={
                            project.image_url ||
                            "/placeholder.svg?height=300&width=500&query=web project"
                          }
                          alt={project.title}
                          fill
                          className="absolute top-0 left-0 object-cover aspect-square transition-transform duration-500 group-hover:scale-105 opacity-95 mask-b-from-2"
                        />

                        <div className="h-100 w-100"></div>
                        {/* 

                        {/* Project Info */}
                        <div className="absolute bottom-0 p-6">
                          <div className="font-semibold font-mono uppercase flex gap-3 items-center dark:text-white mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="none"
                            >
                              <path fill="#FF3621" d="m12 7-9 5.196V1.804z" />
                            </svg>
                            <h2 className="font-bold text-lg md:text-3xl">
                              {project.title}
                            </h2>
                          </div>
                          <p className="dark:text-white mb-4 line-clamp-2 font-bold text-lg md:text-2xl">
                            {project.description}
                          </p>

                          <div className="flex font-semibold gap-1 items-center group overflow-x-hidden mb-2">
                            <span className="-translate-x-32 group-hover:translate-x-0 transition-transform duration-400">
                              Lea la historia
                            </span>
                            <ArrowRight
                              size={18}
                              className="font-semibold -translate-x-28 group-hover:translate-x-0 transition-transform duration-400"
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })
              ) : (
                <SwiperSlide>
                  <div>No hay productos cargados aún.</div>
                </SwiperSlide>
              )}
            </Swiper>

            <div className="bg-card/50 flex justify-between gap-1 items-center rounded-full border w-44 mx-auto my-4 overflow-hidden">
              <button
                onClick={() => {
                  swiperRef?.slidePrev();
                  setCurrentProject(swiperRef ? swiperRef.activeIndex + 1 : 0);
                }}
                className="hover:bg-primary/10 px-4 py-2 group disabled:cursor-not-allowed"
                aria-label="Anterior"
                disabled={currentProject <= 1}
              >
                <ChevronLeft
                  size={24}
                  className="group-hover:text-blue-400 transition-colors"
                />
              </button>
              <div className="font-mono mx-auto inline-flex justify-center">
                {currentProject} / {projects.length}
              </div>
              <button
                onClick={() => {
                  swiperRef?.slideNext();
                  setCurrentProject(swiperRef ? swiperRef.activeIndex + 1 : 0);
                }}
                className="hover:bg-primary/10 px-4 py-2 group disabled:cursor-not-allowed"
                aria-label="Siguiente"
                disabled={currentProject >= projects.length}
              >
                <ChevronRight
                  size={24}
                  className="group-hover:text-blue-400 transition-colors"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
