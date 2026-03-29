import React from 'react';

const PokemonCardSkeleton = () => {
  return (
    <div className="bg-white border-3 border-gray-200 rounded-2xl shadow-md overflow-hidden animate-pulse">
      <div className="bg-gray-200 p-8 flex justify-center items-center min-h-[200px]">
        <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
      </div>
      <div className="p-4">
        <div className="text-left mb-2">
          <div className="h-3 bg-gray-300 rounded w-16 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardSkeleton;
