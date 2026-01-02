import { motion } from "framer-motion";
import { Compass, FileText, Map, Shield } from "lucide-react";

const objectives = [
  { icon: Compass, text: "Aprender a moverse por el mundo del juego" },
  { icon: FileText, text: "Aprender a usar las herramientas" },
  { icon: Map, text: "Aprender a documentar acciones" },
  { icon: Shield, text: "Aprender a jugar sin miedo" },
];

const LevelZeroSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-display mb-4">
              🎯 Nivel Cero
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Dejar de ser espectador
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              El Nivel Cero es el nivel de llegada, orientación y activación. 
              No es teoría. Es aprender a jugar mientras ya estás jugando.
            </p>

            <div className="space-y-4">
              {objectives.map((obj, index) => (
                <motion.div
                  key={obj.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 glass-card rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <obj.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{obj.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card neon-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">🎮</div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  El objetivo del Nivel Cero
                </h3>
                <blockquote className="border-l-4 border-primary pl-4 py-2 mb-6">
                  <p className="text-lg text-primary font-display italic">
                    "Convertirte en jugador activo"
                  </p>
                </blockquote>
                <p className="text-muted-foreground">
                  No se compite. No se corre. No se demuestra nada.
                  Solo necesitas dar el primer paso y registrarlo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LevelZeroSection;
