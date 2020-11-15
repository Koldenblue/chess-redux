import React, { useEffect, useState } from 'react';
import Space from './Space';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Board(props) {
  const [boardLayout, setBoardLayout] = useState();

  let styles = {
    boardRow: {
      'height': '100px',
      'marginTop': '0',
      'padding': '0',
      'position': 'relative',
      left: '50%',
      'transform': 'translateX(-50%)',

    }
  }

  let rowArr = new Array(props.rows);
  let colArr = new Array(props.columns);

  // creating new arrays the size of rows and columns, so that they can be mapped to Spaces below
  const populateColArr = () => {
    for (let c = 0, j = colArr.length; c < j; c++) {
      colArr[c] = c;
    }
  }
  const populateRowArr = () => {
    for (let r = 0, j = rowArr.length; r < j; r++) {
      rowArr[r] = r;
    }
  }

  let spaceColor = 'black';
  useEffect(() => {
    populateColArr();
    populateRowArr();
    console.log(rowArr)
    setBoardLayout(rowArr.map(r => {
      if (spaceColor === 'black') {
        spaceColor = 'white'
      } else {
        spaceColor = 'black'
      }
      return (
        <div key={`row-${r}`} className='row' style={styles.boardRow}>
          <Col></Col>
          {colArr.map(c => {
            if (spaceColor === 'black') {
              spaceColor = 'white'
            } else {
              spaceColor = 'black'
            }
            console.log(spaceColor)
            return (<>
                <Space
                  id={`row-${r}-col-${c}`}
                  col={c}
                  row={r}
                  key={`row-${r}-col-${c}`}
                  visible={true}
                  spaceColor={spaceColor}
                />
            </>)
          })}
          <Col></Col>
        </div>
      )
    }))
  }, [])


  return (<>
    {boardLayout}
  </>)
}