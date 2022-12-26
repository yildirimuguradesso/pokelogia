<template>
    <section :class="classPrefix">
        <span>{{ pokemonDetail }}</span>
    </section>
</template>

<script setup>
import { useThemeStore } from '../../stores/themeToggler';
import { useDetailFetch } from '../../helper/fetch';
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
const classPrefix = "app-detail";
const themeStore = useThemeStore();
const route = useRoute()
const detailId = route.params.pokemon
const detailUrl = `https://pokeapi.co/api/v2/pokemon/${detailId}`
const { data, error } = useDetailFetch(detailUrl)
const pokemonDetail = reactive(data)

</script>

<style lang="sass">
@import '../../assets/scss/detail/detail.style'
</style>