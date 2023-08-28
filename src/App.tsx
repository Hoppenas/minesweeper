import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import { generateRandomNumberArr, generateTable } from "./utils/utils";
import Header from "./components/Header/Header";
import { SquareProps } from "./types";

function App() {
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [tableArr, setTableArr] = useState<SquareProps[]>([]);
  const [newTableSize, setNewTableSize] = useState<number>(30);
  const [size, setSize] = useState<number>(30);
  const [numberOfMines, setNumberOfMines] = useState<number>(100);
  const [won, setWon] = useState<boolean>(false);

  const handleGenerateTable = () => {
    setSize(newTableSize);
    setGameOver(false);
    setWon(false);
  };

  useEffect(() => {
    if (!gameOver) {
      const minesArr = generateRandomNumberArr(numberOfMines, size * size);
      setTableArr(generateTable(size, minesArr, size));
    }
  }, [size, gameOver, numberOfMines]);

  useEffect(() => {
    const allSquaresOpen =
      tableArr.filter((square) => !square.isMine && square.isOpen).length === 0;
    if (allSquaresOpen) {
      setWon(true);
    }
  }, [tableArr]);

  const arr: number[] = [];

  const openSquare = (arr: number[]) => {
    console.log(arr);
    setTableArr((prevState) => {
      const updatedArr = [...prevState];
      arr.forEach((square) => {
        updatedArr[square].isOpen = true;
      });
      return updatedArr;
    });
  };

  const handleSquareClick = (id: number) => {
    if (gameOver) {
      return;
    }
    if (tableArr[id].isMine) {
      setGameOver(true);
    }

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

  const handleRightClick = (id: number) => {
    const newValue = !tableArr[id].flag;
    setTableArr((prevState) => {
      const updatedArr = [...prevState];
      updatedArr[id].flag = newValue;
      return updatedArr;
    });
  };

  return (
    <div className="App">
      <Header
        generateTable={handleGenerateTable}
        gameOver={gameOver || won}
        size={newTableSize}
        setSize={setNewTableSize}
        numberOfMines={numberOfMines}
        setNumberOfMines={setNumberOfMines}
      />
      <Table
        squaresPerRow={size}
        tableArr={tableArr}
        handleSquareClick={handleSquareClick}
        handleRightClick={handleRightClick}
        gameOver={gameOver || won}
      />
      {gameOver && (
        <div
          style={{
            position: "absolute",
            left: "45%",
            top: "45%",
            background: "#FFF",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "30px 60px",
          }}
        >
          Game Over
        </div>
      )}
      {won && (
        <div
          style={{
            position: "absolute",
            left: "45%",
            top: "45%",
            background: "#FFF",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "30px 60px",
          }}
        >
          You won!!!
        </div>
      )}
    </div>
  );
}

export default App;
