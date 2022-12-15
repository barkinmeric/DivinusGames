// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui"],

	headlessui: {
		prefix: "",
	},

	app: {
		head: {
			title: "Divinus Games",
			meta: [
				{ name: "description", content: "Divinus Games" },
				{ name: "description", content: "Divinus Games" },
			],
			link: [
				{ rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
				{ rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
			],
			script: [{ src: "https://unpkg.com/aos@2.3.1/dist/aos.js" }],
		},
	},
});
