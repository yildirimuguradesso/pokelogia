<template>
    <section :class="classPrefix + '-container' + (themeStore.isThemeDark ? ' dark-section' : ' light-section')">
        <div :class="classPrefix + '-group' + (themeStore.isThemeDark ? ' dark-section dark-shadow' : ' light-section light-shadow') ">
            <form>
                <input :class="themeStore.isThemeDark ? 'dark-section' : 'light-section'" type="search" placeholder="Search your pokémon..."
                :value="userInput" @input="onUserInput"/>
            </form>
            <div :class="classPrefix + '-result-area'">
                <ul :class="classPrefix + '-result-area-results'" v-if="data">
                    <li v-for="(pokemon, index) in data.results" :class="themeStore.isThemeDark ? 'dark-hover' : 'light-hover'">
                        <RouterLink :to="'/detail/' + (index + 1)">
                            {{ pokemon.name }}
                        </RouterLink>
                    </li>
                </ul>
                <span v-else>Loading...</span>
            </div>
        </div>
        <div :class="classPrefix + '-squad'"/>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../../stores/themeToggler';
import { useFetch } from '../../helper/fetch';

const classPrefix = ref("search-area");
const themeStore = useThemeStore();
const userInput = ref(null)
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=9999"
const { data, error } = useFetch(baseUrl)

const onUserInput = () => {

}

</script>

<style lang="sass">
@import '../../assets/scss/search/search.style.sass'
</style>