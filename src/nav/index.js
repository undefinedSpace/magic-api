import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import routes from '../routes';
import { Menu, Icon } from 'antd';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  go(item) {
    browserHistory.push(item.key);
  }

  render() {
    const menuProps = {
      theme: "dark", 
      mode: "inline",
      defaultSelectedKeys: [document.location.pathname],
      onClick: this.go
    };

    return (<Menu {...menuProps}>
      {routes.map(r => <Menu.Item key={r.path}>
          <Icon type="user" />
          <span className="nav-text">{r.title}</span>
        </Menu.Item>)}
      </Menu>)
  }
};

Nav.displayName = 'Nav';

export default Nav;
