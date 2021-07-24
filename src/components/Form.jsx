import React from "react";
import FormImg from "../Images/business-3d-with-coffee-man-1.png";
import DotBack from "../Images/dots.png";
import Title from "./title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

const Form = () => {
    
    const [data, setData] = useState({
        Name:'',
        Email:'',
        Promotion:'',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            };
        });
    };
    const api = '/api/Form';
    const formSubmit = (e) => {
        e.preventDefault();        
        axios({
            method: 'post',
            url: `${api}`,
            headers : {'content-type': 'application/json'},
            data: data
        }).then(result => console.log(result.data));
        setData({
            Name:'',
            Email:'',
            Promotion:'',
        });
        alert("Thanks for Submitting form !")
    };
    


    return (
        <>
            <section id="form" className=" secondary-bg mt-0 pt-3 d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <Title name="Have any Query ?"/>
                            <div className="row">
                                <div className="col">
                                    <img src={DotBack} alt={DotBack} className="dot-background-right" />
                                </div>
                            </div>
                            <div className="row mx-auto mt-5">
                                <div className="col-md-6 pt-md-0 order-md-1 order-2 d-flex align-items-end">
                                    <img src={FormImg} alt={FormImg} width="75%" />
                                </div>
                                <div className="col-md-6 order-md-2 order-1 my-3 d-flex align-items-center justify-content-center">
                                    <form onSubmit={formSubmit} method="GET" className="p-4 py-lg-5 contact-form">
                                        <div className="mb-3">
                                            <label for="JoeLucas" className="form-label">Name</label>
                                            <input value={data.Name} onChange={InputEvent} type="text" className="form-control" id="JoeLucas" name="Name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input value={data.Email} onChange={InputEvent} type="email" name="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input value={data.Promotion} onChange={InputEvent} type="checkbox" className="form-check-input" id="CheckBox" name="Promotion"/>
                                            <label className="form-check-label" for="exampleCheck1" className="checkbox">Accept Promotional Emails</label>
                                        </div>
                                        <button type="submit" className="btn-get-started mt-3 white">Submit <FontAwesomeIcon icon={faAngleDoubleRight}/> </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Form;