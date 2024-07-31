import { createPinia, setActivePinia } from "pinia";
import SearchPokemon from "../src/components/SearchPokemon.vue";
import { shallowMount } from "@vue/test-utils";

describe("SearchPokemon", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })


  it("It with a input value should given an emit", async () => {
    const wrapper = shallowMount(SearchPokemon)

    const input = wrapper.find('input')

    await input.trigger('change')

    expect(wrapper.vm.$emit('update:search'))
  })
});