<template>
    <div class="flex flex-col overflow-auto max-h-screen">
        <Hero/>
        <Cards/>
        <Spotify/>
        <UpcomingShows/>
        <Footer/>
    </div>
</template>
<script lang="ts" setup>
import Hero from './components/Hero.vue';
import Cards from './components/Cards.vue';
import Spotify from './components/Spotify.vue';
import UpcomingShows from './components/UpcomingShows.vue';
import Footer from './components/Footer.vue';</script>
