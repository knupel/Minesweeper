import React from 'react';
import { MSCell } from './ms_cell';

let data_board = [];

function set_grid(x, y) {
  let num = x * y;
  let count = 0;
  console.log('cellules', num);
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      count++;
      let cell = {
        id: count,
        // not the col and row is necessary,
        // with the id, width and height we should be catch the position
        col: i,
        row: j,
        width: x,
        height: y,
        type: 'empty',
        is: true,
      };
      data_board.push(cell);
    }
  }
  return;
}

function grid(x, y) {
  const list = data_board.map((elem) => (
    <MSCell
      key={elem.id}
      id={elem.id}
      show={elem.is}
      width={elem.width}
      height={elem.height}
    />
  ));
  return list;
}

export class MSBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // history: 0,
    };
  }

  render() {
    // setting
    if (data_board[0] === undefined) {
      console.log('set grid');
      set_grid(this.props.x, this.props.y);
    }
    return (
      <div>
        {this.props.name}
        {grid(this.props.x, this.props.y)}
      </div>
    );
  }
}
