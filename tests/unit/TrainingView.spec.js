import { shallowMount } from "@vue/test-utils";
import TrainingView from "../../src/views/TrainingView";

describe("TrainingView", () => {
    // prepare
    const wrapper = shallowMount(TrainingView);

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
