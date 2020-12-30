import React from "react";

const Contact = () => {
  return (
    <div className="flex-column container contact d-flex align-items-center justify-content-center">
      <h1 className="mb-3 col-12 text-center">Contact Us</h1>
      <form className="w-50">
        <div className="form-group">
          <label htmlFor="mail-contact"></label>
          <input
            type="email"
            className="form-control"
            id="mail-contact"
            placeholder="Enter email..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="text-contact"></label>
          <textarea
            className="form-control"
            id="text-contact"
            placeholder="Leave the message..."
            rows="6"
            required
          />
        </div>
        <button
          type="submit"
          id="submit-contact"
          className="btn btn-secondary btn-block"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
