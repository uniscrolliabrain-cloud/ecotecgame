import { motion } from "framer-motion";
import { Globe, Smartphone, FileCode, Users, Bot, MapPin, Calendar, Utensils } from "lucide-react";

const platforms = [
  { icon: Globe, name: "Webs", color: "text-primary" },
  { icon: Smartphone, name: "Apps", color: "text-secondary" },
  { icon: FileCode, name: "Docs", color: "text-primary" },
  { icon: Users, name: "Grupos", color: "text-secondary" },
  { icon: Bot, name: "IA", color: "text-primary" },
  { icon: MapPin, name: "Espacios", color: "text-secondary" },
  { icon: Calendar, name: "Eventos", color: "text-primary" },
  { icon: Utensils, name: "Encuentros", color: "text-secondary" },
];

const tools = ["Trello", "Notion", "WhatsApp", "Telegram", "Discord", "Google Docs", "Canva", "Miro"];

const MapSection = () => {
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
            🗺️ El Mapa
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            El mundo es multiplataforma
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            El mapa no es un menú. Es un laberinto jugable. Aprender a orientarte es parte del juego.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl p-4 text-center hover:neon-border transition-all duration-300"
            >
              <platform.icon className={`w-8 h-8 mx-auto mb-2 ${platform.color}`} />
              <span className="text-xs text-muted-foreground">{platform.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card neon-border rounded-2xl p-8"
        >
          <h3 className="font-display text-xl font-bold mb-6 text-center text-foreground">
            Elige tu interfaz
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
              >
                {tool}
              </motion.span>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            El juego no castiga elecciones. El sistema responde igual.
          </p>
          <p className="text-center text-primary font-display text-lg mt-4">
            "La herramienta no importa. La acción documentada sí."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
