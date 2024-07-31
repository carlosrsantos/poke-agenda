<template>
  <nav-bar v-model:search="search" />
  <main>
    <div class="card">
      <h3 class="titulo">{{ pokemon.name }}</h3>
      <img :src="pokemon.picture" alt="" class="sprite" />

      <h4 class="types">Types:</h4>
      <ul v-for="type in pokemon.types" :key="type.slot">
        <li class="types-name">
          {{ type.type.name }}
        </li>
      </ul>
      <div class="buttons">
        <pokemon-button :icon="'arrow_back'" @get-pokemon="previousPokemon" />
        <pokemon-button :icon="'arrow_forward'" @get-pokemon="nextPokemon" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { type Pokemon } from "../DTOs/Pokemon";
import { pokeApi } from "../service/api";
import PokemonButton from "./PokemonButton.vue";
import NavBar from "./NavBar.vue"
import useSearchStore from "../store";

export default defineComponent({
  components: {
    PokemonButton,
    NavBar
  },
  name: "PokemonCard",
  setup() {
    const pokemon = reactive<Pokemon>({
      id: 0,
      name: "",
      picture: "",
      types: [],
    });

    const store = useSearchStore()
    const search = ref("");

    const getPokemon = (id: string) => {
      pokeApi
        .get(id)
        .then((p) => {
          pokemon.id = p.data.id;
          pokemon.name = p.data.name;
          pokemon.picture = !p.data.sprites.other.dream_world.front_default
            ? p.data.sprites.front_default
            : p.data.sprites.other.dream_world.front_default;
          pokemon.types = p.data.types;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const searchPokemon = (search: string) => {
      getPokemon(search.toLowerCase());
    };

    const previousPokemon = () => {
      if (pokemon.id > 1) {
        pokemon.id--;
        getPokemon(pokemon.id.toString());
      } else if (pokemon.id < 1) {
        pokemon.id = 1010;
        getPokemon(pokemon.id.toString());
      }
    };
    const nextPokemon = () => {
      if (pokemon.id >= 1 && pokemon.id < 1009) {
        pokemon.id++;
        getPokemon(pokemon.id.toString());
      } else {
        pokemon.id = 1;
        getPokemon(pokemon.id.toString());
      }
    };

    watch(store.$state, () => {
      if (store.$state) searchPokemon(store.getSearch);
    });

    onBeforeMount(() => {
      pokemon.id = 1;
    });

    onMounted(() => {
      getPokemon(pokemon.id.toString());
    });


    return { pokemon, previousPokemon, nextPokemon, search };
  },
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 12px;
  width: 50%;
  height: 50%;
  background-color: var(--card-color);
  box-shadow: -3px 5px 9px 0px rgba(50, 50, 50, 0.7);
}

.buttons {
  width: 100%;
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .card {
    height: 60%;
  }

  .titulo {
    font-size: 24px;
  }

  .types {
    font-size: 20px;
  }

  .types-name {
    font-size: 16px;
  }

  .sprite {
    width: 10%;
    height: 35%;
    margin: 5%;
  }

  .buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
}

.sprite {
  width: 20%;
  height: 65%;
  margin: 5%;
}

.type {
  font-size: 1.8rem;
}

h3 {
  font-size: 3rem;
  text-align: center;
  margin: 20px;
}

h4 {
  font-size: 2rem;
}

ul {
  font-size: 1.75rem;
  list-style-type: none;
}
</style>
