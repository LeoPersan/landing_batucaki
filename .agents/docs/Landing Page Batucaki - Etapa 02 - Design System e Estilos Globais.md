# Landing Page Batucaki — Etapa 02: Design System e Estilos Globais

- **Plano Principal:** [Plano de Implementação](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Plano%20de%20Implementacao.md)
- **Ordem de Execução:** Etapa 02 de 07
- **Commit Estimado:** `feat(design): [batucaki-02] implementar design system dark mode afro-brasileiro e estilos globais`

---

## 1. Objetivo da Etapa
Configurar os estilos globais e tokens de design no `src/style.css` com a estética **Dark Mode Afro-Brasileiro Sofisticado**, importando as fontes Google (*Outfit* para títulos e *Inter* para corpo), definindo paleta de cores (tons de grafite escuro `#0d0e12`/`#18181b`, ouro âmbar `#f59e0b`/`#d97706`, vermelho rubi `#dc2626`), efeitos de vidro fosco (*glassmorphism*), sombras quentes e utilitários de animação/ritmo.

---

## 2. Arquivos Impactados

| Ação | Arquivo | Descrição da Modificação |
|---|---|---|
| `[NOVO]` | `src/style.css` | Importação do `@import "tailwindcss";`, `@theme` com cores customizadas, fontes e utilitários |
| `[NOVO]` | `tests/design-system.test.js` | Testes automatizados TDD para verificar presença de variáveis, fontes e regras de tema |

---

## 3. Estratégia TDD & Comandos de Validação
- **Testes a Criar:** Validar que `src/style.css` contém as fontes *Outfit* e *Inter*, a declaração do Tailwind v4, classes de tema e paleta de cores do Batucaki.
- **Comando de Teste:**
  ```bash
  npm test
  ```

---

## 4. Passo a Passo de Implementação

### Passo 4.1: Escrever Teste TDD em `tests/design-system.test.js`
Declarar as asserções para o arquivo `src/style.css`.

### Passo 4.2: Criar `src/style.css`
- Configurar `@import "tailwindcss";`.
- Configurar `@theme` com tokens de cores:
  - `--color-batucaki-dark`: `#0d0e12`
  - `--color-batucaki-card`: `#16181f`
  - `--color-batucaki-gold`: `#f59e0b`
  - `--color-batucaki-gold-dark`: `#d97706`
  - `--color-batucaki-red`: `#dc2626`
  - `--color-batucaki-accent`: `#ea580c`
- Configurar classes utilitárias para efeito glassmorphism (`glass-panel`), gradientes dourados (`gradient-gold-text`) e bordas suaves.

### Passo 4.3: Validar com Testes Automatizados
Executar `npm test` para assegurar conformidade.

---

## 5. Critérios de Aceite da Etapa
- [ ] O arquivo `src/style.css` compila adequadamente com Tailwind CSS v4.
- [ ] Fontes Google e tokens de cores estão disponíveis e testados.
- [ ] Os testes de design system passam 100%.

---

## 6. Instruções de Commit
```bash
git add src/style.css tests/design-system.test.js
git commit -m "feat(design): [batucaki-02] implementar design system dark mode afro-brasileiro e estilos globais"
```
