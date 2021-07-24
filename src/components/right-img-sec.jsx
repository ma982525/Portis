import React from "react";

const RightImgSec = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-7 order-2 d-flex justify-content-center align-items-end">
                    <img src={props.img} className="img-fluid up" alt={props.img} width="90%" />
                </div>
                <div className="col-md-5 pt-5 pt-lg-0 order-1 d-flex justify-content-center flex-column">
                    <h1 className="header-title w7 ml-5">
                        {props.title}<br/>
                        <strong className="brand-name w7">{props.brand} </strong>
                        {props.after}
                    </h1>
                    <h5 className="my-3 w3 content ml-5">
                        {props.desc}
                    </h5>
                </div>
            </div>

        </>
    );
};

export default RightImgSec;