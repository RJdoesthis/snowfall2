import React from "react";

const Weather = () => {
    return (
        <div className="container">
            <div className="cards">
                <h1> SnowFall2</h1>
                <h5 className="py-4">
                    <i class="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 clasName="py-2">25&deg;</h1>
                {/* show max/min temp */}
                {minmaxTemp(24, 19)}
                <h4 className="py-3">slow rain</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;