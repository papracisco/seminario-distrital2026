import { Committee } from '../types';

export const COMMITTEES_DATA: Committee[] = [
  {
    id: 'junta-distrital',
    name: 'Junta Distrital',
    iconName: 'Crown',
    description: 'Liderazgo ejecutivo y directivo del Distrito 4370 que guía la visión estratégica, objetivos institucionales y desarrollo integral del seminario.',
    color: '#1B365D',
    members: [
      { id: 'jd-1', name: 'Miguel Dos Santos', role: 'Junta Distrital D4370', initials: 'MD', photoUrl: 'miguel dos santos.jpeg', photoStyle: {
        objectPosition: 'center top', 
        scale: 1.1                   
      } },
      { id: 'jd-2', name: 'Julio Sanchez', role: 'Junta Distrital D4370', initials: 'JS', photoUrl: 'julio sanchez.jpeg', photoStyle: {
        objectPosition: 'center top', 
        scale: 1.1                   
      } },
      { id: 'jd-3', name: 'Giovanna Camargo', role: 'Junta Distrital D4370', initials: 'GC', photoUrl: 'Giovanna Camargo.jpeg', photoStyle: {
        objectPosition: 'center top', 
        scale: 1.1                   
      } },
      { id: 'jd-4', name: 'Estefany Diaz', role: 'Junta Distrital D4370', initials: 'ED', photoUrl: 'estefany diaz.jpg', photoStyle: {
        objectPosition: 'center top', 
        scale: 1.1                   
      } },
      { id: 'jd-5', name: 'Julio Villamizar', role: 'Junta Distrital D4370', initials: 'JV', photoUrl: 'julio villamizar.jpeg', photoStyle: {
        objectPosition: 'center top', 
      } }
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
          objectPosition: 'center top', 
          scale: 1.1                   
        }
      },
      { id: 'web-2', name: 'Charles Fernández', role: 'Comité de Desarrollo Web', initials: 'CF', photoUrl: 'chars.jpeg', photoStyle: {
        objectPosition: 'center top',
        scale: 1.1
      } },
      { id: 'web-3', name: 'Adolfo Torres', role: 'Comité de Desarrollo Web', initials: 'AT', photoUrl: 'adolfo.jpg', photoStyle: {
        objectPosition: 'center top',
        scale: 1.1
      } }
    ]
  },
  {
    id: 'imagen-publica',
    name: 'IP (Imagen Pública)',
    iconName: 'Megaphone',
    description: 'Encargados de la identidad gráfica institucional, cobertura audiovisual, redes sociales, fotografía y relaciones con medios.',
    color: '#D91B5C',
    members: [
      { 
        id: 'ip-1', 
        name: 'Gabriel Hernandez', 
        role: 'Comité de Imagen Pública', 
        initials: 'GH', 
        photoUrl: 'gabriel.jpeg',
        photoStyle: { 
          scale: 1.1,
          objectPosition: 'center 20%'
        }
      },
      { id: 'ip-2', name: 'Isabel Avendaño', role: 'Comité de Imagen Pública', initials: 'IA', photoUrl: 'isa.jpeg' },
      { id: 'ip-3', name: 'Andrea Leon', role: 'Comité de Imagen Pública', initials: 'AL', photoUrl: 'andrea.jpeg' },
      { id: 'ip-4', name: 'Giovanna Pineda', role: 'Comité de Imagen Pública', initials: 'GP', photoUrl: 'giovanna.jpeg' },
      { id: 'ip-5', name: 'Samyra Madero', role: 'Comité de Imagen Pública', initials: 'SM', photoUrl: 'samyra.jpeg', photoStyle: { 
          scale: 1.1,
        } }
    ] 
  },
  {
    id: 'tesoreria',
    name: 'Tesorería',
    iconName: 'Coins',
    description: 'Administración de presupuestos, conciliación bancaria de la inscripción, pagos de delegaciones y finanzas transparentes del seminario.',
    color: '#F5A623',
    members: [
      { id: 'tes-1', name: 'Jose Pong', role: 'Comité de Tesorería', initials: 'JP' ,photoUrl: 'pong.jpeg', photoStyle: { 
          scale: 1.5,
          objectPosition: 'center bottom'
        } },
      { id: 'tes-2', name: 'Omar Sanchez', role: 'Comité de Tesorería', initials: 'OS' ,photoUrl: 'omar.jpeg', photoStyle: { 
          scale: 1.8,
        } },
      { id: 'tes-3', name: 'Maria Fernanda Leañez', role: 'Comité de Tesorería', initials: 'ML' ,photoUrl: 'mafer.png' },
      { id: 'tes-4', name: 'Maria Eugenia Navarrete', role: 'Comité de Tesorería', initials: 'MN' ,photoUrl: 'maru.jpeg', photoStyle: { 
          scale: 1.1,
          objectPosition: 'center 20%'
        } }
    ]
  },
  {
    id: 'protocolo-maceria',
    name: 'Protocolo ',
    iconName: 'Award',
    description: 'Cumplimiento del orden protocolar rotario, tiempos de plenarias, acreditaciones solemnes, maestros de ceremonia y homenajes.',
    color: '#1B365D',
    members: [
      { id: 'prot-1', name: 'Omar Sanchez', role: 'Comité de Protocolo', initials: 'OS' ,photoUrl: 'omar.jpeg', photoStyle: { 
          scale: 1.8,
        } },
      { id: 'prot-2', name: 'Elias Bermudez', role: 'Comité de Protocolo', initials: 'EB' ,photoUrl: 'elias.jpeg', photoStyle: { 
          scale: 1.1,
          objectPosition: 'center 20%'
        } },
      { id: 'prot-3', name: 'Andrew Barrios', role: 'Comité de Protocolo', initials: 'AB' ,photoUrl: 'andrew.jpeg', photoStyle: { 
          scale: 1.1,
        } }
    ]
  },
  {
    id: 'logistica',
    name: 'Logística',
    iconName: 'Truck',
    description: 'Gestión de hospedaje en Hotel Klein Dorf, alimentación, montaje técnico de salones, traslados y distribución de kits.',
    color: '#00875A',
    members: [
      { id: 'log-1', name: 'Isabel Avendaño', role: 'Comité de Logística', initials: 'IA' ,photoUrl: 'isa.jpeg' },
      { id: 'log-2', name: 'Adolfo Torres', role: 'Comité de Logística', initials: 'AT' ,photoUrl: 'adolfo.jpg' },
      { id: 'log-3', name: 'Gabriel Hernandez', role: 'Comité de Logística', initials: 'GH' ,photoUrl: 'gabriel.jpeg', photoStyle: { 
          scale: 1.1,
          objectPosition: 'center 20%'
        } },
      { id: 'log-4', name: 'Nicolth Romero', role: 'Comité de Logística', initials: 'NR' ,photoUrl: 'nico.jpeg' }
    ]
  },
  {
    id: 'primeros-auxilios',
    name: 'Primeros Auxilios',
    iconName: 'HeartPulse',
    description: 'Atención primaria de salud, prevención médica, protocolos de bienestar y respuesta rápida ante contingencias durante todo el evento.',
    color: '#EF4444',
    members: [
      { id: 'pa-1', name: 'Nicolth Romero', role: 'Comité de Primeros Auxilios', initials: 'NR' ,photoUrl: 'nico.jpeg' },
      { id: 'pa-2', name: 'Maria Veronica Torres', role: 'Comité de Primeros Auxilios', initials: 'MT' ,photoUrl: 'maka.jpg' },
      { id: 'pa-3', name: 'Angelo Foglia', role: 'Comité de Primeros Auxilios', initials: 'AF' ,photoUrl: 'angelo.jpeg' }
    ]
  }
];

export default COMMITTEES_DATA;
