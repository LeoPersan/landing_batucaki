# Landing Page Batucaki — Etapa 06: Localização, Acessibilidade e Transparência PNAB

- **Plano Principal:** [Plano de Implementação](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Plano%20de%20Implementacao.md)
- **Ordem de Execução:** Etapa 06 de 07
- **Commit Estimado:** `feat(location-transparency): [batucaki-06] criar secoes de localizacao acessibilidade transparencia pnab e seo schema`

---

## 1. Objetivo da Etapa
Finalizar a estrutura da página implementando:
1. **Localização e Como Chegar:** Praça Prefeito Dr. Ilton da Costa Oliveira em Tupi Paulista — SP, com mapa e botões diretos para navegação no Google Maps e Waze.
2. **Recursos de Acessibilidade:** Detalhamento da área com assentos reservados para idosos e pessoas com deficiência (PCDs), espaço plano e comunicação em linguagem simples.
3. **Transparência e Ficha Técnica:** Equipe técnica completa (Leonardo Pereira dos Santos de Oliveira, Clodoaldo Carvalho de Jesus, Letícia Augusto Lima, Banda contratada e Técnico de som), contrapartida social e créditos oficiais ao Edital de Chamamento Público nº 01/2026 da Política Nacional Aldir Blanc (PNAB), Ministério da Cultura e Prefeitura Municipal de Tupi Paulista.
4. **Rodapé e SEO:** Meta tags Open Graph, Twitter Cards, Schema.org `Event` estruturado em JSON-LD e links de contato.

---

## 2. Arquivos Impactados

| Ação | Arquivo | Descrição da Modificação |
|---|---|---|
| `[MODIFICADO]` | `index.html` | Inclusão das seções de Localização, Acessibilidade, Transparência/Ficha Técnica, Rodapé e Metadados SEO/Schema.org |
| `[NOVO]` | `tests/seo-and-schema.test.js` | Testes automatizados TDD para validar a presença e consistência do Schema.org Event e tags de SEO |

---

## 3. Estratégia TDD & Comandos de Validação
- **Testes a Criar:** Validar que o `index.html` contém o Schema.org `@type: Event` com dados válidos do evento (nome, data 2026-11-20, endereço de Tupi Paulista, gratuidade), meta tags Open Graph e nomes da equipe técnica.
- **Comando de Teste:**
  ```bash
  npm test
  ```

---

## 4. Passo a Passo de Implementação

### Passo 4.1: Escrever Teste TDD em `tests/seo-and-schema.test.js`
Escrever asserções para o Schema.org JSON-LD e tags semânticas no HTML.

### Passo 4.2: Implementar Seção de Localização e Acessibilidade
- Card de localização da Praça Prefeito Dr. Ilton da Costa Oliveira.
- Botões de rota ("Abrir no Google Maps", "Abrir no Waze").
- Badges de Acessibilidade Plena (Assentos reservados para PCDs e idosos, piso plano, linguagem inclusiva).

### Passo 4.3: Implementar Seção de Transparência e Ficha Técnica
- Ficha técnica oficial do projeto (Coordenador, Regente, Produção, Banda e Som).
- Selos e textos institucionais (PNAB, Lei nº 14.399/2022, MinC, Prefeitura de Tupi Paulista).

### Passo 4.4: Adicionar Rodapé e Metadados SEO no `<head>`
- Title, description, OG tags, Twitter tags, canonical e Schema.org JSON-LD.
- Rodapé com links de contato e copyright cultural.

### Passo 4.5: Executar Testes
Rodar `npm test` para assegurar conformidade total.

---

## 5. Critérios de Aceite da Etapa
- [ ] Todas as seções do rodapé, localização, acessibilidade e transparência estão implementadas.
- [ ] Os links de rota para Maps e Waze funcionam corretamente.
- [ ] O Schema.org `Event` JSON-LD é válido e contém os dados do projeto.
- [ ] Os testes da etapa passam 100%.

---

## 6. Instruções de Commit
```bash
git add index.html tests/seo-and-schema.test.js
git commit -m "feat(location-transparency): [batucaki-06] criar secoes de localizacao acessibilidade transparencia pnab e seo schema"
```
