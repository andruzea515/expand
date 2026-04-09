import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

const archimovilImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/ARCHIMÓVIL .png", import.meta.url).href;
const archimovilImage2 = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/ARCHIMÓVIL 2.png", import.meta.url).href;
const archivadorArturitoImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/ARCHIVADOR ARTURITO .png", import.meta.url).href;
const archivadorVerticalP1Image = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/archivo vertical p1 .png", import.meta.url).href;
const archivadorVertical2PImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/archivador vertical 2p.png", import.meta.url).href;
const carpetasColgantesImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/CARPETAS COLGANTES HV- 40.png", import.meta.url).href;
const carroMultifuncionalImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/CARRO MULTIFUNCIONAL .png", import.meta.url).href;
const escaleraImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/ESCALERA SC-13 .png", import.meta.url).href;
const escritorioImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/ESCRITORIO.png", import.meta.url).href;
const estanteriaEstructuralImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/estanteria estructural.png", import.meta.url).href;
const lockerImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/LOCKER A MEDIDA.png", import.meta.url).href;
const separadoresBLImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/SEPARADORES BL .png", import.meta.url).href;
const separadoresVImage = new URL("../../IMAGENES CATALOGO MOBILIARIO EXPAND/SEPARADORES V.png", import.meta.url).href;

const products = [
  {
    name: "Archivador Vertical P1",
    description: "Ofrece maximización de espacios con una puerta corrediza tipo persiana. Diseñado para mantener sus documentos organizados y accesibles.",
    image: archivadorVerticalP1Image,
    features: [
      "Puerta corrediza tipo persiana",
      "Entrepaño multiuso",
      "Cerradura simple con llave",
      "Pintura electroestática",
    ],
    dimensions: "200 cm × 100 cm × 47 cm",
  },
  {
    name: "Archivador Vertical 2P",
    description: "Archivador versátil con dos puertas abatibles y un sistema de seguridad que garantiza el resguardo de sus documentos.",
    image: archivadorVertical2PImage,
    features: [
      "Puertas abatibles",
      "Cerradura simple con llave",
      "Entrepaños multiuso",
      "Pintura electroestática",
    ],
    dimensions: "180 cm × 90 cm × 45 cm",
  },
  {
    name: "Estantería Estructural",
    description: "Estantería de carga con la mejor calidad del mercado. Ideal para carpetas colgantes o material apoyado. Fabricada en lámina de acero al frío.",
    image: estanteriaEstructuralImage,
    features: [
      "Lámina de acero al frío",
      "Tiras tensoras para mayor estabilidad",
      "Soporte de 40 kg por entrepaño",
      "Pintura electroestática",
    ],
    dimensions: "200 cm × 94 cm × 30/40/50 cm",
  },
  {
    name: "Locker a Medida",
    description: "Fabricamos lockers metálicos a medida para mayor maximización de espacio, con las dimensiones que requiera el área, desde 1 a 6 unidades.",
    image: lockerImage,
    features: [
      "Fabricación a medida (1–6 unidades)",
      "Cerradura simple con llave",
      "Pintura electroestática",
      "Colores disponibles según requerimiento",
    ],
    dimensions: "A requerimiento del cliente",
  },
  {
    name: "Archimóvil",
    description: "Brinda maximización de espacio con sus sistemas modulares, diseñados a medida del área y el volumen de material. Sistema de archivo de alta densidad.",
    image: archimovilImage,
    images: [archimovilImage, archimovilImage2],
    features: [
      "Diseño modular a medida",
      "Entrepaños multiuso",
      "Cierre de bloqueo centralizado",
      "Plataforma sobrepuesta",
      "Pintura electroestática",
    ],
    dimensions: "A requerimiento del cliente",
  },
  {
    name: "Escritorio",
    description: "Fabricado con un diseño minimalista que brinda modernidad y elegancia a su espacio de trabajo. Base de acero con tablero de MDF reforzado.",
    image: escritorioImage,
    features: [
      "Base de acero al frío para mayor durabilidad",
      "Niveladores de piso regulables",
      "Tablero de madera MDF reforzada",
      "Pintura electroestática en polvo",
    ],
    dimensions: "120 cm × 60 cm × 73 cm",
  },
  {
    name: "Carro Multifuncional",
    description: "Diseño ligero, multifuncional para espacios estrechos. Fabricado en láminas de acero al frío para mayor ligereza y movimiento, con 4 ruedas con sistema de bloqueo.",
    image: carroMultifuncionalImage,
    features: [
      "Lámina de acero al frío",
      "3 o 4 peldaños con 4 ruedas",
      "Soporte de hasta 70 kg",
      "Sistema de bloqueo estable",
      "Pintura electroestática",
    ],
  },
  {
    name: "Archivador Arturito",
    description: "Archivador robusto tipo arturito multiuso con sistema de carpetas colgantes y cierre central. Diseñado para movilidad dentro de la oficina.",
    image: archivadorArturitoImage,
    features: [
      "2 o 3 compartimientos",
      "Riel telescópico de alta calidad",
      "Cerradura central de 2 llaves",
      "Ruedas para movimiento fácil",
      "Pintura electroestática",
    ],
    dimensions: "60 cm × 50 cm × 40 cm",
  },
  {
    name: "Escalera SC-13",
    description: "Escalera fabricada con lámina de acero al frío, de dos escalones con sistema de pasamanos integrado, diseñada para múltiples usos en oficina o almacén.",
    image: escaleraImage,
    features: [
      "Topes delanteros antideslizantes",
      "Ruedas para movimiento fácil",
      "Pasamanos integrados de seguridad",
      "Lámina de acero al frío",
      "Pintura electroestática",
    ],
  },
  {
    name: "Separadores BL",
    description: "Separadores metálicos ideales para material de apoyo. Fabricados en lámina de acero al frío con acabado electroestático.",
    image: separadoresBLImage,
    features: [
      "Lámina de acero al frío",
      "Pintura electroestática",
      "Ideales para material de apoyo",
    ],
  },
  {
    name: "Separadores V",
    description: "Diseñados especialmente para entrepaños EV, permiten separar carpetas en un mismo entrepaño. Funcionan como divisor y apoyo de expedientes.",
    image: separadoresVImage,
    features: [
      "Funciona como divisor de carpetas",
      "Apoyo de expedientes",
      "Pintura electroestática",
      "Compatible con entrepaños EV",
    ],
  },
  {
    name: "Carpetas Colgantes HV-40",
    description: "Carpetas de fabricación exclusiva de alta calidad, elaboradas con material resistente. Compatibles con sistemas de archivo colgante.",
    image: carpetasColgantesImage,
    features: [
      "Fabricación exclusiva",
      "Material resistente de alta calidad",
    ],
    dimensions: "33.5 cm × 29 cm",
  },
];

export default function Mobiliario() {
  return (
    <>
      <PageHero
        subtitle="Catálogo de Productos"
        title="Mobiliario de Oficina"
        description="Archivadores, escritorios, estanterías y accesorios metálicos diseñados con pasión para optimizar su espacio laboral y cotidiano."
      />

      {/* Stats bar */}
      <div className="bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Productos disponibles", value: "12+" },
            { label: "Pintura electroestática", value: "100%" },
            { label: "Garantía de calidad", value: "Sí" },
            { label: "Fabricación a medida", value: "Disponible" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl md:text-2xl font-heading font-bold text-secondary">{s.value}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground font-body mb-10 max-w-3xl"
          >
            Todos nuestros productos están fabricados con lámina de acero al frío y acabados en pintura electroestática horneada,
            garantizando resistencia superior a la corrosión, el impacto y los rayos UV.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.name} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}