# Landing Page Batucaki — Etapa 07: Build Final, Validação E2E e Deploy Ready

- **Plano Principal:** [Plano de Implementação](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Plano%20de%20Implementacao.md)
- **Ordem de Execução:** Etapa 07 de 07
- **Commit Estimado:** `chore(build): [batucaki-07] validar build de producao suite de testes e documentacao final`

---

## 1. Objetivo da Etapa
Executar a validação completa de ponta a ponta (E2E), rodar toda a suíte de testes automatizados, executar o build de produção com Vite gerando o diretório `dist/`, validar os artefatos estáticos gerados e assegurar que o projeto esteja 100% pronto para deploy contínuo no GitHub Pages.

---

## 2. Arquivos Impactados

| Ação | Arquivo | Descrição da Modificação |
|---|---|---|
| `[MODIFICADO]` | `README.md` | Documentação completa do projeto, instruções de execução local (`npm run dev`), build (`npm run build`), testes (`npm test`) e deploy no GitHub Pages |
| `[NOVO]` | `tests/build-output.test.js` | Testes automatizados TDD para verificar integridade da pasta `dist/` gerada pelo build |
| `[MODIFICADO]` | `.agents/docs/Landing Page Batucaki - Plano de Implementacao.md` | Atualização do status de todas as etapas para concluído |

---

## 3. Estratégia TDD & Comandos de Validação
- **Testes a Executar:**
  1. Suíte completa de testes automatizados:
     ```bash
     npm test
     ```
  2. Compilação e empacotamento de produção:
     ```bash
     npm run build
     ```
  3. Teste de integridade do build gerado:
     ```bash
     node --test tests/build-output.test.js
     ```

---

## 4. Passo a Passo de Implementação

### Passo 4.1: Criar Teste de Build em `tests/build-output.test.js`
Validar a existência de `dist/index.html`, bundles de CSS/JS e assets copiados.

### Passo 4.2: Executar Build de Produção
Executar `npm run build` e validar a saída sem warnings ou erros.

### Passo 4.3: Criar / Atualizar `README.md`
Elaborar documentação rica e clara com badges, descrição cultural do projeto da PNAB, comandos de execução e arquitetura.

### Passo 4.4: Rodar Toda a Suíte de Testes
Executar `npm test` garantindo 100% de aprovação.

---

## 5. Critérios de Aceite da Etapa
- [ ] O comando `npm run build` compila a aplicação com sucesso na pasta `dist/`.
- [ ] Todos os testes automatizados da suíte executam e passam 100%.
- [ ] O `README.md` está claro, completo e orienta o usuário sobre desenvolvimento e deploy.
- [ ] Todos os critérios de transparência da Lei Aldir Blanc foram atendidos.

---

## 6. Instruções de Commit
```bash
git add README.md tests/build-output.test.js .agents/docs/
git commit -m "chore(build): [batucaki-07] validar build de producao suite de testes e documentacao final"
```
