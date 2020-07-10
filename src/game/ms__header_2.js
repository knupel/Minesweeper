import React from 'react';
import './style/gui.css';
import './style/morpion.css';

function Menu(props) {
  return (
    <button className="menu" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class MenuBar extends React.Component {
  renderMenu(which_one) {
    return (
      <Menu
        value={this.props.list_menu_bar[which_one]}
        onClick={() => this.props.onClick(which_one)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderMenu(0)}
          {this.renderMenu(1)}
          {this.renderMenu(2)}
        </div>
        <div className="board-row">
          {this.renderMenu(3)}
          {this.renderMenu(4)}
          {this.renderMenu(5)}
        </div>
        <div className="board-row">
          {this.renderMenu(6)}
          {this.renderMenu(7)}
          {this.renderMenu(8)}
        </div>
      </div>
    );
  }
}

class MenuBarManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // history: props.data,
      history: [
        {
          // content: Array(9).fill('-'),
          content: Array(props.data.length).fill('-'),
        },
      ],
      step_num: 0,
      is: false,
    };
  }

  update(which_one) {
    const history = this.state.history.slice(0, this.state.step_num + 1);
    const current = history[history.length - 1];
    const temp_list = current.content.slice();

    temp_list[which_one] = this.state.is ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          content: temp_list,
        },
      ]),
      step_num: history.length,
      is: !this.state.which_one,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.step_num];

    return (
      <div className="menu_bar">
        <MenuBar
          list_menu_bar={current.content}
          onClick={(local_index_use) => this.update(local_index_use)}
        />
      </div>
    );
  }
}

export function MineSweeperHeader() {
  return <MenuBarManager data={gui_data} />;
}

/**
 * UTILS
 */
function set_menu_bar(props) {
  return props.data.map((elem) => (
    <Menu
      key={elem.id}
      name={elem.name}
      is={elem.is}
      content={{
        a: elem.content.a,
      }}
    />
  ));
}

/**
 * DATA
 */
let gui_data = [
  {
    id: 0,
    is: false,
    name: 'Game',
    content: {
      a: 'easy',
      b: 'medium',
      c: 'hard',
    },
  },
  {
    id: 1,
    is: false,
    name: 'Display',
    content: {
      a: 'bidule',
      b: 'machin',
      c: 'truc',
    },
  },
  {
    id: 2,
    is: false,
    name: 'Controls',
    content: {
      a: 'chouette',
      b: 'hibou',
      c: 'grand duc',
    },
  },
  {
    id: 3,
    is: false,
    name: 'Import',
    content: {
      a: 'truc',
      b: 'ketruc',
    },
  },
  {
    id: 4,
    is: false,
    name: 'Export',
    content: {
      a: 'brole',
      b: 'grole',
      c: 'drôle',
      d: 'prol',
    },
  },
];
