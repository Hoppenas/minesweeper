import React from "react";
import { HeaderProps } from "../../types";
import "./header.css";

const Header: React.FC<HeaderProps> = ({
  generateTable,
  gameOver,
  size,
  setSize,
  numberOfMines,
  setNumberOfMines,
}) => {
  return (
    <div className="header">
      <div>
        <div>Field size</div>
        <input
          defaultValue={size}
          onChange={(e) => setSize(Number(e.currentTarget.value))}
          type="number"
          max={30}
        />
      </div>
      <div>
        <div>Number of mines</div>
        <input
          defaultValue={numberOfMines}
          onChange={(e) => setNumberOfMines(Number(e.currentTarget.value))}
          type="number"
          max={30}
        />
      </div>
      <button onClick={generateTable}>
        {gameOver ? "Restart" : "Generate table"}
      </button>
    </div>
  );
};

export default Header;
