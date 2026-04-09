import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, description }) {
  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Animated circles */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.10, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-300"
      />

      {/* Big X watermark */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.04, x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[22rem] font-heading font-black text-white leading-none select-none hidden lg:block"
      >
        X
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: -10, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-body font-bold uppercase tracking-[0.15em] text-white/50 mb-4 block"
          >
            {subtitle}
          </motion.span>
        )}

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
        </div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-white/65 font-body max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-0.5 w-24 bg-gradient-to-r from-white/60 to-transparent"
        />
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33.3C840 36.7 960 43.3 1080 45C1200 46.7 1320 43.3 1380 41.7L1440 40V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}