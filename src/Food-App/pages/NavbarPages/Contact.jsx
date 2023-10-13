import React from "react";
// import "./NavbarPages.css";
import "./Contact.css";
import { useFormik } from "formik";
import { userValidation } from "./UserValidationYup";

const Contact = () => {
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        fullname: "",
        email: "",
        mobilenumber: "",
        message: "",
      },

      validationSchema: userValidation,

      onSubmit: (value, action) => {
        alert("Your Details has been Submitted");
        console.log("onSubmit", value);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <>
      <div className="container" style={{ marginTop: 100, marginBottom: 225 }}>
        <div className="row">
          <h1>contact us</h1>
        </div>
        <div className="row">
          <h4 style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input
                type="text"
                name="fullname"
                required
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.fullname}
              />
              <label>Name</label>
            </div>

            <br />
            {errors.fullname && touched.fullname ? (
              <p className="perror">{errors.fullname}</p>
            ) : null}
            <br />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input
                type="text"
                name="email"
                required
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.email}
              />
              <label>Email</label>
            </div>
            <br />
            {errors.email && touched.email ? (
              <p className="perror">{errors.email}</p>
            ) : null}
            <br />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: "right" }}>
              <input
                type="text"
                name="mobilenumber"
                required
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.mobilenumber}
              />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea
                name="message"
                required
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.message}
              ></textarea>
              <label>Message</label>
            </div>

            <br />
            {errors.message && touched.message ? (
              <p className="perror">{errors.message}</p>
            ) : null}
            <br />
          </div>
          <div className="col-xs-12" onSubmit={handleSubmit}>
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
      </div>

      {/* <div className="container text-justify">
        <div className="container text-center contac">
          <p className="display-6 text-white pb-2">
            We would love to hear from you!
          </p>
          <div className="fields p-3">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                How can we help you?*
              </button>
              <ul className="dropdown-menu dropdownfields">
                <li>
                  <a className="dropdown-item" href="#">
                    I need help with my Zomato online order.
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    I found incorrect/outdated information on a page.
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    There is a photo/review that is bothering me and I would
                    like to report it.
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    The website/app are not working the way they should.
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    I would like to give feedback/suggestions.
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    I need some help with my blog.
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Other
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <br />

            <form onSubmit={handleSubmit}>
              <input
                type={"text"}
                name="fullname"
                placeholder="Full Name*"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.fullname}
                className="bg-dark text-white"
                style={{ boxShadow: "3px 2px gray", fontFamily: "sans-serif" }}
              />
              <br />
              {errors.fullname && touched.fullname ? (
                <p className="perror">{errors.fullname}</p>
              ) : null}
              <br />
              <input
                type={"email"}
                name="email"
                placeholder="Email Address*"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.email}
                className="bg-dark text-white"
                style={{ boxShadow: "3px 2px gray", fontFamily: "sans-serif" }}
              />
              <br />
              {errors.email && touched.email ? (
                <p className="perror">{errors.email}</p>
              ) : null}
              <br />
              <input
                type={"text"}
                name="mobilenumber"
                placeholder="Mobile Number (Optional)"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.mobilenumber}
                className="bg-dark text-white"
                style={{ boxShadow: "3px 2px gray", fontFamily: "sans-serif" }}
              />
              <br />
              {errors.mobilenumber && touched.mobilenumber ? (
                <p className="perror">{errors.mobilenumber}</p>
              ) : null}
              <br />
              <textarea
                name="message"
                placeholder="Type text*"
                onChange={handleChange}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                value={values.message}
                className="bg-dark text-white"
                style={{ boxShadow: "3px 2px gray", fontFamily: "sans-serif" }}
              />
              <br />
              {errors.message && touched.message ? (
                <p className="perror">{errors.message}</p>
              ) : null}
              <br />

              <button type="Submit" className="btn btn-dark">
                Submit feedback
              </button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
