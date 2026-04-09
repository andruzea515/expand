import { motion } from "framer-motion";
import { ShieldCheck, Ruler, Truck, Award } from "lucide-react";

const features = [
  { icon: Ruler, label: "Diseño y planificación", desc: "Cada pieza diseñada a medida según los requerimientos del proyecto" },
  { icon: ShieldCheck, label: "Control de calidad", desc: "Empaque y etiquetado con normas y técnicas venezolanas" },
  { icon: Truck, label: "Suministro a tiempo", desc: "Logística eficiente para entrega puntual en cada proyecto" },
  { icon: Award, label: "Valor agregado", desc: "Pintura electroestática con mayor resistencia al fuego y corrosión vs esmalte convencional" },
];

export default function FactorySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69d721331065ff0ac720e9c1/b30455771_generated_26e122bd.png"
                alt="Planta de fabricación Expand International"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white font-body text-sm font-medium">Planta de fabricación Expand International</p>
                <p className="text-white/60 font-body text-xs mt-0.5">Manufactura con los más altos estándares</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-secondary mb-3 block">
              Objetivos y Metas
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Fabricación con los más altos estándares
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8 text-sm">
              El objetivo general es fabricar y suministrar, de manera eficiente y con altos estándares 
              de calidad, todas las piezas metalmecánicas esenciales para la seguridad y el funcionamiento 
              de cada proyecto, asegurando su correcta integración en la infraestructura.
            </p>

            <div className="space-y-3">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-secondary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <feat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-body font-semibold text-foreground mb-0.5">{feat.label}</p>
                    <p className="text-xs font-body text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}