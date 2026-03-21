import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { solutions } from "@/data/solutions";
import { ArrowRight, Shield, Database, Lock, Server, ChevronRight } from "lucide-react";

const stats = [
  { value: "R$ 6,2mi", label: "Custo médio de um data breach no Brasil" },
  { value: "148%", label: "Aumento de ransomware em PMEs" },
  { value: "73%", label: "Das PMEs já sofreram incidentes cyber" },
  { value: "277 dias", label: "Tempo médio para detectar uma violação" },
];

const protections = [
  { icon: Database, title: "Dados", description: "Backup, criptografia e controle de acesso aos seus dados críticos" },
  { icon: Lock, title: "Acessos", description: "Gestão de identidade, MFA e privilégios mínimos para cada usuário" },
  { icon: Shield, title: "Endpoints", description: "Proteção avançada de dispositivos com detecção e resposta em tempo real" },
  { icon: Server, title: "Operações", description: "Monitoramento contínuo e planos de continuidade para manter tudo rodando" },
];

const steps = [
  { number: "01", title: "Diagnóstico", description: "Mapeamos sua superfície de ataque, vulnerabilidades e gaps de conformidade." },
  { number: "02", title: "Plano", description: "Desenhamos um roadmap de segurança alinhado ao seu orçamento e prioridades." },
  { number: "03", title: "Operação", description: "Implementamos, monitoramos e evoluímos sua postura de segurança continuamente." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <p className="font-heading text-accent text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in-up">
              Cibersegurança para PMEs
            </p>
            <h1
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ animationDelay: "100ms", animationFillMode: "both" }}
            >
              Segurança e continuidade para seu negócio
            </h1>
            <p
              className="font-body text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Protegemos seus dados, acessos e operações para que você foque no que importa: crescer.
              Soluções integradas de cibersegurança pensadas para a realidade de empresas brasileiras.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="https://wa.me/5521973958770?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20de%20segurança."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Solicitar diagnóstico
                <ArrowRight size={18} />
              </a>
              <Link
                to="/solucoes"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-md font-heading font-semibold text-sm hover:bg-primary-foreground/5 transition-colors active:scale-[0.97]"
              >
                Ver soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O que protegemos */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                O que protegemos
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Cobrimos os quatro pilares essenciais da segurança corporativa para PMEs.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {protections.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="group p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:shadow-accent/5 transition-shadow">
                  <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como entregamos */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Como entregamos
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Um processo claro e pragmático, sem complicações desnecessárias.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className="relative">
                  <span className="font-heading text-6xl font-bold text-accent/10">{step.number}</span>
                  <h3 className="font-heading font-semibold text-xl mt-2 mb-3">{step.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nossas soluções
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Serviços modulares que se adaptam ao tamanho e maturidade da sua empresa.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal key={sol.slug} delay={i * 70}>
                <Link
                  to={`/solucoes/${sol.slug}`}
                  className="group block p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:shadow-accent/5 transition-all hover:border-accent/20"
                >
                  <sol.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {sol.shortTitle}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {sol.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-heading font-semibold">
                    Saiba mais <ChevronRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Por que agir agora
              </h2>
              <p className="font-body text-primary-foreground/60 max-w-xl mx-auto">
                Os números do mercado de cibersegurança no Brasil falam por si.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="font-body text-primary-foreground/60 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Pronto para proteger seu negócio?
              </h2>
              <p className="font-body text-muted-foreground mb-10 leading-relaxed">
                Solicite um diagnóstico gratuito da sua postura de segurança. Sem compromisso, sem enrolação — direto ao ponto.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/5521973958770?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20de%20segurança."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-md font-heading font-semibold text-sm hover:bg-secondary transition-colors active:scale-[0.97]"
                >
                  Outras formas de contato
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
