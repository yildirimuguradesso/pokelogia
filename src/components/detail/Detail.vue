<template>
    <section :class="classPrefix + (themeStore.isThemeDark ? ' dark-section' : ' light-section')" v-if="data">
        <div :class="classPrefix + '-title-group' + (themeStore.isThemeDark ? ' dark dark-shadow' : ' light light-shadow')">
            <div :class="classPrefix + '-title'">
                <h2>{{ data.forms[0].name}}</h2>
                <span>{{ ' #' + data.id }}</span>
            </div>
        </div>

        <div :class="classPrefix + '-container' + (themeStore.isThemeDark ? ' dark-shadow' : ' light-shadow')">
            <div :class="classPrefix + '-top-wrapper'">
                <div :class="classPrefix + '-row'">
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
                <div :class="classPrefix + '-image-container' + (themeStore.isThemeDark ? ' dark-shadow' : ' light-shadow')">
                    <img :class="classPrefix + '-image'" :src="pickedImage.image || data.sprites.front_default"/>
                </div>
            </div>
            <div :class="classPrefix + '-sprites-wrapper'">
                <div>
                    <img 
                        :src="data.sprites.front_default" 
                        @click="updateImage(data.sprites.front_default)"
                    />
                    <img 
                        :src="data.sprites.back_default"
                        @click="updateImage(data.sprites.back_default)"
                    />
                    <img 
                        :src="data.sprites.front_shiny"
                        @click="updateImage(data.sprites.front_shiny)"
                    />
                    <img 
                        :src="data.sprites.back_shiny"
                        @click="updateImage(data.sprites.back_shiny)"
                    />
                </div>
            </div>
            <div :class="classPrefix + '-moves-wrapper'">
                <ul>
                    <li v-for="(move,index) in data.moves" :class="index %2 === 0 ? (themeStore.isThemeDark ? 'dark' : 'light') : (themeStore.isThemeDark ? 'lighter' : 'light-section')">
                        {{ move.move.name }}
                    </li>
                </ul>
            </div>
        </div>
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
let pickedImage = reactive({image: undefined})
const updateImage = (image) => {
    pickedImage.image = image
}
</script>

<style lang="sass">
@import '../../assets/scss/detail/detail.style'
</style>