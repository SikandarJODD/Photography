<script lang="ts">
	import { PUBLIC_BUCKET_NAME } from '$env/static/public';
	import supabase from '$lib';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Trash2, Image, ImageIcon } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	export let imgData = {
		img: '',
		id: 0,
		caption: '',
		username: ''
	};
	let getTotalCount = async () => {
		let { data: totalcnt } = await supabase
			.from('profile')
			.select('total_images')
			.eq('username', imgData.username);
		let cnt = totalcnt[0].total_images - 1;
		return cnt;
	};
	let updateCount = async (cnt) => {
		let { data: d } = await supabase
			.from('profile')
			.update({ total_images: cnt })
			.eq('username', imgData.username);
	};
	let deleteImg = async () => {
		let imgname = imgData.img.split('/').pop()?.toString();
		console.log(imgname);
		try {
			let { data, error } = await supabase.storage.from(PUBLIC_BUCKET_NAME).remove([imgname]);
			let { data: d } = await supabase.from('posts').delete().eq('id', imgData.id);
			let cnt = await getTotalCount();
			await updateCount(cnt);
		} catch (error) {
			console.log('Error deleting image', error);
		} finally {
			toast.success('Post Deleted Successfully');
		}
	};
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="{buttonVariants({
			variant: 'outline',
			size: 'icon'
		})} transition-all duration-300 hidden group-hover:flex group-hover:backdrop-blur-md group-hover:bg-transparent"
	>
		<Trash2 size={20} color="#ff1a1a" strokeWidth={1.5} />
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title class="flex gap-1 items-center">
				<ImageIcon size={24} strokeWidth={1.3} />
				Delete Image
			</Dialog.Title>
			<Dialog.Description>Are you sure you want to delete this image?</Dialog.Description>
		</Dialog.Header>
		<div>
			<img
				src={imgData.img}
				alt={imgData.caption}
				class="w-full h-96 object-cover object-center rounded-lg"
			/>
		</div>
		<DialogPrimitive.Close>
			<Button on:click={deleteImg} class="w-full">
				<Trash2 size={20} strokeWidth={1.5} class="mr-1" />
				Delete
			</Button>
		</DialogPrimitive.Close>
	</Dialog.Content>
</Dialog.Root>
