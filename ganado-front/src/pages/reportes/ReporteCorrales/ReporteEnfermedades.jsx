import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf'; // Asegúrate de instalar jsPDF: npm install jspdf
import GanadoServices from '../../../services/GanadoServices';

const ReporteEnfermedades = () => {
  const [idCorral, setIdCorral] = useState('');
  const [error, setError] = useState('');

  const [corral, setcorral] = useState([]);

  // Función para manejar la generación del PDF
  const generarPDF = () => {
    
    GanadoServices.getAll().then(res => {
        setcorral(res.data);
        console.log(corral)
    })
    .catch(err => {
        console.log(err.message);
        return
    });

    setError('');

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Reporte de Ganado', 10, 10);
    doc.setFontSize(12);
    doc.text(`Ganado Actual en el Rancho`, 10, 20);
    let count = 30
    
    corral.forEach(element => {
      doc.text(`Identificador del ganado: ${element.identificador}`, 10,count)
      count+=10
    });
    doc.save(`reporte_corral.pdf`);
  };

  return (
    <form className="form-agregar">
      <h2>Generar Reporte Ganado</h2>
      <div className="col">
        <div data-mdb-input-init className="form-outline">
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>

      <button
        data-mdb-ripple-init
        type="button"
        className="btn btn-primary btn-block mb-4 mt-5"
        onClick={generarPDF}
      >
        Generar Reporte en PDF
      </button>
    </form>
  );
};

export default ReporteEnfermedades;