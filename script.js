const timeEL = document.getElementById("time");
const dateEL = document.getElementById("date");
const currentweatheritemsEL = document.getElementById("current-weather-items");
// const timezoneEL = document.getElementById("time-zone");
const countryEL = document.getElementById("country");
const forecastEl = document.getElementById("forecast");
const currenttempEl = document.getElementById("current-temp");
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const bgImage = document.querySelector("body");
const weatherIcon = document.querySelector("w-icon");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const API_KEY = "1d18cafdd8150ecfb53aa6f050beffa4";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeEL.innerHTML =
    (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    " " +
    `<span id="am-pm">${ampm}</span>`;

  dateEL.innerHTML = days[day] + "," + date + " " + months[month];
}, 1000);

const API_URL =
  "https://api.openweathermap.org/data/2.5/forecast?q=noida&units=metric&exclude=hourly,minutely";

function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    console.log(success);
  });
}

function checkWeather() {
  fetch(API_URL + `&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let city = data.city.name;
      let main = data.list[0].main;
      let temp = data.list[0].main.temp;
      let weather = data.list[0].weather[0].main;
      console.log(weather);
      console.log(temp);
      console.log(main);
      console.log(city);
      document.querySelector(".ttemp").innerHTML =
        Math.round(data.list[0].main.temp) + "°C";
      document.querySelector(".Humidity").innerHTML =
        data.list[0].main.humidity + "%";
      document.querySelector(".Pressure").innerHTML =
        data.list[0].main.pressure + " hPa";
      document.querySelector(".Wind").innerHTML =
        data.list[0].wind.speed + " km/h";
      document.querySelector(".city").innerHTML = data.city.name;
      // document.querySelector(".sun-rise").innerHTML = data.city.sunrise;
      // document.querySelector(".sun-set").innerHTML = data.city.sunset;



      //for the changing background according to the weather.
      switch (weather) {     
        case "Snow":
          bgImage.style.backgroundImage = "url(snow.gif)";
          break;
        case "Clouds":
          bgImage.style.backgroundImage = "url(clouds.gif)";
          break;
        case "Clear":
          bgImage.style.backgroundImage = "url(clear.gif)";
          break;
        case "Fog":
          bgImage.style.backgroundImage = "url(fog.gif)";
          break;
        case "Rain":
          bgImage.style.backgroundImage = "url(rain.gif)";
          break;
        case "Thunderstrom":
          bgImage.style.backgroundImage = "url(thunderstrom.gif)";
          break;
        default:
          bgImage.style.backgroundImage = "url(clear.gif)";
          break;
      }
    });
}
checkWeather();

//for searching of city
// searchBtn.addEventListener("click", ()=>{
//   checkWeather(searchBox.value);
// })

function showWeatherData(data) {
  let { humidity, pressure, sunrise, sunset, wind_speed } = data.city;

  timezoneEL = data.timezone;
  currentweatheritemsEL.innerHTML = `div class="weather-items">
  div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format("HH:mm a")}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset * 1000).format("HH:mm a")}</div>
    </div>`;
}
