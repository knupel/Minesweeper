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
        col: i,
        row: j,
        type: 'empty',
        is: true,
      };
      data_board.push(cell);
    }
  }
  return;
}

function grid(x, y) {
  if (data_board[0] === undefined) {
    set_grid(x, y);
    console.log('tout à faire');
  }
  const list = data_board.map((elem) => (
    <MSCell key={elem.id} show={elem.is} />
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
    return (
      <div>
        {this.props.name} {grid(this.props.x, this.props.y)}
      </div>
    );
  }
}
