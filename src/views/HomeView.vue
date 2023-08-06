<template>
  <div class="home"> 
    <PokemonCard />   
  </div>
</template>

<script lang="ts">
import PokemonCard from "@/components/PokemonCard.vue";
import { defineComponent } from "vue";


export default defineComponent({
  name: "HomeView",
  components: {
    PokemonCard   
  },
});
</script>
