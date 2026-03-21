import { Layout } from "@/components/Layout";

const Termos = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold">Termos de Uso</h1>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <p>Última atualização: março de 2026</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">1. Aceitação</h2>
          <p>Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Caso não concorde, por favor, não utilize o site.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">2. Serviços</h2>
          <p>A NETZSolutions oferece serviços de consultoria e soluções em cibersegurança. Os termos específicos de cada serviço são definidos em contrato individual.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">3. Propriedade intelectual</h2>
          <p>Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade da NETZSolutions e protegido pela legislação brasileira de propriedade intelectual.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">4. Limitação de responsabilidade</h2>
          <p>As informações apresentadas neste site são de caráter informativo e não constituem aconselhamento técnico ou jurídico. Para recomendações específicas, contate nossa equipe.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">5. Links externos</h2>
          <p>Este site pode conter links para sites de terceiros. A NETZSolutions não se responsabiliza pelo conteúdo ou práticas de privacidade desses sites.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">6. Alterações</h2>
          <p>Reservamo-nos o direito de atualizar estes termos a qualquer momento. Alterações significativas serão comunicadas nesta página.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">7. Legislação aplicável</h2>
          <p>Estes termos são regidos pela legislação brasileira, com foro na comarca de Niterói, RJ.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Termos;
