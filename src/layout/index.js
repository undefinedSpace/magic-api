import React, { Component } from 'react';
import { Layout, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Nav from '../nav';
import './index.scss';

class SiderDemo extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Nav />
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            UndefinedSpace ©2017
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;