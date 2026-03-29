import React from 'react';

const EmptyState = ({ searchTerm }) => {
  return (
    <div className="text-center py-20">
      <p className="text-gray-500 text-xl">
        No Pokemon found matching "{searchTerm}"
      </p>
    </div>
  );
};

export default EmptyState;
