import { shallowMount } from "@vue/test-utils";
import TrainingView from "../../src/views/TrainingView";
import ExerciseView from "../../src/views/ExerciseView.vue";

describe("TrainingView", () => {
    // prepare
    const wrapper = shallowMount(TrainingView, {
        propsData: {
            training: {
                name: "Training A",
                exersises: [
                    {
                        name: "exercise 1",
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
                    {
                        name: "exercise 2",
                        maxReps: 2,
                        sets: [
                            {
                                reps: 0
                            },
                            {
                                reps: 0
                            }
                        ]
                    }
                ]
            }
        }
    });

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("shows training name", () => {
        expect(wrapper.find(".training-name").text()).toBe("Training A");
    });

    it("shows exersises", () => {
        // assign
        const exeriseViews = wrapper.findAll(ExerciseView);

        // assert
        expect(exeriseViews.length).toBe(2);
    });
});
