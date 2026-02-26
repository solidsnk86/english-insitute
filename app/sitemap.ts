import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.instituto-ingles.com"; // Cambia al dominio real del instituto

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/confirmed`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Si tienes rutas dinámicas de proyectos, las agregarías aquí iterando sobre ellas
    // Por ejemplo:
    // ...projects.map((project) => ({
    //   url: `${baseUrl}/project/${project.id}`,
    //   lastModified: new Date(project.updatedAt),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // })),
  ];
}
