class Piece {
  constructor() {

  }

  straightLineMovement(startColumn, startRow, endColumn, endRow, boardArray) {
    let validEndCheck = false;
    if (startColumn === endColumn) {
      let interval = parseInt(Math.abs(endRow - startRow) / (endRow - startRow))
      for (let i = startRow + interval; i < endRow; i + interval) {
        // if there is a piece in between
        if (boardArray[i][startColumn].props?.black) {
          return validEndCheck;
        }
      }
      if (boardArray[endRow][endColumn].props?.black === boardArray[startColumn][startRow].props?.black) {
        return validEndCheck;
      }
      validEndCheck = true;
      return validEndCheck;
    }
    else if (startRow === endRow) {
      let interval = parseInt(Math.abs(endColumn - startColumn) / (endColumn - startColumn))
      for (let i = startColumn + interval; i < endColumn; i + interval) {
        // if there is a piece in between
        if (boardArray[startRow][i].props?.black) {
          return validEndCheck;
        }
      }
      if (boardArray[endRow][endColumn].props?.black === boardArray[startColumn][startRow].props?.black) {
        return validEndCheck;
      }
      validEndCheck = true;
      return validEndCheck;
    }
  }

}

export default Piece;