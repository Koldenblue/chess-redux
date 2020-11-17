import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Board from './Board';
import Rook from './Rook';
import King from './King';
import Queen from './Queen';
import Bishop from './Bishop';
import Pawn from './Pawn';
import Knight from './Knight';
import TurnDisplay from './TurnDisplay';
import Row from 'react-bootstrap/Row';
import RookMovement from './movement/RookMovement';
import PawnMovement from './movement/PawnMovement';
import QueenMovement from './movement/QueenMovement';
import KingMovement from './movement/KingMovement';
import KnightMovement from './movement/KnightMovement';
import BishopMovement from './movement/BishopMovement';
import { useSelector, useDispatch } from 'react-redux';
import { selectPickingEnd, selectPieceToMove, setPickingEnd, setPieceToMove } from '../redux/boardSlice';
import MovementAlert from './MovementAlert';

export default function Main() {
  const [spaceArray, setSpaceArray] = useState([]);
  const [turnDisp, setTurnDisp] = useState('White Turn')
  const [blackTurn, setBlackTurn] = useState(false)
  const dispatch = useDispatch();
  const [board, setBoard] = useState();
  const [turn, setTurn] = useState('White')
  const [alertOpacity, setAlertOpacity] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');
  let pickingEnd = useSelector(selectPickingEnd);
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

    // select a row from new array, then splice the appropriate piece into the target column
    newArr[0].splice(7, 1, <Rook black={false} />)
    newArr[0].splice(0, 1, <Rook black={false} />)
    newArr[7].splice(7, 1, <Rook black={true} />)
    newArr[7].splice(0, 1, <Rook black={true} />)
    newArr[7].splice(2, 1, <Bishop black={true} />)
    newArr[7].splice(5, 1, <Bishop black={true} />)
    newArr[0].splice(2, 1, <Bishop black={false} />)
    newArr[0].splice(5, 1, <Bishop black={false} />)
    newArr[7].splice(4, 1, <King black={true} />)
    newArr[0].splice(4, 1, <King black={false} />)
    newArr[7].splice(3, 1, <Queen black={true} />)
    newArr[0].splice(3, 1, <Queen black={false} />)
    newArr[7].splice(1, 1, <Knight black={true} />)
    newArr[7].splice(6, 1, <Knight black={true} />)
    newArr[0].splice(1, 1, <Knight black={false} />)
    newArr[0].splice(6, 1, <Knight black={false} />)

    // for (let i = 0; i < columns; i++) {
    //   newArr[1].splice(i, 1, <Pawn black={false} />)
    //   newArr[6].splice(i, 1, <Pawn black={true} />)
    // }
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
    let startRow = pieceToMove['row'];
    let startCol = pieceToMove['col'];
    let currentPiece = spaceArray[startRow][startCol];

    let validMove = false;
    // get the name of the current piece, and run the appropriate movement function
    switch (currentPiece.type.name) {
      case 'Rook':
        validMove = (RookMovement(startCol, startRow, col, row, spaceArray))
        break;
      case 'Pawn':
        validMove = (PawnMovement(startCol, startRow, col, row, spaceArray))
        break;
      case 'Bishop':
        validMove = (BishopMovement(startCol, startRow, col, row, spaceArray))
        break;
      case 'King':
        validMove = (KingMovement(startCol, startRow, col, row, spaceArray))
        break;
      case 'Queen':
        validMove = (QueenMovement(startCol, startRow, col, row, spaceArray))
        break;
      case 'Knight':
        validMove = (KnightMovement(startCol, startRow, col, row, spaceArray))
        break;
      default:
        break;
    }

    if (validMove) {
      // if valid, no longer picking an end location
      dispatch(setPickingEnd(false));
      let newArr = spaceArray.map((x) => {
        return x;
      })
      // get the piece in the original location, then move to end location
      newArr[startRow].splice(startCol, 1, null);
      newArr[row].splice(col, 1, currentPiece);
      setSpaceArray(newArr);

      // set to next player's turn.
      if (turn === 'White') {
        setTurnDisp(<TurnDisplay>{`Black turn`}</TurnDisplay>);
        setTurn('Black')
      } else {
        setTurnDisp(<TurnDisplay>{`White turn`}</TurnDisplay>);
        setTurn('White')
      }
      setBlackTurn(!blackTurn)
    }

    else {
      // handle non-valid move here
      console.log('nonvalid')
      setAlertOpacity(1);
      setAlertMessage('Invalid Movement! Select another piece to move.');
      dispatch(setPickingEnd(false));
      dispatch(setPieceToMove({}));
    }
  }


  // initialize board to start a new game
  useEffect(() => {
    boardInit();
    setTurnDisp(<TurnDisplay>{`${turn} turn`}</TurnDisplay>);
  }, [])

  useEffect(() => {
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
          <MovementAlert
            alertOpacity={alertOpacity}
            setAlertOpacity={setAlertOpacity}
          >
            {alertMessage}
          </MovementAlert>
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