import React from 'react';

const TYPE_COLORS = {
  normal: 'bg-gray-400',
  fire: 'bg-orange-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-400',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-700',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-400',
};

const PokemonCard = ({ pokemon }) => {
  const { id, name, sprites, types } = pokemon;

  return (
    <div className="bg-white border-3 border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="bg-gray-100 p-8 flex justify-center items-center min-h-[200px]">
        <img
          src={sprites.other['official-artwork'].front_default}
          alt={name}
          className="w-full h-full max-w-[160px] max-h-[160px] object-contain drop-shadow-lg"
        />
      </div>
      <div className="p-4">
        <div className="text-left mb-2">
          <span className="text-xs font-bold text-gray-400">#{String(id).padStart(4, '0')}</span>
          <h3 className="text-xl font-bold text-gray-800 capitalize">{name}</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
          {types.map((type) => (
            <span
              key={type.type.name}
              className={`${TYPE_COLORS[type.type.name]} text-white text-xs font-semibold px-3 py-1 rounded-md capitalize`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
