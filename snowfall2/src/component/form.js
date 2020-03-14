import React from "react";
import "./form.style.css"

const Form = props => {
    return (
        <div className="container">
            <form onSubmit={props.loadweather}>
                <div>{props.error ? error() : ""}</div>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            placeholder="CITY">
                        </input>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-2 text-md-left"></div>
                    <button className="btn.btn-warning">Submit</button>
                </div>
            </form>
        </div>
    )
}

function error() {
    return (
        <div className="alert" role="alert">
            Please enter city
        </div>
    )
}
export default Form;




