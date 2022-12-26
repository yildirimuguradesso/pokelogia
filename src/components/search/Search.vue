<template>
    <section :class="classPrefix + '-container' + (themeStore.isThemeDark ? ' dark-section' : ' light-section')">
        <div :class="classPrefix + '-group' + (themeStore.isThemeDark ? ' dark-section dark-shadow' : ' light-section light-shadow') ">
            <form>
                <input :class="themeStore.isThemeDark ? 'dark-section' : 'light-section'" type="search" placeholder="Search your pokémon..." v-model="userInput"/>
                <span>{{ userInput }}</span>
            </form>
            <div :class="classPrefix + '-result-area'">
                <ul :class="classPrefix + '-result-area-results'" v-if="data">
                    <RouterLink :to="'/detail/' + (index + 1)" v-for="(pokemon, index) in data.results">
                        <li :to="'/detail/' + (index + 1)" :class="themeStore.isThemeDark ? 'dark-hover' : 'light-hover'">
                            {{ pokemon.name }}
                        </li>
                    </RouterLink>
                </ul>
                <span v-else>Loading...</span>
            </div>
        </div>
        <div :class="classPrefix + '-squad'"/>
    </section>
</template>

<script setup>
import { ref, watchEffect, reactive } from 'vue'
import { useThemeStore } from '../../stores/themeToggler';
import { useFetch } from '../../helper/fetch';

const classPrefix = ref("search-area");
const themeStore = useThemeStore();
let userInput = ref(null)
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=9999"
const { data, error } = useFetch(baseUrl)
let newFilteredPokemons


watchEffect(() => {
    if(data.results) {
        newFilteredPokemons = data.results.filter((pokemon) => {
            return pokemon.name.toLocaleLowerCase().includes(userInput.value);
        })

    }
})

</script>

<style lang="sass">
@import '../../assets/scss/search/search.style.sass'
</style>