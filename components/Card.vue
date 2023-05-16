<template>
    <div class="card card-side bg-accent shadow-xl max-w-md max-h-44 shadow-xl hover:scale-125">
        <figure>
            <NuxtImg :src="image" class="min-w-[190px] flex-grow-0"/>
        </figure>
        <div class="card-body shrink-0 w-[200px]">
            <h2 class="card-title">{{ name }}</h2>
            <p>{{ instrument }}</p>
            <NuxtLink v-if="instagramHandle" :to="instagramLink" external="external" class="link" target="_blank">{{instagramHandle}}</NuxtLink>
            <NuxtLink v-if="websiteLink" :to="websiteLink" external="external" class="link" target="_blank">{{websiteLabel}}</NuxtLink>
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
    websiteLabel: String,
    websiteLink: String,
});
</script>