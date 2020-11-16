import React, { useState } from 'react';

export default function MovementAlert(props) {


  let styles = {
    alert: {
      opacity: props.alertOpacity,
      backgroundColor: 'rebeccapurple',
      color: 'white',
    }
  }
  return (<h3 style={styles.alert}>
    {props.children}
  </h3>)
}