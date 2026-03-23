// Application principale - Asma Ait El Mahjoub
import FetchData from './FetchData';
import AxiosData from './AxiosData';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="titre">TP — Consommer une API avec React</h1>

      <div className="card">
        <h2>Articles avec fetch()</h2>
        <p className="description">
          fetch() est integre au navigateur — pas besoin de librairie externe.
        </p>
        <FetchData />
      </div>

      <div className="card">
        <h2>Utilisateurs avec Axios</h2>
        <p className="description">
          Axios simplifie les requetes HTTP avec une syntaxe plus claire.
        </p>
        <AxiosData />
      </div>
    </div>
  );
}

export default App;