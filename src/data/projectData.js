/**
 * Dados Oficiais do Projeto Cultural e do Bloco Batucaki
 * Fonte: Edital PNAB 01/2026 de Tupi Paulista / SP e Portfólio Oficial
 */

export const projectDetails = {
  name: 'Tupi em Consciência: Samba, Memória e Vozes Negras',
  category: 'Música',
  date: '2026-11-20',
  displayDate: '20 de Novembro de 2026',
  time: '20:00',
  duration: '2 horas',
  city: 'Tupi Paulista — SP',
  location: 'Praça Prefeito Dr. Ilton da Costa Oliveira',
  targetAudience: '100 a 200 pessoas (famílias, jovens, idosos e comunidade regional)',
  isFree: true,
  edital: 'Edital de Chamamento Público nº 01/2026 — PNAB Tupi Paulista',
  proponent: 'Leonardo Pereira dos Santos de Oliveira'
};

export const speakers = [
  {
    id: 'ricardo-reis',
    name: 'Dr. Ricardo Aparecido dos Reis',
    role: 'Advogado e Ativista Social',
    organization: 'Comissão de Igualdade Racial / OAB Regional',
    summary: 'Atuação jurídica e social destacada na defesa dos direitos civis, igualdade racial e conscientização cidadã na região da Nova Alta Paulista.',
    badge: 'Direito & Cidadania',
    accentColor: 'from-amber-500 to-amber-700'
  },
  {
    id: 'deocelia-souza',
    name: 'Profª Deocélia Batista de Souza',
    role: 'Professora e Educadora',
    organization: 'Rede Pública de Ensino Regional',
    summary: 'Dedicação de décadas à educação pública, valorização da história e cultura afro-brasileira nas salas de aula e empoderamento da juventude negra.',
    badge: 'Educação & Memória',
    accentColor: 'from-red-500 to-red-700'
  },
  {
    id: 'mestre-jaba',
    name: 'Mestre Jabá',
    role: 'Mestre de Capoeira e Coordenador Cultural',
    organization: 'Centro Cultural Dendê Maré',
    summary: 'Liderança tradicional na preservação da capoeira, ancestralidade, matrizes africanas e integração comunitária de crianças e jovens através do esporte e da arte.',
    badge: 'Tradição & Ancestralidade',
    accentColor: 'from-amber-600 to-red-600'
  }
];

export const culturalCommitments = [
  {
    icon: '🥁',
    title: 'Democratização Cultural',
    description: 'Acesso 100% gratuito e acolhedor a qualquer pessoa que queira aprender percussão, sem necessidade de experiência prévia ou instrumento próprio.'
  },
  {
    icon: '✊🏿',
    title: 'Memória & Identidade Afro-Brasileira',
    description: 'Celebração das raízes do samba e dos ritmos afro-brasileiros como ferramentas vivas de combate ao preconceito e resgate histórico.'
  },
  {
    icon: '🏙️',
    title: 'Ocupação do Espaço Público',
    description: 'Levar a arte e a música para as praças públicas e ruas, aproximando o carnaval e o samba do cotidiano de famílias e cidadãos.'
  },
  {
    icon: '🔄',
    title: 'Formação Rítmica Contínua',
    description: 'Encontros semanais de formação técnica e rítmica, preparando novos instrumentistas e consolidando uma bateria sólida na região.'
  },
  {
    icon: '🤝',
    title: 'Circulação & Parcerias Regionais',
    description: 'Participação ativa em circuitos culturais do Estado (Cult SP), conferências de igualdade racial, eventos esportivos de ponta (LNF) e ações sociais.'
  }
];

export const conductorBio = {
  name: 'Clodoaldo Carvalho de Jesus',
  title: 'Regente da Bateria & Mestre de Cerimônias',
  subtitle: 'Professor de Educação Musical, Pedagogo e Multi-instrumentista',
  degrees: [
    'Graduado em Pedagogia pela UNIFADRA (2002)',
    'Graduado em Tecnologia em Música pela UNOESTE (2005)'
  ],
  experience: [
    'Iniciação musical na escola de samba Mocidade Independente de Carapicuíba',
    'Segundo regente da Fanfarra Leônidas Ramos de Oliveira e regente da E.E. Emília Diogo do Amaral (Tupi Paulista)',
    'Professor de educação musical no projeto Criança Feliz (Dracena)',
    'Ex-supervisor do Projeto Guri (Regional Presidente Prudente)',
    'Professor de percussão do bloco Calangos d\'Oeste'
  ],
  currentRoles: [
    'Professor de Educação Musical da rede municipal de Dracena',
    'Professor de bateria, percussão e canto na Instituição Artística Guiomar Novaes',
    'Regente da fanfarra de percussão Leusi Gardini da APAE de Dracena',
    'Professor de percussão e regente do Bloco Carnavalesco Batucaki'
  ]
};
