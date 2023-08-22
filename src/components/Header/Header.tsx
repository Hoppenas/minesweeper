import React from "react";
import { HeaderProps } from "../../types";

const Header: React.FC<HeaderProps> = ({
  generateTable,
  gameOver,
  size,
  setSize,
}) => {
  return (
    <div className="header">
      <input
        defaultValue={size}
        onChange={(e) => setSize(Number(e.currentTarget.value))}
        type="number"
        max={30}
      />
      <button onClick={generateTable}>
        {gameOver ? "Restart" : "Generate table"}
      </button>
    </div>
  );
};

export default Header;
