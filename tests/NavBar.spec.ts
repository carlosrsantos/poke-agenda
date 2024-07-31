import NavBar from "../src/components/NavBar.vue";
import { shallowMount } from "@vue/test-utils";

describe("NavBar", () => {
  it("renders a header of page", async () => {
    const wrapper = shallowMount(NavBar);

    expect(wrapper.isVisible()).toBe(true);
  })
});