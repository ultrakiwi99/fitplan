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
    setIdx: Number
  },
  methods: {
    updateReps() {
      const newRepCount = this.set.reps + 1;
      if (newRepCount > this.maxReps) {
        this.$emit("updateReps", this.setIdx, 0);
      } else {
        this.$emit("updateReps", this.setIdx, this.set.reps + 1);
      }
    }
  }
};
</script>

<style></style>
