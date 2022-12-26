import { ref } from 'vue'
import { defineStore } from 'pinia';

export const useThemeStore = defineStore("theme", 
    () => {
        let isThemeDark = ref(true)
        function toggleTheme() {
            isThemeDark.value = !isThemeDark.value
        }

        return { isThemeDark, toggleTheme }
    }
)