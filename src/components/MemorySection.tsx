import { motion } from "framer-motion";
import { Database, CheckCircle, XCircle, Lightbulb, AlertTriangle } from "lucide-react";

const recordItems = [
  { icon: CheckCircle, text: "Qué hace", color: "text-primary" },
  { icon: Lightbulb, text: "Qué decide", color: "text-secondary" },
  { icon: AlertTriangle, text: "Qué prueba", color: "text-yellow-400" },
  { icon: Database, text: "Qué aprende", color: "text-primary" },
  { icon: XCircle, text: "Qué no funciona", color: "text-destructive" },
];

const MemorySection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card neon-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              
              <h3 className="font-display text-xl font-bold mb-6 text-foreground relative z-10">
                Ahí debe registrar:
              </h3>
              
              <div className="space-y-4 relative z-10">
                {recordItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-muted/30 rounded-lg p-4"
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-primary text-sm font-display mb-4">
              📝 Tu Memoria de Juego
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Necesitas una memoria externa
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Puede ser un tablero, un documento, un chat con tu IA, un espacio de notas...
            </p>

            <div className="glass-card neon-border rounded-2xl p-6">
              <blockquote className="border-l-4 border-primary pl-4 py-2">
                <p className="text-2xl font-display text-primary italic">
                  "Si no está registrado, no existe."
                </p>
              </blockquote>
              <p className="text-muted-foreground text-sm mt-4">
                No como control. Como conciencia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemorySection;
