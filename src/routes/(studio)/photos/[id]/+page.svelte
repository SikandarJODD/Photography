<script>
	import { page } from '$app/stores';
	import * as Carousel from '$lib/components/ui/carousel/';
	import * as Card from '$lib/components/ui/card/';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let num = $page.url.pathname.split('/')[2];
	export let data;
	let allpost = data.allposts.sort((a, b) => a.id - b.id);
	let swidth = 0;
</script>

<svelte:window bind:innerWidth={swidth} />
<div class="flex flex-col md:flex-row">
	<div>
		<Carousel.Root
			opts={{
				loop: true,
				startIndex: Number(num) - 1
			}}
			class="w-full max-w-sm xl:max-w-[400px]    md:ml-6"
		>
			<Carousel.Content>
				{#each allpost as item (item.id)}
					<Carousel.Item>
						<div class="shadow-none">
							<Card.Root class=" rounded-[2%] ">
								<Card.Content class="flex p-3 md:p-0   dark:bg-gray-800/40">
									<img
										src={item.img}
										alt={item.username}
										class="rounded-[2%] h-72 w-full md:h-80 md:w-96 xl:w-full xl:h-[460px] object-cover object-center"
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
</div>
