const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": "edfa134de2272f2ac950b5c8aa736cba"
}

const cities = {
  2643743: "London",
  625144: "Minsk",
  756135: "Warsaw",
  703448: "Kyiv"
}
const select = document.createElement('select');
for (let key in cities) {
  const city = cities[key];
  const option = document.createElement('option');
  option.textContent = city;
  option.value = key;
  select.appendChild(option);
}
function getWeather() {
  document.querySelector('.weather').insertAdjacentElement('afterBegin', select);
  select.classList.add('weather__list');
  select.id = 'city';

  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
      return weather.json();
    }).then(showWeather);
}

function showWeather(data) {
  document.querySelector('.weather__deg').innerHTML = Math.round(data.main.temp) + '&deg;';
  document.querySelector('.weather__feature').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}



getWeather();
document.querySelector('#city').onchange = getWeather;
