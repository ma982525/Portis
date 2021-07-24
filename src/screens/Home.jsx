import React, { useEffect, useRef } from "react";
import HeaderImg from "../Images/header-img.png";
import Title from "../components/title";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import WebDev from "../Images/Web_design_PNG.png";
import AppDev from "../Images/app_development_PNG.png";
import UiUx from "../Images/UIUx.png";
import Lottie from "lottie-web";
import { NavLink } from "react-router-dom";
import SampleData from "../data/SampleWork";
import DotBack from "../Images/dots.png";
import Footer from "../components/footer";
import Form from "../components/Form";
import { useLocation } from "react-router";

function WorkEnv() {

  const container = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lottie/48945-launch.json')
    })
  }, [])

  return (
    <div className="work-env-lottie" ref={container}></div>
  );
}

function CoreVal() {

  const container2 = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lottie/core-val.json')
    })
  }, [])

  return (
    <div className="core-val-lottie" ref={container2}></div>
  );
}

const Home = () => {

  const location = useLocation(); 
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Hero title="Start your business online with" brand=" Manish Parmar" desc="I am a talented developer who loves designs..." to="/service" toText="Get Started" img={HeaderImg} />

      <section className="d-flex align-items-center justify-content-center my-2 my-md-5 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <Title name="Services we offer" />
              <div className="row">
                <div className="col">
                  <img src={DotBack} alt={DotBack} className="dot-background-right" />
                </div>
              </div>
              <div className="row">

                <div className="col-lg-4 col-md-6 pt-5 pt-lg-0 order-1 d-flex justify-content-center flex-column">
                  <Card title="Web Development" img={WebDev} to="/service" />
                </div>
                <div className="col-lg-4 col-md-6 pt-5 pt-lg-0 order-2 d-flex justify-content-center flex-column">
                  <Card title="App Development" img={AppDev} to="/service" />
                </div>
                <div className="col-lg-4 col-md-6 pt-5 pt-lg-0 order-3 d-flex justify-content-center flex-column">
                  <Card title="UI/UX Designing" img={UiUx} to="/service" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-bg d-flex align-items-center justify-content-center my-2 my-md-5 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <Title name="Work Environment" />
              <div className="row">
                <div className="col-md-6 order-1 d-flex justify-content-center">
                  {
                    WorkEnv()
                  }
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 d-flex justify-content-center flex-column">
                  <h1 className="header-title">
                    I
                    <strong className="brand-name"> Manish Parmar</strong>
                  </h1>
                  <h5 className="my-3 w4">
                    love to create eye-catching sites. My working environment is very smooth. I create designs by own.
                  </h5>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">Get Started</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-2 my-md-5 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <Title name="Sample Work" />
              <div className="row mt-5">
                <div className="col">
                  <img src={DotBack} alt={DotBack} className="dot-background-left" />
                </div>
              </div>
              <div className="row gy-2 gy-md-4">
                {
                  SampleData.map((val, ind) => {
                    return (
                      <Card2 key={ind}
                        img={val.img}
                        title={val.title}
                        to={val.to}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-2 my-md-5 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-7 dark-section pt-lg-0 order-1 d-flex justify-content-center flex-column">
                  <h1 className="header-title mt-5 w7">
                    Our Core<br/>Work Values
                  </h1>
                  <h5 className="my-3 w4 mr-5">
                    We are very accurate working towards our clients. We love to take <b>challenges</b> which comes across our work.
                  </h5>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started-inv">Check Our Services</NavLink>
                  </div>
                </div>
                <div className="col-md-5 pt-5 pt-md-0 order-2 d-flex justify-content-center">
                  {
                    CoreVal()
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Form />
      <Footer/>
      
    </>
  );
};

export default Home;