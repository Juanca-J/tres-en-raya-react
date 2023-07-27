import React from 'react';
import Square from './Square';

const Board = ({ cuadros, onClick }) => (
  /* This code is rendering a board component in React. */
  <div className="fondo">
    {cuadros.map((value, index) => (
      <div key={index} className="contenedor_cuadros">
        <Square value={value} onClick={() => onClick(index)} />
      </div>
    ))}
  </div>
);

export default Board;
