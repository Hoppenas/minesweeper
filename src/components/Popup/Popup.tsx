import React from "react";
import "./popup.css";

interface PopupProps {
  name: string;
}

const Popup: React.FC<PopupProps> = ({ name }) => (
  <div className="popup">{name}</div>
);

export default Popup;
