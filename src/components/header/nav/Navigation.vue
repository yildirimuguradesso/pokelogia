<template>
    <nav>
        <RouterLink to="/" :class="classPrefix + '-logo'"/>
        <div :class="classPrefix + '-toggler-group'">
            <TuneTogglerVue :class-prefix="classPrefix"/>
            <ThemeTogglerVue :class-prefix="classPrefix"/>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import TuneTogglerVue from './tune-toggler/TuneToggler.vue';
import ThemeTogglerVue from './theme-toggler/ThemeToggler.vue';
const classPrefix = ref("app-nav")

</script>

<style lang="sass">
@import '../../../assets/scss/header/nav/nav.style.css'
</style>