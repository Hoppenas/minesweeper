export interface SquareProps {
  id: number;
  isMine: boolean;
  nearbyMines: number;
  isOpen: boolean;
  flag: boolean;
}

export interface HeaderProps {
  generateTable: () => void;
  gameOver: boolean;
  size: number;
  setSize: (size: number) => void;
  numberOfMines: number;
  setNumberOfMines: (numberOfMines: number) => void;
}
