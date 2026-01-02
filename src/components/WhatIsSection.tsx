import { motion } from "framer-motion";
import { Brain, Target, Sparkles, Users, Rocket, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Modo Creador",
    description: "Salir del consumo pasivo y entrar en modo creación activa",
  },
  {
    icon: Target,
    title: "Proyectos Reales",
    description: "No teoría. Haciendo, eso ES el aprendizaje",
  },
  {
    icon: Sparkles,
    title: "IA Copiloto",
    description: "Te ayuda a pensar, ordenar y documentar. No decide por ti",
  },
  {
    icon: Users,
    title: "Comunidad Viva",
    description: "Colabora con otras personas en espacios físicos y digitales",
  },
  {
    icon: Rocket,
    title: "Herramientas Reales",
    description: "Trello, Notion, Discord, IA... Tu eliges la interfaz",
  },
  {
    icon: Lightbulb,
    title: "Aprende Jugando",
    description: "Sostenibilidad, economía circular, tech. Todo gamificado",
  },
];

const WhatIsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-display mb-4">
            🧠 Tu Cerebro Gamer
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Simulador de la vida real en la era IA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aquí no se estudia para luego hacer. Se hace, y eso ES el aprendizaje.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card neon-border rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
