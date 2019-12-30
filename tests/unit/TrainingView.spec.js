import { shallowMount } from "@vue/test-utils";
import TrainingView from "../../src/views/TrainingView";
import ExerciseView from "../../src/views/ExerciseView.vue";

describe("TrainingView", () => {
    // prepare
    const wrapper = shallowMount(TrainingView);
    wrapper.setData({
        training: {
            name: "Training A",
            exes: [
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

    it("updates reps in exerises", () => {
        // assign
        const exeriseView = wrapper.find(ExerciseView);

        // action
        exeriseView.trigger("updateEx", [[0, 0, 1]]);

        // assert
        expect(wrapper.vm.training.exes[0].sets[0].reps).toBe(1);
    });
});
