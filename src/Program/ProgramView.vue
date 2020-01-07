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
    created() {
        if (plan.getPlan().trainings.length === 0) {
            plan.addToPlan({
                name: "Training A",
                order: 0,
                exersises: [
                    {
                        name: "exersise 1",
                        maxReps: 5,
                        weight: 10,
                        weightProgression: 1.25,
                        sets: [{ reps: 0 }]
                    }
                ]
            });
            plan.addToPlan({
                name: "Training B",
                order: 0,
                exersises: [
                    {
                        name: "exersise 1",
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
        }
    }
};
</script>

<style></style>
