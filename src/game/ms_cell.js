import React from 'react';

export function MSCell(props) {
  if (props.id % props.width === 0) {
    // console.log('à la ligne', props.id);
    return <div>{props.show ? 'SHOW ' : 'HIDEN '}</div>;
  } else {
    //console.log('normal', props.id);
    return props.show ? 'show ' : 'hiden ';
  }

  // return (props.show ? 'show' : 'hiden');
  // return <h1>{props.show ? 'show' : 'hiden'}</h1>;
  // return <div>{props.show ? 'show' : 'hiden'}</div>;
}
