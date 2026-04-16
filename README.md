# NETZSolutions — Segurança Cibernética & Continuidade de Negócios

Site institucional da **NETZSolutions**, empresa especializada em soluções completas de cibersegurança para pequenas e médias empresas (PMEs) brasileiras. O site apresenta os serviços oferecidos, cases de sucesso, blog com conteúdo educativo e canais de contato.

---

## Visão geral

O projeto é uma **Single Page Application (SPA)** construída com React e TypeScript, servida como site estático após o build. O design segue uma identidade visual sóbria e profissional voltada ao segmento de segurança da informação, com tipografia monospace (IBM Plex Mono) para headings e PT Sans para corpo de texto.

---

## Stack tecnológica

| Camada | Tecnologia |
|---|---|
| **Framework** | [React 18](https://react.dev/) com TypeScript |
| **Bundler** | [Vite 5](https://vitejs.dev/) (SWC) |
| **Estilo** | [Tailwind CSS 3](https://tailwindcss.com/) + variáveis CSS (tema claro/escuro) |
| **Componentes UI** | [shadcn/ui](https://ui.shadcn.com/) (Radix UI + Tailwind) |
| **Roteamento** | [React Router DOM 6](https://reactrouter.com/) |
| **Ícones** | [Lucide React](https://lucide.dev/) |
| **Formulários** | React Hook Form + Zod |
| **State/fetching** | TanStack React Query |
| **Testes unitários** | [Vitest](https://vitest.dev/) + Testing Library |
| **Testes e2e** | [Playwright](https://playwright.dev/) |
| **Linting** | ESLint 9 com TypeScript-ESLint |

---

## Estrutura do projeto

```
├── public/                  # Arquivos estáticos (favicon, robots.txt)
├── deploy/                  # Configuração de deploy (Nginx + guia Ubuntu Server 24)
│   ├── nginx.conf
│   └── README.md
├── src/
│   ├── main.tsx             # Ponto de entrada da aplicação
│   ├── App.tsx              # Definição de rotas e providers
│   ├── components/
│   │   ├── Header.tsx       # Navbar com menu responsivo
│   │   ├── Footer.tsx       # Rodapé com links e informações
│   │   ├── Layout.tsx       # Layout padrão (Header + conteúdo + Footer)
│   │   ├── NavLink.tsx      # Componente de link de navegação
│   │   ├── ScrollReveal.tsx # Animação de entrada ao scroll
│   │   ├── WhatsAppButton.tsx # Botão flutuante do WhatsApp
│   │   └── ui/              # ~50 componentes shadcn/ui (Button, Card, Dialog, etc.)
│   ├── data/
│   │   ├── solutions.ts     # Dados das 6 soluções de cibersegurança
│   │   └── blogPosts.ts     # Dados dos posts do blog
│   ├── hooks/               # Hooks customizados (use-mobile, use-toast)
│   ├── lib/
│   │   └── utils.ts         # Utilitário cn() para classes Tailwind
│   ├── pages/               # Páginas da aplicação (ver rotas abaixo)
│   └── test/                # Testes unitários
├── index.html               # HTML de entrada com meta tags OG/Twitter
├── vite.config.ts           # Configuração do Vite
├── tailwind.config.ts       # Configuração do Tailwind (tema, fontes, cores)
├── tsconfig.json            # Configuração do TypeScript
├── eslint.config.js         # Configuração do ESLint
├── vitest.config.ts         # Configuração do Vitest
└── playwright.config.ts     # Configuração do Playwright
```

---

## Páginas e rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | `Index.tsx` | Home — hero, pilares de proteção, processo, soluções e estatísticas |
| `/solucoes` | `Solucoes.tsx` | Lista de todas as soluções de cibersegurança |
| `/solucoes/:slug` | `SolucaoDetalhe.tsx` | Detalhe de uma solução específica |
| `/sobre` | `Sobre.tsx` | Sobre a NETZSolutions |
| `/cases` | `Cases.tsx` | Cases de sucesso |
| `/blog` | `Blog.tsx` | Listagem de artigos do blog |
| `/blog/:slug` | `BlogPost.tsx` | Artigo individual |
| `/contato` | `Contato.tsx` | Formulário e informações de contato |
| `/privacidade` | `Privacidade.tsx` | Política de privacidade |
| `/termos` | `Termos.tsx` | Termos de uso |
| `*` | `NotFound.tsx` | Página 404 |

---

## Soluções apresentadas

O site destaca seis pilares de serviço:

1. **Backup & Disaster Recovery** — proteção e recuperação de dados críticos
2. **Endpoint Security** — proteção avançada de dispositivos com EDR/XDR
3. **Gestão de Identidade (IAM)** — controle de acessos, MFA e privilégios mínimos
4. **Gestão de Vulnerabilidades** — varredura, priorização e remediação contínua
5. **Monitoramento & SOC** — monitoramento 24/7 com detecção e resposta a incidentes
6. **GRC / LGPD** — governança, risco, conformidade e adequação à LGPD

---

## Scripts disponíveis

```bash
npm run dev          # Servidor de desenvolvimento (porta 8080)
npm run build        # Build de produção → dist/
npm run build:dev    # Build em modo development
npm run preview      # Preview do build de produção
npm run lint         # Lint com ESLint
npm run test         # Testes unitários com Vitest
npm run test:watch   # Testes em modo watch
```

---

## Começando

### Pré-requisitos

- **Node.js** ≥ 18 (recomendado: 20 LTS)
- **npm** ≥ 9

### Instalação

```bash
git clone https://github.com/felipebandeira23/netz-spark-site.git
cd netz-spark-site
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:8080`.

### Build para produção

```bash
npm run build
```

Os arquivos estáticos otimizados serão gerados na pasta `dist/`.

---

## Deploy em Ubuntu Server 24

O repositório inclui configuração pronta para deploy com Nginx em Ubuntu Server 24.04:

- `deploy/nginx.conf` — configuração Nginx com gzip, cache de assets, fallback SPA e headers de segurança
- `deploy/README.md` — guia passo a passo completo

Consulte **[deploy/README.md](deploy/README.md)** para instruções detalhadas cobrindo:

1. Instalação do Node.js e Nginx
2. Clone e build do projeto
3. Configuração do Nginx
4. HTTPS com Let's Encrypt
5. Firewall (UFW)
6. Processo de atualização

---

## Personalização do tema

As cores e fontes são configuradas via variáveis CSS em `src/index.css` e `tailwind.config.ts`:

- **Fontes**: IBM Plex Mono (headings) + PT Sans (corpo)
- **Cores**: definidas como variáveis HSL (`--primary`, `--accent`, `--background`, etc.)
- **Suporte a dark mode** via classe `dark` no `<html>`

---

## Licença

Projeto privado — uso restrito à NETZSolutions.
