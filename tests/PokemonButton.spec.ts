import PokemonButton from "../src/components/PokemonButton.vue";
import { shallowMount } from "@vue/test-utils";

describe("PokemonButton", () => {
  it("click button should given an emit", async () => {
    const wrapper = shallowMount(PokemonButton, { props: { icon: "'arrow_back'" } });

    const btn = wrapper.find('button');

    await btn.trigger('click');

    expect(wrapper.vm.$emit('get-pokemon'));
  })
});