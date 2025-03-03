const API_BASE = 'https://pokeapi.co/api/v2';

// Cache for basic Pokémon list
let PokedexCache = null;
let PokedexEntryCache = {};

export async function getPokemonList() {
    const response = await fetch(`${API_BASE}/pokemon?limit=1025`);
    const data = await response.json();
    PokedexCache = data.results.map(p => p.name);
    return PokedexCache;
}

export async function getPokemonDetails(id) {
    const response = await fetch(`${API_BASE}/pokemon/${id}`);
    const data = await response.json();
    PokedexEntryCache[id] = data;
    return data;
}