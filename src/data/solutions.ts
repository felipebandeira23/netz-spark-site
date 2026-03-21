import { Shield, HardDrive, Users, Bug, Activity, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  benefits: string[];
  audience: string;
}

export const solutions: Solution[] = [
  {
    slug: "backup-dr",
    title: "Backup & Disaster Recovery",
    shortTitle: "Backup & DR",
    description: "Proteção e recuperação de dados críticos com planos automatizados que garantem continuidade mesmo em cenários de desastre.",
    longDescription: "Implementamos soluções de backup em nuvem e local com políticas de retenção personalizadas, testes regulares de restauração e planos de recuperação de desastres. Sua empresa mantém a operação mesmo diante de ransomware, falhas de hardware ou desastres naturais.",
    icon: HardDrive,
    benefits: [
      "Backups automatizados com verificação de integridade",
      "RPO e RTO definidos conforme seu negócio",
      "Testes periódicos de restauração documentados",
      "Proteção contra ransomware com cópias imutáveis",
      "Recuperação granular de arquivos e sistemas",
    ],
    audience: "Empresas com dados críticos que não podem tolerar perda de informação ou indisponibilidade prolongada.",
  },
  {
    slug: "endpoint",
    title: "Segurança em Endpoint",
    shortTitle: "Endpoint Security",
    description: "Proteção avançada para dispositivos da sua rede com detecção, resposta e prevenção de ameaças em tempo real.",
    longDescription: "Protegemos notebooks, desktops e servidores com soluções EDR/XDR de última geração. Monitoramento contínuo, análise comportamental e resposta automatizada a incidentes mantêm seus endpoints seguros contra ameaças conhecidas e zero-day.",
    icon: Shield,
    benefits: [
      "Proteção contra malware, ransomware e ataques zero-day",
      "Detecção e resposta estendida (XDR)",
      "Análise comportamental em tempo real",
      "Gestão centralizada de políticas de segurança",
      "Relatórios de conformidade e auditoria",
    ],
    audience: "Organizações com força de trabalho distribuída ou que precisam proteger múltiplos dispositivos contra ameaças avançadas.",
  },
  {
    slug: "iam",
    title: "Gestão de Identidade e Acessos",
    shortTitle: "Identidade & Acessos",
    description: "Controle quem acessa o quê na sua organização com políticas de identidade, autenticação multifator e privilégios mínimos.",
    longDescription: "Implementamos soluções de IAM que garantem que apenas as pessoas certas acessem os recursos certos. Autenticação multifator (MFA), single sign-on (SSO), gestão de privilégios e revisão periódica de acessos reduzem drasticamente o risco de comprometimento.",
    icon: Users,
    benefits: [
      "Autenticação multifator (MFA) para todos os acessos",
      "Single Sign-On (SSO) para produtividade",
      "Gestão de acessos privilegiados (PAM)",
      "Revisão periódica e automatizada de permissões",
      "Integração com diretórios existentes (AD, Azure AD)",
    ],
    audience: "Empresas que precisam controlar acessos a sistemas críticos e cumprir requisitos regulatórios de governança de identidade.",
  },
  {
    slug: "vulnerabilidades",
    title: "Gestão de Vulnerabilidades",
    shortTitle: "Vulnerabilidades",
    description: "Identifique, priorize e corrija vulnerabilidades antes que se tornem incidentes de segurança.",
    longDescription: "Realizamos varreduras contínuas do seu ambiente para identificar vulnerabilidades em sistemas, aplicações e infraestrutura. Priorizamos correções com base no risco real para o negócio e acompanhamos a remediação até a conclusão.",
    icon: Bug,
    benefits: [
      "Varreduras automatizadas e contínuas",
      "Priorização baseada em risco de negócio (CVSS + contexto)",
      "Relatórios executivos e técnicos",
      "Acompanhamento de remediação com SLA",
      "Integração com processos de patch management",
    ],
    audience: "Organizações que precisam de visibilidade sobre suas fragilidades técnicas e querem uma abordagem proativa à segurança.",
  },
  {
    slug: "monitoramento",
    title: "Monitoramento M2M",
    shortTitle: "Monitoramento",
    description: "Monitoramento contínuo de infraestrutura e dispositivos com alertas inteligentes e dashboards operacionais.",
    longDescription: "Monitoramos seus servidores, redes, aplicações e dispositivos IoT/M2M 24/7. Alertas inteligentes, dashboards em tempo real e análise de tendências permitem ação preventiva antes que problemas impactem a operação.",
    icon: Activity,
    benefits: [
      "Monitoramento 24/7 de infraestrutura e aplicações",
      "Alertas inteligentes com escalonamento automático",
      "Dashboards personalizados em tempo real",
      "Análise de tendências e capacity planning",
      "Integração com ferramentas de ITSM",
    ],
    audience: "Empresas com infraestrutura crítica que precisam de visibilidade operacional e resposta rápida a incidentes.",
  },
  {
    slug: "grc",
    title: "GRC / LGPD",
    shortTitle: "GRC & LGPD",
    description: "Governança, risco e conformidade: adeque sua empresa à LGPD e outros frameworks regulatórios com segurança.",
    longDescription: "Auxiliamos na adequação à LGPD e outros frameworks de conformidade (ISO 27001, NIST, CIS). Mapeamento de dados pessoais, análise de gaps, implementação de controles e documentação para demonstrar compliance perante reguladores.",
    icon: FileCheck,
    benefits: [
      "Mapeamento de dados pessoais e fluxos de tratamento",
      "Análise de gaps e plano de adequação à LGPD",
      "Políticas e procedimentos documentados",
      "Treinamento e conscientização de colaboradores",
      "Suporte a auditorias e fiscalizações",
    ],
    audience: "Organizações que tratam dados pessoais e precisam demonstrar conformidade com a LGPD e outros regulamentos.",
  },
];
