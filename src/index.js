import './main.scss';

const APIKEY = 'eaed0043eb661ba7a7f56160196f9ad9';
const btn = document.querySelector('.btn-search');



async function getWeather(location, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKEY}&units=${unit}`, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
  const icon = document.createElement('img');
  icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const container = document.querySelector('.info');
  container.appendChild(icon);
  const temperature = document.querySelector('.info__temper');
  temperature.insertAdjacentHTML('beforeend', weatherData.main.temp.toFixed(0) + '°');
  const city = document.querySelector('.info__city');
  city.insertAdjacentHTML('beforeend', weatherData.name);
}

function searchLocation() {
  const location = document.getElementById('search').value.trim();
  const unit = document.getElementById('units').value;
  getWeather(location, unit);
}

const init = () => {
  btn.addEventListener('click', ev => {
    ev.preventDefault();
    searchLocation();
    document.getElementById('search').value = '';
  }, false);
}

document.addEventListener('DOMContentLoaded', init);