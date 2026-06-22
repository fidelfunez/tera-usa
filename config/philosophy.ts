export interface PhilosophyObservation {
  id: string;
  line1: string;
  emphasis: string;
  line2?: string;
}

export const observations: PhilosophyObservation[] = [
  {
    id: "ocupado",
    line1: "Ocupado no es lo mismo que",
    emphasis: "avanzando."
  },
  {
    id: "software",
    line1: "Buen software.",
    emphasis: "Mal lugar."
  },
  {
    id: "calidad",
    line1: "Calidad no es sinónimo de",
    emphasis: "robo."
  },
  {
    id: "capricho",
    line1: "Tu negocio no es",
    emphasis: "capricho."
  },
  {
    id: "servir",
    line1: "No es el producto, es cómo lo",
    emphasis: "sirves."
  },
  {
    id: "crecer",
    line1: "Así está difícil",
    emphasis: "crecer."
  }
];
