<template>
    <footer class="footer items-center p-4 bg-neutral text-neutral-content">
        <div class="items-center grid-flow-col">
            <p>Copyright © 2023 - The Cult Classics</p>
        </div>
        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <NuxtLink class="hover:scale-125 transition-transform" to="https://www.instagram.com/the_cultclassics/" external="external" target="_blank">
                <Icon name="mdi:instagram" size="32" />
            </NuxtLink>
            <NuxtLink class="hover:scale-125 transition-transform" to="https://github.com/blackburn32/the-cult-classics" external="external" target="_blank">
                <Icon name="mdi:github-box" size="32" />
            </NuxtLink>
        </div>
    </footer>
</template>