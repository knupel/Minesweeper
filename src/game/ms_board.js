import React from 'react';
import { MSCell } from './ms_cell';

let data_board = [];

function set_grid(width, height) {
  let num = width * height;
  let count = 0;
  let header = [Number(width), Number(height)];
  data_board.push(header);
  console.log('cellules', num);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      count++;
      let cell = {
        id: count,
        // not the col and row is necessary,
        // with the id, width and height we should be catch the position
        col: i,
        row: j,
        width: width,
        height: height,
        type: 'empty',
        is: true,
      };
      data_board.push(cell);
    }
  }
  return;
}

function line(start, stop) {
  const line = data_board.slice(start, stop + 1);
  const list = line.map((elem) => (
    <MSCell key={elem.id} id={elem.id} show={elem.is} />
  ));
  return list;
}

function grid() {
  // get the header information
  let w = data_board[0][0];
  let h = data_board[0][1];

  let grid = [];
  for (let index = 0; index < h; index++) {
    let entry = index * w + 1;
    let exit = entry + w - 1;
    grid.push(<div>{line(entry, exit)}</div>);
  }
  return grid;
}

function show_grid() {
  return <div>{grid()};</div>;
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
      set_grid(this.props.width, this.props.height);
    }
    return (
      <div>
        <div>{this.props.name}</div>
        {show_grid()}
      </div>
    );
  }
}
