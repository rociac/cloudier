const domManager = (() => {
  const body = document.querySelector('body');

  const setInfo = (weatherData) => {
    const infoElements = `
  <div class="info__top">${weatherData.name}, ${weatherData.sys.country}</div>
  <div class="info__bottom">
    <div class="info__bottom-left">
      <p class="temp">${weatherData.main.temp.toFixed(0)}°</p>
      <p class="weather">${weatherData.weather[0].main}</p>
      <p class="feels-like">Feels like <span>${weatherData.main.feels_like}°</span></p>
      <p class="range">H <span>${weatherData.main.temp_max.toFixed(0)}°</span> / L <span>${weatherData.main.temp_min.toFixed(0)}°</span></p>
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

  return {
    setInfo,
    setBackground,
  };
})();

export default domManager;
