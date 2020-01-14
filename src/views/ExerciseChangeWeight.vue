<template>
    <div class="change-weight">
        <button class="less-weight" @click="decrease">-</button>
        <span class="weight">{{ modifiedWeight }}</span>
        <button class="more-weight" @click="increase">+</button>
    </div>
</template>

<script>
export default {
    name: "ExerciseChangeWeight",
    props: {
        weight: Number,
        progression: Number
    },
    created() {
        this.modifiedWeight = this.weight;
    },
    data() {
        return {
            modifiedWeight: 0
        };
    },
    methods: {
        increase() {
            this.modifiedWeight = this.modifiedWeight + this.progression;
        },
        decrease() {
            const result = this.modifiedWeight - this.progression;
            this.modifiedWeight = result > 0 ? result : 0;
        }
    }
};
</script>

<style></style>
