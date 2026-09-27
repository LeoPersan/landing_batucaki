# 🥁 Landing Page — Bloco Carnavalesco Batucaki

> **Projeto Cultural:** *Tupi em Consciência: Samba, Memória e Vozes Negras*  
> **Fomento:** Edital de Chamamento Público nº 01/2026 — Política Nacional Aldir Blanc (PNAB), Município de Tupi Paulista / SP.

---

## 🌟 Sobre o Projeto

Esta landing page foi desenvolvida para divulgar o espetáculo musical gratuito **"Tupi em Consciência: Samba, Memória e Vozes Negras"**, realizado pelo **Bloco Carnavalesco Batucaki** no **Dia Nacional da Consciência Negra (20 de novembro de 2026)** na **Praça Prefeito Dr. Ilton da Costa Oliveira**, em Tupi Paulista — SP.

O evento celebra a cultura afro-brasileira combinando a apresentação ao vivo de banda profissional de samba e pagode, a bateria carnavalesca do Batucaki e intervenções conscientes de personalidades negras regionais:
* **Dr. Ricardo Aparecido dos Reis** (Advogado e ativista social);
* **Profª Deocélia Batista de Souza** (Professora e educadora);
* **Mestre Jabá** (Mestre de capoeira e coordenador do Centro Cultural Dendê Maré).

Além disso, a página apresenta o histórico do Bloco Batucaki (fundado em maio/2025), suas oficinas de percussão abertas e gratuitas toda sexta-feira na AABB de Dracena, portfólio de apresentações e informações completas de acessibilidade e transparência pública.

---

## 🛠️ Stack Tecnológica

* **Core:** HTML5 Semântico & Acessível (WAI-ARIA e Schema.org JSON-LD).
* **Estilização:** **Tailwind CSS v4** integrado nativamente via **Vite**.
* **Interatividade:** **Alpine.js** (Contagem regressiva em tempo real, gerador de link dinâmico para WhatsApp, exportação de eventos para Google Calendar/.ics e filtros da galeria).
* **Testes Automatizados (TDD):** Node.js Test Runner nativo (`node:test` e `node:assert/strict`).
* **Deploy Contínuo:** GitHub Actions com publicação automática no **GitHub Pages** a partir do diretório `dist/`.

---

## 🚀 Como Executar Localmente

### 1. Clonar o Repositório e Instalar Dependências
```bash
git clone https://github.com/bloco-batucaki/landing_batucaki.git
cd landing_batucaki
npm install
```

### 2. Rodar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse em seu navegador no endereço: `http://localhost:5173`.

### 3. Executar os Testes Automatizados (TDD)
```bash
npm test
```

### 4. Gerar o Build de Produção
```bash
npm run build
```
Os arquivos otimizados e prontos para publicação serão gerados na pasta `dist/`.

### 5. Pré-visualizar o Build de Produção
```bash
npm run preview
```

---

## 📂 Estrutura de Pastas

```
├── .agents/
│   └── docs/                      # Plano de implementação e documentação detalhada das etapas
├── .github/
│   └── workflows/
│       └── deploy.yml             # Workflow de deploy automático no GitHub Pages
├── public/
│   └── images/
│       └── batucaki/              # Ativos e fotos oficiais do Batucaki
├── src/
│   ├── data/
│   │   ├── projectData.js         # Dados estruturados do espetáculo, oradores e regente
│   │   └── timelineData.js        # Eventos cronológicos e registros do portfólio
│   ├── utils/
│   │   ├── calendar.js            # Lógica de geração de links Google Calendar e .ics
│   │   └── whatsapp.js            # Formatador de links com mensagem pré-preenchida
│   ├── main.js                    # Inicialização do Alpine.js e componentes reativos
│   └── style.css                  # Tema Dark Mode Afro-Brasileiro e Tailwind CSS v4
├── tests/                         # Suíte de testes automatizados TDD
│   ├── build-output.test.js
│   ├── calendar.test.js
│   ├── content-integrity.test.js
│   ├── design-system.test.js
│   ├── environment.test.js
│   ├── seo-and-schema.test.js
│   └── whatsapp-and-portfolio.test.js
├── GEMINI.md                      # Diretrizes e transcrição dos documentos da PNAB
├── index.html                     # Estrutura principal da Landing Page
├── package.json
└── vite.config.js
```

---

## 👥 Ficha Técnica do Projeto

* **Coordenador Geral & Representante:** Leonardo Pereira dos Santos de Oliveira
* **Regente da Bateria & Mestre de Cerimônias:** Clodoaldo Carvalho de Jesus
* **Organização & Instrumentista:** Letícia Augusto Lima
* **Músicos Convidados:** Banda Profissional de Samba e Pagode (A contratar)
* **Engenharia de Áudio:** Técnico de Som Profissional (A contratar)

---

## 🏛️ Realização e Apoio

* **Realização:** Bloco Carnavalesco Batucaki
* **Fomento:** Política Nacional Aldir Blanc (PNAB) — Lei nº 14.399/2022
* **Apoio Institucional:** Ministério da Cultura · Governo Federal do Brasil
* **Município:** Prefeitura Municipal de Tupi Paulista — SP
