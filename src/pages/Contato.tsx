import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contato = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">Contato</h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Fale com a gente. Sem formulários intermináveis — direto ao ponto.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* WhatsApp CTA */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-4">Fale pelo WhatsApp</h2>
                  <p className="font-body text-muted-foreground mb-6">
                    A forma mais rápida de conversar com nossa equipe. Resposta em até 2 horas em horário comercial.
                  </p>
                  <a
                    href="https://wa.me/5521973958770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20NETZSolutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
                  >
                    <MessageCircle size={20} />
                    Abrir conversa no WhatsApp
                  </a>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-sm">Telefone</h3>
                      <p className="font-body text-muted-foreground">+55 21 97395-8770</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-sm">E-mail</h3>
                      <p className="font-body text-muted-foreground">contato@netzsolutions.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-sm">Localização</h3>
                      <p className="font-body text-muted-foreground">Niterói, RJ — Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-sm">Horário</h3>
                      <p className="font-body text-muted-foreground">Seg–Sex, 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form that opens WhatsApp */}
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-lg bg-card border border-border">
                <h2 className="font-heading text-xl font-semibold mb-6">Envie uma mensagem</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                    const text = `Olá! Meu nome é ${name} da empresa ${company}. ${message}`;
                    window.open(`https://wa.me/5521973958770?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="font-heading text-sm font-semibold block mb-1.5">Nome</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="font-heading text-sm font-semibold block mb-1.5">Empresa</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="font-heading text-sm font-semibold block mb-1.5">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground px-6 py-3.5 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
                  >
                    Enviar via WhatsApp
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
