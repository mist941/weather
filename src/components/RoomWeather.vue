<template>
  <div class="room-weather">
    <h1>NectarDesk Dev</h1>
    <h2>Zhytomyr, Ukraine</h2>
    <div class="weather">
      <slot :weather="weather">
        <p>
          <span class="data-weather">{{
              (weather && weather.temperature) ? parseFloat(weather.temperature).toFixed(1) : 0
            }}</span>
          <span><sup>°</sup>С</span>
        </p>
        <p>
          <span>Humidity: </span>
          <span class="data-weather">{{
              (weather && weather.humidity) ? parseFloat(weather.humidity).toFixed(1) : 0
            }}</span> %
        </p>
        <p>
          <span>Pressure: </span>
          <span class="data-weather">{{
              (weather && weather.pressure) ? parseFloat(weather.pressure).toFixed(1) : 0
            }}</span> hPa
        </p>
        <p>Happy Fucking day!</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomWeather",
  data: () => ({
    weather: {
      temperature: 23,
      humidity: 35,
      pressure: 992,
    }
  }),
  created() {
    setInterval(() => {
      fetch('https://weather-esp8266.herokuapp.com/weather')
          .then(res => res.ok ? res.json() : null).then(data => this.weather = data);
    }, 30000);
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
}

h3 {
  font-size: 30px;
}

.weather > p:first-child {
  font-size: 150px;
  margin: 0;
  font-weight: bold;
}

.weather > p:not(:first-child) {
  font-size: 35px;
}

.weather > p:not(:first-child) span:first-child {
  color: darkgray;
  font-weight: bold;
}

.weather p:last-child {
  font-size: 50px;
  color: #668BC4;
}

.data-weather {
  color: #FCA310;
}
</style>