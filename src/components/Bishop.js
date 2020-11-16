import React from 'react';

export default function Bishop(props) {


  let styles = {
    piece: {
      color: props.black ? 'black' : 'white'
    }
  }
  return (<>
    <h1 className='piece' style={styles.piece}>B</h1>
  </>)
}