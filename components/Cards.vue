<template>
    <div class="flex flex-col w-full justify-center items-center space-y-4 py-8 px-4">
        <Card
            ref="alec"
            class="md:mr-[400px] transition-all opacity-0 motion-safe:translate-x-[-300px] duration-300"
            image="/putTheTeamOnMyBack.avif"
            instrument="Vocals, Guitar"
            name="Alec Bang"
        />
        <Card
            ref="dirk"
            class="md:ml-[400px] transition-all opacity-0 motion-safe:translate-x-[-300px] duration-300"
            image="/dirk.avif"
            instrument="Guitar"
            instagram="https://www.instagram.com/dirkjeffreylamb/"
            instagram-handle="@dirkjeffreylamb"
            name="Dirk Lamb"
        />
        <Card
            ref="jake"
            class="md:mr-[400px] transition-all opacity-0 motion-safe:translate-x-[-300px] duration-300"
            image="/jake.png"
            instrument="Bass, Vocals"
            name="Jake Barrett"
        />
        <Card
            ref="trevor"
            class="md:ml-[400px] transition-all opacity-0 motion-safe:translate-x-[-300px] duration-300"
            image="/trevorPainting.avif"
            instrument="Saxophone"
            name="Trevor Dahl"
        />
        <Card
            ref="alex"
            class="md:mr-[400px] transition-all opacity-0 motion-safe:translate-x-[-300px] duration-300"
            image="/onStage.avif"
            instrument="Drums"
            name="Alex Blackburn"
        />
    </div>
</template>
<script lang="ts" setup>
import Card from './Card.vue';
import {ref, Ref} from '@vue/reactivity';
import {useElementVisibility} from '@vueuse/core';
import {watch} from '@vue/runtime-core';

const alec: Ref<HTMLImageElement | null> = ref(null);
const dirk: Ref<HTMLImageElement | null> = ref(null);
const jake: Ref<HTMLImageElement | null> = ref(null);
const trevor: Ref<HTMLImageElement | null> = ref(null);
const alex: Ref<HTMLImageElement | null> = ref(null);
const cards = [alec, dirk, jake, trevor, alex];
const visibilities = cards.map((card, index) => {
    return useElementVisibility(card);
});
visibilities.forEach((visibility, index) => watch(visibility, (isVisible) => {
    const card = cards[index];
    if(card.value) handleVisibilityChange(card.value.$el, index, isVisible);
}, {immediate: true}));

function handleVisibilityChange(card: HTMLImageElement, index: number, isVisible: boolean) {
    if(isVisible){
        card.classList.remove('opacity-0');
        card.classList.remove('motion-safe:translate-x-[-300px]');
    } else {
        card.classList.add('opacity-0');
        card.classList.add('motion-safe:translate-x-[-300px]');
    }
}
</script>