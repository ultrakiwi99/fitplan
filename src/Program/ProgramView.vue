<template>
    <div>
        <button class="start-button" v-if="training === null" @click="next">
            Start
        </button>
        <TrainingView v-else :training="training" />
    </div>
</template>

<script>
import TrainingView from "../views/TrainingView";
import TrainingPlan from "../Training/TrainingPlan";

const plan = new TrainingPlan();

export default {
    name: "ProgramView",
    components: { TrainingView },
    data() {
        return {
            training: null
        };
    },
    methods: {
        next() {
            this.training = plan.nextTraining();
        }
    }
};
</script>

<style></style>
