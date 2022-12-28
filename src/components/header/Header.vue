<template>
    <header :class="themeStore.isThemeDark ? 'dark dark-shadow' : 'light light-shadow'">
        <NavigationVue/>
    </header>
</template>

<script setup>
import NavigationVue from './nav/Navigation.vue'
import { useThemeStore } from '../../stores/themeToggler';
const themeStore = useThemeStore()

</script>

<style lang="sass">
@import '../../assets/scss/header/header.style.css'
</style>