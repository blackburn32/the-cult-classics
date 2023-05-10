export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
    runtimeConfig: {
        imageProvider: 'imagekit',
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
