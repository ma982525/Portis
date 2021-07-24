import React from "react";

const Title = (props) => {
    return (
        <>
            <div className="row pt-5">
                <div className="col text-center">
                    <h2 className="display-4 w7">{props.name}</h2>
                </div>
            </div>
            <div className="row pt-1 pb-2 pb-md-5">
                <div className="col">
                    <hr/>
                </div>
            </div>
        </>
    );
};

export default Title;