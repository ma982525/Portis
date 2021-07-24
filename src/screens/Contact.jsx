import React,{useEffect,useRef} from "react";
import { useLocation } from "react-router";
import Hero2 from "../components/Hero2";
import Form from "../components/Form";
import Footer from "../components/footer";
import Lottie from "lottie-web";
import SocialIcon from "../components/SocialIcon";
import formUp from "../Images/form-curve.png";
import Title from "../components/title";
import Call from "../gif/call.gif";
import Mail from "../gif/gmail.gif";
import Location from "../gif/location.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone,faSearchLocation} from "@fortawesome/free-solid-svg-icons";

function ContactLottie() {

  const container = useRef(null)
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../lottie/contact.json')
    })
  }, [])

  return (
    <div className="core-val-lottie" ref={container}></div>
  );
}

const Contact = () =>{

  const location = useLocation(); 
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <>
      <Hero2 title="Get in contact with Dev." brand=" Manish Parmar" desc="Connect with me & get various deals..." to="/service" toText="Get Started" img={ContactLottie} />
      
      <section className="my-0 d-flex align-items-center justify-content-center py-5 my-5">
        <div className="container-fluid">
          <div className="row">
            <Title name="Contact Us" />
          </div>
          <div className="row mt-4 mt-md-4">
            <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
              <a href="tel:+911234567890" className="cont col-3 pt-lg-0 mx-auto d-flex align-items-center justify-content-center flex-column">
                
                  <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faPhone} />
                    </div> 
                    <hr className="full"/>
                    <h3 className="text-center w6 pt-3 no-dec">Call Us</h3>
                    <p className="content text-center px-0 no-dec">+91 12345 67890</p>
                </a>
                
                <a href="https://goo.gl/maps/ZyrXqXkeVwZ9HtEh7" target="blank" className="cont col-3 pt-lg-0 mx-auto d-flex align-items-center justify-content-center flex-column">
                
                    <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faSearchLocation}/>
                    </div>
                    <hr className="full"/>
                    <h3 className="text-center w6 pt-3 no-dec">Reach</h3>
                    <p className="content text-center px-0 no-dec">Portis, India, AH0:)</p>
                    </a>
                <a href="mailto:codekings.yt@gmail.com" className="cont col-3 pt-lg-0 mx-auto d-flex align-items-center justify-content-center flex-column">
                
                    <div className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faMailBulk} /> 
                    </div>
                    <hr className="full"/>
                    <h3 className="text-center w6 pt-3 no-dec">Mail Us</h3>
                    <p className="content text-center px-0 no-dec">codekings.yt@ gmail.com</p>
                </a>
                
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

export default Contact;