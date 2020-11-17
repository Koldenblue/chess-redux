export default function BishopMovement(startColumn, startRow, endColumn, endRow, boardArray) {
  try {
    let validEndCheck = false;
    if (startRow === endRow || startColumn === endColumn) {
      return validEndCheck;
    }
    // Get the number of columns moved. It should be equal to the number of rows moved.
    let columnInterval = parseInt(Math.abs(endColumn - startColumn));
    let rowInterval = parseInt(Math.abs(endRow - startRow));
    if (columnInterval !== rowInterval) {
      return validEndCheck;
    }

    // 1 if end is greater than start, else -1
    let negativeRow = parseInt(Math.abs(endRow - startRow) / (endRow - startRow))
    let negativeCol = parseInt(Math.abs(endColumn - startColumn) / (endColumn - startColumn))
    // Find if the spaces between the start and end are occupied. If occupied, return false.

    for (let c = startColumn + negativeCol, r = startRow + negativeRow; c !== endColumn && r !== endRow; c += negativeCol, r += negativeRow) {
      // console.log('c', c)
      // console.log('r', r)
      if (boardArray[r][c] !== null) {
        console.log('false here')
        return validEndCheck;
      }
    }

    // Make sure the end location is not occupied by a friendly piece.
    if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === boardArray[startRow][startColumn].props.black) {
      return validEndCheck;
    }

    validEndCheck = true;
    return validEndCheck;
  } catch (err) {
    console.log(err)
    return false;
  }
}
