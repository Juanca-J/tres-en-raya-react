import React from 'react';

/**
 * The Square function is a React component that renders a button with a value and an onClick event
 * handler.
 */
const Square = ({ value, onClick }) => (
  <button className="cuadro" onClick={onClick}>
    {value}
  </button>
);

export default Square;
