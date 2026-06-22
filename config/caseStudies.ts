export type CaseStudyCategory = "web" | "app" | "platform";

export interface CaseStudy {
  id: string;
  name: string;
  category: CaseStudyCategory;
  categoryLabel: string;
  headline: string;
  description: string;
  observation: string;
  url?: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "giron-schwartz",
    name: "Girón & Schwartz",
    category: "web",
    categoryLabel: "Sitio web",
    headline: "Ya los conocían como líderes.",
    description:
      "Consultoría audiovisual con presencia internacional. Les faltaba construir su hogar en internet.",
    observation: "Faltaba construir su hogar en internet.",
    url: "https://www.gironschwartz.com",
    featured: true
  },
  {
    id: "shark-reports",
    name: "Shark Reports",
    category: "app",
    categoryLabel: "Aplicación",
    headline: "Reportes diarios que el equipo necesitaba.",
    description:
      "Aplicación de reportes para Shark Builders Paintings LLC. Acceso seguro para el equipo en campo, con sesiones persistentes y flujo bilingüe.",
    observation: "Buen software. Mal lugar ya no aplicaba.",
    url: "https://www.sharkreports.com/login",
    featured: true
  },
  {
    id: "corporate-consulting",
    name: "The Corporate Consulting",
    category: "web",
    categoryLabel: "Sitio web",
    headline: "Consultoría que necesitaba claridad.",
    description:
      "Firma de consultoría corporativa en Honduras. Sitio web premium que comunica expertise, servicios y resultados sin ruido.",
    observation: "No es el producto, es cómo lo sirves.",
    url: "https://www.thecorporateconsulting.com/en",
    featured: true
  },
  {
    id: "derrols-island-tours",
    name: "Derrol's Island Tours",
    category: "web",
    categoryLabel: "Sitio web",
    headline: "Turismo con historia que contar.",
    description:
      "Operador de tours en Roatán. Presencia digital que refleja la experiencia del destino y facilita reservas.",
    observation: "Tu negocio merece que lo encuentren.",
    url: "https://www.derrolsislandtours.com/",
    featured: false
  },
  {
    id: "roatan-point-2-point",
    name: "Roatán Point 2 Point",
    category: "web",
    categoryLabel: "Sitio web",
    headline: "El evento ciclo-turístico más grande de Honduras.",
    description:
      "Fiesta internacional de MTB y Ruta que recorre Roatán de punta a punta. Sitio con inscripciones, patrocinadores, galería y turismo con propósito.",
    observation: "La primera impresión es una pantalla.",
    url: "https://www.roatanpoint2point.com/",
    featured: false
  },
  {
    id: "roatán-caracol-tours",
    name: "Roatán Caracol Tours",
    category: "web",
    categoryLabel: "Sitio web",
    headline: "Veinte años en la isla. Un WhatsApp.",
    description:
      "Transporte y tours en Roatán con dos décadas de experiencia. Sitio que convierte consultas en reservas con claridad y confianza.",
    observation: "Ocupado no es lo mismo que avanzando.",
    url: "https://www.roatancaracoltours.com/",
    featured: false
  }
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
