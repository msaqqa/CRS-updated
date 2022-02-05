import React, { Component } from 'react';
import { Table } from 'antd';
import IMG01 from '../../../assets/images/doctor-thumb-01.jpg';
import { Link } from "react-router-dom";

class TableEmployer extends Component {

  render() {
    const { data } = this.props
    const columns = [
      {
        title: 'Employer Name',
        dataIndex: 'name',
        render: (text, { id, photo }) => {
          const url = photo ? `http://excodeteam.com/crs/public/images/${photo}` : IMG01;
          return (
            <h2 className="table-avatar">
              <Link to={`/admin/profile/employer/${id}`} className="avatar avatar-sm mr-2"><img alt="" src={url} /></Link>
              <Link to={`/admin/profile/employer/${id}`}>{text}</Link>
            </h2>
          )
        }
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: 'Mobile',
        dataIndex: 'mobile',
      },
    ]

    return (
      <div>
        <Table className="table-striped"
          style={{ overflowX: 'auto' }}
          columns={columns}
          // bordered
          dataSource={data}
          rowKey={record => record.id}
          pagination={false}
        />
      </div>

    )
  }
};

export default TableEmployer;