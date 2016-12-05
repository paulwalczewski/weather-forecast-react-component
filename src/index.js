import React from 'react';
import ReactDOM from 'react-dom';
import WeatherForecast from './WeatherForecast';
import './index.css';

ReactDOM.render(
  <WeatherForecast
    apiKey="5b8aac88f05d77df8cf00012dad30f43" 
    city="London"
    country="UK" />,
  document.getElementById('root')
);
