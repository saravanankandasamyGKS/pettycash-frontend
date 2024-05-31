//Footer.jsx
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

const Footer = () => {
  return (
    <footer className="footer-container text-light text-center py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 order-md-1">
            <p className="mb-0">&copy; 2024 SARAVANAN. All rights reserved.</p>
          </div>
          <div className="col-12 col-md-6 text-md-end order-md-2 mt-3 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
