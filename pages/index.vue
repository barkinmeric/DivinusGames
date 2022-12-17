<template>
	<div class="overflow-hidden">
		<Hero />
		<Hero2 />
		<Hero3 />
		<WallpaperGallery />
	</div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
	mounted() {
		AOS.init();
	},
	unmounted() {
		AOS.refresh();
	},
};
</script>

<script setup>
useHead({
	title: "Home | Divinus Games",
	meta: [{ name: "description", content: "Divinus Games" }],
});
</script>

<style scoped>
h2 {
	font-size: 36px;
}
</style>
