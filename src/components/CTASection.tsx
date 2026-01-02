import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Wrench, MessageSquare, ArrowRight } from "lucide-react";

const actions = [
  { icon: Wrench, text: "Elegir tu herramienta" },
  { icon: MessageSquare, text: "Crear tu espacio de registro" },
  { icon: ArrowRight, text: "Moverte" },
];

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card neon-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-6xl mb-6"
            >
              🎮
            </motion.div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Jugador, este es tu punto cero.
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              <p>No necesitas permiso.</p>
              <p>No necesitas saberlo todo.</p>
              <p>No necesitas hacerlo perfecto.</p>
            </div>

            <p className="text-xl font-display text-primary mb-8 text-glow-sm">
              Solo necesitas dar el primer paso y registrarlo.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {actions.map((action, index) => (
                <motion.div
                  key={action.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-foreground text-sm"
                >
                  <action.icon className="w-4 h-4 text-primary" />
                  {action.text}
                </motion.div>
              ))}
            </div>

            <blockquote className="text-lg text-muted-foreground italic mb-10">
              "El mundo responde al movimiento."
            </blockquote>

            <Button variant="hero" size="xl" className="animate-glow">
              <Zap className="w-5 h-5" />
              Cruzar el primer portal
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Sin presión. Sin épica falsa. Con claridad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
