/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      {/* 1. BALANCE ÓPTICO DE LOS 3 LOGOS */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', width: '100%', maxWidth: '580px', margin: '4px auto 8px', padding: '0 8px' }}>
        {/* Colonia Tovar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1.1' }}>
          <img 
            src="/logo-evento.png" 
            alt="Colonia Tovar 2026" 
            style={{ height: '85px', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} 
          />
        </div>

        <div style={{ width: '1.5px', height: '42px', backgroundColor: '#CBD5E1', flexShrink: 0 }}></div>

        {/* Distrito 4370 (reducido para igualar ópticamente) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1.2' }}>
          <img 
            src="/logo-rotaract.png" 
            alt="Rotaract Distrito 4370" 
            style={{ height: '44px', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} 
          />
        </div>

        <div style={{ width: '1.5px', height: '42px', backgroundColor: '#CBD5E1', flexShrink: 0 }}></div>

        {/* Las Delicias */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1.2' }}>
          <img 
            src="/logo-las-delicias.png" 
            alt="Rotaract Las Delicias" 
            style={{ height: '62px', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} 
          />
        </div>
      </div>

      {/* FECHAS Y SEDE CONFIRMADA */}
      <div className="date-venue-badge">
        <span className="date-part">27, 28 y 29 DE NOVIEMBRE DE 2026</span>
        <span className="dot-sep">•</span>
        <span className="venue-part">Hotel Klein Dorf, Colonia Tovar</span>
      </div>

      {/* 2. LIMPIEZA DE TEXTO EN EL BADGE */}
      <div className="header-badges-row">
        <div className="header-badge-location">
          <span className="badge-dot" aria-hidden="true"></span>
          <span>SEMINARIO DE APRENDIZAJE DISTRITAL 2026</span>
        </div>
      </div>

      {/* Slogan Banner Oficial */}
      <div className="slogan-banner">
        “Un lugar para volver a encontrarnos”
      </div>

      {/* Pilares Oficiales */}
      <div className="pillars-tagline">
        <span>Formación</span>
        <span className="pillars-bullet">•</span>
        <span>Conexión</span>
        <span className="pillars-bullet">•</span>
        <span>Inspiración</span>
      </div>

      {/* 2. CRONÓMETRO CULMINADO EN MODO FESTIVO Y CON MOVIMIENTO */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px auto 14px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(217, 27, 92, 0.1)', color: '#D91B5C', fontWeight: 700, fontSize: '12px', padding: '4px 14px', borderRadius: '20px', marginBottom: '8px' }}>
          🎉 ¡TIEMPO CUMPLIDO • PREVENTA EN VIVO!
        </div>

        <div className="countdown-festive-grid">
          <div className="card-zero card-sol">
            <span className="num-zero">00</span>
            <span className="label-zero">DAYS</span>
            <span className="sub-tag">Sol Naciente</span>
          </div>
          <div className="card-zero card-montana">
            <span className="num-zero">00</span>
            <span className="label-zero">HOURS</span>
            <span className="sub-tag">Las Montañas</span>
          </div>
          <div className="card-zero card-arquitectura">
            <span className="num-zero">00</span>
            <span className="label-zero">MIN</span>
            <span className="sub-tag">Arquitectura</span>
          </div>
          <div className="card-zero card-tradicion">
            <span className="num-zero">00</span>
            <span className="label-zero">SEC</span>
            <span className="sub-tag">Tradición</span>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFORMATIVA */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '8px auto 18px', width: '100%', maxWidth: '520px', padding: '0 12px' }}>
        <h1 style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '24px', fontWeight: 800, color: '#1B365D', lineHeight: 1.2, margin: '0 0 6px' }}>
          Asegura tu lugar en la Colonia Tovar
        </h1>
        
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '13px', color: '#475569', margin: '0', lineHeight: 1.4 }}>
          El registro y la preventa especial de cupos ya se encuentran disponibles por tiempo limitado.
        </p>
      </div>
    </>
  );
}
