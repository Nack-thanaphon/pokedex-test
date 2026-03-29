import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  const mockOnSearchChange = jest.fn();
  const mockOnClear = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders search input with placeholder', () => {
    render(
      <SearchBar
        searchTerm=""
        onSearchChange={mockOnSearchChange}
        onClear={mockOnClear}
      />
    );
    expect(screen.getByPlaceholderText('Search Pokemon by name...')).toBeInTheDocument();
  });

  test('displays current search term value', () => {
    render(
      <SearchBar
        searchTerm="pikachu"
        onSearchChange={mockOnSearchChange}
        onClear={mockOnClear}
      />
    );
    expect(screen.getByDisplayValue('pikachu')).toBeInTheDocument();
  });

  test('calls onSearchChange when typing', () => {
    render(
      <SearchBar
        searchTerm=""
        onSearchChange={mockOnSearchChange}
        onClear={mockOnClear}
      />
    );
    const input = screen.getByPlaceholderText('Search Pokemon by name...');
    fireEvent.change(input, { target: { value: 'charizard' } });
    expect(mockOnSearchChange).toHaveBeenCalledWith('charizard');
  });

  test('shows clear button when search term is not empty', () => {
    render(
      <SearchBar
        searchTerm="bulbasaur"
        onSearchChange={mockOnSearchChange}
        onClear={mockOnClear}
      />
    );
    expect(screen.getByLabelText('Clear search')).toBeInTheDocument();
  });

  test('does not show clear button when search term is empty', () => {
    render(
      <SearchBar
        searchTerm=""
        onSearchChange={mockOnSearchChange}
        onClear={mockOnClear}
      />
    );
    expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
  });

  test('calls onClear when clear button is clicked', () => {
    render(
      <SearchBar
        searchTerm="squirtle"
        onSearchChange={mockOnSearchChange}
        onClear={mockOnClear}
      />
    );
    const clearButton = screen.getByLabelText('Clear search');
    fireEvent.click(clearButton);
    expect(mockOnClear).toHaveBeenCalledTimes(1);
  });
});
