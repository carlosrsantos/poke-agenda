import PokemonButton from "../src/components/PokemonButton.vue";
import { mount } from "@vue/test-utils";

describe("PokemonButton", () => {
  it("click button", () => {
    const wrapper = mount(PokemonButton, { props: { icon: "'arrow_back'" } });

    expect(wrapper.trigger('click'));
  })
});