<template>
    <div id="app">
        <ProgramView />
    </div>
</template>

<script>
import ProgramView from "../src/Program/ProgramView";

export default {
    components: { ProgramView }
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
