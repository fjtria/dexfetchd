import '../index.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../services/PokeAPI';

export default function PokedexEntry() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getPokemonDetails(id).then(data => setDetails(data));
  }, [id]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="detail-view">
        <h1>{details.name}</h1>
        <img 
            src={details.sprites.other['official-artwork'].front_default} 
            alt={details.name}
        />
        <div className="stats">
            <h3>Stats</h3>
            {details.stats.map((stat) => (
                <p key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                </p>
            ))}
        </div>
    </div>
  );
}