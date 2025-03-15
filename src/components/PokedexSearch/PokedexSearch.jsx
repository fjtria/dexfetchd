/**
 * PokedexSearch.jsx
 * Searchable Pokémon list with autocomplete
 */

import '../../index.css';
import './PokedexSearch.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonList } from '../../services/PokeAPI';

function useClickOutside(ref, callback) {
    useEffect(()=> {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, callback]);
}

export default function PokedexSearch() {
    const [searchTerm, setSearchTerm] = useState('');   // current text input
    const [allPokemon, setAllPokemon] = useState([]);   // list of pokemon
    const [results, setResults] = useState([]);         // list of pokemon filtered by search result
    const [isInputFocused, setIsInputFocused] = useState(false);      // show/hide search results
    const containerRef = useRef(null);

    useClickOutside(containerRef, () => {
        setIsInputFocused(false);
    });

    // get all pokemon on load
    useEffect(() => {
        getPokemonList().then(list => setAllPokemon(list));
    }, []);

    // updates search results based on search term
    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term.length > 0) {
            const filtered = allPokemon.filter(p => 
                p.name.includes(term.toLowerCase())
            );
            setResults(filtered.slice(0, 10));
        } else {
            setResults([]);
        }
    };

    return (
        <div className='search-bar' ref={containerRef}>

            {/* search bar */}
            <input
                className="search-bar-input"
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
            />

            {/* search results */}
            {isInputFocused && results.length > 0 && (
                <div className='search-results'>
                    <ul>
                        {results.map((pokemon) => (
                            <li 
                                key={pokemon.name}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                <Link to={`/dexfetchd/pokemon/${pokemon.id}`}>
                                    {pokemon.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}