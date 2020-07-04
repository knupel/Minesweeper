import React from 'react';
import { MSCell } from './ms_cell';

let data_board = [];

function set_grid(width, height) {
  let num = width * height;
  let count = 0;
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

function grid() {
  const list = data_board.map((elem) => (
    // <td dangerouslySetInnerHTML={{__html: <div>}} />
    <MSCell
      key={elem.id}
      id={elem.id}
      show={elem.is}
      // width={elem.width}
      // height={elem.height}
    />
    // <td dangerouslySetInnerHTML={{__html: </div>}} />
  ));
  return list;
}

function show_line(start, stop) {
  const line = data_board.slice(start, stop + 1);
  const list = line.map((elem) => (
    <MSCell key={elem.id} id={elem.id} show={elem.is} />
  ));
  return list;
}

function loop_line() {}

function show_grid(width, height) {
  return (
    <div>
      <div>{show_line(0, 3)}</div>
      <div>{show_line(4, 7)}</div>
      <div>{show_line(8, 11)}</div>
    </div>
  );
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
    // let current_list = grid(this.props.x, this.props.y);
    // let current_list = grid();

    return (
      <div>
        <div>{this.props.name}</div>
        {show_grid(this.props.width, this.props.height)}
      </div>
    );
  }
}
