<script>
	export let allPublicPosts = [
		{
			id: 1,
			img: '',
			caption: '',
			username: ''
		}
	];
</script>

<div class="bg-white dark:bg-slate-950 py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<div
			class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8"
		>
			{#each allPublicPosts.slice(0.8) as item}
				<a
					href="/photos/{item.id}"
					class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-transparent shadow-lg md:h-80"
				>
					<img
						src={item.img}
						loading="lazy"
						alt="{item.username} Image_"
						class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
					/>

					<div
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
					></div>

					{#if item.caption}
						<span
							class="relative mx-auto mb-2 inline-block text-xs backdrop-blur-md transition-all duration-200 text-white md:ml-5 md:text-sm border border-gray-300 px-2 py-1 rounded-lg bg-transparent group-hover:bg-gray-900/30"
							>{item.caption.slice(0, 10)}...</span
						>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</div>
