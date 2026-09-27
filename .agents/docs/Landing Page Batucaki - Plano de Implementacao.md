# Plano de Implementação: Landing Page — Bloco Carnavalesco Batucaki

- **Especificação / Contexto:** [GEMINI.md](file:///home/leonardo/code/landing_batucaki/GEMINI.md)
- **Data do Planejamento:** 2026-09-27
- **Status:** Aguardando Execução
- **Stack Técnica:** HTML5 semântico, Tailwind CSS v4, Alpine.js, Vite e Node.js Test Runner (`node:test`)
- **Deploy:** GitHub Pages via GitHub Actions (`dist/`)

---

## Visão Geral da Solução

O objetivo é desenvolver uma Landing Page de alto impacto visual e performance para apresentar o projeto cultural **"Tupi em Consciência: Samba, Memória e Vozes Negras"** (Edital de Chamamento Público nº 01/2026 - PNAB de Tupi Paulista / SP) e divulgar a trajetória, oficinas gratuitas e portfólio do **Bloco Carnavalesco Batucaki**.

A solução adotará a estética **Dark Mode Afro-Brasileiro Sofisticado**, com fundos em grafite profundo (`#0d0e12`), detalhes em ouro âmbar (`#f59e0b`/`#d97706`), vermelho rubi (`#dc2626`), efeito *glassmorphism*, tipografia Google Fonts (*Outfit* e *Inter*) e microinterações rítmicas.

---

## Estratégia de Testes (TDD & Qualidade)

- **Escopo:** Testes automatizados executados nativamente via Node.js (`node:test` e `node:assert`) integrados ao ciclo de desenvolvimento.
- **Foco dos Testes:**
  1. Integridade e consistência dos metadados do projeto cultural e evento (data 20/11/2026, local, oradores, equipe).
  2. Validação da lógica utilitária de geração de links de calendário (.ics e Google Calendar).
  3. Validação do gerador de link de inscrição via WhatsApp com parâmetros e mensagens codificadas.
  4. Integridade da estrutura de dados da Linha do Tempo e catálogo de fotos locais em `public/images/batucaki/`.
  5. Validação da estrutura semântica HTML, tags Open Graph, acessibilidade (ARIA) e Schema.org `Event` JSON-LD.
  6. Validação do pipeline de build do Vite para a pasta `dist/`.

---

## Resumo das Etapas (Commits)

| Etapa | Nome da Etapa | Descrição Sucinta | Tipo Commit | Arquivo Detalhado |
|---|---|---|---|---|
| **01** | Configuração do Ambiente e Tooling | Setup do Vite, Tailwind CSS v4, Alpine.js, scripts de teste e GitHub Actions CI/CD | `chore` | [Etapa 01](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Etapa%2001%20-%20Configuracao%20do%20Ambiente%20e%20Tooling.md) |
| **02** | Design System e Estilos Globais | Configuração de variáveis CSS, paleta de cores afro-brasileira, tipografia e utilitários | `feat` | [Etapa 02](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Etapa%2002%20-%20Design%20System%20e%20Estilos%20Globais.md) |
| **03** | Navbar, Hero, Countdown e Calendário | Implementação do cabeçalho responsivo, Hero com contador regressivo e exportação de calendário | `feat` | [Etapa 03](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Etapa%2003%20-%20Navbar%20Hero%20Countdown%20e%20Calendario.md) |
| **04** | O Espetáculo, Vozes Negras e O Bloco | Seções do evento 20/11, painel dos oradores convidados e história do Batucaki com mini bio do regente | `feat` | [Etapa 04](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Etapa%2004%20-%20O%20Espetaculo%20Vozes%20Negras%20e%20O%20Bloco.md) |
| **05** | Oficinas Gratuitas e Portfólio Interativo | Seção de oficinas com CTA dinâmico WhatsApp e linha do tempo interativa com fotos reais | `feat` | [Etapa 05](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Etapa%2005%20-%20Oficinas%20Gratuitas%20e%20Portfolio%20Interativo.md) |
| **06** | Localização, Acessibilidade e Transparência PNAB | Mapa com rotas Maps/Waze, recursos de acessibilidade, ficha técnica, selos MinC/PNAB e SEO | `feat` | [Etapa 06](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Etapa%2006%20-%20Localizacao%20Acessibilidade%20e%20Transparencia%20PNAB.md) |
| **07** | Build Final, Validação E2E e Deploy Ready | Testes de ponta a ponta, otimização de assets e validação final do build para GitHub Pages | `chore` | [Etapa 07](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Etapa%2007%20-%20Build%20Final%20Validacao%20E2E%20e%20Deploy%20Ready.md) |

---

## Matriz de Cobertura de Requisitos

| Requisito / Diretriz do Projeto | Etapa Resp. | Status |
|---|---|---|
| Apresentação do espetáculo "Tupi em Consciência" (20/11/2026, 2h de show gratuito) | Etapa 03 e 04 | Planejado |
| Contagem regressiva em tempo real e botão para salvar na agenda (Google/.ics) | Etapa 03 | Planejado |
| Destaque das personalidades negras convidadas (Ricardo Reis, Deocélia Souza, Mestre Jabá) | Etapa 04 | Planejado |
| Histórico do Bloco Batucaki (maio/2025) e mini currículo do Regente Clodoaldo Carvalho | Etapa 04 | Planejado |
| Divulgação das aulas gratuitas na AABB com CTA direto no WhatsApp | Etapa 05 | Planejado |
| Linha do tempo e galeria com fotos reais do portfólio e links do Instagram | Etapa 05 | Planejado |
| Informações de acessibilidade (assentos reservados PCD/idosos, espaço plano) | Etapa 06 | Planejado |
| Localização com integração rápida para rotas no Google Maps e Waze | Etapa 06 | Planejado |
| Ficha técnica completa, selos da Lei Aldir Blanc (PNAB), MinC e Prefeitura de Tupi Paulista | Etapa 06 | Planejado |
| Otimização SEO (Open Graph, Schema.org Event, meta tags, favicon) | Etapa 06 | Planejado |
| Pipeline automatizado de deploy para GitHub Pages via GitHub Actions | Etapa 01 e 07 | Planejado |
