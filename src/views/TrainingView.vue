<template>
  <div>
    <h1 class="training-name">{{ training.name }}</h1>
    <ExerciseView
      v-for="(ex, idx) in training.exes"
      :key="idx"
      :ex="ex"
      :exIdx="idx"
      @updateEx="updateTraining"
    />
  </div>
</template>

<script>
import ExerciseView from "./ExerciseView";
import SetView from "./SetView";

export default {
  name: "TrainingView",
  components: { ExerciseView, SetView },
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
  },
  methods: {
    updateTraining(exIdx, setIdx, reps) {
      console.log(exIdx, setIdx, reps);
      const maxReps = this.training.exes[exIdx].maxReps;
      if (reps > maxReps) {
        this.training.exes[exIdx].sets[setIdx].reps = 0;
      } else {
        this.training.exes[exIdx].sets[setIdx].reps = reps;
      }
    }
  }
};
</script>

<style></style>
