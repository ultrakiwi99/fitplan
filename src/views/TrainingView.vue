<template>
    <div>
        <h1 class="training-name">{{ training.name }}</h1>
        <ExerciseView
            v-for="(ex, idx) in training.exersises"
            :key="idx"
            :ex="ex"
            :ex-idx="idx"
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
    props: {
        training: Object
    },
    methods: {
        updateTraining(exIdx, setIdx, reps) {
            const maxReps = this.training.exersises[exIdx].maxReps;
            if (reps > maxReps) {
                this.training.exersises[exIdx].sets[setIdx].reps = 0;
            } else {
                this.training.exersises[exIdx].sets[setIdx].reps = reps;
            }
        }
    }
};
</script>

<style></style>
