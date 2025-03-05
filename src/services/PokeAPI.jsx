const API_BASE = 'https://pokeapi.co/api/v2';
const POKEMON_LIMIT = 2000; // Covers all species + forms

// Client-side cache with localStorage persistence
const cache = {
  list: JSON.parse(localStorage.getItem('pokedex-cache') || 'null'),
  details: new Map(),
  
  async getList() {
    if (!this.list) {
      const response = await fetch(`${API_BASE}/pokemon?limit=${POKEMON_LIMIT}`);
      const data = await response.json();
      
      this.list = data.results.map(pokemon => ({
        name: pokemon.name,
        id: pokemon.url.split('/').slice(-2, -1)[0],
        speciesId: null // Will be populated below
      }));

      // Batch process species IDs using Promise.all
      const speciesRequests = data.results.map(p => 
        fetch(p.url).then(r => r.json())
      );
      
      const speciesData = await Promise.all(speciesRequests);
      this.list = this.list.map((item, index) => ({
        ...item,
        speciesId: speciesData[index].species.url.split('/').slice(-2, -1)[0]
      }));

      localStorage.setItem('pokedex-cache', JSON.stringify(this.list));
    }
    return this.list;
  },

  async getDetails(id) {
    if (!this.details.has(id)) {
      const response = await fetch(`${API_BASE}/pokemon/${id}`);
      const data = await response.json();
      this.details.set(id, data);
    }
    return this.details.get(id);
  }
};

// API Functions
export async function getPokemonList() {
  return cache.getList();
}

export async function getPokemonDetails(id) {
  return cache.getDetails(id);
}