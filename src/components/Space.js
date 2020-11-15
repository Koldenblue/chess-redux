import React, { useState, useEffect } from "react"
import { Animated } from "react-animated-css";
const util = require("util")

export default function Space(props) {

  let styles = {
    boardColumn: {
      // 'backgroundImage': 'linear-gradient(to bottom left, #FCC85F, #F3752B)',
      backgroundColor: props.spaceColor,
      'border': '2px black solid',
      'marginTop': 0,
      'padding': 0,
      'borderRadius': '8px',
    },
    boardSpace: {
      'border': '2px black solid',
      'backgroundColor': '#FFE7AD',
      'borderRadius': '50px',
      'marginTop': 0,
      'padding': 0,
      'height': '95px',
    }
  }

  return (<>
    <div className='col-sm-1' style={styles.boardColumn}>
      <div className='col-sm-12 board-space'
        id={props.id}
        style={styles.boardSpace}
        col={props.col}
        row={props.row}
      >
        {props.piece}
      </div>
    </div >
  </>)
}
