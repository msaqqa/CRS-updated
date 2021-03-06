import React, { useContext } from 'react';
import DashboardSidebar from '../sidebar/sidebar.jsx';
import StickyBox from "react-sticky-box";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
// context
import { UserContext } from "../../../context/user";

function Password() {

  const { changePassword } = useContext(UserContext);

  const initialValues = () => {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  }

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Required"),
    newPassword: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required("Required"),
  });

  const handleSubmit = async (values, actions) => {
    await changePassword(values);
    actions.resetForm({
      values: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
    });
  }

  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Profile Settings</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                < DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <Formik
                    initialValues={initialValues()}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={false}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <div className="form-group">
                            <label>Old Password</label>
                            <Field type="password" name="oldPassword" className="form-control" />
                            <ErrorMessage name="oldPassword" />
                          </div>
                          <div className="form-group">
                            <label>New Password</label>
                            <Field type="password" name="newPassword" className="form-control" />
                            <ErrorMessage name="newPassword" />
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <Field type="password" name="confirmPassword" className="form-control" />
                            <ErrorMessage name="confirmPassword" />
                          </div>
                          <div className="submit-section">
                            <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                          </div>
                        </Form>
                      )
                    }}
                  </Formik>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Password;


