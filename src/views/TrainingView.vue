<template>
  <div>
    <h1 class="training-name">{{ training.name }}</h1>
    <ExerciseView
      v-for="(exercise, exIdx) in training.exercises"
      :key="exIdx"
      :name="exercise.name"
    >
      <SetView
        v-for="(set, setIdx) in exercise.sets"
        :key="setIdx"
        :set="set"
        :exercise-index="exIdx"
        :set-index="setIdx"
        @updateReps="updateReps"
      />
    </ExerciseView>
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
        exercises: [
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
    updateReps(reps, setIdx, exIdx) {
      const maxReps = this.training.exercises[exIdx].maxReps;
      if (reps > maxReps) {
        this.training.exercises[exIdx].sets[setIdx].reps = 0;
      } else {
        this.training.exercises[exIdx].sets[setIdx].reps = reps;
      }
    }
  }
};
</script>

<style></style>
