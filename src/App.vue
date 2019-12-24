<template>
    <div id="app">
        <TrainingView />
    </div>
</template>

<script>
import TrainingView from "./views/TrainingView.vue";

export default {
    components: { TrainingView }
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
