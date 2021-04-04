<template>
  <div class="main">
    <div class="music">
      <iframe src="https://open.spotify.com/embed/playlist/3qHPyZH4RcoBtBrTG9UiqA" width="320" height="100%"
              frameborder="0"
              allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    <CurrentTime/>
    <div class="content">
      <RoomWeather/>
      <Weather/>
    </div>
  </div>
</template>

<script>
import CurrentTime from "@/components/CurrentTime";
import RoomWeather from "@/components/RoomWeather";
import Weather from "@/components/Weather";

export default {
  name: 'Main',
  props: {},
  components: {
    Weather,
    RoomWeather,
    CurrentTime,
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: nowrap;
  margin: 0 10%;
  color: aliceblue;
}

.content > div {
  width: 44%;
}

.music {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
</style>
