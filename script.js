const timeEL = document.getElementById("time");
const dateEL = document.getElementById("date");
const currentweatheritemsEL = document.getElementById("current-weather-items");
const countryEL = document.getElementById("country");
const forecastEl = document.getElementById("forecast");
const currenttempEl = document.getElementById("current-temp");
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".searchbtn");
const bgImage = document.querySelector("body");
const weatherIcon = document.querySelector(".w-icon");
const weatherIcon1 = document.querySelector(".w-icon1");
const weatherIcon2 = document.querySelector(".w-icon2");
const weatherIcon3 = document.querySelector(".w-icon3");
const weatherIcon4 = document.querySelector(".w-icon4");
const weatherIcon5 = document.querySelector(".w-icon5");
const weatherIcon6 = document.querySelector(".w-icon6");
const dateContainer = document.getElementsByClassName(".date-container")
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

//function for setting the according to IST -->
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

// API key and URL -->
const API_KEY = "1d18cafdd8150ecfb53aa6f050beffa4";
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?&units=metric&exclude=hourly,minutely&q=`;

// function for getting the current location. -->
async function locatio(){
  navigator.geolocation.getCurrentPosition((success) => {
    // console.log(success);
    let {latitude, longitude } = success.coords;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&units=metric&   exclude=hourly,minutely&appid=${API_KEY}&q=`)
     .then((res) => res.json())
     .then((data)=>{
      console.log(data)
      let cityn = data.city.name;
      let main = data.list[0].main;
      let temp = data.list[0].main.temp;
      let weather = data.list[0].weather[0].main;
      let weather1 = data.list[1].weather[0].main;
      let weather2= data.list[2].weather[0].main;
      let weather3 = data.list[3].weather[0].main;
      let weather4 = data.list[4].weather[0].main;
      let weather5 = data.list[5].weather[0].main;
      let weather6 = data.list[6].weather[0].main;
      console.log(weather);
      console.log(temp);
      console.log(main);
      console.log(cityn);

      //for the current info section -->
      document.querySelector(".ttemp").innerHTML =Math.round(data.list[0].main.temp) + "°C";
      document.querySelector(".Humidity").innerHTML =data.list[0].main.humidity + "%";
      document.querySelector(".Pressure").innerHTML =data.list[0].main.pressure + " hPa";
      document.querySelector(".Wind").innerHTML =data.list[0].wind.speed + " km/h";
      document.querySelector(".city").innerHTML = data.city.name;

      //for the day temperature -->
      document.querySelector(".currentD").innerHTML = "Temp - " + Math.round(data.list[0].main.temp) + "°C";
      document.querySelector(".day1").innerHTML = "Temp - " + Math.round(data.list[1].main.temp) + "°C";
      document.querySelector(".day2").innerHTML = "Temp - " + data.list[2].main.temp + "°C";
      document.querySelector(".day3").innerHTML = "Temp - " + data.list[3].main.temp + "°C";
      document.querySelector(".day4").innerHTML = "Temp - " + data.list[4].main.temp + "°C";
      document.querySelector(".day5").innerHTML = "Temp - " + data.list[5].main.temp + "°C";
      document.querySelector(".day6").innerHTML = "Temp - " + data.list[6].main.temp + "°C";

      //for the weather info -->
      document.querySelector(".currentN").innerHTML = data.list[0].weather[0].main ;
      document.querySelector(".n1").innerHTML = data.list[1].weather[0].main ;
      document.querySelector(".n2").innerHTML = data.list[2].weather[0].main ;
      document.querySelector(".n3").innerHTML = data.list[3].weather[0].main ;
      document.querySelector(".n4").innerHTML = data.list[4].weather[0].main ;
      document.querySelector(".n5").innerHTML = data.list[5].weather[0].main ;
      document.querySelector(".n6").innerHTML = data.list[6].weather[0].main ;


      //for the changing background according to the weather. -->
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
      
      //chaning weather icons according to the weather. -->

      //for first weather icon -->
      if(weather == "Clouds"){
        weatherIcon.src = "icons/cloudsicon.png"
      }
      else if(weather == "Rain"){
        weatherIcon.src = "icons/rainicon.png"
      }
      else if(weather == "Clear"){
        weatherIcon.src = "icons/clearicon.png"
      }
      else if(weather == "Snow"){
        weatherIcon.src = "icons/snowicon.png"
      }
      else if(weather == "Humidity"){
        weatherIcon.src = "icons/humidityicon.png"
      }
      else if(weather == "Wind"){
        weatherIcon.src = "icons/windicon.png"
      }
      else if(weather == "Drizzle"){
        weatherIcon.src = "icons/drizzleicon.png"
      }
      
      //for second weather icon -->
      if(weather1 == "Clouds"){
        weatherIcon1.src = "icons/cloudsicon.png"
      }
      else if(weather1 == "Rain"){
        weatherIcon1.src = "icons/rainicon.png"
      }
      else if(weather1 == "Clear"){
        weatherIcon1.src = "icons/clearicon.png"
      }
      else if(weather1 == "Snow"){
        weatherIcon1.src = "icons/snowicon.png"
      }
      else if(weather1 == "Humidity"){
        weatherIcon1.src = "icons/humidityicon.png"
      }
      else if(weather1 == "Wind"){
        weatherIcon1.src = "icons/windicon.png"
      }
      else if(weather1 == "Drizzle"){
        weatherIcon1.src = "icons/drizzleicon.png"
      }

      //for third weather icon -->
      if(weather2 == "Clouds"){
        weatherIcon2.src = "icons/cloudsicon.png"
      }
      else if(weather2 == "Rain"){
        weatherIcon2.src = "icons/rainicon.png"
      }
      else if(weather2 == "Clear"){
        weatherIcon2.src = "icons/clearicon.png"
      }
      else if(weather2 == "Snow"){
        weatherIcon2.src = "icons/snowicon.png"
      }
      else if(weather2 == "Humidity"){
        weatherIcon2.src = "icons/humidityicon.png"
      }
      else if(weather2 == "Wind"){
        weatherIcon2.src = "icons/windicon.png"
      }
      else if(weather2 == "Drizzle"){
        weatherIcon2.src = "icons/drizzleicon.png"
      }
      //for fourth weather icon -->
      if(weather3 == "Clouds"){
        weatherIcon3.src = "icons/cloudsicon.png"
      }
      else if(weather3 == "Rain"){
        weatherIcon3.src = "icons/rainicon.png"
      }
      else if(weather3 == "Clear"){
        weatherIcon3.src = "icons/clearicon.png"
      }
      else if(weather3 == "Snow"){
        weatherIcon3.src = "icons/snowicon.png"
      }
      else if(weather3 == "Humidity"){
        weatherIcon3.src = "icons/humidityicon.png"
      }
      else if(weather3 == "Wind"){
        weatherIcon3.src = "icons/windicon.png"
      }
      else if(weather3 == "Drizzle"){
        weatherIcon3.src = "icons/drizzleicon.png"
      }

      //for fifth weather icon -->
      if(weather4 == "Clouds"){
        weatherIcon4.src = "icons/cloudsicon.png"
      }
      else if(weather4 == "Rain"){
        weatherIcon4.src = "icons/rainicon.png"
      }
      else if(weather4 == "Clear"){
        weatherIcon4.src = "icons/clearicon.png"
      }
      else if(weather4 == "Snow"){
        weatherIcon4.src = "icons/snowicon.png"
      }
      else if(weather4 == "Humidity"){
        weatherIcon4.src = "icons/humidityicon.png"
      }
      else if(weather4 == "Wind"){
        weatherIcon4.src = "icons/windicon.png"
      }
      else if(weather4 == "Drizzle"){
        weatherIcon4.src = "icons/drizzleicon.png"
      }

      //for sixth weather icon -->
      if(weather5 == "Clouds"){
        weatherIcon5.src = "icons/cloudsicon.png"
      }
      else if(weather5 == "Rain"){
        weatherIcon5.src = "icons/rainicon.png"
      }
      else if(weather5 == "Clear"){
        weatherIcon5.src = "icons/clearicon.png"
      }
      else if(weather5 == "Snow"){
        weatherIcon5.src = "icons/snowicon.png"
      }
      else if(weather5 == "Humidity"){
        weatherIcon5.src = "icons/humidityicon.png"
      }
      else if(weather5 == "Wind"){
        weatherIcon5.src = "icons/windicon.png"
      }
      else if(weather5 == "Drizzle"){
        weatherIcon5.src = "icons/drizzleicon.png"
      }

      //for the seventh icon -->
      if(weather6 == "Clouds"){
        weatherIcon6.src = "icons/cloudsicon.png"
      }
      else if(weather6 == "Rain"){
        weatherIcon6.src = "icons/rainicon.png"
      }
      else if(weather6 == "Clear"){
        weatherIcon6.src = "icons/clearicon.png"
      }
      else if(weather6 == "Snow"){
        weatherIcon6.src = "icons/snowicon.png"
      }
      else if(weather6 == "Humidity"){
        weatherIcon6.src = "icons/humidityicon.png"
      }
      else if(weather6 == "Wind"){
        weatherIcon6.src = "icons/windicon.png"
      }
      else if(weather6 == "Drizzle"){
        weatherIcon6.src = "icons/drizzleicon.png"
      }
     })
  })
}
locatio()

//function for the fetching api and data --> 
function checkWeather(city) {
  fetch(API_URL + city+`&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let cityn = data.city.name;
      let main = data.list[0].main;
      let temp = data.list[0].main.temp;
      let weather = data.list[0].weather[0].main;
      let weather1 = data.list[1].weather[0].main;
      let weather2= data.list[2].weather[0].main;
      let weather3 = data.list[3].weather[0].main;
      let weather4 = data.list[4].weather[0].main;
      let weather5 = data.list[5].weather[0].main;
      let weather6 = data.list[6].weather[0].main;
      console.log(weather);
      console.log(temp);
      console.log(main);
      console.log(cityn);

      //for the current info section -->
      document.querySelector(".ttemp").innerHTML =Math.round(data.list[0].main.temp) + "°C";
      document.querySelector(".Humidity").innerHTML =data.list[0].main.humidity + "%";
      document.querySelector(".Pressure").innerHTML =data.list[0].main.pressure + " hPa";
      document.querySelector(".Wind").innerHTML =data.list[0].wind.speed + " km/h";
      document.querySelector(".city").innerHTML = data.city.name;

      //for the day temperature -->
      document.querySelector(".currentD").innerHTML = "Temp - " + Math.round(data.list[0].main.temp) + "°C";
      document.querySelector(".day1").innerHTML = "Temp - " + Math.round(data.list[1].main.temp) + "°C";
      document.querySelector(".day2").innerHTML = "Temp - " + data.list[2].main.temp + "°C";
      document.querySelector(".day3").innerHTML = "Temp - " + data.list[3].main.temp + "°C";
      document.querySelector(".day4").innerHTML = "Temp - " + data.list[4].main.temp + "°C";
      document.querySelector(".day5").innerHTML = "Temp - " + data.list[5].main.temp + "°C";
      document.querySelector(".day6").innerHTML = "Temp - " + data.list[6].main.temp + "°C";

      //for the weather info -->
      document.querySelector(".currentN").innerHTML = data.list[0].weather[0].main ;
      document.querySelector(".n1").innerHTML = data.list[1].weather[0].main ;
      document.querySelector(".n2").innerHTML = data.list[2].weather[0].main ;
      document.querySelector(".n3").innerHTML = data.list[3].weather[0].main ;
      document.querySelector(".n4").innerHTML = data.list[4].weather[0].main ;
      document.querySelector(".n5").innerHTML = data.list[5].weather[0].main ;
      document.querySelector(".n6").innerHTML = data.list[6].weather[0].main ;


      //for the changing background according to the weather. -->
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
      
      //chaning weather icons according to the weather. -->

      //for first weather icon -->
      if(weather == "Clouds"){
        weatherIcon.src = "icons/cloudsicon.png"
      }
      else if(weather == "Rain"){
        weatherIcon.src = "icons/rainicon.png"
      }
      else if(weather == "Clear"){
        weatherIcon.src = "icons/clearicon.png"
      }
      else if(weather == "Snow"){
        weatherIcon.src = "icons/snowicon.png"
      }
      else if(weather == "Humidity"){
        weatherIcon.src = "icons/humidityicon.png"
      }
      else if(weather == "Wind"){
        weatherIcon.src = "icons/windicon.png"
      }
      else if(weather == "Drizzle"){
        weatherIcon.src = "icons/drizzleicon.png"
      }
      
      //for second weather icon -->
      if(weather1 == "Clouds"){
        weatherIcon1.src = "icons/cloudsicon.png"
      }
      else if(weather1 == "Rain"){
        weatherIcon1.src = "icons/rainicon.png"
      }
      else if(weather1 == "Clear"){
        weatherIcon1.src = "icons/clearicon.png"
      }
      else if(weather1 == "Snow"){
        weatherIcon1.src = "icons/snowicon.png"
      }
      else if(weather1 == "Humidity"){
        weatherIcon1.src = "icons/humidityicon.png"
      }
      else if(weather1 == "Wind"){
        weatherIcon1.src = "icons/windicon.png"
      }
      else if(weather1 == "Drizzle"){
        weatherIcon1.src = "icons/drizzleicon.png"
      }

      //for third weather icon -->
      if(weather2 == "Clouds"){
        weatherIcon2.src = "icons/cloudsicon.png"
      }
      else if(weather2 == "Rain"){
        weatherIcon2.src = "icons/rainicon.png"
      }
      else if(weather2 == "Clear"){
        weatherIcon2.src = "icons/clearicon.png"
      }
      else if(weather2 == "Snow"){
        weatherIcon2.src = "icons/snowicon.png"
      }
      else if(weather2 == "Humidity"){
        weatherIcon2.src = "icons/humidityicon.png"
      }
      else if(weather2 == "Wind"){
        weatherIcon2.src = "icons/windicon.png"
      }
      else if(weather2 == "Drizzle"){
        weatherIcon2.src = "icons/drizzleicon.png"
      }
      //for fourth weather icon -->
      if(weather3 == "Clouds"){
        weatherIcon3.src = "icons/cloudsicon.png"
      }
      else if(weather3 == "Rain"){
        weatherIcon3.src = "icons/rainicon.png"
      }
      else if(weather3 == "Clear"){
        weatherIcon3.src = "icons/clearicon.png"
      }
      else if(weather3 == "Snow"){
        weatherIcon3.src = "icons/snowicon.png"
      }
      else if(weather3 == "Humidity"){
        weatherIcon3.src = "icons/humidityicon.png"
      }
      else if(weather3 == "Wind"){
        weatherIcon3.src = "icons/windicon.png"
      }
      else if(weather3 == "Drizzle"){
        weatherIcon3.src = "icons/drizzleicon.png"
      }

      //for fifth weather icon -->
      if(weather4 == "Clouds"){
        weatherIcon4.src = "icons/cloudsicon.png"
      }
      else if(weather4 == "Rain"){
        weatherIcon4.src = "icons/rainicon.png"
      }
      else if(weather4 == "Clear"){
        weatherIcon4.src = "icons/clearicon.png"
      }
      else if(weather4 == "Snow"){
        weatherIcon4.src = "icons/snowicon.png"
      }
      else if(weather4 == "Humidity"){
        weatherIcon4.src = "icons/humidityicon.png"
      }
      else if(weather4 == "Wind"){
        weatherIcon4.src = "icons/windicon.png"
      }
      else if(weather4 == "Drizzle"){
        weatherIcon4.src = "icons/drizzleicon.png"
      }

      //for sixth weather icon -->
      if(weather5 == "Clouds"){
        weatherIcon5.src = "icons/cloudsicon.png"
      }
      else if(weather5 == "Rain"){
        weatherIcon5.src = "icons/rainicon.png"
      }
      else if(weather5 == "Clear"){
        weatherIcon5.src = "icons/clearicon.png"
      }
      else if(weather5 == "Snow"){
        weatherIcon5.src = "icons/snowicon.png"
      }
      else if(weather5 == "Humidity"){
        weatherIcon5.src = "icons/humidityicon.png"
      }
      else if(weather5 == "Wind"){
        weatherIcon5.src = "icons/windicon.png"
      }
      else if(weather5 == "Drizzle"){
        weatherIcon5.src = "icons/drizzleicon.png"
      }

      //for the seventh icon -->
      if(weather6 == "Clouds"){
        weatherIcon6.src = "icons/cloudsicon.png"
      }
      else if(weather6 == "Rain"){
        weatherIcon6.src = "icons/rainicon.png"
      }
      else if(weather6 == "Clear"){
        weatherIcon6.src = "icons/clearicon.png"
      }
      else if(weather6 == "Snow"){
        weatherIcon6.src = "icons/snowicon.png"
      }
      else if(weather6 == "Humidity"){
        weatherIcon6.src = "icons/humidityicon.png"
      }
      else if(weather6 == "Wind"){
        weatherIcon6.src = "icons/windicon.png"
      }
      else if(weather6 == "Drizzle"){
        weatherIcon6.src = "icons/drizzleicon.png"
      }

    });
}

// for searching of city and calling the function
let search = searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

//ignore this function for now -->
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

//coding of gsap animation
var tl = gsap.timeline()

tl.from(".other,#current, .forecast-items",{
  x:-100,
  duration:1,
  delay:1,
  opacity:0,
  scale:0,
  stagger:0.1,
})
