<template>
	<div class="overflow-hidden">
		<Hero />
		<Hero2 />
		<Hero3 />
		<WallpaperGallery />
	</div>
</template>

<script>
export default {
	mounted() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry);
				if (entry.isIntersecting) {
					entry.target.classList.add("aos-show");
				} else {
					entry.target.classList.remove("aos-show");
				}
			});
		});
		let hiddenElements = document.querySelectorAll(".aos-left, .aos-right, .aos-down, .aos-up, .aos-down-right, .aos-up-left, .aos-down-left, .aos-up-right");
		hiddenElements.forEach((el) => observer.observe(el));
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
