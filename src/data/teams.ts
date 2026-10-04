import { Committee } from '../types';

export const COMMITTEES_DATA: Committee[] = [
  {
    id: 'desarrollo-web',
    name: 'Desarrollo Web',
    iconName: 'Code',
    description: 'Responsable del diseño, programación, pasarela de registro y mantenimiento técnico de la plataforma oficial del evento.',
    color: '#0284C7',
    members: [
      { id: 'web-1', name: 'Jose Francisco Parada', role: 'Comité de Desarrollo Web', initials: 'JP', photoUrl: '/jose-parada.jpg' },
      { id: 'web-2', name: 'Charles Fernandez', role: 'Comité de Desarrollo Web', initials: 'CF' },
      { id: 'web-3', name: 'Adolfo Torres', role: 'Comité de Desarrollo Web', initials: 'AT' }
    ]
  },
  {
    id: 'imagen-publica',
    name: 'IP (Imagen Pública)',
    iconName: 'Megaphone',
    description: 'Encargados de la identidad gráfica institucional, cobertura audiovisual, redes sociales, fotografía y relaciones con medios.',
    color: '#D91B5C',
    members: [
      { id: 'ip-1', name: 'Gabriel Hernandez', role: 'Comité de Imagen Pública', initials: 'GH' },
      { id: 'ip-2', name: 'Isabel Avendaño', role: 'Comité de Imagen Pública', initials: 'IA' },
      { id: 'ip-3', name: 'Andrea Leon', role: 'Comité de Imagen Pública', initials: 'AL' }
    ]
  },
  {
    id: 'tesoreria',
    name: 'Tesorería',
    iconName: 'Coins',
    description: 'Administración de presupuestos, conciliación bancaria de la preventa, pagos de delegaciones y finanzas transparentes del seminario.',
    color: '#F5A623',
    members: [
      { id: 'tes-1', name: 'Jose Pong', role: 'Comité de Tesorería', initials: 'JP' },
      { id: 'tes-2', name: 'Omar Sanchez', role: 'Comité de Tesorería', initials: 'OS' },
      { id: 'tes-3', name: 'Maria Fernanda Leañez', role: 'Comité de Tesorería', initials: 'ML' },
      { id: 'tes-4', name: 'Maria Eugenia Navarrete', role: 'Comité de Tesorería', initials: 'MN' }
    ]
  },
  {
    id: 'protocolo-maceria',
    name: 'Protocolo y Macería',
    iconName: 'Award',
    description: 'Cumplimiento del orden protocolar rotario, tiempos de plenarias, acreditaciones solemnes, maestros de ceremonia y homenajes.',
    color: '#1B365D',
    members: [
      { id: 'prot-1', name: 'Omar Sanchez', role: 'Comité de Protocolo y Macería', initials: 'OS' },
      { id: 'prot-2', name: 'Elias Bermudez', role: 'Comité de Protocolo y Macería', initials: 'EB' },
      { id: 'prot-3', name: 'Andrew Barrios', role: 'Comité de Protocolo y Macería', initials: 'AB' }
    ]
  },
  {
    id: 'logistica',
    name: 'Logística',
    iconName: 'Truck',
    description: 'Gestión de hospedaje en Hotel Klein Dorf, alimentación, montaje técnico de salones, traslados y distribución de kits.',
    color: '#00875A',
    members: [
      { id: 'log-1', name: 'Isabel Avendaño', role: 'Comité de Logística', initials: 'IA' },
      { id: 'log-2', name: 'Adolfo Torres', role: 'Comité de Logística', initials: 'AT' },
      { id: 'log-3', name: 'Gabriel Hernandez', role: 'Comité de Logística', initials: 'GH' },
      { id: 'log-4', name: 'Nicolth Romero', role: 'Comité de Logística', initials: 'NR' }
    ]
  }
];

export default COMMITTEES_DATA;
