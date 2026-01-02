import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gamepad2, Map, Zap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border mb-8"
        >
          <Gamepad2 className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-display">NIVEL CERO ACTIVADO</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-glow gradient-text"
        >
          MAESTRO DEL JUEGO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 font-body"
        >
          No estás en una web. No estás en una app. No estás en un curso.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl font-display text-foreground mb-8 text-glow-sm"
        >
          Estás dentro del juego. 🎮
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {["IA Copiloto", "Gamificación", "Comunidad", "Proyectos Reales"].map((tag, i) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm font-medium glass-card text-primary border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mb-12"
        >
          <div className="text-center">
            <div className="text-primary font-display text-2xl md:text-3xl font-bold text-glow-sm">∞</div>
            <div className="text-xs md:text-sm text-muted-foreground">Niveles</div>
          </div>
          <div className="text-center">
            <div className="text-secondary font-display text-2xl md:text-3xl font-bold">XP</div>
            <div className="text-xs md:text-sm text-muted-foreground">Real</div>
          </div>
          <div className="text-center">
            <div className="text-primary font-display text-2xl md:text-3xl font-bold text-glow-sm">0→1</div>
            <div className="text-xs md:text-sm text-muted-foreground">Creador</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="xl">
            <Zap className="w-5 h-5" />
            Entrar al Juego
          </Button>
          <Button variant="heroOutline" size="xl">
            <Map className="w-5 h-5" />
            Ver el Mapa
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
