<template>
	<footer class="bg-gray-900 py-12 px-8 sm:py-16 sm:px-12">
		<div class="container mx-auto">
			<div class="xl:flex xl:justify-between">
				<div class="mb-6 xl:mb-0">
					<NuxtLink href="/" class="flex items-center">
						<img src="/logo.webp" class="mr-3 h-8" alt="Logo" />
						<span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Divinus Games</span>
					</NuxtLink>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-3">
					<div class="mb-6">
						<h2 class="mb-4 text-sm font-semibold uppercase text-white">Menus</h2>
						<ul class="text-gray-400">
							<li class="mb-4">
								<NuxtLink to="/" class="link hover:underline">Home</NuxtLink>
							</li>
							<li class="mb-4">
								<NuxtLink to="/about" class="link hover:underline">About</NuxtLink>
							</li>
							<li class="mb-4">
								<NuxtLink to="/team" class="link hover:underline">Team</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/contact" class="link hover:underline">Contact</NuxtLink>
							</li>
						</ul>
					</div>

					<div class="mb-6">
						<h2 class="mb-4 text-sm font-semibold uppercase text-white">Legal</h2>
						<ul class="text-gray-400">
							<li class="mb-4">
								<a href="https://divinusgames.com/privacy-policy" class="hover:underline">Privacy Policy</a>
							</li>
							<li>
								<a href="#" class="hover:underline">Terms &amp; Conditions</a>
							</li>
						</ul>
					</div>

					<div class="mb-6">
						<h2 class="mb-4 text-sm font-semibold uppercase text-white">Contact Info</h2>
						<ul class="text-gray-400">
							<li class="mb-4">
								<p>Address : Istanbul, Türkiye</p>
							</li>
							<li>
								<p>Email : contact@divinusgames.com</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr class="mb-6 sm:mx-auto border-gray-700" />
			<div class="sm:flex sm:items-center sm:justify-between text-center">
				<span class="text-sm text-gray-400">Copyright © 2022 <a href="https://divinusgames.com/" class="hover:underline">Divinus Games™</a>. All Rights Reserved. </span>
				<div class="flex mt-4 space-x-6 justify-center sm:mt-0">
					<a href="https://facebook.com/divinusgames" class="text-gray-500 hover:text-white">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Facebook page</span>
					</a>
					<a href="https://twitter.com/divinus_games" class="text-gray-500 hover:text-white">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg>
						<span class="sr-only">Twitter page</span>
					</a>
					<a href="https://instagram.com/divinusgames" class="text-gray-500 hover:text-white">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="sr-only">Instagram page</span>
					</a>
					<a href="https://linkedin.com/company/divinus-games" class="text-gray-500 hover:text-white">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 49 49" aria-hidden="true" x="0px" y="0px">
							<path
								d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489
						c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733
						C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123
						C8.729,6.477,8.416,7.256,7.847,7.811z"
							/>
							<path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z" />
							<path
								d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711
						c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67
						C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797
						c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473
						c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"
							/>
						</svg>
						<span class="sr-only">LinkedIn account</span>
					</a>
					<a href="https://www.youtube.com/channel/UCUzUEGretdDmn8-O8APr8Wg" class="text-gray-500 hover:text-white">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 49 49" aria-hidden="true">
							<path
								d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512
						c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744
						C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z"
							/>
							<path
								d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229
						c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113
						c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"
							/>
						</svg>
						<span class="sr-only">Youtube account</span>
					</a>
					<a href="https://www.tiktok.com/@divinus.games" class="text-gray-500 hover:text-white">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
							<path
								d="M224,80a52.059,52.059,0,0,1-52-52,4.0002,4.0002,0,0,0-4-4H128a4.0002,4.0002,0,0,0-4,4V156a24,24,0,1,1-34.28418-21.69238,3.99957,3.99957,0,0,0,2.28369-3.61279L92,89.05569a3.99948,3.99948,0,0,0-4.70117-3.938A72.00522,72.00522,0,1,0,172,156l-.00049-42.56348A99.27749,99.27749,0,0,0,224,128a4.0002,4.0002,0,0,0,4-4V84A4.0002,4.0002,0,0,0,224,80Zm-4,39.915a91.24721,91.24721,0,0,1-49.66455-17.1792,4.00019,4.00019,0,0,0-6.33594,3.24707L164,156A64,64,0,1,1,84,94.01223l-.00049,34.271A32.00156,32.00156,0,1,0,132,156V32h32.13184A60.09757,60.09757,0,0,0,220,87.86819Z"
							/>
						</svg>
						<span class="sr-only">TikTok account</span>
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped></style>
