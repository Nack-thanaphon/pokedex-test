import React from 'react';

const Footer = ({ filteredCount, totalCount }) => {
  return (
    <footer className="text-center mt-12 text-gray-500">
      <p>
        Showing {filteredCount} of {totalCount} Pokemon
      </p>
    </footer>
  );
};

export default Footer;
