import React from "react";
import "./table.css";
import Square from "../square/Square";
import { SquareProps } from "../../types";

export interface TableProps {
  squaresPerRow: number;
  tableArr: SquareProps[];
  handleSquareClick: (id: number) => void;
  handleRightClick: (id: number) => void;
  gameOver: boolean;
}

const Table: React.FC<TableProps> = ({
  squaresPerRow,
  tableArr,
  handleSquareClick,
  handleRightClick,
  gameOver,
}) => {
  return (
    <div className="table" style={{ width: `${squaresPerRow * 30}px` }}>
      {tableArr.map((square) => (
        <Square
          key={square.id}
          id={square.id}
          isMine={square.isMine}
          nearbyMines={square.nearbyMines}
          isOpen={square.isOpen}
          flag={square.flag}
          handleSquareClick={handleSquareClick}
          handleRightClick={handleRightClick}
          gameOver={gameOver}
        />
      ))}
    </div>
  );
};

export default Table;
