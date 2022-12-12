<template>
	<div>
		<h2>Home</h2>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products">
				<Card :product="p" />
			</div>
		</div>
	</div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
h2 {
	font-size: 36px;
}
</style>
