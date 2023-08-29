import React from "react";
import "./square.css";
import { SquareProps } from "../../types";
import { theme } from "../../theme";

export interface squareFieldProps extends SquareProps {
  handleSquareClick: (id: number) => void;
  handleRightClick: (id: number) => void;
  gameOver: boolean;
}

const Square: React.FC<squareFieldProps> = ({
  id,
  isMine,
  nearbyMines,
  isOpen,
  flag,
  handleSquareClick,
  handleRightClick,
  gameOver,
}) => {
  const squareColor = theme.colors.squares[nearbyMines];
  return (
    <button
      className={`square ${isOpen && "square__open"}`}
      onClick={() => handleSquareClick(id)}
      onContextMenu={(e) => {
        e.preventDefault();
        handleRightClick(id);
      }}
    >
      {((gameOver && isMine) || (isOpen && isMine)) && <div>&#128165;</div>}
      {isOpen && !isMine && nearbyMines !== 0 && (
        <div style={{ color: squareColor }}>{nearbyMines}</div>
      )}
      {!gameOver && !isOpen && flag && (
        <div style={{ fontSize: "16px" }}>&#x1F6A9;</div>
      )}
    </button>
  );
};

export default Square;
