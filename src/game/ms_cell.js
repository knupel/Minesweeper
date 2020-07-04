import React from 'react';

export function MSCell(props) {
  return <button className="cell">{props.show ? 'SHOW' : 'HIDEN'}</button>;
}
