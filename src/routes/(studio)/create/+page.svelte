<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Label } from '$lib/components/ui/label';
	import Input from '$lib/components/ui/input/input.svelte';
	import { ImagePlus, Plus, Upload } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import { Globe } from 'lucide-svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	let avatar, fileinput;

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target.result;
		};
	};
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
	<div class="text-center flex items-center justify-center flex-col gap-y-2 md:gap-y-4 mt-3">
		<div class="w-full md:w-60 my-3 gap-2 flex flex-col justify-start items-start">
			<Label for="caption">Caption</Label>
			<Input id="caption" name="caption" placeholder="Add a caption about post" type="text" />
		</div>
		{#if avatar}
			<div>
				<img
					src={avatar}
					class="h-44 w-44 md:h-60 md:w-60 rounded-md object-cover object-center"
					alt="uploadImage"
				/>
			</div>
		{/if}
		<p class=" text-sm text-gray-500">Get started by creating a new post</p>

		<div class="mt-3">
			<Button
				on:click={() => {
					fileinput.click();
				}}
				type="button"
			>
				<Plus size="18" class="mr-0.5" strokeWidth="2" />
				New Post</Button
			>
			<input
				style="display:none"
				type="file"
				accept=".jpg, .jpeg, .png"
				on:change={(e) => onFileSelected(e)}
				bind:this={fileinput}
				id="uploadedImage"
				name="uploadedImage"
			/>
		</div>
	</div>
	<div class="flex justify-end mt-2">
		<Button type="submit">
			<Upload size="18" class="mr-1.5" strokeWidth="1.3" />
			Publish</Button
		>
	</div>
</form>
