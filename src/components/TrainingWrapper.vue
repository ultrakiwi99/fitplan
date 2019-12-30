<template>
  <div>
    <TrainingView :training="training" />
  </div>
</template>

<script>
import TrainingView from "../views/TrainingView";
export default {
  name: "TrainingWrapper",
  components: { TrainingView },
  data() {
    return {
      training: {
        name: "Training A",
        exes: [
          {
            name: "test exercise",
            maxSets: 3,
            maxReps: 15,
            sets: [
              {
                reps: 0
              },
              {
                reps: 0
              },
              {
                reps: 0
              }
            ]
          },
          {
            name: "test exercise 1",
            maxSets: 3,
            maxReps: 15,
            sets: [
              {
                reps: 0
              },
              {
                reps: 0
              },
              {
                reps: 0
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>