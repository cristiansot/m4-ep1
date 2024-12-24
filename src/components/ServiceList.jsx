import React from "react";

const medicalServices = ["Urgencias", "Consultas Médicas", "Hospitalización", "Toma de Muestras"];

const ServiceList = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <h3>Lista de Servicios</h3>
      <select>
        {medicalServices.map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServiceList;
