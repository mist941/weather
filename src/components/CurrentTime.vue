<template>
  <div class="data">
    <slot :time="time">
      <p>{{ time.toLocaleTimeString() }}</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "CurrentTime",
  data: () => ({
    time: new Date()
  }),
  created() {
    setInterval(() => {
      this.time = new Date(this.time.getTime() + 1000)
    }, 1000);
  }
}
</script>

<style scoped>
.data {
  color: aliceblue;
  text-align: center;
  font-size: 100px;
  font-weight: bold;
}

p {
  margin: 30px 0;
}
</style>