<template>
    <button class="set-button" @click="updateReps">{{ set.reps }}</button>
</template>

<script>
export default {
    name: "SetView",
    props: {
        maxReps: Number,
        set: Object,
        setIdx: Number
    },
    methods: {
        updateReps() {
            const newRepCount = this.set.reps + 1;
            if (newRepCount > this.maxReps) {
                this.$emit("updateReps", this.setIdx, 0);
            } else {
                this.$emit("updateReps", this.setIdx, this.set.reps + 1);
            }
        }
    }
};
</script>

<style>
.set-button {
    background-color: brown;
    color: white;
    border: 1px solid brown;
    font-size: 1rem;
    line-height: 1.1rem;
    padding: 0.3rem 0.5rem;
    border-radius: 1rem;
    margin: 0.2rem;
}
</style>
