export type CapabilityId = "web" | "apps" | "automation" | "ai";

export interface Capability {
  id: CapabilityId;
  title: string;
  description: string;
  detail: string;
}

export const capabilities: Capability[] = [
  {
    id: "web",
    title: "Sitios web",
    description: "Presencia digital con arquitectura de contenido, rendimiento y percepción de marca.",
    detail:
      "No plantillas. Sistemas de páginas diseñados para convertir, escalar y representar lo que tu empresa realmente es."
  },
  {
    id: "apps",
    title: "Aplicaciones",
    description: "Plataformas web y móviles construidas para operaciones reales.",
    detail:
      "Desde herramientas internas hasta productos SaaS. Código que sostiene procesos, equipos y crecimiento."
  },
  {
    id: "automation",
    title: "Automatizaciones",
    description: "Flujos que eliminan trabajo manual y conectan lo que hoy está desconectado.",
    detail:
      "Integraciones, pipelines de datos y procesos automatizados que devuelven tiempo a tu equipo."
  },
  {
    id: "ai",
    title: "Sistemas de IA",
    description: "Inteligencia artificial aplicada con criterio de negocio, no como adorno.",
    detail:
      "Asistentes, clasificación, generación y análisis. IA donde agrega valor operativo, no donde solo impresiona."
  }
];
