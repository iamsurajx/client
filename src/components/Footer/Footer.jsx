import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row info_form_social_row">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="social_box">
                <Link href="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
                <Link href="">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
                <Link href="">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row info_main_row">
            <div className="col-md-6 col-lg-3">
              <div className="info_links">
                <h4>Menu</h4>
                <div className="info_links_menu">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/chocolates">Chocolates</Link>
                  <Link to="/testimonial">Testimonial</Link>
                  <Link to="/contact">Contact us</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_insta">
                <h4>Instagram</h4>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="images/insta-img.png" alt="" />
                  </div>
                  <p>long established fact that a reader</p>
                </div>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="images/insta-img.png" alt="" />
                  </div>
                  <p>long established fact that a reader</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_detail">
                <h4>Company</h4>
                <p className="mb-0">
                  when looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as opposed
                  to
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h4>Contact Us</h4>
              <div className="info_contact">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Location</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Call +01 1234567890</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" />
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
