<template>
  <div>
    <button class="set-button" @click="updateReps">{{ set.reps }}</button>
  </div>
</template>

<script>
export default {
  name: "SetView",
  props: {
    maxReps: Number,
    set: Object,
    exIdx: Number,
    setIdx: Number
  },
  methods: {
    updateReps() {
      this.$emit("updateReps", this.setIdx, this.set.reps + 1);
    }
  }
};
</script>

<style></style>
