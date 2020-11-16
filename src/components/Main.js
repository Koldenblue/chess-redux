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
  const [board, setBoard] = useState();
  const [turn, setTurn] = useState('White')
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
    let newArr = spaceArray.map((x) => {
      return x;
    })
    // check for move validity here
    let startRow = pieceToMove['row'];
    let startCol = pieceToMove['col'];
    // get the piece in the original location, then move to end location
    let currentPiece = spaceArray[startRow][startCol];
    newArr[startRow].splice(startCol, 1, null);
    newArr[row].splice(col, 1, currentPiece);
    setSpaceArray(newArr);
    console.log(spaceArray)

    // set to next player's turn.
    if (!blackTurn) {
      setTurn('Black');
    } else {
      setTurn('White')
    }
    setBlackTurn(!blackTurn)
    setTurnDisp(<TurnDisplay>{`${turn} turn`}</TurnDisplay>)
  }

  // initialize board to start a new game
  useEffect(() => {
    boardInit();
  }, [])

  useEffect(() => {
    console.log("changing space Array")
    // set board so that it updates when space array updates
    setBoard(
      <Board
        spaceArray={spaceArray}
        rows={8}
        columns={8}
        handleSelection={handleSelection}
        pickEnd={pickEnd}
      />
    )
  }, [spaceArray])

  if (spaceArray.length > 0) {
    return (<>
      <Container fluid>
        <Row>
          {turnDisp}
        </Row>
        <Container >
          {board}
        </Container>
      </Container>
    </>)
  } else {
    return (<></>)
  }
}