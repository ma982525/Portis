import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    return (
        <>
            <div className="card py-4 px-4 no-bdr card-shadow-2">
                <img src={props.img} className="mx-auto mb-4 updownanimation" alt={props.img}  width="50%"/>
                <div className="card-body text-center">
                    <h5 className="card-title mx-auto mb-4">{props.title}</h5>
                    <NavLink to={props.to} className="btn-get-started">Check Now <FontAwesomeIcon icon={faArrowRight} /></NavLink>
                </div>
            </div>
        </>
    );
};

export default Card;