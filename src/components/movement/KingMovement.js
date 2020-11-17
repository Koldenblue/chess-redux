export default function KingMovement(startColumn, startRow, endColumn, endRow, boardArray) {
  try {
    let validEndCheck = false;
    // make sure target space isn't already occupied by a friendly piece
    if (boardArray[endRow][endColumn] !== null && boardArray[startRow][startColumn].props.black === boardArray[endRow][endColumn].props.black) {
      return validEndCheck;
    }
    //if the king only moves one space, the move is valid:
    if (Math.abs(endRow - startRow) === 1) {
      if (Math.abs(endColumn - startColumn) === 0 || Math.abs(endColumn - startColumn) === 1) {
        validEndCheck = true;
      }
    }
    else if (Math.abs(endColumn - startColumn) === 1) {
      if (Math.abs(endRow - startRow) === 0 || Math.abs(endRow - startRow) === 1) {
        validEndCheck = true;
      }
    }
    return validEndCheck;
  } catch (err) {
    console.log(err)
    return err;
  }
}
