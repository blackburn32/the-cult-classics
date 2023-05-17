export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-icon'],
    app: {
        head: {
            title: 'The Cult Classics',
            meta: [
                {name: 'description', content: 'The Cult Classics are a psychedelic rock band from Salt Lake City, Utah.'},
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/favicon.svg',
                },
            ],
        },
    },
    runtimeConfig: {
        imageProvider: 'imagekit',
    },
    image: {
        imagekit: {
            baseURL: 'https://ik.imagekit.io/alnazmrug',
        },
    },
    ssr: false,
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
});
