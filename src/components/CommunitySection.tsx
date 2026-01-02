import { motion } from "framer-motion";
import { Users, Eye, BookOpen, TrendingUp } from "lucide-react";

const benefits = [
  { icon: TrendingUp, text: "XP" },
  { icon: Eye, text: "Visibilidad" },
  { icon: BookOpen, text: "Memoria colectiva" },
  { icon: Users, text: "Progreso del mundo" },
];

const CommunitySection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-display mb-4">
            👥 La Comunidad
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            El mundo es social
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            El juego no es solo individual. Existe una plaza pública donde se comparte el progreso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card neon-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold mb-6 text-foreground">
                Formato simple
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                  <span className="text-2xl">📸</span>
                  <span className="text-foreground">Screenshots</span>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                  <span className="text-2xl">✅</span>
                  <span className="text-foreground">Qué hice</span>
                </div>
                <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                  <span className="text-2xl">💡</span>
                  <span className="text-foreground">Qué aprendí</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                No se postea para posturear. Se postea para <span className="text-primary font-semibold">dejar rastro</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-bold mb-6 text-foreground">
              Eso genera:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:neon-border transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="font-display text-lg font-semibold text-foreground">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 glass-card neon-border rounded-xl text-center"
            >
              <p className="text-lg text-foreground font-display">
                El mundo sube de nivel cuando <span className="text-primary">la gente actúa</span>.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Si nadie juega, el mundo se queda quieto.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
