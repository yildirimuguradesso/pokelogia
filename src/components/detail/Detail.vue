<template>
    <section :class="classPrefix + (themeStore.isThemeDark ? ' dark-section' : ' light-section')" v-if="data">
        <div :class="classPrefix + '-title-group' + (themeStore.isThemeDark ? ' dark' : ' light')">
            <div :class="classPrefix + '-title'">
                <h2>{{ data.forms[0].name}}</h2>
                <span>{{ ' #' + data.id }}</span>
            </div>
        </div>

        <div :class="classPrefix + '-container'">
            <div :class="classPrefix + '-row' + (themeStore.isThemeDark ? ' dark-shadow' : ' light-shadow')">
                <div :class="classPrefix + '-types'">
                    <span v-for="element in data.types" :class="' element ' + element.type.name + '-bg'">
                        {{ element.type.name }}
                    </span>
                </div>
                <div v-for="stat in data.stats" :class="classPrefix + '-stats'">
                    <span>{{ stat.stat.name }}: </span>
                    <span>{{ stat.base_stat }}</span>
                </div>
            </div>
            <img :class="classPrefix + '-image'" :src="data.sprites.front_default"/>
        </div>
    </section>
</template>

<script setup>
import { useThemeStore } from '../../stores/themeToggler';
import { useDetailFetch } from '../../helper/fetch';
import { useRoute } from 'vue-router';
const classPrefix = "app-detail";
const themeStore = useThemeStore();
const route = useRoute()
const detailId = route.params.pokemon
const detailUrl = `https://pokeapi.co/api/v2/pokemon/${detailId}`
const { data, error } = useDetailFetch(detailUrl)

</script>

<style lang="sass">
@import '../../assets/scss/detail/detail.style'
</style>