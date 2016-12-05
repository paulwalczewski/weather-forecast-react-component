import React, { Component } from 'react';
import './WeatherForecast.css';

import DayDetails from './components/day_details/day_details';
import Api from './services/api';

class WeatherForecast extends Component {
  constructor(props){
    super(props);

    this.state = {
        weatherData: {
          list: []
        }
    };
  }

  componentDidMount(){
    Api.get5daysForecast(this.props.city, this.props.country, this.props.apiKey)
      .then((response) => {
        this.updateWeatherData(response)
      });
  }

  updateWeatherData(data) {
    this.setState({
      weatherData: data
    })
  }

  render() {
    return (
      <section className="weather-component">
        <strong className="city-name">{this.props.city} - 5 day weather forecast.</strong>
        <ul className="forecast-list">
        {
          this.state.weatherData.list.map((dayData) => {
            return <DayDetails data={dayData} key={dayData.dt} />
          })
        }
        </ul>
      </section>
    );
  }
}

WeatherForecast.propTypes = {
    apiKey: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired,
    country: React.PropTypes.string.isRequired
}

export default WeatherForecast;
