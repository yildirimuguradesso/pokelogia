<template>
    <header>
        <NavigationVue/>
        <IntroductionVue/>
    </header>
</template>

<script setup>
import NavigationVue from './nav/Navigation.vue'
import IntroductionVue from './introduction/Introduction.vue';
</script>

<style lang="sass">
@import '../../assets/scss/header/header.style.css'
</style>