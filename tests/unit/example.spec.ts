import { shallowMount } from '@vue/test-utils'
import PokemonCard from '@/components/PokemonCard.vue'
describe('PokemonCard.vue', () => {
  it('passou no teste', () => {
    const wrapper = shallowMount(PokemonCard)
    expect(wrapper.text())
  })
})
