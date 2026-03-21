import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Eye, Heart, Handshake, Zap, ShieldCheck } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Segurança pragmática", description: "Soluções que funcionam no mundo real, não apenas no papel." },
  { icon: Handshake, title: "Parceria de longo prazo", description: "Crescemos junto com nossos clientes, evoluindo a segurança continuamente." },
  { icon: Zap, title: "Agilidade", description: "Respostas rápidas e implementações enxutas, respeitando seu ritmo." },
  { icon: Heart, title: "Transparência", description: "Comunicação clara sobre riscos, custos e prioridades." },
];

const team = [
  { name: "Rafael Menezes", role: "CEO & Founder", description: "Especialista em cibersegurança com mais de 15 anos de experiência em proteção de infraestrutura crítica." },
  { name: "Equipe Técnica", role: "Analistas de Segurança", description: "Profissionais certificados em CISSP, CEH, CompTIA Security+ e tecnologias líderes de mercado." },
  { name: "Parceiros", role: "Ecossistema de Tecnologia", description: "Alianças com fabricantes líderes para entregar as melhores soluções do mercado." },
];

const partners = ["Acronis", "SentinelOne", "Fortinet", "Microsoft", "Veeam", "CrowdStrike"];

const Sobre = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">Sobre a NETZSolutions</h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Nascemos da convicção de que PMEs merecem o mesmo nível de proteção cibernética das grandes corporações — com investimento proporcional e sem complexidade desnecessária.
          </p>
        </div>
      </section>

      {/* Missão & Visão */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h2 className="font-heading font-semibold text-xl mb-3">Missão</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Democratizar a cibersegurança corporativa, tornando-a acessível, compreensível e eficaz para pequenas e médias empresas brasileiras.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h2 className="font-heading font-semibold text-xl mb-3">Visão</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Ser a referência em cibersegurança para PMEs no Brasil, reconhecida pela excelência técnica, pragmatismo e impacto real na continuidade dos negócios.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-16">Nossos valores</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="p-8 rounded-lg bg-card border border-border">
                  <v.icon className="w-8 h-8 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-16">Quem faz acontecer</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="text-center p-8 rounded-lg bg-card border border-border">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                    {t.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="font-heading font-semibold">{t.name}</h3>
                  <p className="font-heading text-accent text-sm mb-3">{t.role}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{t.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-4">Parceiros e tecnologias</h2>
            <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-12">
              Trabalhamos com fabricantes líderes de mercado para entregar as melhores soluções.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((p) => (
                <div key={p} className="px-8 py-4 bg-card border border-border rounded-md font-heading font-semibold text-muted-foreground">
                  {p}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
