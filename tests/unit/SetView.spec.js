import { shallowMount } from "@vue/test-utils";
import SetView from "../../src/views/SetView";

describe("SetView", () => {
    // assign
    const wrapper = shallowMount(SetView);

    // assert
    it("renders", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
