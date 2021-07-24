import React,{useEffect,useRef} from "react";
import Lottie from "lottie-web";
import Title from "./title";

function Facebook() {
    const fb = useRef(null)
    useEffect(() => {
      Lottie.loadAnimation({
        container: fb.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../lottie/facebook.json')
      })
    }, [])
  
    return (
      <div className="core-val-lottie" ref={fb}></div>
    );
  }
  function Instagram() {
    const insta = useRef(null)
    useEffect(() => {
      Lottie.loadAnimation({
        container: insta.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../lottie/instagram.json')
      })
    }, [])
  
    return (
      <div className="core-val-lottie" ref={insta}></div>
    );
  }
  
  function Linkedin() {
    const ln = useRef(null)
    useEffect(() => {
      Lottie.loadAnimation({
        container: ln.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../lottie/linkedin.json')
      })
    }, [])
  
    return (
      <div className="core-val-lottie" ref={ln}></div>
    );
  }
  
  function Youtube() {
    const yt = useRef(null)
    useEffect(() => {
      Lottie.loadAnimation({
        container: yt.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../lottie/youtube.json')
      })
    }, [])
  
    return (
      <div className="core-val-lottie" ref={yt}></div>
    );
  }

const SocialIcon = () =>{


  return(
    <>
      <section className="primary-bg my-0 d-flex align-items-center justify-content-center pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <Title name="Follow Us" />
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 mx-auto d-flex justify-content-center">
                    <a href="https://www.facebook.com/ProgrammingGeeks.YouTube/">
                      {Facebook()}
                    </a>
                    <a href="https://www.instagram.com/codekings_/">
                      {Instagram()}
                    </a>
                    <a href="https://www.linkedin.com/in/manish-parmar-codekings">
                      {Linkedin()}
                    </a>
                    <a href="https://www.youtube.com/channel/UCsdyFABzlC7Xjv9BPqZCPLA">
                      {Youtube()}
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialIcon;