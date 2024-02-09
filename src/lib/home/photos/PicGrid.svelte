<script lang="ts">
	import { page } from '$app/stores';
	import DeleteImage from './DeleteImage.svelte';

	let isProfilePage = $page.url.pathname === '/profile';

	export let allimages: any;
</script>

<div class="mx-auto max-w-screen-2xl">
	<div
		class=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 md:gap-6 xl:gap-8"
	>
		{#each allimages as item}
			<div
				class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-64 xl:h-80"
			>
				<a href="/photos/{item.id}">
					<img
						src={item.img}
						loading="lazy"
						alt="image {item.caption}"
						class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
					/>
				</a>

				<div
					class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
				></div>

				<span
					class="hidden transition-all duration-500 group-hover:inline-block relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-sm"
					>{item.caption}</span
				>
				{#if isProfilePage}
					<span
						class="absolute top-2 right-2 transition-all duration-500 ml-4 mb-3 text-sm text-white md:ml-5 md:text-sm"
					>
						<DeleteImage imgData={item} />
					</span>
				{/if}
			</div>
		{/each}
	</div>
</div>
