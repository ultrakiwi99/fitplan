import { shallowMount } from "@vue/test-utils";
import ExerciseView from "../../src/views/ExerciseView";
import SetView from "../../src/views/SetView";
import ExerciseChangeWeight from "../../src/views/ExerciseChangeWeight";

describe("ExerciseView", () => {
    // assign
    const wrapper = shallowMount(ExerciseView, {
        data() {
            return {
                weightSetMode: false
            };
        },
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
    it("Renders correctly.", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Shows exercise name.", () => {
        expect(wrapper.find(".exersise-name").text()).toBe("Test Exercise");
    });

    it("Shows reps count.", () => {
        expect(wrapper.findAll(SetView).length).toBe(2);
    });

    it("Shows weight modification component, when gears icon clicked.", () => {
        const gears = wrapper.find(".weight-set");

        expect(gears.exists()).toBeTruthy();

        gears.trigger("click");

        expect(wrapper.vm.$data.weightSetMode).toBeTruthy();
        expect(wrapper.find(ExerciseChangeWeight).exists()).toBeTruthy();
    });
});
