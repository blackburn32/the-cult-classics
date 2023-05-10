<template>
    <div class="flex flex-col bg-neutral w-full items-center justify-center p-8">
        <div class="text-4xl text-center">Upcoming Shows</div>
        <div class="flex flex-col md:flex-row md:space-x-8 space-y-4 justify-center items-center mt-16">
            <table class="bg-secondary rounded-xl table-auto shadow-xl h-min">
                <thead>
                <tr>
                    <th class="px-4 py-2 text-left text-2xl p-4">Date</th>
                    <th class="px-4 py-2 text-left text-2xl p-4">Location</th>
                </tr>
                </thead>
                <tr>
                    <td class="px-4 py-2 text-left text-xl">May 12</td>
                    <td class="px-4 py-2 text-left text-xl">
                        <NuxtLink
                            class="link"
                            external="external"
                            to="https://www.facebook.com/people/The-Odd-Star/100086430084448/"
                        >
                            The Odd Star, 509 W, 300 N, Salt Lake City, UT 84116
                        </NuxtLink>
                    </td>
                </tr>
            </table>
            <NuxtImg
                ref="image"
                v-element-visibility="onVisibilityChange"
                class="rounded-xl shadow-xl transition-all opacity-0 motion-safe:translate-x-[300px] duration-500"
                height="500"
                src="/10.avif"
                width="400"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref, Ref} from '@vue/reactivity';
import {vElementVisibility} from '@vueuse/components';

const image: Ref<HTMLImageElement | null> = ref(null);

function onVisibilityChange(isVisible: boolean) {
    if(isVisible){
        if(image.value){
            image.value.$el.classList.remove('opacity-0');
            image.value.$el.classList.remove('motion-safe:translate-x-[300px]');
        }
    } else {
        if(image.value){
            image.value.$el.classList.add('opacity-0');
            image.value.$el.classList.add('motion-safe:translate-x-[300px]');
        }
    }
}
</script>