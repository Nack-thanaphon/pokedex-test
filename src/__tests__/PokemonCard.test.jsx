import { render, screen } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard';

const mockPokemon = {
  id: 25,
  name: 'pikachu',
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://example.com/pikachu.png',
      },
    },
  },
  types: [
    { type: { name: 'electric' } },
  ],
};

describe('PokemonCard', () => {
  test('renders pokemon name correctly', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText('pikachu')).toBeInTheDocument();
  });

  test('renders pokemon ID with correct format', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText('#0025')).toBeInTheDocument();
  });

  test('renders pokemon image with correct src and alt', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    const image = screen.getByAltText('pikachu');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/pikachu.png');
  });

  test('renders pokemon types', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText('electric')).toBeInTheDocument();
  });

  test('renders multiple types correctly', () => {
    const dualTypePokemon = {
      ...mockPokemon,
      types: [
        { type: { name: 'grass' } },
        { type: { name: 'poison' } },
      ],
    };
    render(<PokemonCard pokemon={dualTypePokemon} />);
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });
});
