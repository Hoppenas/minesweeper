const nearbyMinesCalculator = (
  id: number,
  rowLength: number,
  minesArr: number[]
) => {
  let nearbyMines = 0;
  const checkSquaresArr = [id - rowLength, id + rowLength];
  if (id % rowLength !== 0) {
    checkSquaresArr.push(id - rowLength - 1);
    checkSquaresArr.push(id - 1);
    checkSquaresArr.push(id + rowLength - 1);
  }
  if ((id + 1) % rowLength !== 0) {
    checkSquaresArr.push(id - rowLength + 1);
    checkSquaresArr.push(id + 1);
    checkSquaresArr.push(id + rowLength + 1);
  }
  checkSquaresArr.forEach((square) => {
    if (minesArr.includes(square)) {
      nearbyMines++;
    }
  });
  return nearbyMines;
};

export const generateTable = (
  size: number,
  minesArr: number[],
  rowLength: number
) => {
  const totalNumberOfSquares = size * size;
  const array = Array.apply(null, Array(totalNumberOfSquares)).map(function (
    y,
    i
  ) {
    return {
      id: i,
      isMine: minesArr.includes(i),
      nearbyMines: nearbyMinesCalculator(i, rowLength, minesArr),
      isOpen: false,
    };
  });
  return array;
};

export const generateRandomNumberArr = (length: number, maxValue: number) => {
  const arr: number[] = [];
  while (arr.length < length) {
    const randomNumber = Math.floor(Math.random() * maxValue);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  return arr;
};
