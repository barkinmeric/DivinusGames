// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],

	css: ["~/assets/css/aos.css"],

	headlessui: {
		prefix: "",
	},

	app: {
		head: {
			title: "Divinus Games",
			meta: [{ name: "description", content: "Divinus Games" }],
			link: [
				{ rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
				{ rel: "icon", href: "/favicon.png" },
			],
		},
	},
});
