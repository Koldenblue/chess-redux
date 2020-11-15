import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Board from './Board';

class Main extends React.Component {
  constructor(props) {
    super(props)

  }

  blackTurn = false;
  kingChecked = false;

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

  render() {
    return (<>
      <Container >
        <Board
          rows={8}
          columns={8}
        />
      </Container>
    </>)
  }
}

export default Main;