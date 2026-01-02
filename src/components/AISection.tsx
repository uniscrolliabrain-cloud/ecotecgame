import { motion } from "framer-motion";
import { Bot, X, Check } from "lucide-react";

const notDoes = [
  "No juega por ti",
  "No decide por ti",
  "No te da la respuesta final",
];

const does = [
  "Te ayuda a pensar",
  "Te ayuda a ordenar",
  "Te ayuda a ver patrones",
  "Te ayuda a documentar",
  "Te ayuda a aprender más rápido",
];

const AISection = () => {
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
            🤖 La IA
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Tu copiloto, no tu jefe
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 border border-destructive/30"
          >
            <h3 className="font-display text-xl font-bold mb-6 text-destructive flex items-center gap-2">
              <X className="w-5 h-5" />
              La IA NO...
            </h3>
            <ul className="space-y-4">
              {notDoes.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card neon-border rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold mb-6 text-primary flex items-center gap-2">
              <Check className="w-5 h-5" />
              La IA SÍ...
            </h3>
            <ul className="space-y-4">
              {does.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass-card neon-border rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold mb-2 text-foreground">
                Crea tu IA compañera
              </h4>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground">
                <p className="text-primary">"Actúa como mi copiloto de proyecto.</p>
                <p>Ayúdame a registrar acciones, aprendizajes y bloqueos.</p>
                <p className="text-primary">No tomes decisiones por mí."</p>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Eso ya es parte del juego.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
