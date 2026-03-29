import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import PokemonGrid from './components/PokemonGrid';
import SkeletonGrid from './components/SkeletonGrid';
import Footer from './components/Footer';
import { usePokemonData } from './hooks/usePokemonData';
import { usePokemonSearch } from './hooks/usePokemonSearch';

function App() {
  const { pokemons, loading, error } = usePokemonData(40);
  const { searchTerm, setSearchTerm, debouncedSearchTerm, filteredPokemons, clearSearch, isSearching } = usePokemonSearch(pokemons);

  return (
    <Layout>
      <Header />

      <div className="mb-8">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClear={clearSearch}
        />
      </div>

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && isSearching && <SkeletonGrid count={8} />}

      {!loading && !error && !isSearching && filteredPokemons.length === 0 && (
        <EmptyState searchTerm={debouncedSearchTerm} />
      )}

      {!loading && !error && !isSearching && filteredPokemons.length > 0 && (
        <>
          <PokemonGrid pokemons={filteredPokemons} />
          <Footer filteredCount={filteredPokemons.length} totalCount={pokemons.length} />
        </>
      )}
    </Layout>
  );
}

export default App;
