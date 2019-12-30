<template>
  <div>
    <h2 class="exercise-name">{{ ex.name }}</h2>
    <SetView
      v-for="(set, idx) in ex.sets"
      :set="set"
      :max-reps="ex.maxReps"
      :key="idx"
      :set-idx="idx"
      @updateReps="updateEx"
    />
  </div>
</template>

<script>
import SetView from "./SetView";

export default {
  name: "ExerciseView",
  components: { SetView },
  props: {
    ex: {
      type: Object
    },
    exIdx: Number
  },
  methods: {
    updateEx(setIdx, reps) {
      this.$emit("updateEx", this.exIdx, setIdx, reps);
    }
  }
};
</script>

<style></style>
