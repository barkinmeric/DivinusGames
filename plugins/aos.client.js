export default defineNuxtPlugin((nuxtApp) => {
	AOS.init();
	nuxtApp.hook("page:start", () => {
		AOS.refresh();
	});
});
