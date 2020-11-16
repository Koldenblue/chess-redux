import React, { useEffect, useState } from 'react';
import Space from './Space';
import Col from 'react-bootstrap/Col';

export default function Board(props) {
  const [mappedSpaces, setMappedSpaces] = useState();

  // maps out the array of pieces into Space components and piece components for visualization
  useEffect(() => {
    let col = -1;
    let row = 8;
    let spaceColor = 'white'
    setMappedSpaces(props.spaceArray.map(r => {
      // alternate black and white spaces
      if (spaceColor === 'black') {
        spaceColor = 'white'
      } else {
        spaceColor = 'black'
      }
      row--;

      return (
        <div key={`row-${row}`} className='row board-row'>
          <Col></Col>
          {props.spaceArray[row].map(c => {
            if (spaceColor === 'black') {
              spaceColor = 'white'
            } else {
              spaceColor = 'black'
            }
            col++;
            if (col > 7) {
              col = 0;
            }
            return (
              <Space
                id={`row-${row}-col-${col}`}
                col={col}
                row={row}
                key={`row-${row}-col-${col}`}
                visible={true}
                spaceColor={spaceColor}
                piece={props.spaceArray[row][col]}
                handleSelection={props.handleSelection}
                spaceArray={props.spaceArray}
                pickEnd={props.pickEnd}
              />
            )
          })}
          <Col></Col>
        </div>
      )
    }))
  }, [props.spaceArray])

  return (<>
    {mappedSpaces}
  </>)
}