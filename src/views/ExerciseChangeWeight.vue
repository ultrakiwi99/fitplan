<template>
    <div class="change-weight">
        <div class="controls">
            <button class="less-weight" @click="decrease">-</button>
            <span class="weight">{{ modifiedWeight }}</span>
            <button class="more-weight" @click="increase">+</button>
        </div>
        <div class="save">
            <button
                class="save-weight"
                @click="$emit('updateWeight', modifiedWeight)"
            >
                Ok
            </button>
        </div>
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

<style>
.change-weight {
    background-color: #f5dec3;
    margin-bottom: 1rem;
}
.change-weight button {
    width: 2rem;
    height: 2rem;
    border: 0;
    background-color: brown;
    color: whitesmoke;
    border-radius: 0.4rem;
    margin: 1rem;
}
.change-weight .save-weight {
    background-color: brown;
    margin-top: 0;
}
.weight {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
