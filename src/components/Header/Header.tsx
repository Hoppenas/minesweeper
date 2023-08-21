import React from "react";
import { HeaderProps } from "../../types";

const Header: React.FC<HeaderProps> = ({ generateTable }) => {
  return (
    <div className="header">
      <button onClick={generateTable}>Generate table</button>
    </div>
  );
};

export default Header;
