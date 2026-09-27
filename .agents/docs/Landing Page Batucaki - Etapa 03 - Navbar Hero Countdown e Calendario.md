# Landing Page Batucaki — Etapa 03: Navbar, Hero, Countdown e Calendário

- **Plano Principal:** [Plano de Implementação](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Plano%20de%20Implementacao.md)
- **Ordem de Execução:** Etapa 03 de 07
- **Commit Estimado:** `feat(hero): [batucaki-03] criar navbar responsiva hero section com countdown e exportacao de calendario`

---

## 1. Objetivo da Etapa
Implementar o cabeçalho fixo (*navbar*) com menu responsivo (*hamburger* em Alpine.js), a seção de impacto visual *Hero* apresentando o espetáculo cultural **"Tupi em Consciência: Samba, Memória e Vozes Negras"** (Data: 20/11/2026, Praça Prefeito Dr. Ilton da Costa Oliveira em Tupi Paulista), o selo oficial da **Lei Aldir Blanc (PNAB)**, o componente interativo de **Contador Regressivo em Tempo Real** e a funcionalidade de exportação de evento para **Google Calendar** e arquivo `.ics`.

---

## 2. Arquivos Impactados

| Ação | Arquivo | Descrição da Modificação |
|---|---|---|
| `[NOVO]` | `src/utils/calendar.js` | Utilitário puro para gerar URLs de Google Calendar e dados de download do formato iCal (.ics) |
| `[NOVO]` | `src/main.js` | Inicialização do Alpine.js e registro de stores/componentes de dados da aplicação |
| `[NOVO]` | `index.html` | Estrutura HTML da Navbar e da Hero Section com diretivas Alpine.js e Tailwind |
| `[NOVO]` | `tests/calendar.test.js` | Testes automatizados TDD para validar a lógica de geração de calendário |

---

## 3. Estratégia TDD & Comandos de Validação
- **Testes a Criar:** Validar que `generateGoogleCalendarUrl` e `generateIcsBlob` produzem eventos no formato correto (Título: "Tupi em Consciência: Samba, Memória e Vozes Negras", Data: 2026-11-20, Local: "Praça Prefeito Dr. Ilton da Costa Oliveira, Tupi Paulista - SP").
- **Comando de Teste:**
  ```bash
  npm test
  ```

---

## 4. Passo a Passo de Implementação

### Passo 4.1: Escrever Teste TDD em `tests/calendar.test.js`
Escrever testes caixa-preta para verificar a geração de links do Google Calendar e do conteúdo iCalendar (.ics).

### Passo 4.2: Implementar `src/utils/calendar.js`
Criar as funções utilitárias `generateGoogleCalendarUrl(event)` e `downloadIcsFile(event)`.

### Passo 4.3: Configurar `src/main.js`
Integrar Alpine.js com componente reativo `countdown` e `calendarHelper`.

### Passo 4.4: Estruturar Navbar e Hero Section em `index.html`
- Navbar: Logo do Batucaki, links com navegação suave (*smooth scroll*), botão de destaque CTA e menu mobile retrátil.
- Hero Section:
  - Badge PNAB / MinC.
  - Título e subtítulo imponentes com gradientes dourados.
  - Data (20 de novembro de 2026), duração (2 horas) e praça pública.
  - Display numérico do contador regressivo (Dias, Horas, Minutos, Segundos).
  - Ações: "Salvar na Agenda (Google / iCal)" e "Conhecer o Projeto".

### Passo 4.5: Executar Testes
Executar `npm test` para garantir que a lógica de calendário e as asserções passem.

---

## 5. Critérios de Aceite da Etapa
- [ ] Navbar possui navegação fluida e menu mobile totalmente funcional.
- [ ] Hero apresenta todas as informações oficiais do projeto da PNAB.
- [ ] O contador regressivo calcula o tempo restante dinamicamente.
- [ ] Os botões de calendário geram os links e downloads corretos.
- [ ] Os testes da etapa passam 100%.

---

## 6. Instruções de Commit
```bash
git add src/utils/calendar.js src/main.js index.html tests/calendar.test.js
git commit -m "feat(hero): [batucaki-03] criar navbar responsiva hero section com countdown e exportacao de calendario"
```
