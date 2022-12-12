<template>
	<div>
		<Navbar />

		<div class="container mx-auto p-4">
			<slot />
		</div>

		<Footer />
	</div>
</template>

<style scoped>
.router-link-exact-active {
	color: #12b488;
}
</style>
