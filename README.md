# 🎮 Pokemon Pokedex

A modern, responsive Pokemon Pokedex web application built with React, Vite, and TailwindCSS. Features real-time search with debouncing, beautiful UI animations, and comprehensive unit testing.

![Pokemon Pokedex](https://img.shields.io/badge/React-19.2.4-blue) ![Vite](https://img.shields.io/badge/Vite-8.0.1-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.2-cyan) ![Jest](https://img.shields.io/badge/Jest-30.3.0-red)

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🔍 **Smart Search** - Real-time Pokemon search with 500ms debounce optimization
- 🎨 **Modern UI** - Beautiful gradient backgrounds, smooth animations, and hover effects
- 📊 **Stats Visualization** - Animated stat bars for HP, Attack, Defense, and Speed
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🧪 **Well Tested** - Comprehensive unit tests with Jest and React Testing Library
- 🎯 **Type-Safe** - Clean, maintainable code structure

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pokemon-pokedex
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |

## 🏗️ Project Structure

```
pokemon-pokedex/
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx      # Pokemon card component with stats
│   │   └── SearchBar.jsx        # Search input with clear button
│   ├── hooks/
│   │   └── useDebounce.js       # Custom debounce hook (500ms)
│   ├── services/
│   │   └── pokeapi.js           # PokeAPI service functions
│   ├── __tests__/
│   │   ├── App.test.jsx         # App component tests
│   │   ├── PokemonCard.test.jsx # PokemonCard tests
│   │   ├── SearchBar.test.jsx   # SearchBar tests
│   │   └── useDebounce.test.js  # Debounce hook tests
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles with Tailwind
├── public/                      # Static assets
├── jest.config.js               # Jest configuration
├── babel.config.cjs             # Babel configuration
├── setupTests.js                # Jest setup file
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Project dependencies
```

## 🎯 Core Technologies

### Frontend
- **React 19.2.4** - UI library
- **Vite 8.0.1** - Build tool and dev server
- **TailwindCSS 4.2.2** - Utility-first CSS framework
- **Axios 1.14.0** - HTTP client
- **Lucide React 1.7.0** - Icon library

### Testing
- **Jest 30.3.0** - Testing framework
- **React Testing Library 16.3.2** - React component testing
- **@testing-library/jest-dom 6.9.1** - Custom Jest matchers

## 🔌 API Reference

This application uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data.

### Endpoints Used

1. **Get Pokemon List**
   - `GET https://pokeapi.co/api/v2/pokemon?limit=40`
   - Returns list of first 40 Pokemon

2. **Get Pokemon Details**
   - `GET https://pokeapi.co/api/v2/pokemon/{id}`
   - Returns detailed Pokemon information including stats, sprites, and types

## 🎨 UI Components

### PokemonCard
Displays individual Pokemon with:
- Official artwork image
- Pokemon ID (formatted as #001, #002, etc.)
- Pokemon name (capitalized)
- Animated stat bars for HP, Attack, Defense, Speed
- Hover effects with scale and shadow transitions

### SearchBar
Search input component featuring:
- Search icon (Lucide React)
- Real-time input with debounce
- Clear button (X icon) when text is present
- Focus states with border and ring effects

### App
Main application container with:
- Gradient background
- Loading spinner during data fetch
- Error handling and display
- Responsive grid layout (1-4 columns based on screen size)
- Pokemon count footer

## 🧪 Testing

The project includes comprehensive unit tests covering:

- ✅ Component rendering
- ✅ User interactions (typing, clicking)
- ✅ Debounce functionality
- ✅ API mocking
- ✅ Loading and error states
- ✅ Search filtering logic

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage Goal
- Target: 60-70% coverage
- Focus: Critical user paths and component behavior

## 🎭 Custom Hooks

### useDebounce
Optimizes search performance by delaying value updates.

```javascript
const debouncedValue = useDebounce(searchTerm, 500);
```

**Parameters:**
- `value` - The value to debounce
- `delay` - Delay in milliseconds (default: 500ms)

**Returns:**
- Debounced value that updates after the specified delay

## 🌈 Features Breakdown

### Search Functionality
- Real-time filtering as you type
- 500ms debounce to reduce unnecessary renders
- Case-insensitive search
- Clear button to reset search
- "No results" message when no Pokemon match

### Pokemon Display
- Grid layout: 1 column (mobile) → 2 (tablet) → 3-4 (desktop)
- Smooth loading spinner
- Error handling with user-friendly messages
- Pokemon counter showing filtered/total count

### Visual Design
- Gradient backgrounds (blue → purple → pink)
- Card hover effects (scale + shadow)
- Animated stat bars with color coding:
  - 🟢 HP (Green)
  - 🔴 Attack (Red)
  - 🔵 Defense (Blue)
  - 🟡 Speed (Yellow)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

This app can be deployed to:

- **Vercel** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**
  ```bash
  npm install -g netlify-cli
  netlify deploy
  ```

- **GitHub Pages**
  - Configure `vite.config.js` with base path
  - Build and push to gh-pages branch

## 🐛 Troubleshooting

### Tests failing with module errors
Make sure all dependencies are installed:
```bash
npm install
```

### TailwindCSS not working
Ensure PostCSS and Tailwind are properly configured:
```bash
npm install -D tailwindcss postcss autoprefixer
```

### API requests failing
Check your internet connection and verify PokeAPI is accessible:
```bash
curl https://pokeapi.co/api/v2/pokemon/1
```

## 📝 License

MIT License - feel free to use this project for learning and personal projects.

## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) - Free Pokemon API
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

## 👨‍💻 Author

Built with ❤️ using React + Vite + TailwindCSS

---

**Happy Pokemon Hunting! 🎮✨**
