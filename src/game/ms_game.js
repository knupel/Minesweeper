import React from 'react';
import { MSBoard } from './ms_board';

export class MineSweeperGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: 2,
    };
  }
  render() {
    return (
      <div>
        <MSBoard
          name={this.props.name}
          x={this.props.rows}
          y={this.props.cols}
        />
        <p>
          ROWS {this.props.x} COLS {this.props.y}
        </p>
        <p>MINES {this.props.mines}</p>
      </div>
    );
  }
}
