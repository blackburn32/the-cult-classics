<template>
    <div class="hero bg-base-200">
        <div class="hero-content text-center">
            <div class="flex flex-col">
                <h1 class="text-8xl font-bold">The Cult Classics</h1>
                <p class="py-6">A psychedelic rock experiment</p>
                <div
                    v-element-visibility="onVisibilityChange"
                    class="flex flex-col py-6 md:flex-row md:space-x-8 space-y-4 md:space-y-0 justify-center items-center"
                >
                    <NuxtImg
                        ref="image1"
                        class="w-[400px] h-[360px] transition-all opacity-0 motion-safe:translate-x-[-300px] duration-500 rounded-xl shadow-xl hover:scale-105"
                        height="400"
                        src="/buildingMan.avif"
                        width="360"
                    />
                    <NuxtImg
                        ref="image2"
                        class="w-[400px] h-[360px] transition-all opacity-0 motion-safe:translate-x-[-450px] duration-500 rounded-xl shadow-xl hover:scale-105"
                        height="400"
                        src="/closeStage.avif"
                        width="360"
                    />
                    <NuxtImg
                        ref="image3"
                        class="w-[400px] h-[360px] transition-all opacity-0 motion-safe:translate-x-[-575px] duration-500 rounded-xl shadow-xl hover:scale-105"
                        height="400"
                        src="/colorCanyon.avif"
                        width="360"
                    />
                </div>
                <p class="md:mt-64 text-4xl">Meet the band</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref, Ref} from '@vue/reactivity';
import {vElementVisibility} from '@vueuse/components';

const image1: Ref<HTMLImageElement | null> = ref(null);
const image2: Ref<HTMLImageElement | null> = ref(null);
const image3: Ref<HTMLImageElement | null> = ref(null);
const images = [image1, image2, image3];

function onVisibilityChange(isVisible: boolean) {
    if(isVisible){
        images.forEach((image, index) => {
            const imageOffset = index == 0 ? 300 : index == 1 ? 450 : 575;
            if(image.value){
                image.value.$el.classList.remove('opacity-0');
                image.value.$el.classList.remove(`motion-safe:translate-x-[-${imageOffset}px]`);
            }
        });
    } else {
        images.forEach((image, index) => {
            const imageOffset = index == 0 ? 300 : index == 1 ? 450 : 575;
            if(image.value){
                image.value.$el.classList.add('opacity-0');
                image.value.$el.classList.add(`motion-safe:translate-x-[-${imageOffset}px]`);
            }
        });
    }
}
</script>
