import React, { useState, useEffect, useRef } from "react"
import { Animated } from "react-animated-css";
const util = require("util")

export default function Space(props) {
  const spaceRef = React.createRef();

  let styles = {
    boardColumn: {
      // 'backgroundImage': 'linear-gradient(to bottom left, #FCC85F, #F3752B)',
      backgroundColor: props.spaceColor,
      'border': '2px black solid',
      'marginTop': 0,
      'padding': 0,
      'borderRadius': '8px',
    },
    // boardSpace: {
    //   'border': '2px black solid',
    //   'backgroundColor': '#FFE7AD',
    //   'borderRadius': '50px',
    //   'marginTop': 0,
    //   'padding': 0,
    //   'height': '95px',
    // }
  }


  const pickUpPiece = () => {
    // if a starting piece has been picked, allow end location pick
    if (!props.pickingEnd) {
      props.handleSelection(props.row, props.col);
    }
    else {
      // make deep copy by value, rather than reference
      let newArr = JSON.stringify(props.spaceArray);
      newArr = JSON.parse(newArr);
      props.pickEnd(props.row, props.col)
    }
  }

  return (<>
    <div className='col-sm-1' style={styles.boardColumn}>
      <div className='col-sm-12 board-space'
        ref={spaceRef}
        id={props.id}
        col={props.col}
        row={props.row}
        onClick={pickUpPiece}
      >
        {props.piece}
      </div>
    </div >
  </>)
}
