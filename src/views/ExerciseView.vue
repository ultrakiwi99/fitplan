<template>
    <div class="exersise-container">
        <div class="exersise-info">
            <h3 class="exersise-name">{{ ex.name }}</h3>
            <div class="exersise-details">
                <span
                    class="weight-set"
                    @click="weightSetMode = !weightSetMode"
                >
                    &#9881;&nbsp;
                </span>
                <strong>{{ ex.weight }} кг</strong> x {{ ex.maxReps }}
            </div>
        </div>
        <ExerciseChangeWeight v-if="weightSetMode" />
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
import ExerciseChangeWeight from "./ExerciseChangeWeight";

export default {
    name: "ExerciseView",
    components: { SetView, ExerciseChangeWeight },
    props: {
        ex: {
            type: Object
        },
        exIdx: Number
    },
    data() {
        return {
            weightSetMode: false
        };
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
    padding: 0.1rem 0.1rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    max-width: 375px;
}
.exersise-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
}
.exersise-name {
    text-align: left;
}
.exersise-details {
    min-width: 6rem;
}
.buttons-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
}
.weight-set {
    cursor: pointer;
}
</style>
