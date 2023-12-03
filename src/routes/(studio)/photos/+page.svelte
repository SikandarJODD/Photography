<script>
	import { Download, Share2, User } from 'lucide-svelte';
	let allimages = $page.data.allposts;
	let allpics = [
		{
			img: 'https://i.pinimg.com/564x/b1/1e/7f/b11e7fb4f9c9b90718092952b79f6102.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/c2/ab/bc/c2abbcce0b45ff2edb226d6bef3b0767.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/4d/3e/6b/4d3e6b492d23dad08ca8c87eba9bd7db.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/ea/18/62/ea18622c6e2a7cc3bdf43732e6b64489.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/bd/3d/02/bd3d02a7550c184ab7ba8060f793a78f.jpg',
			caption: 'Happy dog',
			username: 'code'
		},

		{
			img: 'https://i.pinimg.com/564x/2b/d6/5e/2bd65e56ac1548f1410772ed17cb001e.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/7a/70/54/7a7054db1b5f5e9edbe1c0b675151f34.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/08/16/25/0816257c834752feb78b8ecc81fddd82.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/cf/73/5f/cf735fad864e4e020d713aa2ca7d53cc.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/32/b5/72/32b572993de9f8af5700a46481e6485c.jpg',
			caption: 'Happy dog',
			username: 'code'
		},
		{
			img: 'https://i.pinimg.com/564x/ed/0a/f8/ed0af86fc4f5d761bec3e5c2249ec0f1.jpg',
			caption: 'Happy dog',
			username: 'code'
		}
	];

	import * as ContextMenu from '$lib/components/ui/context-menu/';
	import { page } from '$app/stores';
	import supabase from '$lib';
	import { PUBLIC_BUCKET_NAME } from '$env/static/public';
	let downloadImage = async (img) => {
		let oriimg = img.toString();
		let rev = oriimg.split('/').reverse()[0];
		let fileName = 'photix-image.jpg';
		let imghref = '';
		try {
			let { data } = await supabase.storage.from(PUBLIC_BUCKET_NAME).download(rev);
			// console.log(data, 'Data');
			imghref = data?.type;
		} finally {
			var tag = document.createElement('a');
			tag.href = imghref;
			tag.download = fileName;
			tag.click();
		}
	};
</script>

<div>
	<div class="mx-auto max-w-screen-2xl">
		<div
			class=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 md:gap-6 xl:gap-8"
		>
			{#each allimages as item}
				<ContextMenu.Root>
					<ContextMenu.Trigger>
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
					</ContextMenu.Trigger>
					<ContextMenu.Content class="px-2 py-2">
						<ContextMenu.Item on:click={() => downloadImage(item.img)}>
							<Download strokeWidth="1.4" size="18" class="mr-2" /> Download
						</ContextMenu.Item>
						<ContextMenu.Item
							><Share2 strokeWidth="1.4" size="18" class="mr-2" />Share</ContextMenu.Item
						>
						<ContextMenu.Item
							><User strokeWidth="1.4" size="18" class="mr-2" />Profile</ContextMenu.Item
						>
					</ContextMenu.Content>
				</ContextMenu.Root>
			{/each}
		</div>
	</div>
</div>
