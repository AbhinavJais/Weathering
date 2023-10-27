const timeEL = document.getElementById("time");
const dateEL = document.getElementById("date");
const currentweatheritemsEL = document.getElementById("current-weather-items");
const timezoneEL = document.getElementById("time-zone");
const countryEL = document.getElementById("country");
const forecastEl = document.getElementById("forecast");
const currenttempEl = document.getElementById("current-temp");

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
  //  navigator.geolocation.getCurrentPosition((success) => {
  //      let {latitude, longitude} = success.coords;
  //      console.log(success);
}

fetch(API_URL + `&appid=${API_KEY}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let city = data.city.name;
    let main = data.list[0].main;
    let temp = data.list[0].main.temp;
    let weather = data.list[0].weather[0].description;
    console.log(weather);
    console.log(temp);
    console.log(main);
    console.log(city);
    document.querySelector(".Humidity").innerHTML = data.list[0].main.humidity;
    document.querySelector(".Pressure").innerHTML = data.list[0].main.pressure;
    document.querySelector(".Wind").innerHTML = data.list[0].wind.speed;
    document.querySelector(".sun-rise").innerHTML = data.city.sunrise;
    document.querySelector(".sun-set").innerHTML = data.city.sunset;
    //  showWeatherData()
  });

getWeatherData();

function showWeatherData(data) {
  let { humidity, pressure, sunrise, sunset, wind_speed } = data.city;

  timezoneEL = data.timezone;
  currentweatheritemsEL.innerHTML = `div class="weather-items">
  div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>`;
}

// switch (weather) {
//   case "Snow":
//     break;

//   default:
//     break;
// }
