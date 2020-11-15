import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Board from './Board';
import Rook from './Rook';

export default function Main() {
  const [spaceArray, setSpaceArray] = useState([]);
  const rows = 8;
  const columns = 8;
  
  const boardInit = () => {
    let newArr = [];
    for (let i = 0; i < rows; i++) {
      newArr.push([])
      for (let j = 0; j < columns; j++) {
        newArr[i].push(null)
      }
    }

    newArr[0].splice(7, 1, <Rook />)
    setSpaceArray(newArr);
    console.log(newArr)
  }

  useEffect(() => {
    boardInit();
    console.log(spaceArray)
  },[])

  useEffect(() => {

  }, [spaceArray])
  // blackTurn = false;
  // kingChecked = false;

  // gameLoop() {
  //   while (true) {
  //     if (!this.blackTurn) {
  //       turn = 'white';
  //       enemy = 'black';
  //     } else {
  //       turn = 'black';
  //       enemy = 'white';
  //     }
  //     // print chessboard

  //     if (this.kingChecked) {
  //       // pring (`${turn} king is in check.`) // format to title case
  //     }
  //     // check game over checkmate



  //   }
  // }

  return (<>
    <Container >
      <Board
        spaceArray={spaceArray}
        rows={8}
        columns={8}
      />
    </Container>
  </>)
}