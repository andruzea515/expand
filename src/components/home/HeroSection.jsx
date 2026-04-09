import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "20+", label: "Años de experiencia", desc: "En fabricación metalmecánica" },
  { num: "100%", label: "Pintura electroestática", desc: "Resistente al calor y corrosión" },
  { num: "2", label: "Líneas de productos", desc: "Mobiliario y Construcción" },
  { num: "A medida", label: "Fabricación personalizada", desc: "Según las necesidades del cliente" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src="https://media.base44.com/images/public/69d721331065ff0ac720e9c1/c94989ef4_generated_a8eed2a4.png"
          alt="Espacio de trabajo moderno"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      </motion.div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/5"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-10 top-1/2 -translate-y-1/2 text-[30rem] font-heading font-black text-white leading-none select-none hidden xl:block"
        >
          X
        </motion.div>
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-body font-medium text-white/90 tracking-wider uppercase mb-8 border border-white/20"
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400"
              />
              Expand International®
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.0]"
              >
                Soluciones
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white/60 leading-[1.0] italic"
              >
                metálicas
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.0]"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                  de alta calidad
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base md:text-lg text-white/65 font-body font-light leading-relaxed mb-10 max-w-lg"
            >
              Fabricamos mobiliario de oficina y productos de construcción con los más 
              altos estándares. Pintura electroestática, acero al frío y diseño a medida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/mobiliario"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-body font-bold text-sm rounded-xl transition-all duration-300 group shadow-2xl shadow-black/30 hover:shadow-white/20 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Catálogo de Productos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-body font-semibold text-sm rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                Solicitar Cotización
              </Link>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.18)" }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 cursor-default transition-colors"
              >
                <p className="text-3xl font-heading font-black text-white mb-1">{stat.num}</p>
                <p className="text-xs font-body font-bold text-white/80 mb-1 uppercase tracking-wide">{stat.label}</p>
                <p className="text-xs font-body text-white/45 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 font-body tracking-widest uppercase">Descubrir</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 53.3C672 58.7 768 69.3 864 69.3C960 69.3 1056 58.7 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}