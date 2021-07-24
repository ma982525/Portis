import React from "react";
import { NavLink } from "react-router-dom";

const Hero = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center justify-content-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mt-5 mt-md-0 order-md-1 order-2 d-flex justify-content-center flex-column">
                  <h1 className="header-title">
                    {props.title}
                    <strong className="brand-name">{props.brand}</strong>
                  </h1>
                  <h5 className="my-3 w4">
                    {props.desc}
                  </h5>
                  <div className="mt-3">
                    <NavLink to={props.to} className="btn-get-started">{props.toText}</NavLink>
                  </div>
                </div>
                <div className="col-md-6 mt-0 mt-md-5 mt-lg-0 order-md-2 order-1 header-img mx-auto d-flex justify-content-center align-items-center flex-column">
                  <img src={props.img} className="img-fluid" alt={props.img} width="50%"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;