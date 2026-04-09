import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              E<span className="text-secondary-foreground opacity-70">X</span>PAND
            </h3>
            <p className="text-sm opacity-80 leading-relaxed font-body">
              Optimizamos espacios laborales y cotidianos con productos metálicos 
              de alta calidad, diseñados con pasión y compromiso.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-body font-semibold uppercase tracking-wider mb-4 opacity-60">
              Navegación
            </h4>
            <div className="space-y-3">
              {[
                { label: "Inicio", path: "/" },
                { label: "Mobiliario", path: "/mobiliario" },
                { label: "Construcción", path: "/construccion" },
                { label: "Contacto", path: "/contacto" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-body font-semibold uppercase tracking-wider mb-4 opacity-60">
              Contacto
            </h4>
            <div className="space-y-3 text-sm font-body">
              <p className="flex items-start gap-3 opacity-80">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                0212-959.41.11
              </p>
              <p className="flex items-start gap-3 opacity-80">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                info@grupoexpand.com
              </p>
              <p className="flex items-start gap-3 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Av. La Estancia, CCCT, Nivel PB, Local 43m-01, Urb. Chuao, Edo Miranda
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50 font-body">
            © {new Date().getFullYear()} Expand International®. Todos los derechos reservados.
          </p>
          <p className="text-xs opacity-50 font-body">@expand.ve</p>
        </div>
      </div>
    </footer>
  );
}