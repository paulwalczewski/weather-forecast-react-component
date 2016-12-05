import React from 'react';
import ReactDOM from 'react-dom';
import WeatherForecast from './WeatherForecast';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherForecast />, div);
});
