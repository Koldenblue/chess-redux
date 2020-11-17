export default function PawnMovement(startColumn, startRow, endColumn, endRow, boardArray) {
  try {
    let validEndCheck = false;

    //  Pawn can only stay in the same column, or move one column over to capture a piece. 
    if (Math.abs(startColumn - endColumn) > 1) {
      return validEndCheck;
    }
    
    // black pawn movement
    if (boardArray[startRow][startColumn].props.black) {
      // black pawn can only move downwards (row must decrease)
      if (endRow >= startRow) {
        return validEndCheck;
      }
      // If black pawn is in starting row 6, it can move forward two spaces if those spaces are empty.
      if (startColumn === endColumn) {
        if (startRow === 6) {
          if (endRow === 5 && boardArray[endRow][endColumn] === null) {
            return true;
          }
          if (endRow === 4 && boardArray[endRow][endColumn] === null && boardArray[endRow + 1][endColumn] === null) {
            return true
          }
          return validEndCheck;
        }
        // If pawn moved earlier in the game, it can only move one space forward, and only if that space is empty.
        if (startRow < 6) {
          if (endRow !== startRow - 1) {
            return validEndCheck;
          }
          if (boardArray[endRow][endColumn] !== null) {
            return validEndCheck;
          }
          else {
            return true;
          }
        }
      }
      if (Math.abs(startColumn - endColumn) === 1) {
        if (endRow !== startRow - 1) {
          return validEndCheck;
        }
        if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black === false) {
          return true;
        }
        else {
          return validEndCheck;
        }
      }
    }

    // white pawn movement
    if (boardArray[startRow][startColumn].props.black === false) {
      // white pawn can only move upwards (row must increase)
      if (endRow <= startRow) {
        return validEndCheck;
      }
      // If white pawn is in starting row 1, it can move forward two spaces if those spaces are empty.
      if (startColumn === endColumn) {
        if (startRow === 1) {
          if (endRow === 2 && boardArray[endRow][endColumn] === null) {
            return true;
          }
          if (endRow === 3 && boardArray[endRow][endColumn] === null && boardArray[endRow - 1][endColumn] === null) {
            return true
          }
          return validEndCheck;
        }
        // If pawn moved earlier in the game, it can only move one space forward, and only if that space is empty.
        if (startRow > 1) {
          if (endRow !== startRow + 1) {
            return validEndCheck;
          }
          if (boardArray[endRow][endColumn] !== null) {
            return validEndCheck;
          }
          else {
            return true;
          }
        }
      }
      if (Math.abs(startColumn - endColumn) === 1) {
        if (endRow !== startRow + 1) {
          return validEndCheck;
        }
        if (boardArray[endRow][endColumn] !== null && boardArray[endRow][endColumn].props.black) {
          return true;
        }
        else {
          return validEndCheck;
        }
      }
    }


  } catch (err) {
    console.log(err)
    return false;
  }
}
