export interface SquareProps {
  id: number;
  isMine: boolean;
  nearbyMines: number;
  isOpen: boolean;
}

export interface HeaderProps {
  generateTable: () => void;
}
