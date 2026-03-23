// Composant fetch() - Asma Ait Elmahjoub
import { useState, useEffect } from 'react';

function FetchData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limite, setLimite] = useState(5);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limite}`)
      .then((response) => {
        if (!response.ok) throw new Error('Erreur reseau');
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [limite]);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setLimite(5)}>5 articles</button>
        <button onClick={() => setLimite(10)}>10 articles</button>
      </div>
      <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>
        {posts.length} articles charges avec fetch()
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>#{post.id}</strong> — {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;