import React, { useState } from "react";
import Board from './Board';


const Game = () => {
    
    const [gameState, setGameState] = useState({
        history: [
            {
            squares: Array(9).fill(null),
            }
        ],
        stepNumber: 0,
        xIsNext: true
    });

    const handleClick = (i) => {
        const history = gameState.history.slice(0, gameState.stepNumber + 1);
        const current = history[history.length - 1];
        
        // Creates a copy of the squares array in the state object
        const squares = current.squares.slice();
        
        // If there is already a winner, or the box has already
        // been clicked, ignore the click and return early
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // Replaces the value at the specific with either an 'X' or 
        // an 'O' and changes which player is next
        squares[i] = gameState.xIsNext ? "X" : "O";
        // Updates the state object
        setGameState({
            history: history.concat([
                {
                squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !gameState.xIsNext
        });
    };

    const jumpTo = (step) => {
        setGameState({
            history: history,
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    // Updates status message to show which player is next
    const history = gameState.history;
    const current = history[gameState.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move
            ? `Go to move # ${move}`
            : `Go to game start`;
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {desc}
                </button>
            </li>
        );
    });
    
    let status;
    if (winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next player: ${gameState.xIsNext ? "X" : "O"}`
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
