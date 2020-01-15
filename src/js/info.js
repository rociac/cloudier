const domManager = (() => {
  const body = document.querySelector('body');

  const setInfo = (weatherData) => {
    const infoElements = `
  <div class="info__top">${weatherData.name}, ${weatherData.sys.country}</div>
  <div class="info__bottom">
    <div class="info__bottom-left">
      <p class="temp">${weatherData.main.temp.toFixed(0)} ${setUnits()}</p>
      <p class="weather">${weatherData.weather[0].main}</p>
      <p class="feels-like">Feels like <span id="feel">${weatherData.main.feels_like.toFixed(0)} ${setUnits()}</span></p>
      <p class="range">H <span id="high">${weatherData.main.temp_max.toFixed(0)} ${setUnits()}</span> / L <span id="low">${weatherData.main.temp_min.toFixed(0)} ${setUnits()}</span></p>
    </div>
    <div class="info__bottom-right">
    </div>
  </div>`;
    return infoElements;
  };

  const setBackground = (weatherData) => {
    switch (weatherData) {
      case 'Clouds':
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1444402185522-47a923ee3e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)';
        break;
      case 'Thunderstorm':
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1509401934319-cb35b87bf39e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)';
        break;
      case 'Drizzle':
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1541919329513-35f7af297129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80)';
        break;
      case 'Rain':
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80)';
        break;
      case 'Snow':
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1383&q=80)';
        break;
      case 'Clear':
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80)';
        break;
      default:
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1482841628122-9080d44bb807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)';
        break;
    }
  };

  const toFarenheit = (num) => {
    return ((num * 9 / 5) + 32).toFixed(0);
  }

  const toCelsius = (num) => {
    return ((num - 32) * 5 / 9).toFixed(0);
  }

  const getUnits = () => {
    const input = document.querySelector('.unit').checked;
    return input ? 'metric' : 'imperial';
  }

  const changeUnits = () => {
    const mainTemp = document.querySelector('.temp')
    const mainTempText = document.querySelector('.temp').textContent;
    let mainTempNumber = parseInt(mainTempText);
    const feelsLike = document.querySelector('#feel');
    const feelsLikeText = document.querySelector('#feel').textContent;
    let feelsLikeNumber = parseInt(feelsLikeText);
    const highTemp = document.querySelector('#high');
    const highTempText = document.querySelector('#high').textContent;
    let highTempNumber = parseInt(highTempText);
    const lowTemp = document.querySelector('#low');
    const lowTempText = document.querySelector('#low').textContent;
    let lowTempNumber = parseInt(lowTempText);
    const units = getUnits();
    switch (units) {
      case 'metric':
        mainTemp.innerHTML = '';
        feelsLike.innerHTML = '';
        highTemp.innerHTML = '';
        lowTemp.innerHTML = '';
        mainTempNumber = toFarenheit(mainTempNumber);
        feelsLikeNumber = toFarenheit(feelsLikeNumber);
        highTempNumber = toFarenheit(highTempNumber);
        lowTempNumber = toFarenheit(lowTempNumber);
        mainTemp.innerHTML += mainTempNumber + ' °F';
        feelsLike.innerHTML += feelsLikeNumber + ' °F';
        highTemp.innerHTML += highTempNumber + ' °F';
        lowTemp.innerHTML += lowTempNumber + ' °F';
        break;
      case 'imperial':
        mainTemp.innerHTML = '';
        feelsLike.innerHTML = '';
        highTemp.innerHTML = '';
        lowTemp.innerHTML = '';
        mainTempNumber = toCelsius(mainTempNumber);
        feelsLikeNumber = toCelsius(feelsLikeNumber);
        highTempNumber = toCelsius(highTempNumber);
        lowTempNumber = toCelsius(lowTempNumber);
        mainTemp.innerHTML += mainTempNumber + ' °C';
        feelsLike.innerHTML += feelsLikeNumber + ' °C';
        highTemp.innerHTML += highTempNumber + ' °C';
        lowTemp.innerHTML += lowTempNumber + ' °C';
        break;
    }
  }

  const setUnits = () => {
    const unit = document.getElementById('units').value;
    switch (unit) {
      case 'metric':
        return '°C';
      case 'imperial':
        return '°F';
    }
  }

  return {
    setInfo,
    setBackground,
    setUnits,
    changeUnits
  };
})();

export default domManager;
