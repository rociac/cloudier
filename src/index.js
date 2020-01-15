import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './main.scss';
import domManager from './js/info';

const APIKEY = 'eaed0043eb661ba7a7f56160196f9ad9';
const btn = document.querySelector('.search__btn');
const search = document.getElementById('search__input');
const error = document.querySelector('.error');
const unitToggle = document.querySelector('.switch');
const checkbox = document.querySelector('.unit');

const getWeather = async (location, unit) => {
  const container = document.querySelector('.info');
  container.innerHTML = '';
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKEY}&units=${unit}`, { mode: 'cors' });
    const weatherData = await response.json();
    domManager.setBackground(weatherData.weather[0].main);
    const infoElements = domManager.setInfo(weatherData);
    container.innerHTML += infoElements;
    const icon = document.createElement('img');
    const iconContainer = document.querySelector('.info__bottom-right');
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    iconContainer.appendChild(icon);
  } catch (e) {
    error.innerHTML = 'You must enter a valid city';
    error.classList = 'error active';
  }
}

const searchLocation = () => {
  const location = document.getElementById('search__input').value.trim();
  const unit = document.getElementById('units').value;
  setUnitState(unit);
  getWeather(location, unit);
}

const setUnitState = (unit) => {
  switch (unit) {
    case 'metric':
      checkbox.checked = false;
      break;
    case 'imperial':
      checkbox.checked = true;
      break;
  }
}

const init = () => {
  btn.addEventListener('click', (event) => {
    if (search.validity.valueMissing) {
      error.innerHTML = 'You must enter a city name';
      error.classList = 'error active';
      event.preventDefault();
    } else {
      event.preventDefault();
      document.querySelector('.toggle-units').style.display = 'flex';
      searchLocation();
      document.getElementById('search__input').value = '';
    }
  }, false);
};

document.addEventListener('DOMContentLoaded', init);

search.addEventListener('input', () => {
  if (!search.validity.valueMissing) {
    error.innerHTML = '';
    error.className = 'error';
  }
}, false);

unitToggle.addEventListener('change', () => {
  domManager.changeUnits();
}, false);
