/**
 * PokedexEntry.jsx
 * Displays detailed information of a specific Pokémon
 */

import '../../index.css';
import './PokedexEntry.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../services/PokeAPI';

// converts height to meters
function convertHeight(height)  { return (height / 10); }

// converts weight to kilograms
function convertWeight(weight) { return (weight / 10); }

export default function PokedexEntry() {
	const { id } = useParams();		// get pokemon id from url path
	const [details, setDetails] = useState(null);			// core pokemon data
	const [speciesData, setSpeciesData] = useState(null);	// pokemon species data

	// get pokemon details
	useEffect(() => {
		getPokemonDetails(id).then(data => {
			setDetails(data);
			fetch(data.species.url).then(r => r.json()).then(setSpeciesData);
		});
	}, [id]);

	return (
		<>
			{details && (
				<div id="pokedex-entry">
					<div className='data-section'>
						<div className='data-image'>
							<img 
								className='pokemon-artwork'
								src={details.sprites.other['official-artwork'].front_default} 
								alt={details.name}
							></img>
						</div>
						<div className='data-text'>
							<h2 className='pokedex-number'>#{speciesData?.id}</h2>
							<h1>{details.name}</h1>

							<h2>Type:</h2>
							<div className='pokemon-types'>
								{details.types.map((type) => (
									<p
										className={`type-card ${type.type.name}-type`}
										key={type.type.name}
									>
										{type.type.name}
									</p>
								))}
							</div>
							
							<h2>Height:</h2>
							<p>{convertHeight(details.height)} m</p>

							<h2>Weight:</h2>
							<p>{convertWeight(details.weight)} kg</p>

							<h2>Abilities:</h2>
							<div className='pokemon-abilities'>
								{details.abilities.map((ability) => (
									<p key={ability.ability.name}>
										{ability.ability.name}
									</p>
								))}
							</div>
						</div>
					</div>

					<div className="pokemon-stats">
						<h2>Stats:</h2>
						<div className='stat-names'>
							{details.stats.map((stat) => (
								<p key={stat.stat.name}>
									{stat.stat.name}
								</p>
							))}
						</div>
						<div className='stat-values'>
							{details.stats.map((stat) => (
								<p key={stat.stat.name}>
									{stat.base_stat}
								</p>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}