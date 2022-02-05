import React, { Component } from 'react';
import TableEmployers from './tableEmployers';
import TableEmployees from './tableEmployees';
import TableJobs from './tableJobs';
import TableProposals from './tableProposals';
import { AdminContext } from "../../context/admin";
import PageLoading from "../loading/pageloading"

class Dashboard extends Component {

  componentDidMount = () => {
    const { getDashboard } = this.context;
    getDashboard();
  }
  render() {
    const { loading, dashboard } = this.context;
    const { last_employees, last_employers, last_jobs, last_proposals, total_emplyees, total_emplyers, total_jobs, total_peoposals } = dashboard;
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <>

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome {user?.name}</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* breadcrumb */}

            {loading ? <PageLoading loading={loading} /> : (
              <>
                <div className="row">
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-primary border-primary">
                            <i className="fe fe-users"></i>
                          </span>
                          <div className="dash-count">
                            <h3>{total_emplyers}</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Employers</h6>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-primary w-50"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-success">
                            <i className="fe fe-credit-card"></i>
                          </span>
                          <div className="dash-count">
                            <h3>{total_emplyees}</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">

                          <h6 className="text-muted">Employees</h6>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-success w-50"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-danger border-danger">
                            <i className="fe fe-money"></i>
                          </span>
                          <div className="dash-count">
                            <h3>{total_jobs}</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">

                          <h6 className="text-muted">Jobs</h6>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-danger w-50"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-warning border-warning">
                            <i className="fe fe-folder"></i>
                          </span>
                          <div className="dash-count">
                            <h3>{total_peoposals}</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">

                          <h6 className="text-muted">Proposals</h6>
                          <div className="progress progress-sm">
                            <div className="progress-bar bg-warning w-50"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="card card-table flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Last Employers</h4>
                      </div>
                      <div className="card-body">
                        <TableEmployers data={last_employers} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="card card-table flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Last Employees</h4>
                      </div>
                      <div className="card-body">
                        <TableEmployees data={last_employees} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="card card-table flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Last Jobs</h4>
                      </div>
                      <div className="card-body">
                        <TableJobs data={last_jobs} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="card card-table flex-fill">
                      <div className="card-header">
                        <h4 className="card-title">Last Proposals</h4>
                      </div>
                      <div className="card-body">
                        <TableProposals data={last_proposals} />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

Dashboard.contextType = AdminContext;
export default Dashboard; 