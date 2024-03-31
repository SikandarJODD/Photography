<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Label } from '$lib/components/ui/label';
	import Input from '$lib/components/ui/input/input.svelte';
	import { Image, Upload } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import IsLoginAleart from '$lib/home/comps/IsLoginAleart.svelte';
	import { page } from '$app/stores';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
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
	let isForm = true;
</script>

<form
	method="POST"
	use:enhance={() => {
		isForm = false;
		return async ({ result, update }) => {
			console.log(result);
			isForm = true;
			if (result.type === 'success') {
				toast.success('Post Created Successfully');
				goto('/photos');
			} else {
				toast.error('Something went wrong');
			}
		};
	}}
>
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
				required
				bind:this={fileinput}
				id="uploadedImage"
				name="uploadedImage"
			/>
		</div>
		<div class="w-full md:w-60 my-3 gap-2 flex flex-col justify-start items-start">
			<Label for="caption">Caption</Label>
			<Input
				id="caption"
				required
				name="caption"
				placeholder="Add a caption about post"
				type="text"
			/>
		</div>
	</div>
	<div class="flex justify-end mt-2">
		<Button type="submit" disabled={!isForm}>
			{#if isForm}
				<Upload size="18" class="mr-1.5" strokeWidth="1.3" />
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-loader-circle mr-1.5 animate-spin"
					><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg
				>
			{/if}
			Publish</Button
		>
	</div>
</form>
<IsLoginAleart {isOpen} />
