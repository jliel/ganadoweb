import React, { useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf'; // Asegúrate de instalar jsPDF: npm install jspdf
import VentaServices from '../../../services/VentaServices';

const ReporteVentas = () => {
  const [idCorral, setIdCorral] = useState('');
  const [error, setError] = useState('');

  const [corral, setcorral] = useState([]);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Reporte de ventas', 10, 10);
    doc.setFontSize(12);
    doc.text(`Ventas en el Rancho`, 10, 20);
    let count = 30
    let total = 0
    corral.forEach(element => {
      doc.text(`Monto de venta: ${element.cantidad}`, 10,count)
      doc.text(`Fecha de la venta: ${element.fecha_registro}`, 80,count)
      count+=10
      total+=parseFloat(element.cantidad)
      
    });
    doc.text(`Total: ${total}`, 10,count)
    doc.save(`reporte_ventas.pdf`);
    }
    else didMount.current = true;
    
    
  }, [corral]);

  // Función para manejar la generación del PDF
  const generarPDF = () => {
    
    VentaServices.getAll().then(res => {
        setcorral(res.data);
        console.log(corral)
    })
    .catch(err => {
        console.log(err.message);
        return
    });

    setError('');

    
  };

  return (
    <form className="form-agregar">
      <h2>Generar Reporte Ventas</h2>
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

export default ReporteVentas;