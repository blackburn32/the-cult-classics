<template>
    <div class="card card-side bg-accent shadow-xl max-w-md max-h-36 shadow-xl hover:scale-125">
        <figure>
            <NuxtImg :src="image" class="min-w-[190px]"/>
        </figure>
        <div class="card-body shrink-0 w-[200px] h-[140px]">
            <h2 class="card-title">{{ name }}</h2>
            <p>{{ instrument }}</p>
            <NuxtLink :to="instagramLink" external="external" class="link" target="_blank">{{instagramHandle}}</NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {defineProps} from 'vue';

const props = defineProps({
    image: String,
    name: String,
    instrument: String,
    instagramLink: String,
    instagramHandle: String,
});
</script>