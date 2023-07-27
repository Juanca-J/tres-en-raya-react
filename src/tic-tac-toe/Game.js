import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const tableroInicial = Array(9).fill(null);
  const [tablero, setTablero] = useState(tableroInicial);
  const [accion, setAccion] = useState(true);

  /**
   * The handleClick function updates the game board with the player's move and toggles the player's
   * turn.
   * @param index - The `index` parameter represents the index of the element in the `tablero` array
   * that was clicked.
   * @returns nothing (undefined).
   */
  const handleClick = (index) => {
    if (tablero[index] || calcularGanador(tablero)) {
      return;
    }

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = accion ? 'X' : 'O';
    setTablero(nuevoTablero);
    setAccion(!accion);
  };

  const istableroFull = () => {
    return tablero.every((cuadro) => cuadro !== null);
  };

  const ganador = calcularGanador(tablero);
  const empate = !ganador && istableroFull();
  const estado = ganador ? `Ganador: ${ganador}` : empate ? 'Empate' : `Siguiente jugador: ${accion ? 'X' : 'O'}`;

  const handleRestart = () => {
    setTablero(tableroInicial);
    setAccion(true);
  };

  return (
    <div className="App">
      <Board cuadros={tablero} onClick={handleClick} />
      <div className="status">{estado}</div>
      <button onClick={handleRestart}>Reiniciar</button>
    </div>
  );
};

const calcularGanador = (cuadros) => {
  /* The `const lineas` is an array that represents all the possible winning combinations in a
  tic-tac-toe game. Each element in the array is an array of three numbers, where each number
  represents the index of a square on the game tablero. These combinations represent the rows,
  columns, and diagonals that can result in a win for a player. */
  const lineas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lineas) {
    if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
      return cuadros[a];
    }
  }

  return null;
};

export default Game;
