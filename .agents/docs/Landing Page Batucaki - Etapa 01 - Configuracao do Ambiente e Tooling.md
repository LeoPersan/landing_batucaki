# Landing Page Batucaki — Etapa 01: Configuração do Ambiente e Tooling

- **Plano Principal:** [Plano de Implementação](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Plano%20de%20Implementacao.md)
- **Ordem de Execução:** Etapa 01 de 07
- **Commit Estimado:** `chore(setup): [batucaki-01] configurar vite, tailwind v4, alpinejs e pipeline de testes`

---

## 1. Objetivo da Etapa
Inicializar o projeto Node.js com Vite, configurar a integração nativa com o Tailwind CSS v4 (`@tailwindcss/vite`), instalar o Alpine.js para interatividade leve, preparar a infraestrutura de testes automatizados com o test runner nativo do Node.js (`node:test`) e configurar o workflow de deploy para o GitHub Pages (`.github/workflows/deploy.yml`).

---

## 2. Arquivos Impactados

| Ação | Arquivo | Descrição da Modificação |
|---|---|---|
| `[NOVO]` | `package.json` | Definição de dependências, scripts de dev, build, preview e test |
| `[NOVO]` | `vite.config.js` | Configuração do Vite com plugin `@tailwindcss/vite` e base path para GitHub Pages |
| `[NOVO]` | `.github/workflows/deploy.yml` | Workflow do GitHub Actions para build e publicação no GitHub Pages |
| `[NOVO]` | `tests/environment.test.js` | Testes automatizados TDD para validar a presença de dependências e configuração correta |
| `[NOVO]` | `.gitignore` | Ignorar `node_modules`, `dist`, `.playwright-mcp`, etc. |

---

## 3. Estratégia TDD & Comandos de Validação
- **Testes a Criar:** Validar que o `package.json` possui as dependências requeridas (`tailwindcss`, `@tailwindcss/vite`, `alpinejs`), scripts definidos (`dev`, `build`, `test`), e configuração do Vite compatível.
- **Comando de Teste:**
  ```bash
  npm test
  ```

---

## 4. Passo a Passo de Implementação

### Passo 4.1: Criar `package.json`
Definir o projeto como `"type": "module"`, adicionar scripts de execução e dependências.

### Passo 4.2: Criar `vite.config.js`
Configurar o plugin oficial do Tailwind v4 e configurar o base path relativo para suporte ao GitHub Pages.

### Passo 4.3: Instalar Dependências
Executar `npm install` para resolver e gerar o `package-lock.json`.

### Passo 4.4: Criar Workflow `.github/workflows/deploy.yml`
Configurar build e deploy automático para GitHub Pages na branch `main`.

### Passo 4.5: Criar e Executar Testes TDD em `tests/environment.test.js`
Executar `npm test` para garantir que todas as asserções de ambiente sejam atendidas.

---

## 5. Critérios de Aceite da Etapa
- [ ] O arquivo `package.json` está criado e as dependências instaladas.
- [ ] O `vite.config.js` está configurado corretamente.
- [ ] O script `npm test` executa com 100% de sucesso.
- [ ] O workflow do GitHub Actions `.github/workflows/deploy.yml` está configurado.

---

## 6. Instruções de Commit
```bash
git add package.json package-lock.json vite.config.js .github/workflows/deploy.yml tests/environment.test.js .gitignore
git commit -m "chore(setup): [batucaki-01] configurar vite, tailwind v4, alpinejs e pipeline de testes"
```
