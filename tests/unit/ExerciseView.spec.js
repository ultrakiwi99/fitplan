import { shallowMount } from "@vue/test-utils";
import ExerciseView from "../../src/views/ExerciseView.vue";
import SetView from "../../src/views/SetView";

describe("ExerciseView", () => {
    // assign
    const wrapper = shallowMount(ExerciseView, {
        propsData: {
            ex: {
                name: "Test Exercise",
                maxReps: 2,
                sets: [
                    {
                        reps: 0
                    },
                    {
                        reps: 0
                    }
                ]
            },
            idx: 0
        }
    });

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("shows exercise name", () => {
        expect(wrapper.find(".exercise-name").text()).toBe("Test Exercise");
    });
    it("shows reps", () => {
        expect(wrapper.findAll(SetView).length).toBe(2);
    });
});
