import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { solutions } from "@/data/solutions";
import { ChevronRight } from "lucide-react";

const Solucoes = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">Nossas Soluções</h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Serviços modulares de cibersegurança que se adaptam ao tamanho e maturidade da sua empresa. Cada solução pode ser contratada individualmente ou integrada.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <ScrollReveal key={sol.slug} delay={i * 80}>
                <Link
                  to={`/solucoes/${sol.slug}`}
                  className="group flex gap-6 p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:shadow-accent/5 transition-all hover:border-accent/20"
                >
                  <sol.icon className="w-10 h-10 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h2 className="font-heading font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                      {sol.title}
                    </h2>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      {sol.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-heading font-semibold">
                      Ver detalhes <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solucoes;
