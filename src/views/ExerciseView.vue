<template>
    <div class="exersise-container">
        <h3 class="exercise-name">{{ ex.name }}</h3>
        <div class="buttons-container">
            <SetView
                v-for="(set, idx) in ex.sets"
                :set="set"
                :max-reps="ex.maxReps"
                :key="idx"
                :set-idx="idx"
                @updateReps="updateEx"
            />
        </div>
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

<style>
.exersise-container {
    background-color: #f1efec;
    padding: 0.1rem 0;
    margin-bottom: 1rem;
}
.buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}
</style>
