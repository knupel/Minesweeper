import React from 'react';
import './style/gui.css';

function Menu(props) {
  if (props.is) {
    return (
      <button className="menu" onClick={props.onClick}>
        {props.name}
      </button>
    );
  } else {
    return (
      <button className="menu_selected" onClick={props.onClick}>
        {props.name}
      </button>
    );
  }
}

// MENU BAR
class MenuBar extends React.Component {
  show_menu_bar() {
    let res = [];
    console.log('MenuBar: aux suivants');
    for (let i = 0; i < this.props.list_menu_bar.length; i++) {
      res.push(this.show_menu(i));
    }
    return res;
  }

  show_menu(which_one) {
    return (
      <Menu
        is={this.props.list_menu_bar[which_one]}
        onClick={() => this.props.update(which_one)}
        name={this.props.content[which_one].name}
      />
    );
  }

  render() {
    return <div>{this.show_menu_bar()}</div>;
  }
}

// MENU BAR MANAGER
class MenuBarManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: Array(props.data.length).fill(false),
      step_num: 0,
    };
    this.content = props.data;
  }

  update(which_one) {
    console.log('MenuBarManager: update(', which_one, ')');
    const temp_list = this.state.bar.slice();
    for (let i = 0; i < temp_list.length; i++) {
      temp_list[i] = false;
    }

    if (temp_list[which_one] === false) {
      this.setState({
        bar: temp_list,
      });
      temp_list[which_one] = true;
    }
  }

  render() {
    return (
      <div className="menu_bar">
        <MenuBar
          list_menu_bar={this.state.bar}
          content={this.content}
          update={(local_index_use) => this.update(local_index_use)}
        />
      </div>
    );
  }
}

export function MineSweeperHeader() {
  return <MenuBarManager data={gui_data} />;
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
