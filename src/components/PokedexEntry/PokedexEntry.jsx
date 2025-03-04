import '../../index.css';
import './PokedexEntry.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../services/PokeAPI';

export default function PokedexEntry() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getPokemonDetails(id).then(data => setDetails(data));
  }, [id]);

  if (!details) return <div>Loading...</div>;

  return (
    <div id="pokedex-entry">
      <img 
        className='pokemon-artwork'
        src={details.sprites.other['official-artwork'].front_default} 
        alt={details.name}
      />

      <div>
        <div className='pokemon-name'>
          <h2>#{details.id}</h2>
          <h2>{details.name}</h2>
        </div>

        <div className='pokemon-types'>
          Type:
          {details.types.map((type) => (
            <p
              className={`type-card ${type.type.name}-type`}
              key={type.type.name}
            >
              {type.type.name}
            </p>
          ))}
        </div>

        <div className="pokemon-stats">
          {details.stats.map((stat) => (
              <p key={stat.stat.name}>
                  {stat.stat.name} – {stat.base_stat}
              </p>
          ))}
        </div>
      </div>
    </div>
  );
}