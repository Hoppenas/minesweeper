import React, { useState } from "react";
import "./square.css";
import { SquareProps } from "../../types";

const squareType = {
  MINE: "mine",
  FLAG: "flag",
  NUMBER: "number",
  EMPTY: "empty",
};

export interface squareFieldProps extends SquareProps {
  handleSquareClick: (id: number) => void;
}

const Square: React.FC<squareFieldProps> = ({
  id,
  isMine,
  nearbyMines,
  isOpen,
  handleSquareClick,
}) => {
  //   const [isOpen, setIsOpen] = useState<boolean>(false);
  //   const handleSquareClick = () => {
  //     setIsOpen(true);
  //   };
  return (
    <button
      className={`square ${isOpen && "square__open"}`}
      onClick={() => handleSquareClick(id)}
    >
      {isOpen && isMine && "X"}
      {isOpen && !isMine && nearbyMines !== 0 && `${nearbyMines}`}
      {/* {id} */}
    </button>
  );
};

export default Square;
