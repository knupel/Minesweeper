import React from 'react';
import './style/gui.css';

function Menu(props) {
  return <button onClick={props.update}>{props.name}</button>;
}

class MenuBar extends React.Component {
  // show_menu(which_one) {
  //   return (
  //     <Menu
  //       name={this.props.list_menu[which_one]}
  //       update={() => this.props.update(which_one)}
  //     />
  //   );
  // }
  update(index) {
    console.log("c'est moi");
  }

  render() {
    return <div>{set_menu_bar(this.props, 0)}</div>;
  }
}

class MenuBarManager extends React.Component {
  render() {
    return <MenuBar data={this.props.data} />;
  }
}

export function MineSweeperHeader() {
  return <MenuBarManager data={gui_data} />;
}

/**
 * UTILS
 */
function set_menu_bar(props, which_one) {
  return props.data.map((elem) => (
    <Menu
      key={elem.id}
      name={elem.name}
      is={elem.is}
      //update={() => props.update(which_one)}
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
      a: `easy`,
      b: `medium`,
      c: `hard`,
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
