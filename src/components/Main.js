import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Board from './Board';
import Rook from './Rook';
import TurnDisplay from './TurnDisplay';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { selectPieceToMove, setPickingEnd } from '../redux/boardSlice';

export default function Main() {
  const [spaceArray, setSpaceArray] = useState([]);
  const [turnDisp, setTurnDisp] = useState('White Turn')
  const [blackTurn, setBlackTurn] = useState(false)
  const dispatch = useDispatch();
  let pieceToMove = useSelector(selectPieceToMove)
  const rows = 8;
  const columns = 8;

  // intitializes the board array. Sets pieces in their initial positions
  const boardInit = () => {
    let newArr = [];
    for (let i = 0; i < rows; i++) {
      newArr.push([])
      for (let j = 0; j < columns; j++) {
        newArr[i].push(null)
      }
    }

    newArr[0].splice(7, 1, <Rook black={false} />)
    newArr[0].splice(0, 1, <Rook black={false} />)
    newArr[7].splice(7, 1, <Rook black={true} />)
    newArr[7].splice(0, 1, <Rook black={true} />)
    setSpaceArray(newArr);
  }

  const handleSelection = (row, col) => {
    console.log("handling move")
    console.log('the space you selected contains:', spaceArray[row][col])
    if (spaceArray[row][col] !== null) {
      console.log('black turn? ', spaceArray[row][col].props.black)
      if (spaceArray[row][col].props.black === blackTurn) {
        // check for validity. setPieceToMove back to null, if not valid
        console.log('move piece to where?')
        dispatch(setPickingEnd(true));
      }
    }
    return false;
  }

  // have to pass in piece to move from the child, since otherwise 
  // this function with the original pieceToMove(empty object)
  // is passed back from the child
  const pickEnd = (row, col, pieceToMove) => {
    dispatch(setPickingEnd(false));
    // let newArr = JSON.stringify(spaceArray);
    // newArr = JSON.parse(newArr);
    // check for move validity here
    console.log(pieceToMove)
    let startRow = pieceToMove['row'];
    let startCol = pieceToMove['col'];
    console.log(startRow)
    console.log(startCol)
    // get the piece in the original location, then move to end location
    let currentPiece = spaceArray[startRow][startCol];
    console.log(currentPiece)
    spaceArray[startRow].splice(startCol, 1, null);
    spaceArray[row].splice(col, 1, currentPiece);
    setSpaceArray(spaceArray);
    console.log(spaceArray)
  }

  useEffect(() => {
    boardInit();
    gameLoop();
  }, [])

  useEffect(() => {
    console.log(spaceArray)
  }, [spaceArray])

// useEffect (() => {
//   console.log(pieceToMove)
// }, [pieceToMove])

  let kingChecked = false;
  let turn;
  let enemy;
  const gameLoop = () => {
    while (true) {
      if (!blackTurn) {
        turn = 'White';
        enemy = 'Black';
      } else {
        turn = 'Black';
        enemy = 'White';
      }

      setTurnDisp(<TurnDisplay>{`${turn} turn`}</TurnDisplay>)
      break;
    }
  }


  if (spaceArray.length > 0) {
  return (<>
    <Container fluid>
      <Row>
        {turnDisp}
      </Row>
      <Container >
        <Board
          spaceArray={spaceArray}
          rows={8}
          columns={8}
          handleSelection={handleSelection}
          pickEnd={pickEnd}
        />
      </Container>
    </Container>
  </>)
  } else {
    return(<></>)
  }
}