import React from 'react';
import './style/gui.css';

function Menu(props) {
  // let res = [];
  if (props.is) {
    return (
      <button className="menu" onClick={props.onClick}>
        {'X'}
      </button>
    );
  } else {
    return (
      <button className="menu_selected" onClick={props.onClick}>
        {'O'}
      </button>
    );
  }
}

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
    console.log('MenuBar: show_menu(', which_one, ')');
    return (
      <Menu
        is={this.props.list_menu_bar[which_one]}
        onClick={() => this.props.update(which_one)}
      />
    );
  }

  render() {
    return <div>{this.show_menu_bar()}</div>;
  }
}

class MenuBarManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: Array(props.data.length).fill(false),
      step_num: 0,
    };
  }

  update(which_one) {
    console.log('MenuBarManager: update(', which_one, ')');
    const temp_list = this.state.content.slice();
    for (let i = 0; i < temp_list.length; i++) {
      temp_list[i] = false;
    }

    if (temp_list[which_one] === false) {
      this.setState({
        content: temp_list,
      });
      temp_list[which_one] = true;
    }
  }

  render() {
    return (
      <div className="menu_bar">
        <MenuBar
          list_menu_bar={this.state.content}
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
 * UTILS
 */
// function set_menu_bar(props) {
//   return props.data.map((elem) => (
//     <Menu
//       key={elem.id}
//       name={elem.name}
//       is={elem.is}
//       content={{
//         a: elem.content.a,
//       }}
//     />
//   ));
// }

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
