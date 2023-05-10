<template>
    <div class="flex flex-col bg-secondary p-16 items-center">
        <div class="text-4xl text-center">Our Music</div>
        <iframe
            ref="player"
            v-element-visibility="onVisibilityChange"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowfullscreen=""
            class="shadow-xl rounded-xl mt-16 max-w-md margin-auto opacity-0 motion-safe:translate-y-[200px] duration-300"
            frameBorder="0"
            height="352"
            loading="lazy"
            src="https://open.spotify.com/embed/track/5wJwNXVz2egidVgmleBPJo?utm_source=generator&theme=0"
            style="border-radius:16px"
            width="100%"
        />
    </div>
</template>
<script lang="ts" setup>
import {ref, Ref} from '@vue/reactivity';
import {useHead} from '#imports';
import {vElementVisibility} from '@vueuse/components';

const player: Ref<HTMLImageElement | null> = ref(null);

function onVisibilityChange(isVisible: boolean) {
    if(isVisible){
        if(player.value){
            player.value.classList.remove('opacity-0');
            player.value.classList.remove('motion-safe:translate-y-[200px]');
        }
    }
}

useHead({
    script: [
        {
            src: 'https://open.spotify.com/embed-podcast/iframe-api/v1',
            async: true,
            defer: true,
        },
    ],
});
</script>