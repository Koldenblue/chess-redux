import React from 'react';

export default function King(props) {

  let styles = {
    piece: {
      color: props.black ? 'black' : 'white'
    }
  }
  return (<>
    <h1 className='piece' style={styles.piece}>K</h1>
  </>)
}