import { shallowMount } from "@vue/test-utils";
import ExerciseView from "../../src/views/ExerciseView.vue";

describe("ExerciseView", () => {
    // assign
    const wrapper = shallowMount(ExerciseView, {
        propsData: {
            name: "Test Exercise"
        }
    });

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("shows exercise name", () => {
        expect(wrapper.find(".exercise-name").text()).toBe("Test Exercise");
    });
});
