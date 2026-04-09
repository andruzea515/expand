import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const images = product.images?.length ? product.images : [product.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product.name]);

  const showPreviousImage = () => {
    setCurrentImageIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 8) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group bg-card rounded-2xl border border-border overflow-hidden flex flex-col relative shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
    >
      {/* Shimmer overlay on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={hovered ? { x: "200%", opacity: [0, 0.15, 0] } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
      />

      {/* Image area */}
      <div className="relative bg-gradient-to-br from-muted/80 to-slate-100/50 overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <motion.img
          key={`${product.name}-${currentImageIndex}`}
          src={images[currentImageIndex]}
          alt={product.name}
          animate={hovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-full object-contain p-4"
          onError={(e) => { e.target.style.opacity = '0.2'; }}
        />

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/78 text-white shadow-lg backdrop-blur transition hover:bg-slate-900"
              aria-label={`Ver imagen anterior de ${product.name}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/78 text-white shadow-lg backdrop-blur transition hover:bg-slate-900"
              aria-label={`Ver imagen siguiente de ${product.name}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/60 px-2 py-1 backdrop-blur">
              {images.map((image, imageIndex) => (
                <button
                  key={`${product.name}-dot-${imageIndex}`}
                  type="button"
                  onClick={() => setCurrentImageIndex(imageIndex)}
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    imageIndex === currentImageIndex ? "bg-white" : "bg-white/35"
                  }`}
                  aria-label={`Ver imagen ${imageIndex + 1} de ${product.name}`}
                />
              ))}
            </div>
          </>
        ) : null}

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-body font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
        >
          Expand®
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-heading font-bold text-foreground mb-2 leading-tight group-hover:text-secondary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {product.features && product.features.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {product.features.map((feat, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2 text-xs text-muted-foreground font-body"
              >
                <motion.span
                  animate={hovered ? { scale: 1.5, backgroundColor: "hsl(var(--secondary))" } : { scale: 1 }}
                  className="w-1.5 h-1.5 rounded-full bg-secondary/50 mt-1.5 shrink-0"
                />
                {feat}
              </motion.li>
            ))}
          </ul>
        )}

        {product.dimensions && (
          <div className="mt-auto pt-3 border-t border-border">
            <p className="text-xs font-body font-semibold text-secondary flex items-center gap-1.5">
              <span className="text-base">📐</span>
              {product.dimensions}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}