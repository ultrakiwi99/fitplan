import { shallowMount } from "@vue/test-utils";
import SetView from "../../src/views/SetView";

describe("SetView", () => {
    // assign
    const wrapper = shallowMount(SetView, {
        propsData: {
            exerciseIndex: 0,
            setIndex: 0,
            set: {
                reps: 0
            },
            maxReps: 3
        }
    });

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("sends repsUpdate event", () => {
        const button = wrapper.find(".set-button");
        expect(button.text()).toBe("0");
        button.trigger("click");
        expect(wrapper.emitted().updateReps[0][0]).toBe(1);
        expect(wrapper.emitted().updateReps[0][1]).toBe(0);
        expect(wrapper.emitted().updateReps[0][2]).toBe(0);
    });
});
