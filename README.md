# React 5-day forecast component
React component with 5 days weather forecast.

Demo: <a href='http://weather-forecast-react.musicrecon.com/'>http://weather-forecast-react.musicrecon.com/</a>

# dev process
1. clone the repo
2. cd to project
3. run 'npm install'
4. run 'npm start' for dev build
5. run 'npm build' for production build

# component usage
Component uses http://openweathermap.org/ API to retrieve forecast data.

```html
<WeatherForecast
  apiKey="your openweathermap.org api key here"
  city="London"
  country="GB" />
```

# todo:
- export as npm plugin