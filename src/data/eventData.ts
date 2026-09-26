import { PillarItem, KitItem, ScheduleDay, FAQItem, Speaker, Committee } from '../types';

export const HERO_SLIDES = [
  {
    image: '/hero-tovar-letrero.jpg',
    title: 'Bienvenidos a la Colonia Tovar',
    subtitle: 'El icónico letrero alpino y la tradición entre las montañas de Aragua',
    tag: 'Destino Mágico'
  },
  {
    image: '/hero-flores-tovar.jpg',
    title: 'Flores y Paisajes de Colonia Tovar',
    subtitle: 'Colores vibrantes, naturaleza y clima fresco de montaña',
    tag: 'Naturaleza & Clima'
  },
  {
    image: '/hero-hotel-kleindorf.jpg',
    title: 'Hotel Klein Dorf, Sede Oficial',
    subtitle: 'Arquitectura alpina entre la neblina para tres días inolvidables',
    tag: 'Sede Oficial 2026'
  }
];

export const PILLARS_DATA: PillarItem[] = [
  {
    id: 'sol-naciente',
    name: 'El Sol Naciente',
    subtitle: 'Esperanza e inspiración para servir',
    color: '#F5A623',
    accentBg: 'rgba(245, 166, 35, 0.08)',
    badgeBorder: '#F5A623',
    textColor: '#9A5B00',
    iconName: 'Sun',
    description: 'Representa el despertar de una nueva etapa de liderazgo distrital, la energía renovada de cada club y la chispa que enciende proyectos de servicio de alto impacto en nuestras comunidades.',
    quote: '“El amanecer de nuevas ideas que transforman realidades.”',
    keyPoints: [
      'Visión estratégica para líderes de clubes',
      'Talleres de innovación social y formulación de proyectos',
      'Intercambio de mejores prácticas interdistritales'
    ]
  },
  {
    id: 'montanas',
    name: 'Las Montañas',
    subtitle: 'El lugar de encuentro y reconexión',
    color: '#00875A',
    accentBg: 'rgba(0, 135, 90, 0.08)',
    badgeBorder: '#00875A',
    textColor: '#006644',
    iconName: 'Mountain',
    description: 'El abrazo sereno de la Cordillera de la Costa nos brinda la atmósfera idónea para desconectarnos de la rutina urbana y enfocarnos en la introspección, la camaradería sincera y el trabajo en equipo.',
    quote: '“En la altura de la montaña forjamos la solidez de nuestra unión.”',
    keyPoints: [
      'Actividades de integración al aire libre',
      'Dinámicas de resiliencia y cohesión de equipos',
      'Espacios de descanso y conexión consciente con la naturaleza'
    ]
  },
  {
    id: 'estructura-alemana',
    name: 'Estructura Alemana',
    subtitle: 'Cultura, tradición y hospitalidad',
    color: '#D91B5C',
    accentBg: 'rgba(217, 27, 92, 0.08)',
    badgeBorder: '#D91B5C',
    textColor: '#B01046',
    iconName: 'Landmark',
    description: 'Homenaje a la historia del enclave colonial de la Tovar: la disciplina de su carpintería tradicional de entramado (Fachwerk), la calidez de su gente y el legado de construir estructuras firmes que perduran por generaciones.',
    quote: '“Bases sólidas, tradiciones vivas y hospitalidad que abriga.”',
    keyPoints: [
      'Alojamiento y sesiones en el histórico Hotel Klein Dorf',
      'Cena típica con degustación y música tradicional',
      'Construcción de bases institucionales duraderas para nuestros clubes'
    ]
  },
  {
    id: 'flor-edelweiss',
    name: 'Flor Edelweiss',
    subtitle: 'Resiliencia, pureza y esencia de liderazgo',
    color: '#0284C7',
    accentBg: 'rgba(2, 132, 199, 0.08)',
    badgeBorder: '#0284C7',
    textColor: '#0369A1',
    iconName: 'Flower2',
    description: 'La flor de las cumbres alpinas que florece en los terrenos más desafiantes sin perder su pureza. Simboliza la entereza ética de los rotaractianos para superar adversidades y liderar con nobleza.',
    quote: '“Florecer con honor donde pocos se atreven a llegar.”',
    keyPoints: [
      'Liderazgo ético guiado por la Prueba Cuádruple',
      'Gestión emocional y empática en tiempos de cambio',
      'Red de mentoría distrital para jóvenes profesionales'
    ]
  }
];

export const KIT_ITEMS: KitItem[] = [
  {
    id: 'franela-oficial',
    title: 'Franela Oficial del Seminario',
    category: 'Indumentaria',
    badge: '100% Algodón Peinado',
    badgeColor: '#D91B5C',
    icon: 'Shirt',
    description: 'Diseño exclusivo conmemorativo con tipografía institucional, suave al tacto, corte unisex y serigrafía de alta durabilidad.',
    highlight: 'Tallas S a XXL disponibles',
    tag: 'Indispensable'
  },
  {
    id: 'libreta-notas',
    title: 'Libreta de Trabajo & Notas',
    category: 'Herramientas',
    badge: 'Edición Pasta Dura',
    badgeColor: '#00875A',
    icon: 'BookOpen',
    description: 'Cuaderno ecológico anillado con hojas de gramaje especial, separadores por pilar del evento y guía rápida de estatutos distritales.',
    highlight: 'Incluye bolígrafo de bambú',
    tag: 'Académico'
  },
  {
    id: 'credencial-qr',
    title: 'Credencial Oficial con Lanyard',
    category: 'Acreditación',
    badge: 'Acceso Total & QR',
    badgeColor: '#1B365D',
    icon: 'IdCard',
    description: 'Pase plastificado de alta resistencia con identificación personalizada, club de procedencia y código QR para control de plenarias.',
    highlight: 'Lanyard satinado sublimado',
    tag: 'Seguridad'
  },
  {
    id: 'pin-conmemorativo',
    title: 'Pin Metálico Conmemorativo',
    category: 'Coleccionable',
    badge: 'Esmaltado en Relieve',
    badgeColor: '#F5A623',
    icon: 'Award',
    description: 'Insignia metálica fundida en oro viejo con el escudo oficial Colonia Tovar 2026 y cierre mariposa de seguridad.',
    highlight: 'Serie limitada numerada',
    tag: 'Colección'
  },
  {
    id: 'tote-bag',
    title: 'Tote Bag Institucional',
    category: 'Accesorios',
    badge: 'Lona de Alta Resistencia',
    badgeColor: '#0284C7',
    icon: 'ShoppingBag',
    description: 'Bolso ecológico espacioso con asas reforzadas para trasladar tu material de estudio y recuerdos durante todo el fin de semana.',
    highlight: 'Resistente al agua',
    tag: 'Ecológico'
  },
  {
    id: 'termo-oficial',
    title: 'Termo Térmico Oficial',
    category: 'Bienestar',
    badge: 'Acero Inoxidable Doble Capa',
    badgeColor: '#D91B5C',
    icon: 'Coffee',
    description: 'Botella térmica de 500 ml que conserva bebidas calientes o frías hasta por 12 horas, ideal para las mañanas frescas de la Colonia Tovar.',
    highlight: 'Libre de BPA',
    tag: 'Premium'
  },
  {
    id: 'gorra-oficial',
    title: 'Gorra Bordada Conmemorativa',
    category: 'Indumentaria',
    badge: 'Bordado 3D',
    badgeColor: '#00875A',
    icon: 'Crown',
    description: 'Gorra estructurada de 6 paneles en color azul marino con el logo del evento bordado en relieve y broche ajustable metálico.',
    highlight: 'Talla única ajustable',
    tag: 'Exclusivo'
  }
];

export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    day: 'Día 1',
    date: 'Viernes 27 de Noviembre',
    summary: 'Acreditación, bienvenida en la montaña y ceremonia inaugural.',
    activities: [
      { time: '14:00 - 17:00', title: 'Check-in y Acreditación de Delegaciones en Hotel Klein Dorf', type: 'Registro', location: 'Lobby Principal' },
      { time: '17:30 - 19:00', title: 'Plenaria de Apertura: “El Despertar del Sol Naciente”', type: 'Protocolar', location: 'Salón Tovar' },
      { time: '19:30 - 22:00', title: 'Cena de Bienvenida y Noche de Conexión Rotaria', type: 'Social', location: 'Terraza de las Montañas' }
    ]
  },
  {
    day: 'Día 2',
    date: 'Sábado 28 de Noviembre',
    summary: 'Jornada central de capacitación intensiva, paneles de liderazgo y cena tradicional.',
    activities: [
      { time: '08:30 - 10:30', title: 'Módulo I: Liderazgo Resiliente y Prueba Cuádruple Moderna', type: 'Formación', location: 'Salón Tovar' },
      { time: '11:00 - 13:00', title: 'Módulo II: Gestión de Proyectos de Impacto Distrital', type: 'Formación', location: 'Salas Temáticas A y B' },
      { time: '13:00 - 14:30', title: 'Almuerzo de Fraternidad', type: 'Conexión', location: 'Restaurante Central' },
      { time: '15:00 - 17:30', title: 'Taller Práctico: Estructuras que Trascienden', type: 'Formación', location: 'Salón Tovar' },
      { time: '20:00 - 00:00', title: 'Noche Típica Alemana: Tradición, Música y Reconocimientos', type: 'Social', location: 'Gran Salón Klein Dorf' }
    ]
  },
  {
    day: 'Día 3',
    date: 'Domingo 29 de Noviembre',
    summary: 'Plenaria distrital de acuerdos, conclusiones y acto de clausura.',
    activities: [
      { time: '09:00 - 11:30', title: 'Asamblea Distrital y Compromiso 2026-2027', type: 'Protocolar', location: 'Salón Tovar' },
      { time: '11:30 - 13:00', title: 'Ceremonia de Clausura y Foto Oficial de Delegaciones', type: 'Protocolar', location: 'Jardines Klein Dorf' },
      { time: '13:00 - 14:30', title: 'Brindis de Despedida y Retorno a los Clubes', type: 'Social', location: 'Mirador Principal' }
    ]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: '¿A quién está dirigido el Seminario de Aprendizaje Distrital 2026?',
    answer: 'Está abierto a todos los socios, aspirantes e invitados de clubes Rotaract e interactianos del Distrito 4370, así como rotarios padrinos y líderes jóvenes comprometidos con el servicio comunitario.',
    category: 'General'
  },
  {
    question: '¿Qué incluye la inscripción de preventa?',
    answer: 'La inscripción cubre el acceso total a las conferencias y talleres los 3 días, kit de bienvenida con todos los souvenirs oficiales, certificado digital con aval distrital, alimentación programada y participación en las actividades sociales.',
    category: 'Inscripción'
  },
  {
    question: '¿Dónde se encuentra ubicado el Hotel Klein Dorf y cómo es el clima?',
    answer: 'El Hotel Klein Dorf está situado en el corazón de la Colonia Tovar, estado Aragua. El clima es templado de montaña con temperaturas entre 12°C y 20°C, por lo que recomendamos llevar abrigo adecuado para las tardes y noches.',
    category: 'Logística'
  },
  {
    question: '¿Existe opción de transporte organizado para las delegaciones?',
    answer: 'El comité organizador dispondrá de puntos de encuentro y coordinación de traslados compartidos desde Maracay y Caracas. Los detalles se compartirán directamente en los grupos oficiales de delegados.',
    category: 'Transporte'
  },
  {
    question: '¿Cómo garantizo mi cupo durante la preventa?',
    answer: 'Puedes hacer clic en el botón "Inscribirme" o contactar directamente al comité vía WhatsApp para registrar tus datos y formalizar tu pago antes del cierre de cupos preferenciales.',
    category: 'Preventa'
  }
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    id: 'ponente-1',
    name: 'Nombre del Ponente Confirmado',
    role: 'Equipo de Capacitación y Liderazgo',
    organization: 'FACILITADORES DISTRITALES D4370',
    topic: 'Gobernanza, Proyectos Globales y Expansión Rotaractiana',
    tag: 'FORMACIÓN CLAVE',
    color: '#00875A',
    bio: 'Biografía y trayectoria profesional del líder inspirador. Especialista en gestión de clubes, desarrollo de capacidades institucionales y diseño de proyectos de servicio de impacto sostenible bajo los lineamientos de Rotary International.',
    socials: {
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/',
      email: 'ponente1@distrito4370.org'
    }
  },
  {
    id: 'ponente-2',
    name: 'Nombre del Ponente Confirmado',
    role: 'Especialistas Invitados',
    organization: 'LÍDERES DE INNOVACIÓN COMUNITARIA',
    topic: 'Metodologías Ágiles para el Impacto Social Sostenible',
    tag: 'ESTRATEGIA',
    color: '#F5A623',
    bio: 'Biografía y trayectoria profesional del líder inspirador. Consultor y facilitador en metodologías de innovación social, resolución colaborativa de problemas y recaudación estratégica de fondos para el empoderamiento juvenil.',
    socials: {
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/',
      email: 'ponente2@distrito4370.org'
    }
  },
  {
    id: 'ponente-3',
    name: 'Nombre del Ponente Confirmado',
    role: 'Comités Distritales Rotary International',
    organization: 'MENTORES ROTARIOS DE TRAYECTORIA',
    topic: 'Ética y Liderazgo Trascendente: La Prueba Cuádruple en Acción',
    tag: 'INSPIRACIÓN',
    color: '#D91B5C',
    bio: 'Biografía y trayectoria profesional del líder inspirador. Amplia experiencia guiando a generaciones de líderes rotaractianos en gobernanza ética, mentoría generacional y la aplicación práctica de los valores rotarios en el ámbito profesional.',
    socials: {
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/',
      email: 'ponente3@distrito4370.org'
    }
  }
];

export const COMMITTEES_DATA: Committee[] = [
  {
    id: 'desarrollo-web',
    name: 'Desarrollo Web',
    iconName: 'Code',
    description: 'Responsable del diseño, programación, pasarela de registro y mantenimiento técnico de la plataforma oficial del evento.',
    color: '#0284C7',
    members: [
      { id: 'web-1', name: 'Nombre del Miembro', role: 'Coordinador de Plataforma', initials: 'DW' },
      { id: 'web-2', name: 'Nombre del Miembro', role: 'Desarrollador Frontend', initials: 'DW' },
      { id: 'web-3', name: 'Nombre del Miembro', role: 'Infraestructura & Soporte', initials: 'DW' },
      { id: 'web-4', name: 'Nombre del Miembro', role: 'Diseñador UI/UX', initials: 'DW' }
    ]
  },
  {
    id: 'imagen-publica',
    name: 'IP (Imagen Pública)',
    iconName: 'Megaphone',
    description: 'Encargados de la identidad gráfica institucional, cobertura audiovisual, redes sociales, fotografía y relaciones con medios.',
    color: '#D91B5C',
    members: [
      { id: 'ip-1', name: 'Nombre del Miembro', role: 'Directora de Imagen Pública', initials: 'IP' },
      { id: 'ip-2', name: 'Nombre del Miembro', role: 'Diseñador Gráfico & Branding', initials: 'IP' },
      { id: 'ip-3', name: 'Nombre del Miembro', role: 'Fotografía & Audiovisual', initials: 'IP' },
      { id: 'ip-4', name: 'Nombre del Miembro', role: 'Community Manager', initials: 'IP' }
    ]
  },
  {
    id: 'tesoreria',
    name: 'Tesorería',
    iconName: 'Coins',
    description: 'Administración de presupuestos, conciliación bancaria de la preventa, pagos de delegaciones y finanzas transparentes del seminario.',
    color: '#F5A623',
    members: [
      { id: 'tes-1', name: 'Nombre del Miembro', role: 'Tesorero General del Evento', initials: 'TE' },
      { id: 'tes-2', name: 'Nombre del Miembro', role: 'Control de Pagos y Facturación', initials: 'TE' },
      { id: 'tes-3', name: 'Nombre del Miembro', role: 'Auditor Financiero', initials: 'TE' }
    ]
  },
  {
    id: 'logistica',
    name: 'Logística',
    iconName: 'Truck',
    description: 'Gestión de hospedaje en Hotel Klein Dorf, alimentación, montaje técnico de salones, traslados y distribución de kits.',
    color: '#00875A',
    members: [
      { id: 'log-1', name: 'Nombre del Miembro', role: 'Jefe General de Logística y Sede', initials: 'LG' },
      { id: 'log-2', name: 'Nombre del Miembro', role: 'Coordinador de Hospedaje & Habitaciones', initials: 'LG' },
      { id: 'log-3', name: 'Nombre del Miembro', role: 'Coordinador de Catering & Alimentación', initials: 'LG' },
      { id: 'log-4', name: 'Nombre del Miembro', role: 'Encargado de Kits y Equipamiento', initials: 'LG' }
    ]
  },
  {
    id: 'protocolo-maceria',
    name: 'Protocolo / Macería',
    iconName: 'Award',
    description: 'Cumplimiento del orden protocolar rotario, tiempos de plenarias, acreditaciones solemnes, maestros de ceremonia y homenajes.',
    color: '#1B365D',
    members: [
      { id: 'prot-1', name: 'Nombre del Miembro', role: 'Maceros Oficiales del Seminario', initials: 'PM' },
      { id: 'prot-2', name: 'Nombre del Miembro', role: 'Maestro de Ceremonias & Vocería', initials: 'PM' },
      { id: 'prot-3', name: 'Nombre del Miembro', role: 'Acreditación y Atención a Delegados', initials: 'PM' }
    ]
  }
];

