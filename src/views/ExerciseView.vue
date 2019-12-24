<template>
    <div>
        {{ name }}
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ExerciseView",
    props: {
        name: {
            type: String,
            required: true
        }
    }
};
</script>

<style></style>
