import './App.css';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import teamData from './assets/equipo.json';

const resolveImagePaths = (data) => {
  return data.map((doctor) => ({
    ...doctor,
    imagen: new URL(`./assets/img/${doctor.imagen.split('/').pop()}`, import.meta.url).href,
  }));
};

const resolvedTeamData = resolveImagePaths(teamData);

function App() {
  return (
    <div className="App">
      <h1>Equipo Médico</h1>
      <div className="service-list-container">
        <ServiceList />
      </div>
      <div className="doctor-list">
        {resolvedTeamData.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default App;
