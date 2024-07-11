<template>
  <button @click="$emit('get-pokemon')" :disabled="props.disabledButton">
    <span class="material-symbols-outlined">
      {{ props.icon }}
    </span>
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PokemonButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    disabledButton: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {


    return { props };
  },
});
</script>

<style>
button {
  font-size: 1.5rem;
  height: 30px;
  width: 100px;
  padding: 2px;
  border: none;
  border-radius: 4px;
  color: var(--bg-color);
  background-color: red;
}

button:disabled {
  font-size: 1.5rem;
  height: 30px;
  width: 100px;
  padding: 2px;
  border: none;
  border-radius: 4px;
  color: var(--font-color);
  background-color: var(--link-color);
}
</style>