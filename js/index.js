
//https://api.openweathermap.org/data/2.5/weather?q=lucknow&units=metric&appid=8b83d51101cf7d02f84f8f5fab17ada4

// `https:api.openweathermap.org/data/2.5/weather?q=${keyword}&units=metric&appid=8b83d51101cf7d02f84f8f5fab17ada4`,

const weather = {
  apiKey: "8b83d51101cf7d02f84f8f5fab17ada4",

  fetchWeather: function (city) {
    fetch(
      "https:api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      
     
    },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0]
    const { temp, humidity, pressure, temp_min, temp_max } = data.main
    const { speed } = data.wind
    const { all } = data.clouds
    const { sunrise, sunset } = data.sys
    console.log(name, speed, description, icon, temp)

    document.querySelector(".city").innerText = "Weather in " + name

    document.querySelector(".temp").innerText = temp + "° C"

    document.querySelector(".max_temp").innerText = "Max Temp : " + temp_max + "° C"

    document.querySelector(".min_temp").innerText = "Min Temp : " + temp_min + "° C"
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/"+ icon +".png"


    document.querySelector(".description").innerText = description

    // document.querySelector(".icon").innerText = icon

    document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%"

    document.querySelector(".windspeed").innerText = "Wind Speed : " + speed + " kh/h"
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/900*700/? " + name + "')"
  },

  search: function () {
    this.fetchWeather(document.querySelector(".searchbar").value)
  }
};

document.querySelector(".search button")
  .addEventListener("click", function () {
    weather.search();
  })
weather.fetchWeather("lucknow");



