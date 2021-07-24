import React,{useEffect,useRef} from "react";
import Hero2 from "../components/Hero2";
import SocialIcon from "../components/SocialIcon";
import Title from "../components/title";
import WebDev from "../Images/web-development-2.png";
import WebDesign from "../Images/Web_design-2.png";
import AppDev from "../Images/app-development-2.png";
import Footer from "../components/footer";
import { useLocation } from "react-router";
import Slider from "infinite-react-carousel/lib/carousel/slider";
import slide1 from "../Images/decorist1.JPG";
import slide2 from "../Images/decorist2.JPG";
import slide3 from "../Images/decorist3.JPG";
import slide4 from "../Images/decorist4.JPG";
import slide5 from "../Images/portfolio1.JPG";
import slide6 from "../Images/decorist6.JPG";
import slide7 from "../Images/decorist7.JPG";
import Form from "../components/Form";
import formUp from "../Images/form-curve.png";
import Lottie from "lottie-web";
import Carousel from "react-bootstrap/Carousel";

function ServiceLottie() {
  const service = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: service.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lottie/Service.json')
    })
  }, [])

  return (
    <div className="core-val-lottie" ref={service}></div>
  );
}

const Service = () =>{

  const settings = {
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    width: "100%",
    height: "auto",
    duration: 1
  };

  const location = useLocation(); 
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <>
      <Hero2 title="Have a look at our all" brand=" Services" desc="Expect Nothing Less than Perfect..." to="/contact" toText="Contact us" img={ServiceLottie} />
      <section className="d-flex align-items-center justify-content-center my-5 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <Title name="Services we Deliver" />
              <div className="row mb-5">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 d-flex justify-content-center flex-column">
                    <h1 className="header-title w7">
                        <strong className="brand-name w7 ">Web Development </strong>
                    </h1>
                    <hr className="line-left mt-2 mb-4"/>
                  <p className="content">We provide best Web Devlopment service at very minimal cost you ever found. Our way to deal with our clients is very simple, we build whatever our client's expect. We are ready to build you a eye-catching website for your business & help you to run your business digitally. We provide Wordpress Development, php Based site, React based, etc. We are very focused to provide you the best.</p>  
                </div>
                <div className="col-md-4 pt-5 pt-lg-0 order-2 mx-auto">
                  <img src={WebDev} alt={WebDev} width="100%" />
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5  py-5 secondary-bg">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-lg-2 order-1 d-flex justify-content-center flex-column">
                    <h1 className="header-title w7">
                        <strong className="brand-name w7 ">Web Designing </strong>
                    </h1>
                    <hr className="line-left mt-2 mb-4"/>
                  <p className="content">We provide best Web Designing service at very minimal cost you ever found. Our way to deal with our clients is very simple, we build whatever our client's expect. We are ready to build you a eye-catching website for your business & help you to run your business digitally. We provide Wordpress Development, php Based site, React based, etc. We are very focused to provide you the best.</p>  
                </div>
                <div className="col-md-4 pt-5 pt-lg-0 order-lg-1 order-2 mx-auto">
                  <img src={WebDesign} alt={WebDesign} width="100%" />  
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 d-flex justify-content-center flex-column">
                    <h1 className="header-title w7">
                        <strong className="brand-name w7 ">App Development </strong>
                    </h1>
                    <hr className="line-left mt-2 mb-4"/>
                  <p className="content">We provide best Web Designing service at very minimal cost you ever found. Our way to deal with our clients is very simple, we build whatever our client's expect. We are ready to build you a eye-catching website for your business & help you to run your business digitally. We provide Wordpress Development, php Based site, React based, etc. We are very focused to provide you the best.</p>  
                </div>
                <div className="col-md-4 pt-5 pt-lg-0 order-2 mx-auto">
                  <img src={AppDev} alt={AppDev} width="100%" />  
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex cool-bg align-items-center justify-content-center py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2 className="mx-auto text-center mt-4 display-4 w7">Checkout our Work</h2>
              <hr className="white-line mt-3" />
              <div className="row mt-3">
                <div className="col-md-8 pt-3 pt-lg-0 mx-auto order-1 d-flex justify-content-center flex-column">
                <Carousel className="dark-indi">
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slide4}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slide5}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slide6}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={slide7}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <SocialIcon />

      <section className="primary-bg px-0 py-0">
        <div className="container-fluid px-0 py-0">
          <img src={formUp} alt={formUp} width="100%" height="auto"/>
        </div>
      </section>

      <Form />
      <Footer />

    </>
  );
};

export default Service;