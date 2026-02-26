import React from "react";

const SITE_URL = "https://www.instituto-ingles.com";

export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Instituto Integral del Idioma Inglés",
    url: SITE_URL,
    description:
      "Instituto con 52 años de experiencia en la enseñanza del inglés, especializado en competencia comunicativa, grupos reducidos y seguimiento individual.",
    logo: `${SITE_URL}/logo.png`,
  };

  return (
    <>
      <link rel="canonical" href={SITE_URL} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="author" content="Instituto Integral del Idioma Inglés" />
      <meta name="theme-color" content="#193cb8" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
