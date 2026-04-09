import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Misión",
    text: "Ofrecer una amplia gama de productos funcionales. Muebles e insumos bien diseñados y a precios asequibles para empresas y personas naturales.",
    color: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Tener un impacto positivo al optimizar los espacios laborales y cotidianos. Hacer de oficinas y hogares un lugar cómodo, despejado y bien organizado.",
    color: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Ser sencillos, honestos y realistas. En nuestro mundo, sencillez significa eficiencia y hacer lo que surge de manera natural.",
    color: "from-slate-500/20 to-slate-600/5",
    iconBg: "bg-slate-500/15",
    iconColor: "text-slate-500",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs font-body font-bold uppercase tracking-[0.15em] text-secondary mb-4 block"
          >
            Quiénes Somos
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight">
            Pasión por cada
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">
              detalle metálico
            </span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            EXPAND es el resultado del trabajo en conjunto de todo un equipo. Personas que realizan sus labores 
            con alegría, entusiasmo, pasión y esfuerzo, para mejorar y optimizar el espacio laboral y cotidiano de sus clientes.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${item.color} border border-border backdrop-blur-sm overflow-hidden cursor-default`}
            >
              {/* Animated background circle */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
                className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-current opacity-5"
              />

              <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>

              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {item.text}
              </p>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}