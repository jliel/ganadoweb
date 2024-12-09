import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf'; // Asegúrate de instalar jsPDF: npm install jspdf
import GastoServices from '../../../services/GanadoServices';

const ReporteGastos = () => {
  const [gastos,seGastos] = useState([]);
  const [error, setError] = useState('');

 

  // Función para manejar la generación del PDF
  const generarPDF = () => {
    
    GastoServices.getAll().then(res => {
        setGastos(res.data);
        console.log(gastos);
    })
    .catch(err => {
        console.log(err.message);
       return
    });

    setError('');

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Reporte de Gastos', 10, 10);
    doc.setFontSize(12);
    doc.text(`Detalle de los gastos realizados`, 10, 20);
    let count = 30
    
    corral.forEach(element => {
      doc.text(`Monto de gasto: ${gastos.cantidad}`, 10,count);
      count+=10
      doc.text(`Fecha del gasto: ${gastos.fecha_registro}`, 10,count)
      count+=10
    });
    doc.save(`reporte_gastos.pdf`);
  };

  return (
    <form className="form-agregar">
      <h2>Generar Reporte Gastos</h2>
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

export default ReporteGastos;