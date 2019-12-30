import { shallowMount } from "@vue/test-utils";
import SetView from "../../src/views/SetView";

describe("SetView", () => {
    // assign
    const wrapper = shallowMount(SetView, {
        propsData: {
            set: {
                reps: 0
            },
            maxReps: 2,
            setIdx: 0
        }
    });

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("shows number of reps on button", () => {
        expect(wrapper.find(".set-button").text()).toBe("0");
    });

    it("sends repsUpdate event", () => {
        // assign
        const button = wrapper.find(".set-button");

        // action
        button.trigger("click");

        // assert
        expect(wrapper.emitted()["updateReps"][0][0]).toBe(0);
        expect(wrapper.emitted()["updateReps"][0][1]).toBe(1);
    });
});

describe("SetView with max reps", () => {
    const wrapper = shallowMount(SetView, {
        propsData: {
            set: {
                reps: 2
            },
            maxReps: 2,
            setIdx: 0
        }
    });
    it("sends zero if reps are more than maxReps", () => {
        // assign
        const button = wrapper.find(".set-button");

        // action
        button.trigger("click");

        // assert
        expect(wrapper.emitted()["updateReps"][0][0]).toBe(0);
        expect(wrapper.emitted()["updateReps"][0][1]).toBe(0);
    });
});
