export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ransomware-pmes-2025",
    title: "Ransomware em PMEs: por que sua empresa é o próximo alvo",
    excerpt: "Ataques de ransomware cresceram 148% em pequenas e médias empresas. Entenda por que os criminosos estão mirando negócios menores e como se proteger.",
    date: "2026-03-15",
    category: "Ameaças",
    readTime: "6 min",
    content: `O cenário de ransomware mudou drasticamente nos últimos anos. Se antes os grandes ataques miravam corporações multinacionais, hoje os criminosos cibernéticos perceberam que PMEs são alvos mais fáceis e igualmente lucrativos.

**Por que PMEs são alvos preferenciais?**

Pequenas e médias empresas frequentemente operam com orçamentos limitados de TI, equipes enxutas e infraestrutura de segurança básica. Isso cria vulnerabilidades que grupos de ransomware exploram com facilidade.

Dados recentes mostram que 73% das PMEs brasileiras já sofreram algum tipo de incidente cibernético, e o custo médio de um ataque de ransomware para empresas desse porte ultrapassa R$ 380 mil — valor que pode ser fatal para o negócio.

**Como se proteger?**

1. **Backup imutável**: Mantenha cópias de segurança que não podem ser alteradas ou excluídas pelo ransomware
2. **Segmentação de rede**: Limite o alcance de um possível comprometimento
3. **Treinamento de usuários**: A maioria dos ataques começa com phishing
4. **Monitoramento contínuo**: Detecte atividades suspeitas antes da criptografia
5. **Plano de resposta**: Tenha um playbook documentado e testado

A NETZSolutions oferece diagnóstico gratuito de exposição a ransomware para PMEs. Entre em contato para avaliar seu nível de risco.`,
  },
  {
    slug: "lgpd-multas-2026",
    title: "LGPD: as multas chegaram — sua empresa está preparada?",
    excerpt: "Com a ANPD intensificando fiscalizações, a adequação à LGPD deixou de ser opcional. Saiba o que sua empresa precisa fazer agora.",
    date: "2026-03-08",
    category: "Compliance",
    readTime: "5 min",
    content: `A Autoridade Nacional de Proteção de Dados (ANPD) intensificou significativamente as ações de fiscalização em 2025 e 2026. Empresas de todos os portes estão recebendo notificações e, em muitos casos, sanções que vão desde advertências até multas de até 2% do faturamento.

**O que mudou na prática?**

A ANPD ampliou sua equipe de fiscalização e passou a utilizar tecnologia para identificar empresas em não-conformidade. Denúncias de titulares de dados também aumentaram, pressionando o regulador a agir.

**Passos essenciais para adequação:**

1. Nomeie um Encarregado de Dados (DPO)
2. Mapeie todos os dados pessoais que sua empresa trata
3. Revise bases legais para cada tratamento
4. Implemente medidas técnicas de segurança
5. Documente processos e mantenha registros atualizados
6. Treine seus colaboradores

Não espere a notificação chegar. A NETZSolutions ajuda empresas a se adequarem à LGPD de forma prática e eficiente.`,
  },
  {
    slug: "zero-trust-pmes",
    title: "Zero Trust não é só para grandes empresas",
    excerpt: "A arquitetura Zero Trust pode ser implementada em PMEs com investimento acessível. Veja como começar com o que você já tem.",
    date: "2026-02-28",
    category: "Estratégia",
    readTime: "7 min",
    content: `"Nunca confie, sempre verifique" — o princípio fundamental do Zero Trust parece algo reservado para grandes corporações com orçamentos milionários. Mas a realidade é que os conceitos podem ser aplicados em qualquer empresa, independente do porte.

**O que é Zero Trust na prática?**

Zero Trust é uma abordagem de segurança que parte do princípio de que nenhuma entidade — interna ou externa — deve ser automaticamente confiável. Cada acesso é verificado, cada vez.

**Implementando Zero Trust em PMEs:**

- **MFA em tudo**: Autenticação multifator para todos os acessos, sem exceção
- **Princípio do menor privilégio**: Cada usuário acessa apenas o necessário
- **Microsegmentação**: Divida sua rede em zonas isoladas
- **Monitoramento contínuo**: Registre e analise todos os acessos
- **Verificação de dispositivos**: Valide a postura de segurança antes de conceder acesso

Muitas dessas medidas podem ser implementadas com ferramentas que você já possui ou com investimento mínimo. O importante é a mudança de mentalidade.`,
  },
  {
    slug: "backup-3-2-1",
    title: "Regra 3-2-1 de backup: o mínimo que sua empresa precisa",
    excerpt: "Entenda a estratégia fundamental de backup que pode salvar seu negócio e como implementá-la corretamente.",
    date: "2026-02-20",
    category: "Backup",
    readTime: "4 min",
    content: `A regra 3-2-1 é o padrão ouro de estratégias de backup, recomendada pelo US-CERT e adotada por organizações em todo o mundo. Apesar de simples, muitas empresas ainda não a seguem corretamente.

**A regra é simples:**

- **3** cópias dos dados (o original + 2 backups)
- **2** tipos diferentes de mídia (disco + nuvem, por exemplo)
- **1** cópia offsite (fora do seu ambiente principal)

**Evolução: a regra 3-2-1-1-0**

Com o aumento dos ataques de ransomware, especialistas recomendam uma versão estendida:

- **1** cópia imutável (que não pode ser alterada ou excluída)
- **0** erros verificados (testes regulares de restauração)

**Erros comuns:**

1. Fazer backup sem testar a restauração
2. Manter todas as cópias no mesmo local ou rede
3. Não incluir configurações e sistemas, apenas dados
4. Backups sem criptografia em trânsito e em repouso

A NETZSolutions implementa estratégias de backup personalizadas com monitoramento contínuo e testes regulares de restauração.`,
  },
];
