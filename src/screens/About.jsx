import React, { useEffect, useRef, useState } from "react";
import AboutImg from "../Images/Startup_SVG.svg";
import Hero2 from "../components/Hero2";
import Lottie from "lottie-web";
import RightImgSec from "../components/right-img-sec";
import Manish from "../Images/manishparmar.png";
import DotBack from "../Images/dots.png";
import About2 from "../Images/About-2.jpg";
import Footer from "../components/footer";
import Title from "../components/title";
import Card from "../components/Card";
import WebDev from "../Images/web-development-2.png";
import WebDesign from "../Images/Web_design-2.png";
import AppDev from "../Images/app-development-2.png";
import newslide1 from "../Images/check1.png";
import newslide2 from "../Images/check2.png";
import newslide3 from "../Images/check3.png";
import newslide4 from "../Images/check4.png";
import SliderGirl from "../Images/slider-girl.png";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import Slider from 'infinite-react-carousel';
import Form from "../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import formUp from "../Images/form-curve.png";
import Carousel from "react-bootstrap/Carousel";
function AboutLottie() {

  const container = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lottie/about.json')
    })
  }, [])

  return (
    <div className="core-val-lottie" ref={container}></div>
  );
}

const About = () => {

  const codetext = "🧿";
  const location = useLocation();
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  const settings = {
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    width: "100%",
    height: "auto",
    duration: 1
  };


  return (
    <>
      <Hero2 title="Let's know more about" brand=" Manish Parmar" desc="I am a talented developer who loves designs..." to="/service" toText="Get Started" img={AboutLottie} />

      <section className="d-flex align-items-center justify-content-center my-5 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col">
                  <img src={DotBack} alt={DotBack} className="dot-background-right-img" />
                </div>
              </div>
              <RightImgSec img={Manish} title="Who is" brand="Manish Parmar" after="?" desc="I am a Web Developer having more than 5 years of experience in this field. Along with development, I love to create eye-catching looks which improves user experience and increases overall retension level of site. Basically, I am a developer who creates amazing designs. I created various sites for my clients, my own business or portfolio or at company where I work. Every one says that, Listen to your passion, And I am the one who is really doing it and I love my work. This is the reason behind my fabulous work. " />
            </div>
          </div>
          <div className="row">
            <div className="col-9 ml-auto dark-section-right up order-2">
              <div className="row">
                <div className="col">
                  <h2 className="text-right w6 mt-4">Expert Web Developer & Designer</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6 className="text-right w4">To make Website live, one need to make it interactive</h6>
                </div>
              </div>
              <div className="row pt-1 pb-5">
                <div className="col">
                  <hr className="white-line line-right" />
                </div>
              </div>
            </div>
            <div className="col-2 up-img order-1 mr-0 img-style">
              <img src={About2} alt={About2} width="250%" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src={DotBack} alt={DotBack} className="dot-background-left" />
            </div>
          </div>
        </div>
      </section>
      <section className="height-100">
      </section>
      <section className="height-100"></section>



      <section className="d-flex align-items-center justify-content-center pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto mt-5">
              <Title name="Little Glimpse of Services" />
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 px-sm-5 px-0 pe-5">
                  <div className="row">
                    <div className="col-4 order-1 d-flex align-items-center slider-girl-container">
                      <img src={SliderGirl} className="slider-girl" alt="Slider Girl" width="100%" />
                    </div>
                    <div className="col-8 order-2 d-flex align-items-center ml-0 px-0 py-0">
                      <Carousel variant="dark" className="Slider-2">
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={newslide1}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={newslide2}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={newslide3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={newslide4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 px-5 flex-column foot-text-center text-sm-left">
                  <h3 className="mt-3">
                    Our
                    <strong className="brand-name"> Services </strong>
                    contains :
                  </h3>
                  <hr className="line-left mt-3 mx-auto mx-md-0" />
                  <h5 className="my-4 content w5 foot-text-center text-sm-left">

                    <p className="my-2"><span className="w7">{codetext}</span> Web Development</p>
                    <p className="my-2"><span className="w7">{codetext}</span> Web Designing</p>
                    <p className="my-2"><span className="w7">{codetext}</span> App Development</p>

                  </h5>
                  <div className="mt-5">
                    <NavLink to="/service" className="btn-get-started" >Check Now <FontAwesomeIcon icon={faAngleDoubleRight} /></NavLink>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 py-0">
        <div className="container-fluid px-0 py-0">
          <img src={formUp} alt={formUp} width="100%" height="auto" />
        </div>
      </section>



      <Form />
      <Footer />
    </>
  );
};

export default About;