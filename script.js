const timeEL = document.getElementById('time');
const dateEL = document.getElementById('date');
const currentweatheritemsEL = document.getElementById('current-weather-items');
const timezoneEL = document.getElementById('time-zone');
const countryEL = document.getElementById('country');
const forecastEl = document.getElementById('forecast');
const currenttempEl = document.getElementById('current-temp');

const days = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday' , 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = 'c28fb9057b77d21891cb599d9e359116'

setInterval(() => {
   const time = new Date();
   const month = time.getMonth();
   const date = time.getDate();
   const day = time.getDay();
   const hour = time.getHours();
   const hoursIn12HrFormat  = hour >= 13 ? hour %12: hour
   const minutes = time.getMinutes();
   const ampm = hour >= 12 ? 'PM' : 'AM'

   timeEL.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;

   dateEL.innerHTML = days[day]  +  ',' + date + ' ' + months[month];


}, 1000);



function getWeatherData() {
   navigator.geolocation.getCurrentPosition((success) => {
       let {latitude, longitude} = success.coords;

       console.log(success);

       fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units:metric&cnt={cnt}&appid=${API_KEY}`).then(res =>res.json()).then(data =>{

       console.log(data)
       })
   })
   
}
getWeatherData()

function showWeatherData(data) {

   let{humidity,pressure,sunrise,sunset,wind_speed} = data.current;

   currentweatheritemsEL.innerHTML = `<div class="weather-items">
       <div>Humidity</div>
       <div>${humidity}%</div>
      div>
      <div class="weather-items">
       <div>Pressure</div>
       <div>${pressure} hPa</div>
      div>
      <div class="weather-items">
       <div>Wind Speed</div>
       <div>${wind_speed} m/s</div>
      div>`
   
}
