<template>
  <div class="search">
    <div class="input-icons">
      <i class="material-symbols-outlined icon">search</i>
      <input class="input-field" type="text" v-model="inputValue" placeholder="Pesquisar Pokémon" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import useSearchStore from "../store";

export default defineComponent({
  name: "SearchPokemon",

  setup() {
    const store = useSearchStore()

    const inputValue = computed({
      get() {
        return store.getSearch
      },
      set(value: string) {
        store.inputValue(value)
      }
    })

    return { store, inputValue }
  }
})
</script>

<style scoped>
.search {
  margin: 1% 0;
  width: max-content;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 10px;
  color: var(--button-color);
  min-width: 50px;
  text-align: center;
}

.input-field {
  border: 0.1px var(--link-color);
  border-radius: 20px;
  width: 100%;
  margin: 0 0 0 5px;
  padding: 10px;
  text-align: center;
  background-color: var(--card-color);
  box-shadow: -3px 5px 9px 0px rgba(50, 50, 50, 0.7);
}
</style>