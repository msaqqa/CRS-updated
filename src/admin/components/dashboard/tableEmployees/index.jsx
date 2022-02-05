import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import IMG01 from '../../../assets/images/doctor-thumb-01.jpg';
import { Link } from "react-router-dom";


class TableEmployees extends Component {
  render() {
    const { data } = this.props
    const columns = [
      {
        title: 'Employee Name',
        dataIndex: 'name',
        render: (text, { id, photo }) => {
          const url = photo ? `http://excodeteam.com/crs/public/images/${photo}` : IMG01;
          return (
            <h2 className="table-avatar">
              <Link to={`/admin/profile/employee/${id}`} className="avatar avatar-sm mr-2"><img alt="" src={url} /></Link>
              <Link to={`/admin/profile/employee/${id}`}>{text}</Link>
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

export default TableEmployees;