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
        <p>
          {this.props.name}
          {' width: '}
          {this.props.width}
          {' height: '}
          {this.props.height}
          {' Mines: '}
          {this.props.mines}
        </p>
        <MSBoard width={this.props.width} height={this.props.height} />
      </div>
    );
  }
}
