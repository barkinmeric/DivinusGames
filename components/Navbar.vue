<template>
	<Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
		<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 py-2 sm:py-4">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">Open main menu</span>
						<i v-if="!open" class="material-icons block h-6 w-6 mx-auto" aria-hidden="true">menu</i>
						<i v-else class="material-icons block h-6 w-6 mx-auto" aria-hidden="true">close</i>
					</DisclosureButton>
				</div>
				<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex flex-shrink-0 items-center">
						<NuxtLink to="/">
							<img class="h-8 sm:h-12 w-auto" src="/logo.webp" alt="Divinus Games" />
						</NuxtLink>
					</div>
				</div>
				<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<NuxtLink to="/" class="link">Home</NuxtLink>
							<NuxtLink to="/about" class="link">About</NuxtLink>
							<NuxtLink to="/team" class="link">Team</NuxtLink>
							<NuxtLink to="/contact" class="link">Contact</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<DisclosurePanel class="sm:hidden">
			<div class="space-y-1 px-2 pt-2 pb-3">
				<NuxtLink to="/" class="link">
					<DisclosureButton as="div"> Home </DisclosureButton>
				</NuxtLink>
				<NuxtLink to="/about" class="link">
					<DisclosureButton as="div"> About </DisclosureButton>
				</NuxtLink>
				<NuxtLink to="/team" class="link">
					<DisclosureButton as="div"> Team </DisclosureButton>
				</NuxtLink>
				<NuxtLink to="/contact" class="link">
					<DisclosureButton as="div"> Contact </DisclosureButton>
				</NuxtLink>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>

<style scoped>
.link {
	@apply block px-3 py-2 rounded-md text-base font-medium;
}
.link.router-link-exact-active {
	@apply bg-gray-900 text-white;
}

.link:not(.router-link-exact-active) {
	@apply text-gray-300 hover:bg-gray-700 hover:text-white;
}
</style>
