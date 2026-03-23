// Composant Axios - Asma Ait El Mahjoub
import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recherche, setRecherche] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const usersFiltres = users.filter((user) =>
    user.name.toLowerCase().includes(recherche.toLowerCase())
  );

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div>
      <input
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Rechercher un utilisateur..."
      />
      <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>
        {usersFiltres.length} utilisateur(s) trouve(s)
      </p>
      <ul>
        {usersFiltres.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email} — {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;