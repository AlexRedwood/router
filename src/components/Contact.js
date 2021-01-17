import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex-column container contact d-flex align-items-center justify-content-center">
      <h1 className="mb-1 col-12 text-center brand">GET IN TOUCH</h1>
      <br></br>
      <form className="contact-form">
        <div className="form-group">
          <label className="contact-labels" htmlFor="name-contact">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name-contact"
            maxLength="25"
            required
          />
        </div>

        <div className="form-group">
          <label className="contact-labels" htmlFor="mail-contact">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="mail-contact"
            maxLength="255"
            required
          />
        </div>

        <div className="form-group">
          <label className="contact-labels" htmlFor="text-contact">
            Leave the message
          </label>
          <textarea
            className="form-control"
            id="text-contact"
            rows="6"
            maxLength="600"
            required
          />
        </div>
        <Link to="sent">
          <button
            type="submit"
            id="submit-contact"
            className="mt-5 btn btn-block"
          >
            <span>SEND</span>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Contact;
