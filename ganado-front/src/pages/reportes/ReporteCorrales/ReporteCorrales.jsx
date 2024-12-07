import React, { useState } from 'react';
import jsPDF from 'jspdf'; // Asegúrate de instalar jsPDF: npm install jspdf

const ReporteCorrales = () => {
  const [idCorral, setIdCorral] = useState('');
  const [error, setError] = useState('');

  // Función para manejar la generación del PDF
  const generarPDF = () => {
    if (!idCorral.trim()) {
      setError('Por favor, ingrese un ID de Corral.');
      return;
    }

    setError('');

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Reporte de Corral', 10, 10);
    doc.setFontSize(12);
    doc.text(`ID del Corral: ${idCorral}`, 10, 20);
    doc.save(`reporte_corral_${idCorral}.pdf`);
  };

  return (
    <form className="form-agregar">
      <h2>Generar Reporte Corrales</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          <label className="form-label" htmlFor="id_corral">
            ID Corral
          </label>
          <input
            type="text"
            id="id_corral"
            className="form-control mb-3"
            value={idCorral}
            onChange={(e) => setIdCorral(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4"
        onClick={generarPDF}
      >
        Generar Reporte en PDF
      </button>
    </form>
  );
};

export default ReporteCorrales;