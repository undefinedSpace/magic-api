import { Table, Spin, Button } from 'antd';
import React from 'react';
const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const gq = new Lokka({
  transport: new Transport(`http://${document.location.hostname}:3000/graphql`)
});

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    gq.query(`
       {
          folders {
            id
            name
            inode
            id_parent
          }
        }
    `).then(result => {
        this.setState(result);
    });
  }
  

  render() {
    const columns = [{
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Inode',
      dataIndex: 'inode',
      key: 'inode',
    }, {
      title: 'Parent ID',
      dataIndex: 'id_parent',
      key: 'id_parent',
    }];

    return (<Spin tip="Loading..." spinning={!this.state.folders}>
      <Table dataSource={this.state.folders} columns={columns} />
    </Spin>);
  }
}

About.displayName = 'About';
