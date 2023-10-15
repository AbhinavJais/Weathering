const timeEL = document.getElementById('time');
const dateEL = document.getElementById('date');
const currentweatheritemsEL = document.getElementById('current-weather-items');
const timezoneEL = document.getElementById('time-zone');
const countryEL = document.getElementById('country');
const forecastEl = document.getElementById('forecast');
const currenttempEl = document.getElementById('current-temp');

const days = ['Sunday' , 'Monday', 'Tuesday', 'Wednesday' , 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

