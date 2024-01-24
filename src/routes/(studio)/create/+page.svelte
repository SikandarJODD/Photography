<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Label } from '$lib/components/ui/label';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Image, Upload } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import { Globe } from 'lucide-svelte';
	import IsLoginAleart from '$lib/home/comps/IsLoginAleart.svelte';
	import { page } from '$app/stores';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	let avatar: any, fileinput: any;

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e: any) => {
			avatar = e.target.result;
		};
	};

	let email = $page.data.email || '';
	$: isOpen = email.length === 0 ? true : false;
</script>

<form method="POST" use:enhance>
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-lg font-semibold leading-6 text-primary lg:text-2xl lg:font-bold">
				Create Post
			</h1>
			<p class="mt-2 text-sm text-primary/60">Upload Your best Creation on our Platform</p>
		</div>
	</div>
	<Separator class="my-2" />
	<div
		class="text-center flex items-center md:items-start justify-center md:justify-start flex-col gap-y-2 md:gap-y-4 mt-3"
	>
		{#if avatar}
			<div>
				<img
					src={avatar}
					class="h-44 w-44 md:h-60 md:w-60 rounded-md object-cover object-center"
					alt="uploadImage"
				/>
			</div>
		{/if}
		<p class=" text-sm text-primary md:text-xl">Get started by creating a new post</p>

		<div class="mt-3">
			<Button
				on:click={() => {
					fileinput.click();
				}}
				type="button"
			>
				<Image size="18" class="mr-1" strokeWidth="1.4" />
				Upload Image</Button
			>
			<input
				style="display:none"
				type="file"
				accept=".jpg, .jpeg, .png, .svg"
				on:change={(e) => onFileSelected(e)}
				bind:this={fileinput}
				id="uploadedImage"
				name="uploadedImage"
			/>
		</div>
		<div class="w-full md:w-60 my-3 gap-2 flex flex-col justify-start items-start">
			<Label for="caption">Caption</Label>
			<Input id="caption" name="caption" placeholder="Add a caption about post" type="text" />
		</div>
	</div>
	<div class="flex justify-end mt-2">
		<Button type="submit">
			<Upload size="18" class="mr-1.5" strokeWidth="1.3" />
			Publish</Button
		>
	</div>
</form>
<IsLoginAleart {isOpen} />
