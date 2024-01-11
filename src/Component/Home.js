function Home() {
  return (
    <div className="card" style={{ maxWidth: "22rem" }}>
      <div className="card-body">
        <h5 className="card-title">React Dark Mode App</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          by Arjun Patel
        </h6>
        <p className="card-text">
          A React app built by Arjun Patel to demonstrate the use of Context
          API.
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

export default Home;
