import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function ChocolateSection() {
  return (
    <>

      <div className="main_body_content">
        <Header />
        <div className="hero_area">
          <section className="chocolate_section">
            <div className="container">
              <div className="heading_container">
                <h2>Our chocolate products</h2>
                <p>
                  Many desktop publishing packages and web page editors now
                  use Lorem Ipsum as their
                </p>
              </div>
            </div>
            <div id="chocolateCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="box">
                          <div className="img-box">
                            <img src="images/chocolate1.png" alt="Chocolate 1" />
                          </div>
                          <div className="detail-box">
                            <h6>
                              Yummy <span>chocolate</span>
                            </h6>
                            <h5>$5.0</h5>
                            <a href="">BUY NOW</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="box">
                          <div className="img-box">
                            <img src="images/chocolate2.png" alt="Chocolate 2" />
                          </div>
                          <div className="detail-box">
                            <h6>
                              Yummy <span>chocolate</span>
                            </h6>
                            <h5>$5.0</h5>
                            <a href="">BUY NOW</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="box">
                          <div className="img-box">
                            <img src="images/chocolate3.png" alt="Chocolate 3" />
                          </div>
                          <div className="detail-box">
                            <h6>
                              Yummy <span>chocolate</span>
                            </h6>
                            <h5>$5.0</h5>
                            <a href="">BUY NOW</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="box">
                          <div className="img-box">
                            <img src="images/chocolate1.png" alt="Chocolate 1" />
                          </div>
                          <div className="detail-box">
                            <h6>
                              Yummy <span>chocolate</span>
                            </h6>
                            <h5>$5.0</h5>
                            <a href="">BUY NOW</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="box">
                          <div className="img-box">
                            <img src="images/chocolate2.png" alt="Chocolate 2" />
                          </div>
                          <div className="detail-box">
                            <h6>
                              Yummy <span>chocolate</span>
                            </h6>
                            <h5>$5.0</h5>
                            <a href="">BUY NOW</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="box">
                          <div className="img-box">
                            <img src="images/chocolate3.png" alt="Chocolate 3" />
                          </div>
                          <div className="detail-box">
                            <h6>
                              Yummy <span>chocolate</span>
                            </h6>
                            <h5>$5.0</h5>
                            <a href="">BUY NOW</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_btn-box">
                <a
                  className="carousel-control-prev"
                  href="#chocolateCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#chocolateCarousel"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ChocolateSection
