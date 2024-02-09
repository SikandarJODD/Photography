<script>
	import { page } from '$app/stores';
	import * as Carousel from '$lib/components/ui/carousel/';
	import * as Card from '$lib/components/ui/card/';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Construction } from 'lucide-svelte';

	let num = $page.url.pathname.split('/')[2];
	export let data;
	let allpost = data.allposts.sort((a, b) => a.id - b.id);
	let swidth = 0;
</script>

<svelte:window bind:innerWidth={swidth} />
<div class="flex flex-col">
	<div>
		<Carousel.Root
			opts={{
				loop: true,
				startIndex: Number(num) - 1
			}}
			class="w-full max-w-sm xl:max-w-[400px] md:ml-6"
		>
			<Carousel.Content>
				{#each allpost as item (item.id)}
					<Carousel.Item>
						<div>
							<Card.Root class=" rounded-[2%] border-none">
								<Card.Content class="flex p-0 items-center justify-center">
									<img
										src={item.img}
										alt={item.username}
										class="rounded-[4%] h-96 max-w-full md:w-96 xl:w-full xl:h-[460px] md:object-cover object-center"
									/>
								</Card.Content>
							</Card.Root>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			{#if swidth > 900}
				<Carousel.Previous />
				<Carousel.Next />
			{/if}
		</Carousel.Root>
	</div>
	<div class="flex items-center justify-center mt-4 flex-col">
		<h4>Drag to Move the Images</h4>
		<p class="flex gap-2 mt-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.3"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-slash-square"
				><rect width="18" height="18" x="3" y="3" rx="2" /><line
					x1="9"
					x2="15"
					y1="15"
					y2="9"
				/></svg
			>
			Development Page
		</p>
	</div>
</div>
