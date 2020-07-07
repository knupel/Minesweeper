import React from 'react';
import './style/gui.css';

class GUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is: this.props.is,
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState((prevState) => {
      return {
        is: !prevState.is,
      };
    });
  }

  gui_frame() {
    let res = [];
    if (this.state.is) {
      res.push(<div className="frame">{this.props.content.a}</div>);
    }
    return res;
  }
  // render
  render() {
    return (
      <button onClick={this.update} className="button">
        {this.props.name}
        {this.gui_frame()}
      </button>
    );
  }
}

let gui_data = [
  {
    id: 0,
    is: false,
    name: 'Game',
    content: {
      a: `machin`,
    },
  },
  {
    id: 1,
    is: false,
    name: 'Display',
    content: {
      a: `bidule`,
    },
  },
  {
    id: 2,
    is: false,
    name: 'Controls',
    content: {
      a: `chouette`,
    },
  },
  {
    id: 3,
    is: false,
    name: 'Import',
    content: {
      a: `truc`,
    },
  },
  {
    id: 4,
    is: false,
    name: 'Export',
    content: {
      a: `brole`,
    },
  },
];

// end of class
function set_menu() {
  const menu = gui_data.map((elem) => (
    <GUI
      key={elem.id}
      name={elem.name}
      is={elem.is}
      content={{
        a: elem.content.a,
      }}
    />
  ));
  return menu;
}
let menu;
export function MineSweeperHeader() {
  if (menu === undefined) {
    menu = set_menu();
  }

  return <div>{menu}</div>;
}
