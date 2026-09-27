# Landing Page Batucaki — Etapa 04: O Espetáculo, Vozes Negras e O Bloco

- **Plano Principal:** [Plano de Implementação](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Plano%20de%20Implementacao.md)
- **Ordem de Execução:** Etapa 04 de 07
- **Commit Estimado:** `feat(content): [batucaki-04] criar secoes do espetaculo painel de vozes negras e historia do bloco com minibiografia do regente`

---

## 1. Objetivo da Etapa
Desenvolver as três seções centrais de conteúdo:
1. **O Espetáculo ("Tupi em Consciência"):** Contextualização da luta antirracista, do Dia da Consciência Negra, o samba e a batucada na praça pública com banda convidada e percussão carnavalesca.
2. **Vozes Negras em Destaque:** Cards biográficos detalhados dos oradores convidados:
   - *Ricardo Aparecido dos Reis* (Advogado atuante na região);
   - *Deocélia Batista de Souza* (Professora e educadora);
   - *Mestre Jabá* (Mestre de capoeira e coordenador do Centro Cultural Dendê Maré).
3. **O Bloco Carnavalesco Batucaki:** História do coletivo fundado em maio de 2025, seus 5 compromissos culturais e destaque para a trajetória do Regente *Clodoaldo Carvalho de Jesus* (UNIFADRA, UNOESTE, Mocidade Independente de Carapicuíba, APAE, Guiomar Novaes).

---

## 2. Arquivos Impactados

| Ação | Arquivo | Descrição da Modificação |
|---|---|---|
| `[NOVO]` | `src/data/projectData.js` | Dados estruturados e imutáveis sobre o espetáculo, oradores, compromissos culturais e mini currículo |
| `[MODIFICADO]` | `index.html` | Inclusão das seções "O Espetáculo", "Vozes Negras" e "Sobre o Batucaki" |
| `[NOVO]` | `tests/content-integrity.test.js` | Testes automatizados TDD para garantir que todos os dados oficiais e nomes dos oradores e regente estejam presentes |

---

## 3. Estratégia TDD & Comandos de Validação
- **Testes a Criar:** Validar que `projectData.js` contém a lista correta de oradores com seus respectivos títulos, os compromissos culturais do Batucaki e as qualificações do regente Clodoaldo.
- **Comando de Teste:**
  ```bash
  npm test
  ```

---

## 4. Passo a Passo de Implementação

### Passo 4.1: Escrever Teste TDD em `tests/content-integrity.test.js`
Escrever asserções para validar os nomes, dados e descrições conforme especificado no [GEMINI.md](file:///home/leonardo/code/landing_batucaki/GEMINI.md).

### Passo 4.2: Criar `src/data/projectData.js`
Estruturar o objeto de dados com informações completas e textuais sobre o evento, oradores, bloco e regente.

### Passo 4.3: Implementar as Seções em `index.html`
- Seção **O Espetáculo**: Design com grid de 2 colunas, pilares conceituais (Afirmação da Identidade, Música Além do Carnaval, Acessibilidade Plena) e estatísticas (2h de música, 100-200 pessoas, 100% gratuito).
- Seção **Vozes Negras em Destaque**: Cards estilizados com efeito *glassmorphism*, avatares com borda dourada e descrições dos oradores.
- Seção **O Bloco Batucaki**: Linha do tempo de valores, pilares culturais e card especial com mini currículo e trajetória de Clodoaldo Carvalho de Jesus.

### Passo 4.4: Executar Testes
Rodar `npm test` para assegurar que todo o conteúdo esteja consistente.

---

## 5. Critérios de Aceite da Etapa
- [ ] As três seções estão completas e integradas ao layout.
- [ ] Todos os dados e biografias refletem fielmente os documentos oficiais da PNAB.
- [ ] O design é 100% responsivo em desktop, tablet e mobile.
- [ ] A suite de testes de integridade passa com sucesso.

---

## 6. Instruções de Commit
```bash
git add src/data/projectData.js index.html tests/content-integrity.test.js
git commit -m "feat(content): [batucaki-04] criar secoes do espetaculo painel de vozes negras e historia do bloco com minibiografia do regente"
```
