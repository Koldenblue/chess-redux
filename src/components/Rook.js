import React from 'react';

export default function Rook(props) {

  let styles = {
    piece: {
      color: props.black ? 'black' : 'white'
    }
  }
  return (<>
    <h1 className='piece' style={styles.piece}>R</h1>
  </>)
}