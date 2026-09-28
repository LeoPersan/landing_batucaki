/**
 * Dados da Linha do Tempo e Portfólio de Apresentações
 * Bloco Carnavalesco Batucaki
 */

export const timelineCategories = [
  { id: 'todos', label: 'Todos os Registros' },
  { id: 'apresentacoes', label: 'Apresentações Culturais' },
  { id: 'aulas-ensaios', label: 'Aulas & Ensaios na Praça' },
  { id: 'carnaval', label: 'Carnaval & Comunidade' }
];

export const timelineEvents = [
  {
    id: 'corrida-oab-acao',
    date: '2025 / 2026',
    title: 'Ritmistas em Ação na Corrida da OAB',
    category: 'apresentacoes',
    categoryLabel: 'Apresentação Cultural',
    location: 'Ruas de Dracena — SP',
    description: 'Batucada ao vivo de rua com naipes de surdo, repique e caixas animando centenas de atletas e munícipes.',
    image: 'images/batucaki/corrida_oab_ritmistas_acao.webp',
    instagramUrls: [
      'https://www.instagram.com/click_e_run_photography/p/Dcg6ZemOQQ1/',
      'https://www.instagram.com/bloco.batucaki/p/Db1SsOMtH18/'
    ]
  },
  {
    id: 'futsal-lnf',
    date: '2025 / 2026',
    title: 'Bateria na Liga Nacional de Futsal (LNF)',
    category: 'apresentacoes',
    categoryLabel: 'Apresentação Cultural',
    location: 'Ginásio Alaor Ferrari, Dracena — SP',
    description: 'Pressão rítmica dos surdos e caixas contagiando a torcida do Dracena Futsal nos jogos de expressão nacional.',
    image: 'images/batucaki/futsal_lnf_dracena.webp',
    instagramUrls: [
      'https://www.instagram.com/p/DKvMlEaPHQ9/',
      'https://www.instagram.com/p/DNPHHEXujM3/'
    ]
  },
  {
    id: 'carnaval-praca-alegria',
    date: '15 de Fevereiro de 2026',
    title: 'Bateria Show de Carnaval na Praça Central',
    category: 'carnaval',
    categoryLabel: 'Carnaval & Comunidade',
    location: 'Praça Arthur Pagnozzi, Dracena — SP',
    description: 'Grande celebração carnavalesca a céu aberto reunindo centenas de famílias e foliões ao som contagiante da bateria.',
    image: 'images/batucaki/carnaval_praca_alegria.jpg',
    instagramUrls: [
      'https://www.instagram.com/p/DU14rK4jqZ1/',
      'https://www.instagram.com/p/DUyzECEj1qf/'
    ]
  },
  {
    id: 'consciencia-negra-2025',
    date: '20 de Novembro de 2025',
    title: 'Dia da Consciência Negra 2025',
    category: 'apresentacoes',
    categoryLabel: 'Apresentação Cultural',
    location: 'Dracena / Região',
    description: 'Celebração com batucada pesada, reverência às matrizes africanas e integração com a comunidade regional.',
    image: 'images/batucaki/consciencia_negra_2025.jpg',
    instagramUrls: [
      'https://www.instagram.com/p/DQ8tZdgjn05/',
      'https://www.instagram.com/p/DRennOHjlpq/'
    ]
  },
  {
    id: 'cult-sp-estrada',
    date: '30 de Novembro de 2025',
    title: 'Circuito Cult SP na Estrada',
    category: 'apresentacoes',
    categoryLabel: 'Apresentação Cultural',
    location: 'Colégio Isaac, Dracena — SP',
    description: 'Apresentação no circuito cultural oficial do Estado de São Paulo, destacando a expressividade da percussão afro-brasileira.',
    image: 'images/batucaki/cult_sp_estrada.webp',
    instagramUrls: [
      'https://www.instagram.com/p/DRmec2hDhZr/',
      'https://www.instagram.com/p/DRvY-YMj_L_/'
    ]
  },
  {
    id: 'natal-praca-dracena',
    date: '19 de Dezembro de 2025',
    title: 'Apresentação Cultural de Natal na Praça',
    category: 'carnaval',
    categoryLabel: 'Carnaval & Comunidade',
    location: 'Praça Arthur Pagnozzi, Dracena — SP',
    description: 'Espetáculo natalino na praça central, democratizando a música percussiva e aproximando gerações.',
    image: 'images/batucaki/natal_praca_dracena.webp',
    instagramUrls: [
      'https://www.instagram.com/p/DSeAeV1julh/',
      'https://www.instagram.com/p/DSfokwHjh_w/'
    ]
  },
  {
    id: 'aniversario-ritmista',
    date: '2025 / 2026',
    title: 'Ritmistas e Comunidade Batucaki',
    category: 'aulas-ensaios',
    categoryLabel: 'Aulas & Ensaios',
    location: 'AABB e Espaços Culturais',
    description: 'Ambiente de companheirismo e celebração entre os ritmistas que constroem o coletivo semanalmente.',
    image: 'images/batucaki/aniversario_ritmista.webp',
    instagramUrls: [
      'https://www.instagram.com/bloco.batucaki/p/DdtY8HuSOBy/'
    ]
  },
  {
    id: 'oficina-aabb-ritmo',
    date: 'Toda Sexta às 19h30',
    title: 'Oficinas Gratuitas e Formação Rítmica na AABB',
    category: 'aulas-ensaios',
    categoryLabel: 'Aulas & Ensaios',
    location: 'AABB de Dracena — SP',
    description: 'Aulas abertas acolhendo pessoas de todas as idades sem necessidade de instrumento próprio ou conhecimento musical prévio.',
    image: 'images/batucaki/oficina_aabb_ritmo.jpg',
    instagramUrls: [
      'https://www.instagram.com/bloco.batucaki/reel/DbdnxTeOQmn/'
    ]
  },
  {
    id: 'ensaio-praca-coletivo',
    date: 'Atividade Periódica',
    title: 'Ensaios Abertos e Ocupação Cultural da Praça',
    category: 'aulas-ensaios',
    categoryLabel: 'Aulas & Ensaios',
    location: 'Praça Arthur Pagnozzi e Praças Regionais',
    description: 'Ocupação do espaço urbano com música ao vivo, proporcionando acesso livre à cultura percussiva para transeuntes e famílias.',
    image: 'images/batucaki/ensaio_praca_coletivo.jpg',
    instagramUrls: [
      'https://www.instagram.com/p/DLRKCCCI2_Y/',
      'https://www.instagram.com/p/DLJYGP7oYwj/'
    ]
  },
  {
    id: 'integrantes-destaque',
    date: '2025 / 2026',
    title: 'Protagonismo e União dos Integrantes',
    category: 'carnaval',
    categoryLabel: 'Carnaval & Comunidade',
    location: 'Dracena — SP',
    description: 'A força coletiva e a liderança comunitária que mantém viva a percussão carnavalesca durante todo o ano.',
    image: 'images/batucaki/integrantes_destaque.webp',
    instagramUrls: [
      'https://www.instagram.com/bloco.batucaki/p/DcQhso7hBNl/'
    ]
  },
  {
    id: 'igualdade-racial',
    date: '02 de Junho de 2025',
    title: 'Conferência Regional de Igualdade Racial',
    category: 'apresentacoes',
    categoryLabel: 'Apresentação Cultural',
    location: 'Dracena — SP',
    description: 'Apresentação cultural em parceria com Filhos de Abaeté e OAB Dracena, unindo batucada e consciência social.',
    image: 'images/batucaki/igualdade_racial_2025.webp',
    instagramUrls: [
      'https://www.instagram.com/p/DLeGhxyIxOu/'
    ]
  },
  {
    id: 'santa-mercedes',
    date: '2025 / 2026',
    title: 'Circulação Cultural em Santa Mercedes',
    category: 'apresentacoes',
    categoryLabel: 'Apresentação Cultural',
    location: 'Santa Mercedes — SP',
    description: 'Intercâmbio cultural e batucada com o grupo Filhos da Liberdade e coletivos da Nova Alta Paulista.',
    image: 'images/batucaki/santa_mercedes.jpg',
    instagramUrls: [
      'https://www.instagram.com/p/DbV0rtCucRX/'
    ]
  },
  {
    id: 'fundacao-aabb',
    date: 'Maio de 2025',
    title: 'Fundação do Bloco Batucaki',
    category: 'aulas-ensaios',
    categoryLabel: 'Aulas & Ensaios',
    location: 'AABB de Dracena — SP',
    description: 'Início oficial das atividades regulares de formação percussiva e nascimento do bloco.',
    image: 'images/batucaki/fundacao_maio_2025.jpg',
    instagramUrls: [
      'https://www.instagram.com/p/DKnbd1hO6xi/',
      'https://www.instagram.com/p/DKndoDHPoGN/',
      'https://www.instagram.com/p/DKnkvJVvusN/'
    ]
  }
];
