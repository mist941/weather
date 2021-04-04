<template>
  <div class="weather">
    <h1>Weather today in Zhytomyr</h1>
    <div class="weather" v-if="weather">
      <slot :weather="weather">
        <p>Temperature: <span>{{ (weather.main.temp) ? (weather.main.temp - 273.15).toFixed(1) : 0 }}</span><sup>°</sup>С
        </p>
        <p>Feels Like:
          <span>{{ (weather.main.feels_like) ? (weather.main.feels_like - 273.15).toFixed(1) : 0 }}</span><sup>°</sup>С
        </p>
        <p>Humidity: <span>{{ (weather.main.humidity) ? weather.main.humidity.toFixed(1) : 0 }}</span> %</p>
        <p>Pressure: <span>{{ (weather.main.pressure) ? weather.main.pressure.toFixed(1) : 0 }}</span> hPa</p>
        <p>Grnd Level: <span>{{ (weather.main.grnd_level) ? weather.main.grnd_level.toFixed(1) : 0 }}</span> hPa</p>
        <p>Wind</p>
        <ul>
          <li><p>Speed: <span>{{ (weather.wind.speed) ? weather.wind.speed.toFixed(1) : 0 }}</span> m/s</p></li>
          <li><p>Deg: <span>{{ (weather.wind.deg) ? weather.wind.deg.toFixed(1) : 0 }}</span><sup>°</sup></p></li>
          <li><p>Gust: <span>{{ (weather.wind.gust) ? weather.wind.gust.toFixed(1) : 0 }}</span></p></li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data: () => ({
    weather: null,
  }),
  created() {
    setInterval(fetch('http://api.openweathermap.org/data/2.5/weather?q=Zhytomyr&appid=782edee32f11a4a623dc4514924d962a')
        .then(res => res.ok ? res.json() : null)
        .then(data => this.weather = data), 30000)
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
}

.weather p {
  font-size: 28px;
  margin: 0 0 20px 0;
}

.weather p span {
  color: #4DA8D5;
}


.weather ul {
  list-style-type: none;
}
</style>