import './App.css';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import teamData from './assets/equipo.json';

const resolveImagePaths = (data) => {
  return data.map((doctor) => ({
    ...doctor,
    imagen: new URL(`./assets/img/${doctor.imagen.split('/').pop()}`, import.meta.url).href,
  }));
};

const resolvedTeamData = resolveImagePaths(teamData);
const medicalServices = ["Urgencias", "Consultas Médicas", "Hospitalización", "Toma de Muestras"];

function App() {
  const specialties = [...new Set(resolvedTeamData.map((doctor) => doctor.especialidad))];

  return (
    <div className="App">
      <div className="service-list-container">
        <ServiceList services={medicalServices} />
      </div>

      <AppointmentForm specialties={specialties} doctors={resolvedTeamData} />

      <h2>Equipo Médico</h2>
      <div className="doctor-list">
        {resolvedTeamData.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default App;
