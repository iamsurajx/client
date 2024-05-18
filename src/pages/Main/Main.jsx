import React from 'react'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'
import OfferSection from '../../components/OfferSection/OfferSection'


function Main() {
  return (
    <>
      <div className="main_body_content">
        <div className="hero_area">
          {/* header section strats */}
          <Header />
          {/* end header section */}

          {/* slider section */}
          <Slider />
          {/* end slider section */}
        </div>


        {/* about section */}
        {/* <About /> */}
        {/* end about section */}

        {/* chocolate section */}
        {/* <ChocolateSection /> */}
        {/* end chocolate section */}

        {/* offer section */}
        <OfferSection />
        {/* end offer section */}

        {/* client section */}
        {/* <ClientSection /> */}
        {/* end client section */}

        {/* contact section */}
        {/* <ContactSection /> */}
        {/* end contact section */}

        {/* info section */}
        <Footer />
        {/* end info_section */}
      </div>

    </>
  )
}

export default Main
