export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    app: {
        baseURL: '/the-cult-classics/',
        head: {
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/the-cult-classics/favicon.svg',
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
    },
});
