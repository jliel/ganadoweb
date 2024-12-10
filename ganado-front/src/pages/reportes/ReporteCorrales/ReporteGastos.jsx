import React, { useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf'; // Asegúrate de instalar jsPDF: npm install jspdf
import GastoServices from '../../../services/GastoServices';

const ReporteGastos = () => {
  const [gastos,setGastos] = useState([]);
  const [error, setError] = useState('');

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Reporte de Gastos', 10, 10);
    doc.setFontSize(12);
    doc.text(`Detalle de los gastos realizados`, 10, 20);
    let count = 30
    let total = 0
    gastos.forEach(element => {
      doc.text(`Monto de gasto: ${element.cantidad}`, 10,count);
      doc.text(`Fecha del gasto: ${element.fecha_registro}`, 80,count)
      total+=parseFloat(element.cantidad)
      count+=10
    });
    doc.text(`Total: ${total}`, 10,count)
    doc.save(`reporte_gastos.pdf`);
    }
    else didMount.current = true;
    
    
  }, [gastos]);

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