<template>
  <div id="app">
    <TrainigWrapper />
  </div>
</template>

<script>
import TrainigWrapper from "./components/TrainingWrapper";

export default {
  components: { TrainigWrapper }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
