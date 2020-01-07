import { shallowMount } from "@vue/test-utils";
import ProgramView from "../../src/Program/ProgramView";
import TrainingView from "../../src/views/TrainingView.vue";

describe("Training Program", () => {
    const wrapper = shallowMount(ProgramView, {
        data() {
            return {
                training: null
            };
        }
    });

    it("Shows button to start training", () => {
        expect(wrapper.find(".start-button").exists()).toBeTruthy();
    });

    it("Loads next training when button is pressed", () => {
        const startButton = wrapper.find(".start-button");

        startButton.trigger("click");
        expect(wrapper.find(TrainingView).exists()).toBeTruthy();
        expect(wrapper.find(".start-button").exists()).toBeFalsy();

        const programData = wrapper.vm.$data;
        expect(programData.training).toBeDefined();
    });
});
