import React from "react";

function Contact() {
  return (
    <div className="card" style={{ maxWidth: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title">Contact Me</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Arjun Patel</h6>
        <p className="card-text">A Software Developer.</p>
        <a href="https://github.com/arjunkhatipatel/" className="card-link">
          Github
        </a>
        <a href="https://arjunpatel.tech/" className="card-link">
          Portfolio
        </a>
      </div>
    </div>
  );
}

export default Contact;
