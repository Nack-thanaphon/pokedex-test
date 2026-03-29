import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg text-center max-w-2xl mx-auto">
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default ErrorMessage;
