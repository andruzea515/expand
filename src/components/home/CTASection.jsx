import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 md:py-36 bg-primary relative overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Pulsing blobs */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.06, 0.15, 0.06] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-400 -translate-y-1/2 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-400 translate-y-1/2 blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-body font-medium text-white/70 tracking-wider uppercase mb-6"
          >
            ¿Listo para comenzar?
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-tight">
            Optimicemos su
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mt-1">
              espacio juntos
            </span>
          </h2>

          <p className="text-lg text-white/60 font-body mb-12 max-w-xl mx-auto leading-relaxed">
            Contáctenos y permítanos ayudarle a encontrar las soluciones metálicas perfectas 
            para su proyecto u oficina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary font-body font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-2xl"
              >
                Solicitar Cotización
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/mobiliario"
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/25 text-white font-body font-bold rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                Ver Catálogo
              </Link>
            </motion.div>
          </div>

          {/* Contact quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="tel:02129594111" className="flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors text-sm font-body group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              0212-959.41.11
            </a>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <a href="mailto:info@grupoexpand.com" className="flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors text-sm font-body group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              info@grupoexpand.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}