import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import PageHero from "../components/PageHero";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "0212-959.41.11" },
  { icon: Mail, label: "Email", value: "info@grupoexpand.com" },
  { icon: MapPin, label: "Dirección", value: "Av. La Estancia, CCCT, Nivel PB, Local 43m-01, Urb. Chuao, Edo Miranda, Zona Postal 1060" },
  { icon: Clock, label: "Horario", value: "Lunes a Viernes: 8:00 AM - 5:00 PM" },
];

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    setSending(false);
  };

  return (
    <>
      <PageHero
        subtitle="Contáctenos"
        title="Hablemos de su proyecto"
        description="Estamos listos para ayudarle a encontrar las soluciones metálicas perfectas para su espacio."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-5">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm font-body text-foreground leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-primary text-primary-foreground">
                  <p className="text-sm font-body font-medium mb-1">Síguenos en Instagram</p>
                  <p className="text-lg font-heading font-bold">@expand.ve</p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Envíenos un mensaje
                </h2>
                <p className="text-sm text-muted-foreground font-body mb-8">
                  Complete el formulario y nos pondremos en contacto lo antes posible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2 block">
                        Nombre completo
                      </label>
                      <Input
                        required
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        placeholder="Su nombre"
                        className="font-body"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2 block">
                        Teléfono
                      </label>
                      <Input
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        placeholder="Su teléfono"
                        className="font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="su@email.com"
                      className="font-body"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2 block">
                      Mensaje
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Cuéntenos sobre su proyecto o consulta..."
                      className="font-body resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full py-6 font-body font-semibold text-sm"
                  >
                    {sending ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}