import React from 'react';

const Square = ({ value, onClick }) => (
  <button className="cuadro" onClick={onClick}>
    {value}
  </button>
);

export default Square;
