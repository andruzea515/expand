import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Mobiliario de Oficina",
    description: "Archivadores verticales, estanterías estructurales, lockers a medida, escritorios, carros multifuncionales, archimóvil y más accesorios metálicos para optimizar su espacio laboral.",
    image: "https://media.base44.com/images/public/69d721331065ff0ac720e9c1/9dadb50c1_generated_807c21b1.png",
    link: "/mobiliario",
    count: "12+ productos",
    items: ["Archivadores", "Escritorios", "Estanterías", "Lockers", "Archimóvil"],
  },
  {
    title: "Productos de Construcción",
    description: "Cajas contra incendio, cajas de primeros auxilios, brekeras eléctricas, marcos y puertas metálicas, ventanas metálicas y canaletas galvanizadas de alta calidad.",
    image: "https://media.base44.com/images/public/69d721331065ff0ac720e9c1/9c690b4d2_generated_28cf9a8a.png",
    link: "/construccion",
    count: "7 productos",
    items: ["Puertas Metálicas", "Ventanas", "Gabinetes", "Brekeras", "Canaletas"],
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-body font-semibold uppercase tracking-widest text-secondary mb-3 block">
            Nuestros Productos
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Dos líneas, una calidad
          </h2>
          <p className="text-muted-foreground font-body">
            Fabricación metalmecánica con pintura electroestática, acero al frío y normas venezolanas de calidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                to={cat.link}
                className="group block relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-body font-medium text-white/60 uppercase tracking-wider">
                    {cat.count}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1 mb-2">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs bg-white/15 text-white/80 px-2 py-0.5 rounded-full font-body">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-white group-hover:gap-3 transition-all">
                    Explorar catálogo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}