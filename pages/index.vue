<template>
	<div>
		<Hero />
		<ImageGallery />
	</div>
</template>

<script setup>
// const { data: products } = await useFetch("https://fakestoreapi.com/products");
useHead({
	title: "Divinus Games | Home",
	meta: [
		{ name: "description", content: "Divinus Games" },
		{ name: "description", content: "Divinus Games" },
	],
});
</script>

<style scoped>
h2 {
	font-size: 36px;
}
</style>
