import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { solutions } from "@/data/solutions";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const SolucaoDetalhe = () => {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Solução não encontrada</h1>
          <Link to="/solucoes" className="text-accent font-heading font-semibold">
            ← Voltar para soluções
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/solucoes" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-heading mb-8 transition-colors">
            <ArrowLeft size={16} /> Todas as soluções
          </Link>
          <div className="flex items-start gap-6">
            <solution.icon className="w-12 h-12 text-accent shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{solution.title}</h1>
              <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">{solution.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <ScrollReveal>
                <h2 className="font-heading text-xl font-semibold mb-6">Sobre esta solução</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">{solution.longDescription}</p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="font-heading text-xl font-semibold mb-6">Benefícios</h2>
                <ul className="space-y-3">
                  {solution.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="font-body text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal delay={150}>
                <div className="sticky top-28 space-y-6">
                  <div className="p-6 rounded-lg bg-secondary border border-border">
                    <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-3">Para quem é</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{solution.audience}</p>
                  </div>

                  <a
                    href={`https://wa.me/5521973958770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(solution.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-4 rounded-md font-heading font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97] w-full"
                  >
                    Falar com especialista
                    <ArrowRight size={16} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolucaoDetalhe;
