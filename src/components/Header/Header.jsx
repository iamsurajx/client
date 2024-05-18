import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
      {/* header section strats */}
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              ChocoLux
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    {" "}
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chocolates">
                    Chocolates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testimonial">
                    Testimonial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="quote_btn-container">
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
                <a href="">
                  <i className="fa fa-user" aria-hidden="true" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
    </div>
  )
}

export default Header
