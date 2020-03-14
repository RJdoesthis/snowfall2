import React from "react";
//creating UI and setting the values dynamically through props
const Weather = (props) => {
    return (
        <div className="container text-light">
            <div className="cards">
                <h1> {props.city}</h1>
                <h5 className="py-4">
                    <i className={`wi${props.weatherIcon}`}></i>
                </h5>
                <h1 className="py-2">{props.temp_fahrenheit}&deg;</h1>
                {/* show max/min temp */}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3">{props.description} </h4>
            </div>
        </div>
    );
};
//setting the max and min degrees of the weather 
function minmaxTemp(min, max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;