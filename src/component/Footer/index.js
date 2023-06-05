import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="icon-header" id="navbar-icon-header">
          <i className="fa-solid fa-ticket"></i>
          <div className="myicon-header">Raj</div>
          <div className="myicon2-header">Cinemas</div>
        </div>
        <p>
          RajCinemas is the official movie ticket booking app for Raj Cinemas
          Theaters.
        </p>
        <ul className="socials">
          <li>
            <a>
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-youtube" />
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-linkedin-square" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright © <span>RajCinemas</span>
        </p>
      </div>
    </footer>
  );
}
