import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia';
import {Howl, Howler} from 'howler';

export const useTuneStore = defineStore("tune", 
    () => {
        let isPlaying = ref(false)
        const audio = new Howl ({
            src: ['src/assets/audio/opening-theme.mp3'],
            loop: true,
            volume: 0.3,
        })

        function toggleTune() {
            isPlaying.value = !isPlaying.value
        }

        watchEffect(() => {
            isPlaying.value ? audio.play() : audio.pause()
        })


        return { isPlaying, toggleTune }
    }
)