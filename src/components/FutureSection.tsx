import { motion } from "framer-motion";
import { Lock, Sprout, Building, Calendar, Gamepad, Utensils, PartyPopper, Recycle, BarChart3 } from "lucide-react";

const futureItems = [
  { icon: Sprout, text: "Misiones físicas" },
  { icon: Building, text: "Jardines comunitarios" },
  { icon: Building, text: "Coworking" },
  { icon: Calendar, text: "Eventos presenciales" },
  { icon: Gamepad, text: "Juegos en persona" },
  { icon: Utensils, text: "Comidas compartidas" },
  { icon: PartyPopper, text: "Fiestas" },
  { icon: Recycle, text: "Economía circular real" },
  { icon: BarChart3, text: "Impacto medible" },
];

const FutureSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-display mb-4">
            🔮 Lo que viene
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Niveles futuros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sin spoilers. Solo anticipo de lo que se desbloquea jugando.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {futureItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl p-5 flex items-center gap-3 group hover:neon-border transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium text-sm">{item.text}</span>
              <Lock className="w-4 h-4 text-muted-foreground ml-auto opacity-50" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card neon-border rounded-2xl p-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-xl font-display text-foreground mb-4">
            Todo eso se desbloquea <span className="text-primary">jugando</span>.
          </p>
          <p className="text-muted-foreground">
            No leyendo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
