import '../../index.css';
import './PokedexSearch.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonList } from '../../services/PokeAPI';

export default function PokedexSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [allNames, setAllNames] = useState([]);
    const [results, setResults] = useState([]);

    // Load all Pokémon names on component mount
    useEffect(() => {
        getPokemonList().then(names => setAllNames(names));
    }, []);

    // Handle search input
    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term.length > 0) {
        const filtered = allNames.filter(name => 
            name.includes(term.toLowerCase())
        );
        setResults(filtered.slice(0, 10)); // Show top 10 results
        } else {
        setResults([]);
        }
    };

    return (
        <div className='search-bar'>
            <input
                className="search-bar-input"
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
            />
            
            <div>
                <ul>
                    {results.map((name) => (
                        <li>
                            <Link key={name} to={`/pokemon/${name}`}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}