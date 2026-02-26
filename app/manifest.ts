import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Instituto Integral del Idioma Inglés",
    short_name: "Instituto Inglés",
    description:
      "Instituto con 52 años de experiencia en la enseñanza del inglés, enfocado en la competencia comunicativa.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#193cb8",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      // Puedes añadir aquí maskable icons si los tienes
    ],
  };
}
