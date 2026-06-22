export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    id: "web",
    title: "Sitios web premium",
    description:
      "Arquitectura de contenido, diseño editorial y rendimiento. Para marcas que no pueden verse genéricas.",
    includes: [
      "Diseño a medida alineado a brand guidelines",
      "Arquitectura de contenido y SEO técnico",
      "Optimización de velocidad y accesibilidad",
      "Integraciones (WhatsApp, CRM, analytics)"
    ]
  },
  {
    id: "apps",
    title: "Aplicaciones y plataformas",
    description:
      "Productos digitales construidos para operaciones, equipos y escala. Web apps, móviles y SaaS.",
    includes: [
      "Arquitectura de software y bases de datos",
      "Interfaces para usuarios internos y externos",
      "APIs e integraciones con sistemas existentes",
      "Despliegue, monitoreo y evolución continua"
    ]
  },
  {
    id: "automation",
    title: "Automatizaciones",
    description:
      "Conectamos herramientas, eliminamos pasos manuales y liberamos tiempo de tu equipo.",
    includes: [
      "Flujos entre CRM, email, facturación y más",
      "Pipelines de datos y reportes automáticos",
      "Alertas, notificaciones y workflows",
      "Documentación de procesos digitalizados"
    ]
  },
  {
    id: "ai",
    title: "Sistemas de IA",
    description:
      "Inteligencia artificial con criterio. Implementada donde resuelve, no donde decora.",
    includes: [
      "Asistentes y chatbots con contexto de negocio",
      "Clasificación, extracción y análisis de datos",
      "Generación de contenido con control de calidad",
      "Evaluación de casos de uso y ROI"
    ]
  },
  {
    id: "evolution",
    title: "Evolución y mantenimiento",
    description:
      "Los sistemas digitales no terminan al lanzar. Acompañamos el crecimiento de tu infraestructura.",
    includes: [
      "Hosting, seguridad y actualizaciones",
      "Iteraciones basadas en datos y feedback",
      "Soporte técnico y resolución de incidentes",
      "Roadmap de mejoras continuas"
    ]
  }
];

export const projectCriteria = [
  "Marca con identidad definida o ambición de construir una",
  "Proyecto con impacto real en operaciones o percepción",
  "Equipo dispuesto a colaborar, no solo delegar",
  "Visión a mediano plazo, no solo una entrega puntual"
];
