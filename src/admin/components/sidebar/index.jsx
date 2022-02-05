import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
// context
import { AdminContext } from "../../context/admin";
class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleShow() {
    this.setState(prevstate => ({ show: !prevstate.show }));
  }

  handleJobsByStatus = async (status) => {
    await this.context.getJobs(status);
    this.props.history.push(`/admin/jobs/${status}`);
  }

  render() {
    const { location } = this.props
    let pathname = location.pathname
    return (
      <div className="sidebar" id="sidebar">
        <div className="primary-nav">
          <nav role="navigation" className="menu">
            <Scrollbars
              style={{
                width: 250,
                height: "100%",
                backgroundColor: "rgb(121 145 165)",
              }}
              className="menu"
            >
              <Link to="/admin" className="logotype">
                LOGO<span>TYPE</span>
              </Link>
              <div className="overflow-container">
                <ul className="menu-dropdown">

                  <li className="menu-title">Main</li>

                  <li className={`${'/admin' === pathname ? 'active' : ''}`}>
                    <Link to="/admin"><i className="fe fe-home"></i>Dashboard</Link>
                  </li>

                  <li>
                    <span className={`menu-hasdropdown`} onClick={() => this.handleShow()}>
                      <Link to="#" >Jobs</Link>
                      <label title="toggle menu" htmlFor="jobs">
                        <span className="downarrow">
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </span>
                      </label>
                    </span>

                    {/* <input
                      type="checkbox"
                      className="sub-menu-checkbox"
                      id="jobs"
                    /> */}

                    <ul className={`sub-menu-dropdown submenu ${this.state.show ? 'active' : ''} `}>
                      <li className={`${'/admin/jobs/0' === pathname ? 'active' : ''}`}>
                        <Link to="#" onClick={() => this.handleJobsByStatus("0")}>Open Jobs</Link>
                      </li>
                      <li className={`${'/admin/jobs/1' === pathname ? 'active' : ''}`}>
                        <Link to="#" onClick={() => this.handleJobsByStatus("1")}>Close Jobs</Link>
                      </li>
                      <li className={`${'/admin/jobs/2' === pathname ? 'active' : ''}`}>
                        <Link to="#" onClick={() => this.handleJobsByStatus("2")}>Process Jobs</Link>
                      </li>
                      <li className={`${'/admin/jobs/3' === pathname ? 'active' : ''}`}>
                        <Link to="#" onClick={() => this.handleJobsByStatus("3")}>Complete Jobs</Link>
                      </li>
                    </ul>
                  </li>

                  <li className={`${'/admin/employers' === pathname ? 'active' : ''}`}>
                    <Link to="/admin/employers"> <i className="fe fe-user-plus"></i>Employers</Link>
                  </li>

                  <li className={`${'/admin/employees' === pathname ? 'active' : ''}`}>
                    <Link to="/admin/employees"><i className="fe fe-user"></i>Employees</Link>
                  </li>

                  <li className={`${'/admin/categories' === pathname ? 'active' : ''}`}>
                    <Link to="/admin/categories"><i className="fe fe-users"></i>Categories</Link>
                  </li>

                  <li className={`${'/admin/reviews' === pathname ? 'active' : ''}`}>
                    <Link to="/admin/reviews"><i className="fe fe-star-o"></i>Reviews</Link>
                  </li>

                  {/* <li className={`${'/admin/profile' === pathname ? 'active' : '' }`}>
                  <span className="icon"></span>
                  <Link to="/admin/profile"> <i className="fe fe-user-plus"></i>Profile</Link>
                </li> */}
                </ul>
              </div>
            </Scrollbars>
          </nav>
        </div>
      </div>
    );
  }
}

SidebarNav.contextType = AdminContext;
export default withRouter(SidebarNav);
