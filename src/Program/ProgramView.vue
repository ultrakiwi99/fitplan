<template>
    <div>
        <button class="start-button" v-if="training === null" @click="next">
            Start
        </button>
        <div v-else>
            <TrainingView :training="training" />
            <button class="save-button" @click="save">Finish</button>
        </div>
    </div>
</template>

<script>
import TrainingView from "../views/TrainingView";
import TrainingPlan from "../Training/TrainingPlan";
import { trainingA, trainingB } from "../Program/Default/DefaultPlan";

const plan = new TrainingPlan();

export default {
    name: "ProgramView",
    components: { TrainingView },
    created() {
        if (plan.getPlan().trainings.length === 0) {
            plan.addToPlan(trainingA);
            plan.addToPlan(trainingB);
        }
    },
    data() {
        return {
            training: null
        };
    },
    methods: {
        next() {
            this.training = plan.nextTraining();
        },
        save() {
            plan.saveTraining(this.training);
            this.training = null;
        }
    }
};
</script>

<style></style>
