import React from "react";

function About() {
  return (
    <div className="card" style={{ maxWidth: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title">About</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          This is about page
        </h6>
        <p className="card-text">
          Built with React for Context API demonstration.
        </p>
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

export default About;
