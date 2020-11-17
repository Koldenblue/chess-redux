export default function KnightMovement(startColumn, startRow, endColumn, endRow, boardArray) {
  try {
    console.log('knight')
    console.log(startColumn, endColumn, startRow, endRow)
    console.log(Math.abs(startColumn - endColumn))
    console.log(Math.abs(startRow - endRow))
    if (Math.abs(startColumn - endColumn) === 1 && Math.abs(startRow - endRow) === 2) {
      console.log('correct')
      if (boardArray[endRow][endColumn] === null) {
        return true;
      }
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black !== boardArray[startRow][startColumn].props.black) {
        return true;
      }
    }
    
    if (Math.abs(startColumn - endColumn) === 2 && Math.abs(startRow - endRow) === 1) {
      console.log('correct')
      if (boardArray[endRow][endColumn] === null) {
        return true;
      }
      if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black !== boardArray[startRow][startColumn].props.black) {
        return true;
      }
    }

    return false;
  } catch (err) {
    console.log(err)
    return err;
  }
}
