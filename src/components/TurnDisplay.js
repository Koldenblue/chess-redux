import React, { useEffect, useState } from 'react';

export default function TurnDisplay(props) {
  return(<>
    <h2 className='turn-display'>{props.children}</h2>
  </>)
}