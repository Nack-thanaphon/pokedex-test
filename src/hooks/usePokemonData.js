import { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonDetail } from '../services/pokeapi';

export const usePokemonData = (limit = 40) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const pokemonList = await fetchPokemonList(limit);
        
        const detailedPokemons = await Promise.all(
          pokemonList.map(async (pokemon, index) => {
            const detail = await fetchPokemonDetail(index + 1);
            return detail;
          })
        );
        
        setPokemons(detailedPokemons);
      } catch (err) {
        setError('Failed to load Pokemon data. Please try again later.');
        console.error('Error loading pokemons:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, [limit]);

  return { pokemons, loading, error };
};
