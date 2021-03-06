import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { setPieceToMove, setPickingEnd, selectPickingEnd, selectPieceToMove } from '../redux/boardSlice';

export default function Space(props) {
  const spaceRef = React.createRef();
  const dispatch = useDispatch();
  let pickingEnd = useSelector(selectPickingEnd);
  let pieceToMove = useSelector(selectPieceToMove);
  const [opacity, setOpacity] = useState(0);

  let styles = {
    boardColumn: {
      // 'backgroundImage': 'linear-gradient(to bottom left, #FCC85F, #F3752B)',
      backgroundColor: props.spaceColor,
      'border': '2px black solid',
      'marginTop': 0,
      'padding': 0,
      'borderRadius': '8px',
    },
    visible: {
      opacity: opacity,
    }
  }

  const pickUpPiece = () => {
    // if a starting piece has been picked, allow end location pick
    if (!pickingEnd) {
      console.log('picking end is false')
      props.handleSelection(props.row, props.col);
      let newObj = {}
      newObj.row = props.row;
      newObj.col = props.col;
      dispatch(setPieceToMove(newObj))
    }
    else {
      // make deep copy by value, rather than reference
      let newArr = JSON.stringify(props.spaceArray);
      newArr = JSON.parse(newArr);
      props.pickEnd(props.row, props.col, pieceToMove)
    }
  }

  useEffect(() => {
    if (!props.piece) {
      setOpacity(0);
    }
    else {
      setOpacity(1)
    }
  },[props.piece])
  return (<>
    <div className='col-sm-1' style={styles.boardColumn}>
      <div className='col-sm-12 board-space'
        style={styles.visible}
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
