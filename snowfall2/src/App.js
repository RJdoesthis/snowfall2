import React, { Component } from 'react';
import './App.css';
import "weather-icons/css/weather-icons.css";
import Weather from "./component/weather";
import "bootstrap/dist/css/bootstrap.min.css"
import Form from './component/form';

const API_KEY = "3cf10b055a37c772dfa92dcd44de073e";
//setting inital state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      icon: undefined,
      main: undefined,
      fahrenheit: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };

    //setting the weather icons used in the UI
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  //get weather icon based on range of weather ID's in weather API
  //if ranage is between 200-232 it will use the raining icon
  get_WeatherIcon(icons, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeID === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });

    }
  }

  //calls the api and logs the response in a Json object
  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    if (city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      const response = await api_call.json();
      //after making the call it will set the state
      this.setState({
        city: `${response.name}`,
        main: response.weather[0].main,
        fahrenheit: response.main.temp,
        temp_max: response.main.temp_max,
        temp_min: response.main.temp_min,
        description: response.weather[0].description,
        error: false
      });

      //will set the icon by grabbing the id of the weather in response
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    };
  }

  //this will render on the screen with the updated state

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          weatherIcon={this.state.icon}
          temp_fahrenheit={this.state.fahrenheit}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}

        />
      </div>
    );
  }
}


export default App;
