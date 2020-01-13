<template>
    <div>
        <div class="start-container" v-if="training === null">
            <button class="std-button start-button" @click="next">
                Начать
            </button>
        </div>
        <div v-else>
            <TrainingView :training="training" />
            <button class="std-button" @click="save">Закончить</button>
        </div>
    </div>
</template>

<script>
import TrainingView from "../views/TrainingView";
import TrainingPlan from "../Training/TrainingPlan";
import { trainingA } from "../Program/Default/DefaultPlan";

const plan = new TrainingPlan();

export default {
    name: "ProgramView",
    components: { TrainingView },
    created() {
        if (plan.getPlan().trainings.length === 0) {
            plan.addToPlan(trainingA);
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

<style>
.start-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.std-button {
    background-color: #2c3e50;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #2c3e50;
    border-radius: 0.2rem;
}
</style>
