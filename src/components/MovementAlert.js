import React, { useEffect, useState } from 'react';

export default function MovementAlert(props) {

  useEffect(() => {
    setTimeout(() => {
      props.setAlertOpacity(0)
    }, 2000)
  }, [props.alertOpacity])

  let styles = {
    alert: {
      opacity: props.alertOpacity,
      backgroundColor: 'rebeccapurple',
      color: 'white',
      transition: 'opacity 2s',
    }
  }
  return (<h3 style={styles.alert}>
    {props.children}
  </h3>)
}