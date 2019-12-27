import { shallowMount } from "@vue/test-utils";
import TrainingView from "../../src/views/TrainingView";

describe("TrainingView", () => {
    // prepare
    const wrapper = shallowMount(TrainingView, {
        data() {
            return {
                training: {
                    name: "Training A",
                    exercises: {
                        name: "exercise 1",
                        maxReps: 2,
                        sets: [
                            {
                                reps: 0
                            }
                        ]
                    }
                }
            };
        }
    });

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("shows training name", () => {
        expect(wrapper.find(".training-name").text()).toBe("Training A");
    });
    it("shows ExersiseView component", () => {
        // assert
        expect(wrapper.find({ name: "ExerciseView" }).exists()).toBe(true);
    });
});
