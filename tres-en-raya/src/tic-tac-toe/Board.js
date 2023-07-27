import React from 'react';
import Square from './Square';

const Board = ({ cuadros, onClick }) => (
  <div className="fondo">
    {cuadros.map((value, index) => (
      <div key={index} className="contenedor_cuadros">
        <Square value={value} onClick={() => onClick(index)} />
      </div>
    ))}
  </div>
);

export default Board;
