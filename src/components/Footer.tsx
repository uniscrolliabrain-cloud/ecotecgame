import { motion } from "framer-motion";
import { Gamepad2, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold gradient-text">NIVEL CERO</span>
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>
          
          <p className="text-muted-foreground text-lg font-display mb-4">
            Esto ya tiene flow. Ahora toca escalarlo sin perder el alma.
          </p>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>🎮 Jugar</span>
            <span>📝 Documentar</span>
            <span>🚀 Progresar</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
