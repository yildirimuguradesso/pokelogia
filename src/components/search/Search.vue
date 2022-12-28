<template>
    <section :class="classPrefix + '-container' + (themeStore.isThemeDark ? ' dark-section' : ' light-section')">
        <div :class="classPrefix + '-group' + (themeStore.isThemeDark ? ' dark-section dark-shadow' : ' light-section light-shadow') ">
            <form>
                <input 
                    :class="themeStore.isThemeDark ? 'dark-section dark-color' : 'light-section light-color'" 
                    type="search" 
                    placeholder="Search your pokémon..."
                    v-model="userInput"
                />
            </form>
            <div :class="classPrefix + '-result-area' + (themeStore.isThemeDark ? ' dark-shadow' : ' light-shadow')">
                <ul 
                    :class="classPrefix + '-result-area-results'"
                    v-if="data && filteredPokemons == undefined"
                >
                    <RouterLink 
                        :to="'/detail/' + (pokemon.name)" 
                        v-for="pokemon in data.results"
                    >
                        <li 
                            :to="'/detail/' + (pokemon.name)" 
                            :class="themeStore.isThemeDark ? 'dark-hover' : 'light-hover'">
                                {{ pokemon.name }}
                        </li>
                    </RouterLink>
                </ul>
                <ul 
                    :class="classPrefix + '-result-area-results'" v-else-if="filteredPokemons"
                >
                    <RouterLink 
                        :to="'/detail/' + (pokemon.name)" 
                        v-for="pokemon in filteredPokemons"
                    >
                        <li 
                            :class="themeStore.isThemeDark ? 'dark-hover' : 'light-hover'">
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
import { ref, reactive, watch } from 'vue'
import { useThemeStore } from '../../stores/themeToggler';
import { useFetch } from '../../helper/fetch';

const classPrefix = ref("search-area");
const themeStore = useThemeStore();
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=9999"
const { data, error } = useFetch(baseUrl)
let userInput = ref("")
let filteredPokemons = reactive()

watch(userInput, (newInput, oldInput) => {
    filteredPokemons = data.value.results.filter(pokemon => {
        return pokemon.name.toLocaleLowerCase().includes(newInput)
    })
})

</script>

<style lang="sass">
@import '../../assets/scss/search/search.style.sass'
</style>