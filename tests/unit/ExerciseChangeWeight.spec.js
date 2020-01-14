import ExerciseChangeWeight from "../../src/views/ExerciseChangeWeight";
import { shallowMount } from "@vue/test-utils";

describe("ExerciseChangeWeight component", () => {
    const wrapper = shallowMount(ExerciseChangeWeight, {
        propsData: {
            weight: 10,
            progression: 2.5
        },
        data() {
            return {
                modifiedWeight: 0
            };
        }
    });

    it("Renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Makes copy of parent weigth.", () => {
        expect(wrapper.vm.$data.modifiedWeight).toBe(10);
    });

    it("Makes weight modifications.", () => {
        const more = wrapper.find(".more-weight");
        const less = wrapper.find(".less-weight");
        const current = wrapper.find(".weight");

        more.trigger("click");
        expect(current.text()).toBe("12.5");
        more.trigger("click");
        expect(current.text()).toBe("15");
        more.trigger("click");
        expect(current.text()).toBe("17.5");
        more.trigger("click");
        expect(current.text()).toBe("20");

        less.trigger("click");
        expect(current.text()).toBe("17.5");
        less.trigger("click");
        expect(current.text()).toBe("15");
        less.trigger("click");
        expect(current.text()).toBe("12.5");
        less.trigger("click");
        expect(current.text()).toBe("10");
        less.trigger("click");
        expect(current.text()).toBe("7.5");
        less.trigger("click");
        expect(current.text()).toBe("5");
        less.trigger("click");
        expect(current.text()).toBe("2.5");
        less.trigger("click");
        expect(current.text()).toBe("0");
        less.trigger("click");
        expect(current.text()).toBe("0");
    });
});
