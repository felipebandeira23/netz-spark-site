import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Building2, ArrowRight } from "lucide-react";

const cases = [
  {
    sector: "Saúde",
    challenge: "Clínica com 120 colaboradores sofreu tentativa de ransomware. Sem backup testado, dados de pacientes em risco.",
    approach: "Implementação de backup imutável com verificação automatizada, EDR em todos os endpoints e treinamento de equipe.",
    result: "Zero incidentes nos 18 meses seguintes. Tempo de recuperação reduzido de dias para menos de 2 horas.",
    service: "backup-dr",
  },
  {
    sector: "Jurídico",
    challenge: "Escritório de advocacia precisava adequar-se à LGPD para manter contratos com grandes clientes corporativos.",
    approach: "Mapeamento de dados pessoais, revisão de processos, implementação de controles técnicos e documentação completa.",
    result: "Adequação completa em 4 meses. Certificação de conformidade aceita por todos os clientes corporativos.",
    service: "grc",
  },
  {
    sector: "Indústria",
    challenge: "Fabricante com operação 24/7 sem visibilidade sobre vulnerabilidades em sua rede industrial convergente.",
    approach: "Scan de vulnerabilidades segmentado, priorização por risco operacional e plano de remediação faseado.",
    result: "Redução de 78% das vulnerabilidades críticas em 6 meses sem impacto na produção.",
    service: "vulnerabilidades",
  },
  {
    sector: "Varejo",
    challenge: "Rede de lojas com controle de acesso precário: ex-funcionários mantinham acessos a sistemas financeiros.",
    approach: "Implementação de IAM com SSO, MFA obrigatório, revisão automática de acessos e integração com RH.",
    result: "100% dos acessos revogados em até 4 horas após desligamento. Conformidade com política de menor privilégio.",
    service: "iam",
  },
  {
    sector: "Logística",
    challenge: "Empresa com frota de veículos conectados sem monitoramento centralizado de disponibilidade e segurança.",
    approach: "Implementação de monitoramento M2M com dashboards em tempo real e alertas automatizados.",
    result: "Disponibilidade de sistemas críticos subiu de 94% para 99,7%. Incidentes detectados 12x mais rápido.",
    service: "monitoramento",
  },
  {
    sector: "Tecnologia",
    challenge: "Startup SaaS com endpoints distribuídos globalmente e sem gestão centralizada de segurança.",
    approach: "Deploy de solução XDR com gestão centralizada, políticas automatizadas e resposta a incidentes remota.",
    result: "Cobertura de 100% dos endpoints em 30 dias. Detecção automatizada reduziu falsos positivos em 85%.",
    service: "endpoint",
  },
];

const filters = [
  { label: "Todos", value: "all" },
  { label: "Backup & DR", value: "backup-dr" },
  { label: "Endpoint", value: "endpoint" },
  { label: "IAM", value: "iam" },
  { label: "Vulnerabilidades", value: "vulnerabilidades" },
  { label: "Monitoramento", value: "monitoramento" },
  { label: "GRC", value: "grc" },
];

const Cases = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? cases : cases.filter((c) => c.service === filter);

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">Cases de sucesso</h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Resultados reais de empresas que confiaram na NETZSolutions para proteger seus negócios. Nomes omitidos por confidencialidade.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-md font-heading text-sm font-semibold transition-colors active:scale-[0.97] ${
                    filter === f.value
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((c, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:shadow-accent/5 transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-5 h-5 text-accent" />
                    <span className="font-heading font-semibold text-sm text-accent uppercase tracking-wider">{c.sector}</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1">Desafio</h3>
                      <p className="font-body text-foreground text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1">Abordagem</h3>
                      <p className="font-body text-foreground text-sm leading-relaxed">{c.approach}</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1">Resultado</h3>
                      <p className="font-body text-accent font-bold text-sm leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center mt-16">
              <p className="font-body text-muted-foreground mb-6">Quer resultados como esses na sua empresa?</p>
              <a
                href="https://wa.me/5521973958770?text=Olá!%20Vi%20os%20cases%20e%20gostaria%20de%20conversar%20sobre%20as%20soluções."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Fale com a gente <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
