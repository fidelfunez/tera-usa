export const siteConfig = {
  name: "Tera",
  brandName: "Tera",
  tagline: "Arquitectura digital para empresas ambiciosas.",
  description:
    "Tera diseña sitios web, aplicaciones, automatizaciones y sistemas de IA para empresas en Honduras y Latinoamérica. Socio tecnológico estratégico, no agencia de páginas web.",
  url: "https://buildwithtera.com",
  locale: "es_HN",
  ogImage: "/Tera - Facebook Cover.png",
  navLinks: [
    { href: "/#filosofia", label: "Filosofía" },
    { href: "/#capacidades", label: "Capacidades" },
    { href: "/trabajo", label: "Trabajo" },
    { href: "/proyecto", label: "Proyecto" }
  ],
  contactEmail: "hi@buildwithtera.com",
  social: {
    facebook: "https://www.facebook.com/teralatam.co",
    instagram: "https://www.instagram.com/teralatam/"
  },
  socialProof: "Empresas en Honduras y LATAM confían en nuestra arquitectura digital.",
  testimonial: {
    quote:
      "La página quedó excelente. Se nota el amor, la dedicación y la atención al detalle que Tera puso en cada etapa del proceso. Fue un placer trabajar con un equipo tan profesional, organizado y comprometido.",
    author: "Manuela & Luis Andrés",
    companyName: "Girón & Schwartz",
    companyUrl: "https://www.gironschwartz.com",
    imageUrl: null as string | null
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.293933876542!2d-87.23013742468278!3d14.059812486364892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6f976a63220f33%3A0xecbbf7ecdbde7ce7!2sVentu%20Life%20Center!5e0!3m2!1sen!2sus!4v1773119557510!5m2!1sen!2sus"
};

export type SiteConfig = typeof siteConfig;
