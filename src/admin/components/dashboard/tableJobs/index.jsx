import React, { Component } from 'react';
import { Table } from 'antd';
import IMG01 from '../../../assets/images/doctor-thumb-01.jpg';
import { Link } from "react-router-dom";

class TableJobs extends Component {

  render() {
    const { data } = this.props

    const columns = [
      {
        title: 'Job Title',
        dataIndex: 'title',
        render: (text, { id, image }) => {
          const url = image ? `http://excodeteam.com/crs/public/images/${image}` : IMG01;
          return (
            <h2 className="table-avatar">
              <Link to={`/admin/single-job/${id}`} className="avatar avatar-sm mr-2"><img alt="" src={url} /></Link>
              <Link to={`/admin/single-job/${id}`}>{text.substr(0, 30)}</Link>
            </h2>
          )
        }
      },
      {
        title: 'Employer',
        dataIndex: 'employer',
        render: ({ id, name, photo }) => {
          const url = photo ? `http://excodeteam.com/crs/public/images/${photo}` : IMG01;
          return (
            <h2 className="table-avatar">
              <Link to={`/admin/profile/employer/${id}`} className="avatar avatar-sm mr-2"><img alt="" src={url} /></Link>
              <Link to={`/admin/profile/employer/${id}`}>{name}</Link>
            </h2>
          )
        }
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

export default TableJobs;