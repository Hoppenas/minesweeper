import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import { generateRandomNumberArr, generateTable } from "./utils/utils";
import Header from "./components/Header/Header";
import { SquareProps } from "./types";

function App() {
  const [tableArr, setTableArr] = useState<SquareProps[]>([]);
  const size = 10;
  const numberOfMines = 10;

  const handleGenerateTable = () => {
    const minesArr = generateRandomNumberArr(numberOfMines, size * size);
    setTableArr(generateTable(size, minesArr, size));
  };

  const arr: number[] = [];

  const openSquare = (arr: number[]) => {
    setTableArr((prevState) => {
      const updatedArr = [...prevState];
      arr.forEach((square) => {
        updatedArr[square].isOpen = true;
      });
      return updatedArr;
    });
  };

  const handleSquareClick = (id: number) => {
    if (!arr.includes(id)) {
      arr.push(id);
    }
    if (id >= 0 && tableArr[id].nearbyMines === 0 && !tableArr[id].isMine) {
      if (id > size && id % size !== 0 && !arr.includes(id - size - 1)) {
        handleSquareClick(id - size - 1);
      }
      if (id >= size && !arr.includes(id - size)) {
        handleSquareClick(id - size);
      }
      if (id >= size && (id + 1) % size !== 0 && !arr.includes(id - size + 1)) {
        handleSquareClick(id - size + 1);
      }
      if (id > 0 && id % size !== 0 && !arr.includes(id - 1)) {
        handleSquareClick(id - 1);
      }
      if ((id + 1) % size !== 0 && !arr.includes(id + 1)) {
        handleSquareClick(id + 1);
      }
      if (
        id < size * (size - 1) &&
        id % size !== 0 &&
        !arr.includes(id + size - 1)
      ) {
        handleSquareClick(id + size - 1);
      }
      if (id < size * (size - 1) && !arr.includes(id + size)) {
        handleSquareClick(id + size);
      }
      if (
        id < size * (size - 1) - 1 &&
        (id + 1) % size !== 0 &&
        !arr.includes(id + size + 1)
      ) {
        handleSquareClick(id + size + 1);
      }
      return;
    }
    openSquare(arr);
  };

  return (
    <div className="App">
      <Header generateTable={handleGenerateTable} />
      <Table
        squaresPerRow={size}
        tableArr={tableArr}
        handleSquareClick={handleSquareClick}
      />
    </div>
  );
}

export default App;
