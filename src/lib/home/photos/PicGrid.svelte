<script lang="ts">
	export let allimages: any;
</script>

<div class="mx-auto max-w-screen-2xl">
	<div
		class=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 md:gap-6 xl:gap-8"
	>
		{#each allimages as item}
			<!-- <ContextMenu.Root> -->
			<!-- <ContextMenu.Trigger> -->
			<div
				class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-64 xl:h-80"
			>
				<img
					src={item.img}
					loading="lazy"
					alt="image {item.caption}"
					class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
				/>

				<div
					class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
				></div>

				<span
					class="hidden transition-all duration-500 group-hover:inline-block relative ml-4 mb-3 text-sm text-white md:ml-5 md:text-sm"
					>{item.caption}</span
				>
			</div>
			<!-- </ContextMenu.Trigger> -->
			<!-- <ContextMenu.Content class="px-2 py-2">
                    <ContextMenu.Item on:click={() => downloadImage(item.img)}>
                        <Download strokeWidth="1.4" size="18" class="mr-2" /> Download
                    </ContextMenu.Item>
                    <ContextMenu.Item
                        ><Share2 strokeWidth="1.4" size="18" class="mr-2" />Share</ContextMenu.Item
                    >
                    <ContextMenu.Item
                        ><User strokeWidth="1.4" size="18" class="mr-2" />Profile</ContextMenu.Item
                    >
                </ContextMenu.Content> -->
			<!-- </ContextMenu.Root> -->
		{/each}
	</div>
</div>
