import React from "react";

const Contact = () => {
  return (
    <div className="flex-column container contact d-flex align-items-center justify-content-center">
      <h1 className="mb-5 col-12 text-center brand">GET IN TOUCH</h1>
      <br></br>
      <form className="w-50">
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
        <button
          type="submit"
          id="submit-contact"
          className="mt-4 btn btn-block"
        >
          <span>SEND</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
