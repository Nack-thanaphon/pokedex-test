import { useState, useMemo } from 'react';
import { useDebounce } from './useDebounce';

export const usePokemonSearch = (pokemons) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const isSearching = useMemo(() => {
    return searchTerm !== debouncedSearchTerm && searchTerm !== '';
  }, [searchTerm, debouncedSearchTerm]);

  const filteredPokemons = useMemo(() => {
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [pokemons, debouncedSearchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    filteredPokemons,
    clearSearch,
    isSearching,
  };
};
