import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
            {/* SVG icon code goes here */}
          </span>
          <span>Rupaya</span>
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-6"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0 order-md-first" id="navcol-6">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
          <div className="d-md-none my-2">
            <button className="btn btn-light me-2" type="button">
              Button
            </button>
            <button className="btn btn-primary" type="button">
              Button
            </button>
          </div>
        </div>
        <div className="d-none d-md-block">
          <a className="btn btn-primary" role="button" href="#">
            Add to Metamask
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
