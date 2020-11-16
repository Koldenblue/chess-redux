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
    if (startColumn === endColumn) {
      return true
      let interval = parseInt(Math.abs(endRow - startRow) / (endRow - startRow))
      for (let i = startRow + interval; i < endRow; i + interval) {
        // if there is a piece in between
        if (boardArray[i][startColumn] !== null && boardArray[i][startColumn].props.black) {
          return validEndCheck;
        }
      }
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === boardArray[startColumn][startRow].props.black) {
        return validEndCheck;
      }
      validEndCheck = true;
      return validEndCheck;
    }
    else if (startRow === endRow) {
      return true
      let interval = parseInt(Math.abs(endColumn - startColumn) / (endColumn - startColumn))
      for (let i = startColumn + interval; i < endColumn; i + interval) {
        // if there is a piece in between
        if (boardArray[startRow][i] !== null && boardArray[startRow][i].props.black) {
          return validEndCheck;
        }
      }
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === boardArray[startColumn][startRow].props.black) {
        return validEndCheck;
      }
      validEndCheck = true;
      return validEndCheck;
    }
    return validEndCheck;
  } catch (err) {
    console.log(err)
    return err;
  }
}
