// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],

	app: {
		head: {
			title: "Divinus Games",
			meta: [
				{ name: "description", content: "Divinus Games" },
				{ name: "description", content: "Divinus Games" },
			],
			link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }],
		},
	},
});
