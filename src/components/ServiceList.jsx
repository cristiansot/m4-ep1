import PropTypes from "prop-types";

const ServiceList = ({ services }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <h3>Lista de Servicios</h3>
      <select>
        {services.map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceList;
