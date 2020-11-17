export default function KnightMovement(startColumn, startRow, endColumn, endRow, boardArray) {
  try {
    if (Math.abs(startColumn - endColumn) === 1 && Math.abs(startRow - endRow) === 2) {
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === boardArray[startRow][startColumn].props.black) {
        return true;
      }
    }
    
    if (Math.abs(startColumn - endColumn) === 2 && Math.abs(startRow - endRow) === 1) {
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === boardArray[startRow][startColumn].props.black) {
        return true;
      }
    }

    return false;
  } catch (err) {
    console.log(err)
    return err;
  }
}
