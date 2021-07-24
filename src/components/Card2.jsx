import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Card2 = (props) => {
    return (
        <>
        <div className="col-lg-4 col-md-6 mx-auto">
            <div className="card py-4 px-4 card-shadow">
                <img src={props.img} className="mx-auto mb-4" alt={props.img} width="75%"/>
                <div className="card-body text-center">
                    <h5 className="card-title mx-auto mb-4">{props.title}</h5>
                    <a href={props.to} className="btn-get-started">Check Now <FontAwesomeIcon icon={faPaperPlane} /></a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Card2;