<template>
  <div>
    <button class="set-button" @click="updateReps">{{ set.reps }}</button>
  </div>
</template>

<script>
export default {
  name: "SetView",
  props: {
    exerciseIndex: Number,
    setIndex: Number,
    set: Object
  },
  methods: {
    updateReps() {
      this.$emit(
        "updateReps",
        this.set.reps + 1,
        this.setIndex,
        this.exerciseIndex
      );
    }
  }
};
</script>

<style></style>
