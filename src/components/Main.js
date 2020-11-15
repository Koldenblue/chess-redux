import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Board from './Board';
import Rook from './Rook';
import TurnDisplay from './TurnDisplay';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Main() {
  const [spaceArray, setSpaceArray] = useState([]);
  const [turnDisp, setTurnDisp] = useState('White Turn')
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

  useEffect(() => {
    boardInit();
    gameLoop();
  }, [])

  useEffect(() => {

  }, [spaceArray])

  let kingChecked = false;
  let blackTurn = false;
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
        />
      </Container>
    </Container>
  </>)
}