# Landing Page Batucaki — Etapa 05: Oficinas Gratuitas e Portfólio Interativo

- **Plano Principal:** [Plano de Implementação](file:///home/leonardo/code/landing_batucaki/.agents/docs/Landing%20Page%20Batucaki%20-%20Plano%20de%20Implementacao.md)
- **Ordem de Execução:** Etapa 05 de 07
- **Commit Estimado:** `feat(workshops-portfolio): [batucaki-05] implementar secao de oficinas com whatsapp cta e linha do tempo interativa com fotos locais`

---

## 1. Objetivo da Etapa
Implementar duas seções interativas de alto valor para a comunidade:
1. **Oficinas de Percussão Abertas e Gratuitas:** Apresentação das aulas semanais (toda sexta-feira, às 19h30, na AABB de Dracena), enfatizando a gratuidade e acolhimento de pessoas sem instrumento próprio ou experiência prévia. Integração de botão CTA com mensagem pré-formatada para o WhatsApp oficial `(18) 99799-8362`.
2. **Linha do Tempo e Galeria Interativa:** Linha do tempo visual cronológica desde a fundação em maio/2025, com filtros por categoria (*Todos*, *Apresentações*, *Ensaios*, *Oficinas*) renderizando as fotos reais baixadas do Instagram oficial em `public/images/batucaki/` com links diretos para os vídeos e publicações originais.

---

## 2. Arquivos Impactados

| Ação | Arquivo | Descrição da Modificação |
|---|---|---|
| `[NOVO]` | `src/utils/whatsapp.js` | Utilitário para formatação e encoding seguro de links de WhatsApp com mensagens pré-definidas |
| `[NOVO]` | `src/data/timelineData.js` | Array estruturado com todos os eventos históricos, fotos locais, datas, locais e links do Instagram |
| `[MODIFICADO]` | `index.html` | Seções "Oficinas de Percussão" e "Linha do Tempo & Portfólio" com filtros Alpine.js |
| `[NOVO]` | `tests/whatsapp-and-portfolio.test.js` | Testes automatizados TDD para validar URLs do WhatsApp e caminhos das fotos locais |

---

## 3. Estratégia TDD & Comandos de Validação
- **Testes a Criar:** Validar que `buildWhatsAppUrl` codifica caracteres e telefone corretamente, e que todos os itens do portfólio possuem data, título e arquivo de imagem existente em `public/images/batucaki/`.
- **Comando de Teste:**
  ```bash
  npm test
  ```

---

## 4. Passo a Passo de Implementação

### Passo 4.1: Escrever Teste TDD em `tests/whatsapp-and-portfolio.test.js`
Escrever asserções para o utilitário de WhatsApp e verificar a existência física dos arquivos de imagem referenciados no portfólio.

### Passo 4.2: Implementar `src/utils/whatsapp.js`
Criar a função `buildWhatsAppUrl(phone, message)`.

### Passo 4.3: Implementar `src/data/timelineData.js`
Mapear os eventos históricos:
- Maio/2025: Fundação e aulas semanais na AABB (`fundacao_maio_2025.jpg` e `aula_aabb.jpg`);
- 02/06/2025: Conferência de Promoção da Igualdade Racial (`igualdade_racial_2025.webp`);
- 2025/2026: Animação dos jogos LNF Dracena Futsal;
- 20/11/2025: Dia da Consciência Negra 2025 (`consciencia_negra_2025.jpg`);
- 30/11/2025: Circuito Cult SP na Estrada;
- 19/12/2025: Apresentação de Natal na Praça;
- 15/02/2026: Apresentação de Carnaval na Praça (`carnaval_2026.webp`);
- Contínuo: Ensaios de Domingo na Praça Arthur Pagnozzi (`ensaio_domingo.jpg`, `corrida_oab.webp`, `santa_mercedes.jpg`).

### Passo 4.4: Estruturar as Seções em `index.html`
- Oficinas: Card de destaque com horários, local na AABB, perguntas frequentes rápidas e botão WhatsApp chamativo.
- Linha do Tempo & Galeria: Filtros de categoria em Alpine.js, cards com efeito de hover, tags temáticas e links externos com segurança (`rel="noopener noreferrer"`).

### Passo 4.5: Executar Testes
Rodar `npm test` para validar o funcionamento.

---

## 5. Critérios de Aceite da Etapa
- [ ] O botão do WhatsApp abre a conversa com a mensagem pré-configurada no número oficial.
- [ ] A galeria da Linha do Tempo filtra os eventos dinamicamente sem recarregar a página.
- [ ] Todas as imagens locais carregam perfeitamente e possuem atributos `alt` acessíveis.
- [ ] Os testes da etapa passam 100%.

---

## 6. Instruções de Commit
```bash
git add src/utils/whatsapp.js src/data/timelineData.js index.html tests/whatsapp-and-portfolio.test.js
git commit -m "feat(workshops-portfolio): [batucaki-05] implementar secao de oficinas com whatsapp cta e linha do tempo interativa com fotos locais"
```
