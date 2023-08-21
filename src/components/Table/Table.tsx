import React from "react";
import "./table.css";
import Square from "../square/Square";
import { SquareProps } from "../../types";

export interface TableProps {
  squaresPerRow: number;
  tableArr: SquareProps[];
  handleSquareClick: (id: number) => void;
}

const Table: React.FC<TableProps> = ({
  squaresPerRow,
  tableArr,
  handleSquareClick,
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
          handleSquareClick={handleSquareClick}
        />
      ))}
    </div>
  );
};

export default Table;
