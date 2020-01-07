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

const plan = new TrainingPlan();

export default {
    name: "ProgramView",
    components: { TrainingView },
    created() {
        if (plan.getPlan().trainings.length === 0) {
            plan.addToPlan({
                name: "Training A",
                order: 0,
                exersises: [
                    {
                        name: "Bench",
                        maxReps: 5,
                        weight: 10,
                        weightProgression: 1.25,
                        sets: [{ reps: 0 }]
                    }
                ]
            });
            plan.addToPlan({
                name: "Training B",
                order: 1,
                exersises: [
                    {
                        name: "Squat",
                        maxReps: 5,
                        weight: 10,
                        weightProgression: 1.25,
                        sets: [{ reps: 0 }]
                    }
                ]
            });
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
