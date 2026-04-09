import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const cajasContraIncendioImage = new URL("../../IMAGENES CATALOGO CONTRUCCION EXPAND/AJAS CONTRA INCENDIO.png", import.meta.url).href;
const cajasPrimerosAuxiliosImage = new URL("../../IMAGENES CATALOGO CONTRUCCION EXPAND/CAJAS DE PRIMEROS AUXILIOS.png", import.meta.url).href;
const brekeraElectricaImage = new URL("../../IMAGENES CATALOGO CONTRUCCION EXPAND/BREKERA ELECTRICA .png", import.meta.url).href;
const marcoPuertaMetalicaImage = new URL("../../IMAGENES CATALOGO CONTRUCCION EXPAND/MARCO DE PUERTA METALICA.png", import.meta.url).href;
const puertaMetalicaImage = new URL("../../IMAGENES CATALOGO CONTRUCCION EXPAND/PUERTA METALICA.png", import.meta.url).href;
const ventanaMetalicaImage = new URL("../../IMAGENES CATALOGO CONTRUCCION EXPAND/VENTANA METALICA.png", import.meta.url).href;
const canaletaMetalicaImage = new URL("../../IMAGENES CATALOGO CONTRUCCION EXPAND/CANALETA METALICA.png", import.meta.url).href;

const products = [
  {
    name: "Cajas Contra Incendio",
    description: "Gabinetes metálicos (fire hose cabinets) fabricados en lámina de acero frío. Resistencia superior a la corrosión, el impacto y los rayos UV, superando la pintura de esmalte convencional.",
    image: cajasContraIncendioImage,
    features: [
      "Lámina de acero frío (0.7 a 3 mm)",
      "Pintura electrostática en polvo RAL 3000",
      "Horneada a alta temperatura",
      "Resistencia superior a corrosión e impacto",
      "Resistente a rayos UV",
    ],
  },
  {
    name: "Cajas de Primeros Auxilios",
    description: "Gabinetes metálicos para primeros auxilios con acabado electrostático horneado. Cumplen normas venezolanas de seguridad y calidad.",
    image: cajasPrimerosAuxiliosImage,
    features: [
      "Lámina de acero frío (0.7 a 3 mm)",
      "Pintura electrostática en polvo",
      "Horneada a alta temperatura",
      "Resistencia a corrosión, impacto y UV",
    ],
  },
  {
    name: "Brekera Eléctrica",
    description: "Cajas metálicas para empotrar o adosar, destinadas a proteger los breakers y el sistema de distribución eléctrica de cada vivienda o proyecto.",
    image: brekeraElectricaImage,
    features: [
      "Lámina calibre 18 (1.2 mm) para estructura",
      "Lámina calibre 20 (0.9 mm) para tapa",
      "Pintura electrostática gris o beige",
      "Puerta abatible con bisagras",
      "Cerradura tipo pomo o de seguridad",
      "Rieles DIN preinstalados",
    ],
    dimensions: "Capacidades: 8, 12, 16 o 24 circuitos",
  },
  {
    name: "Marco de Puerta Metálica",
    description: "Fabricados con perfiles de acero estructural (tubos cuadrados, rectangulares o perfiles C). Calibre 16 (1.5 mm), que supera el estándar del mercado en rigidez y resistencia.",
    image: marcoPuertaMetalicaImage,
    features: [
      "Acero estructural calibre 16 (1.5 mm)",
      "Tubos cuadrados, rectangulares o perfiles C",
      "Puntos de anclaje reforzados",
      "Para bloque de concreto, ladrillo o drywall",
      "Corte de precisión arquitectónica",
    ],
  },
  {
    name: "Puerta Metálica",
    description: "Lámina de acero frío en cara exterior con refuerzo interno de perfiles de acero. Tratamiento anticorrosivo de alta calidad antes del acabado final.",
    image: puertaMetalicaImage,
    features: [
      "Lámina de acero frío exterior",
      "Refuerzo interno con perfiles de acero",
      "Limpieza profunda pre-tratamiento",
      "Fondo anticorrosivo de alta calidad",
      "Pintura electrostática final",
    ],
  },
  {
    name: "Ventana Metálica",
    description: "Perfilería de acero laminado en frío calibre 16 (1.5 mm). Tecnología de corte de precisión para ángulos perfectos según planos arquitectónicos.",
    image: ventanaMetalicaImage,
    features: [
      "Perfilería calibre 16 (1.5 mm) estándar",
      "Corte de precisión para ángulos perfectos",
      "Resistencia superior a deformación",
      "Tubo cuadrado, rectangular, perfiles L",
      "Mayor seguridad vs calibre 18 o 20",
    ],
  },
  {
    name: "Canaleta Metálica",
    description: "Lámina de acero galvanizado recubierta con capa de zinc para protección contra la oxidación. Balance ideal entre ligereza y rigidez para fácil manipulación.",
    image: canaletaMetalicaImage,
    features: [
      "Acero galvanizado con recubrimiento de zinc",
      "Calibre 24 o 26 recomendado",
      "Balance ligereza-rigidez óptimo",
      "Protección básica contra corrosión",
      "Ideal para condiciones climáticas adversas",
    ],
  },
];

const valueAdded = [
  { text: "100% tecnología de pintura electroestática resistente al calor, con mayor calidad sobre pintura acrílica." },
  { text: "Con el uso de nuestra tecnología obtenemos un porcentaje superior de resistencia al fuego." },
  { text: "El uso de nuestras láminas de acero frío prevé a un 100% la fractura de la misma." },
];

export default function Construccion() {
  return (
    <>
      <PageHero
        subtitle="Catálogo de Productos"
        title="Área de Construcción"
        description="Fabricamos y suministramos piezas metalmecánicas esenciales para la seguridad y funcionamiento de su proyecto, asegurando su correcta integración en la infraestructura."
      />

      {/* Objetivos */}
      <div className="bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Diseño y planificación", desc: "Cada pieza diseñada según los planos del proyecto" },
              { title: "Control de calidad", desc: "Empaque y etiquetado con normas venezolanas" },
              { title: "Suministro a tiempo", desc: "Logística eficiente para cada entrega" },
            ].map((obj) => (
              <div key={obj.title} className="p-4">
                <p className="font-heading font-bold text-foreground mb-1">{obj.title}</p>
                <p className="text-sm text-muted-foreground font-body">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground font-body mb-10 max-w-3xl"
          >
            Nuestra experiencia en fabricación, control de calidad y logística nos permite ofrecer soluciones
            confiables para la infraestructura y los acabados de sus viviendas, añadiendo valor a su proyecto.
            Todos nuestros productos cumplen las normas y técnicas venezolanas.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Valor agregado */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Valor Agregado</h2>
              <p className="text-white/70 font-body mb-6 leading-relaxed">
                Al elegir nuestra propuesta, usted no solo adquiere un producto, sino que invierte en
                la longevidad y la seguridad de su proyecto. Todos nuestros productos cumplen las normas
                y técnicas venezolanas.
              </p>
            </div>
            <div className="space-y-4">
              {valueAdded.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 rounded-xl p-4"
                >
                  <div className="w-2 h-2 rounded-full bg-white mt-1.5 shrink-0" />
                  <p className="text-sm font-body text-white/85 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}