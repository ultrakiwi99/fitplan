import { shallowMount } from "@vue/test-utils";
import ExerciseView from "../../src/views/ExerciseView.vue";

describe("ExerciseView", () => {
    // assign
    const wrapper = shallowMount(ExerciseView);

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
