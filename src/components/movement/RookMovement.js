// import Piece from './PieceClass';

// class RookMovement extends Piece {
//   constructor() {
//     super(straightLineMovement)

//   }
// }

// export default RookMovement;

export default function RookMovement(startColumn, startRow, endColumn, endRow, boardArray) {
  try {
    let validEndCheck = false;
    if (startRow === endRow && startColumn === endColumn) {
      return validEndCheck;
    }

    if (startColumn === endColumn) {
      let interval = parseInt(Math.abs(endRow - startRow) / (endRow - startRow))
      for (let i = startRow + interval; i !== endRow; i += interval) {
        // if there is a piece in between
        if (boardArray[i][startColumn] !== null) {
          return validEndCheck;
        }
      }
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === boardArray[startRow][startColumn].props.black) {
        return validEndCheck;
      }
      validEndCheck = true;
      return validEndCheck;
    }

    else if (startRow === endRow) {
      let interval = parseInt(Math.abs(endColumn - startColumn) / (endColumn - startColumn))
      for (let i = startColumn + interval; i !== endColumn; i += interval) {
        // if there is a piece in between
        if (boardArray[startRow][i] !== null) {
          return validEndCheck;
        }
      }
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === boardArray[startRow][startColumn].props.black) {
        return validEndCheck;
      }
      validEndCheck = true;
      return validEndCheck;
    }
    return validEndCheck;
  } catch (err) {
    console.log(err)
    return false;
  }
}
