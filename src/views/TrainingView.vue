<template>
    <div>
        <h1 class="training-name">{{ training.name }}</h1>
        <ExerciseView
            v-for="(exercise, idx) in training.exercises"
            :key="idx"
            :name="exercise.name"
        >
            <SetView v-for="(set, idx) in exercise.sets" :key="idx" />
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
                        maxSets: 5,
                        maxReps: 5,
                        sets: []
                    },
                    {
                        name: "test exercise 1",
                        maxSets: 5,
                        maxReps: 5,
                        sets: []
                    }
                ]
            }
        };
    }
};
</script>

<style></style>
