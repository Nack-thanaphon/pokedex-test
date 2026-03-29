import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import * as pokeapi from '../services/pokeapi';

jest.mock('../services/pokeapi');

const mockPokemons = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      other: { 'official-artwork': { front_default: 'bulbasaur.png' } },
    },
    types: [
      { type: { name: 'grass' } },
      { type: { name: 'poison' } },
    ],
  },
  {
    id: 4,
    name: 'charmander',
    sprites: {
      other: { 'official-artwork': { front_default: 'charmander.png' } },
    },
    types: [
      { type: { name: 'fire' } },
    ],
  },
];

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders app title', async () => {
    pokeapi.fetchPokemonList.mockResolvedValue([]);
    render(<App />);
    expect(screen.getByText('Pokemon Pokedex')).toBeInTheDocument();
  });

  test('shows loading spinner initially', () => {
    pokeapi.fetchPokemonList.mockImplementation(() => new Promise(() => {}));
    render(<App />);
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  test('displays pokemon cards after loading', async () => {
    pokeapi.fetchPokemonList.mockResolvedValue([
      { name: 'bulbasaur', url: 'url1' },
      { name: 'charmander', url: 'url2' },
    ]);
    pokeapi.fetchPokemonDetail.mockImplementation((id) => 
      Promise.resolve(mockPokemons[id - 1])
    );

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('charmander')).toBeInTheDocument();
    });
  });

  test('displays error message on fetch failure', async () => {
    pokeapi.fetchPokemonList.mockRejectedValue(new Error('API Error'));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to load Pokemon data/i)).toBeInTheDocument();
    });
  });

  test('renders search bar', async () => {
    pokeapi.fetchPokemonList.mockResolvedValue([]);
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search Pokemon by name...')).toBeInTheDocument();
    });
  });
});
