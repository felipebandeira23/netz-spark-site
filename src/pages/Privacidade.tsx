import { Layout } from "@/components/Layout";

const Privacidade = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold">Política de Privacidade</h1>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl font-body text-muted-foreground leading-relaxed space-y-6">
          <p>Última atualização: março de 2026</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">1. Coleta de dados</h2>
          <p>A NETZSolutions coleta apenas os dados necessários para atendimento: nome, e-mail, telefone e nome da empresa, fornecidos voluntariamente via formulário de contato ou WhatsApp.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">2. Uso dos dados</h2>
          <p>Os dados coletados são utilizados exclusivamente para responder solicitações, enviar propostas comerciais e manter comunicação relevante sobre nossos serviços.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">3. Compartilhamento</h2>
          <p>Não compartilhamos dados pessoais com terceiros, exceto quando necessário para prestação de serviços contratados ou por obrigação legal.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">4. Armazenamento e segurança</h2>
          <p>Os dados são armazenados em ambiente seguro com controles de acesso apropriados. Aplicamos medidas técnicas e organizacionais para proteger contra acessos não autorizados.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">5. Direitos do titular</h2>
          <p>Conforme a LGPD, você tem direito a acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer seus direitos, entre em contato pelo e-mail contato@netzsolutions.com.br.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">6. Cookies</h2>
          <p>Este site pode utilizar cookies essenciais para funcionamento. Não utilizamos cookies de rastreamento ou publicidade.</p>

          <h2 className="font-heading text-xl font-semibold text-foreground pt-4">7. Contato</h2>
          <p>Para questões sobre privacidade, entre em contato: contato@netzsolutions.com.br</p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacidade;
