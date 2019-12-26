<template>
    <div>
        <h2 class="exercise-name">{{ name }}</h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ExerciseView",
    props: {
        name: {
            type: String
        }
    }
};
</script>

<style></style>
