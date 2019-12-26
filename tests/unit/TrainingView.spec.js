import { shallowMount } from "@vue/test-utils";
import TrainingView from "../../src/views/TrainingView";

describe("TrainingView", () => {
    // prepare
    const wrapper = shallowMount(TrainingView, {
        data() {
            return {
                training: {
                    name: "Training A"
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
});
