import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" href="#" className="logo">
          {" "}
          El Bialy
        </Link>
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Articles">Articles</Link>
          </li>
          <li>
            <Link to="/GALLERY">Gallery</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link Link to="/Other links">
              Other links
            </Link>
            <div className="mega-menu">
              <div className="image">
                <img src="imagr/megamenu.png" alt="" />
              </div>
              <ul className="links">
                <li>
                  <Link Link to="/Testimonials">
                    <i className="far fa-comments fa-fw"></i> Testimonials
                  </Link>
                </li>
                <li>
                  <Link Link to="/Testimonials">
                    <i className="far fa-user fa-fw"></i> Team Members
                  </Link>
                </li>
                <li>
                  <Link Link to="/Services">
                    <i className="far fa-building fa-fw"></i> Services
                  </Link>
                </li>
                <li>
                  <Link Link to="/Skills">
                    <i className="far fa-check-circle fa-fw"></i> Our Skills
                  </Link>
                </li>
                <li>
                  <Link Link to="/Iwork">
                    <i className="far fa-clipboard fa-fw"></i> How It Works
                  </Link>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <Link Link to="/Events">
                    <i className="far fa-calendar-alt fa-fw"></i> Events
                  </Link>
                </li>
                <li>
                  <Link Link to="/Pricing">
                    <i className="fas fa-server fa-fw"></i> Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link Link to="/Videos">
                    <i className="far fa-play-circle fa-fw"></i> Top Videos
                  </Link>
                </li>
                <li>
                  <Link Link to="/Stats">
                    <i className="far fa-chart-bar fa-fw"></i> Stats
                  </Link>
                </li>
                <li>
                  <Link Link to="/Discount">
                    <i className="fas fa-percent fa-fw"></i> Request A Discount
                  </Link>
                </li>
                
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header
