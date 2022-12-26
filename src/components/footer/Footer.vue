<template>
    <footer :class="classPrefix + (themeStore.isThemeDark ? ' lighter' : ' light')">

    </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../../stores/themeToggler';
const themeStore = useThemeStore();
const classPrefix = ref("app-footer")
</script>

<style lang="sass">
@import '../../assets/scss/footer/footer.style.css'
</style>