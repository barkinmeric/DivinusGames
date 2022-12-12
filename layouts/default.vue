<template>
	<div>
		<Navbar />

		<slot />

		<Footer />
	</div>
</template>

<style scoped>
.router-link-exact-active {
	color: #12b488;
}
</style>
