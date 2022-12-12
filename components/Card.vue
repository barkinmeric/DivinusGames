<template>
	<div class="card text-center">
		<img :src="product.image" alt="" class="thumb" />
		<p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
		<button class="btn flex">
			<i class="material-icons mr-2">add_shopping_cart</i>
			<span>Add to cart</span>
		</button>
	</div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
	max-height: 120px;
	max-width: 70%;
	margin: 0 auto;
}
</style>
