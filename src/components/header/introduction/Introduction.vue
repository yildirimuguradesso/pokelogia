<template>
    <div 
        :class="classPrefix + '-introduction' + (themeStore.isThemeDark ? ' lighter dark-shadow' : ' light light-shadow') + ' city-transition' + (tuneStore.isPlaying ? '-playing' : '-paused')"
    >
        <img :class="classPrefix + '-logo'" :src="themeImg"/>
        <div :class="classPrefix + '-group'">
            <h1>{{ headerTitle }}</h1>
            <span v-for="text in headerTexts">
                {{ text.title }}
            </span>
        </div>
    </div>

</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useThemeStore } from '../../../stores/themeToggler';
import { useTuneStore } from '../../../stores/tuneToggler';

const themeStore = useThemeStore();
const tuneStore = useTuneStore();
const classPrefix = ref("app-header");
const headerTitle = "Welcome, Pokémon trainers!";
const headerTexts = [
    { title: "You may search for your favourites pokémons of every generations." },
    { title: "You can study their evolutions, abilities, movesets and more!" },
    { title: "Simply start using by typing your pokémon's name below!" },
    { title: "Happy training..." },
];

let themeImg
let tuneStatus

watchEffect(() => {
    themeImg = themeStore.isThemeDark ? "src/assets/img/blue-version.png" : "src/assets/img/red-version.png";
    tuneStatus = tuneStore.isPlaying ? "-playing" : "-paused";
})
</script>

<style lang="sass">
@import '../../../assets/scss/header/introduction/introduction.style.css'
</style>