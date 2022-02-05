import React, { Component } from 'react';
import { Table } from 'antd';
import IMG01 from '../../../assets/images/doctor-thumb-01.jpg';
import { Link } from "react-router-dom";

class TableProposals extends Component {

  onChangeHandle = () => {

  }
  render() {
    const { data } = this.props
    console.log(data);

    const columns = [
      {
        title: 'Employee',
        dataIndex: 'employee',
        render: ({ id, name, photo }) => {
          const url = photo ? `http://excodeteam.com/crs/public/images/${photo}` : IMG01;
          return (
            <h2 className="table-avatar">
              <Link to={`/admin/profile/employee/${id}`} className="avatar avatar-sm mr-2"><img alt="" src={url} /></Link>
              <Link to={`/admin/profile/employee/${id}`}>{name}</Link>
            </h2>
          )
        }
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (status) => {
          const statusValue = status === "0" ? "Open" : status === "1" ? "Closed" : status === "2" ? "Processed" : "Completed";
          const statusClass = status === "0" ? "warning" : status === "1" ? "danger" : status === "2" ? "primary" : "success";
          return <span className={`badge badge-pill bg-${statusClass}-light`}>{statusValue}</span>;
        },
        sorter: (a, b) => a.employer.status.length - b.employer.status.length,
      },
      {
        title: 'seen',
        dataIndex: 'seen',
        className: "text-center",
        render: (seen) => {
          const seenClass = seen === "1" ? "text-success" : "";
          return <i className={`far fa-eye d-block ${seenClass}`}></i>;
        },
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

export default TableProposals;