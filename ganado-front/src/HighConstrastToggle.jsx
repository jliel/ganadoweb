import React, { useEffect } from "react";

const HighContrastToggle = () => {
  useEffect(() => {
    // Recuperar preferencia desde localStorage al cargar la página
    const isHighContrast = JSON.parse(localStorage.getItem("highContrastMode"));
    if (isHighContrast) {
      document.body.classList.add("alto-contraste");
    }
  }, []);

  const toggleContrast = () => {
    // Alternar la clase en el body
    document.body.classList.toggle("alto-contraste");

    // Guardar preferencia en localStorage
    const isHighContrast = document.body.classList.contains("alto-contraste");
    localStorage.setItem("highContrastMode", isHighContrast);
  };

  return (
    <button
      id="toggle-contrast"
      className="btn btn-outline-light"
      onClick={toggleContrast}
    >
      {document.body.classList.contains("alto-contraste")
        ? "Modo Normal"
        : "Modo Alto Contraste"}
    </button>
  );
};

export default HighContrastToggle;
