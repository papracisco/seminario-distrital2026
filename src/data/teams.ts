import { Committee } from '../types';

export const COMMITTEES_DATA: Committee[] = [
  {
    id: 'junta-distrital',
    name: 'Junta Distrital',
    iconName: 'Crown',
    description: 'Liderazgo ejecutivo y directivo del Distrito 4370 que guía la visión estratégica, objetivos institucionales y desarrollo integral del seminario.',
    color: '#1B365D',
    members: [
      { id: 'jd-1', name: 'Miguel Dos Santos', role: 'Junta Distrital D4370', initials: 'MD', photoUrl: '/integrantesComite/miguel dos santos.jpge' },
      { id: 'jd-2', name: 'Julio Sanchez', role: 'Junta Distrital D4370', initials: 'JS', photoUrl: '/integrantesComite/julio sanchez.jpge' },
      { id: 'jd-3', name: 'Giovanna Camargo', role: 'Junta Distrital D4370', initials: 'GC', photoUrl: '/integrantesComite/Giovanna Camargo.jpge' },
      { id: 'jd-4', name: 'Estefany Diaz', role: 'Junta Distrital D4370', initials: 'ED', photoUrl: '/integrantesComite/estefany diaz.jpg' },
      { id: 'jd-5', name: 'Julio Villamizar', role: 'Junta Distrital D4370', initials: 'JV', photoUrl: '/integrantesComite/julio villamizar.jpge' }
    ]
  },
  {
    id: 'desarrollo-web',
    name: 'Desarrollo Web',
    iconName: 'Code',
    description: 'Responsable del diseño, programación, pasarela de registro y mantenimiento técnico de la plataforma oficial del evento.',
    color: '#0284C7',
    members: [
      { 
        id: 'web-1', 
        name: 'Jose Francisco Parada', 
        role: 'Comité de Desarrollo Web', 
        initials: 'JP', 
        photoUrl: '/jose-parada.jpg',
        photoStyle: {
          objectPosition: 'center 20%',
          scale: 1.35
        }
      },
      { id: 'web-2', name: 'Charles Fernández', role: 'Comité de Desarrollo Web', initials: 'CF', photoUrl: '/integrantesComite/chars.jpeg' },
      { id: 'web-3', name: 'Adolfo Torres', role: 'Comité de Desarrollo Web', initials: 'AT', photoUrl: '/integrantesComite/adolfo.jpg' }
    ]
  },
  {
    id: 'imagen-publica',
    name: 'IP (Imagen Pública)',
    iconName: 'Megaphone',
    description: 'Encargados de la identidad gráfica institucional, cobertura audiovisual, redes sociales, fotografía y relaciones con medios.',
    color: '#D91B5C',
    members: [
      { id: 'ip-1', name: 'Gabriel Hernandez', role: 'Comité de Imagen Pública', initials: 'GH', photoUrl: 'integrantesComite/gabriel.jpeg' },
      { id: 'ip-2', name: 'Isabel Avendaño', role: 'Comité de Imagen Pública', initials: 'IA', photoUrl: 'integrantesComite/isa.jpeg' },
      { id: 'ip-3', name: 'Andrea Leon', role: 'Comité de Imagen Pública', initials: 'AL', photoUrl: 'integrantesComite/andrea.jpeg' },
      { id: 'ip-4', name: 'Giovanna Pineda', role: 'Comité de Imagen Pública', initials: 'GP', photoUrl: 'integrantesComite/giovanna.jpeg' }
    ]
  },
  {
    id: 'tesoreria',
    name: 'Tesorería',
    iconName: 'Coins',
    description: 'Administración de presupuestos, conciliación bancaria de la inscripción, pagos de delegaciones y finanzas transparentes del seminario.',
    color: '#F5A623',
    members: [
      { id: 'tes-1', name: 'Jose Pong', role: 'Comité de Tesorería', initials: 'JP' ,photoUrl: '/integrantesComite/pong.jpeg' },
      { id: 'tes-2', name: 'Omar Sanchez', role: 'Comité de Tesorería', initials: 'OS' ,photoUrl: '/integrantesComite/omar.jpeg' },
      { id: 'tes-3', name: 'Maria Fernanda Leañez', role: 'Comité de Tesorería', initials: 'ML' ,photoUrl: '/integrantesComite/mafer.png' },
      { id: 'tes-4', name: 'Maria Eugenia Navarrete', role: 'Comité de Tesorería', initials: 'MN' ,photoUrl: '/integrantesComite/maru.jpeg' }
    ]
  },
  {
    id: 'protocolo-maceria',
    name: 'Protocolo y Macería',
    iconName: 'Award',
    description: 'Cumplimiento del orden protocolar rotario, tiempos de plenarias, acreditaciones solemnes, maestros de ceremonia y homenajes.',
    color: '#1B365D',
    members: [
      { id: 'prot-1', name: 'Omar Sanchez', role: 'Comité de Protocolo y Macería', initials: 'OS' ,photoUrl: '/integrantesComite/omar.jpeg' },
      { id: 'prot-2', name: 'Elias Bermudez', role: 'Comité de Protocolo y Macería', initials: 'EB' ,photoUrl: '/integrantesComite/elias.jpeg' },
      { id: 'prot-3', name: 'Andrew Barrios', role: 'Comité de Protocolo y Macería', initials: 'AB' ,photoUrl: '/integrantesComite/andrew.jpeg' }
    ]
  },
  {
    id: 'logistica',
    name: 'Logística',
    iconName: 'Truck',
    description: 'Gestión de hospedaje en Hotel Klein Dorf, alimentación, montaje técnico de salones, traslados y distribución de kits.',
    color: '#00875A',
    members: [
      { id: 'log-1', name: 'Isabel Avendaño', role: 'Comité de Logística', initials: 'IA' ,photoUrl: '/integrantesComite/isa.jpeg' },
      { id: 'log-2', name: 'Adolfo Torres', role: 'Comité de Logística', initials: 'AT' ,photoUrl: '/integrantesComite/adolfo.jpg' },
      { id: 'log-3', name: 'Gabriel Hernandez', role: 'Comité de Logística', initials: 'GH' ,photoUrl: '/integrantesComite/gabriel.jpeg' },
      { id: 'log-4', name: 'Nicolth Romero', role: 'Comité de Logística', initials: 'NR' ,photoUrl: '/integrantesComite/nico.jpeg' }
    ]
  },
  {
    id: 'dresscode',
    name: 'Dresscode',
    iconName: 'Shirt',
    description: 'Diseño, coordinación y lineamientos de código de vestimenta para cada sesión, plenaria académica y gala nocturna del seminario.',
    color: '#8B5CF6',
    members: [
      { id: 'dc-1', name: 'Isabel Avendaño', role: 'Comité de Dresscode', initials: 'IA' ,photoUrl: '/integrantesComite/isa.jpeg' },
      { id: 'dc-2', name: 'Sofia Perez', role: 'Comité de Dresscode', initials: 'SP' ,photoUrl: '/integrantesComite/sofi.jpeg' },
      { id: 'dc-3', name: 'Victoria Becerra', role: 'Comité de Dresscode', initials: 'VB' ,photoUrl: '/integrantesComite/victoria.jpeg' },
      { id: 'dc-4', name: 'Maria Eugenia Navarrete', role: 'Comité de Dresscode', initials: 'MN' ,photoUrl: '/integrantesComite/maru.jpeg' }
    ]
  },
  {
    id: 'primeros-auxilios',
    name: 'Primeros Auxilios',
    iconName: 'HeartPulse',
    description: 'Atención primaria de salud, prevención médica, protocolos de bienestar y respuesta rápida ante contingencias durante todo el evento.',
    color: '#EF4444',
    members: [
      { id: 'pa-1', name: 'Nicolth Romero', role: 'Comité de Primeros Auxilios', initials: 'NR' ,photoUrl: '/integrantesComite/nico.jpeg' },
      { id: 'pa-2', name: 'Maria Veronica Torres', role: 'Comité de Primeros Auxilios', initials: 'MT' ,photoUrl: '/integrantesComite/maka.jpg' },
      { id: 'pa-3', name: 'Angelo Foglia', role: 'Comité de Primeros Auxilios', initials: 'AF' ,photoUrl: '/integrantesComite/angelo.jpeg' }
    ]
  }
];

export default COMMITTEES_DATA;
