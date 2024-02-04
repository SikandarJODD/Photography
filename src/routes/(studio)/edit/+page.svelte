<script lang="ts">
	import UserDetailsStuff from '$lib/home/editForms/userDetailsStuff.svelte';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import * as Select from '$lib/components/ui/select';
	import FeatureForm from '$lib/home/editForms/FeatureForm.svelte';
	import userIcon from '$lib/images/icons/userIcon.jpg';
	import { Instagram, Save, Upload } from 'lucide-svelte';
	let avatar, fileinput;
	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target.result;
		};
	};
	let isCategory = 0;
	export let data: any;
	// let info = data.info;
	// console.log(info, 'info');
</script>

<form method="post" use:enhance action="?/profileForm">
	<div class="dark:bg-slate-950">
		<div class="border-b border-white/10 pb-8">
			<h2 class="text-xl font-semibold leading-7 text-primary md:font-bold lg:text-3xl">
				Edit Profile
			</h2>
			<p class="mt-1 text-sm leading-6 text-primary/70">
				This information will be displayed publicly so be careful what you share.
			</p>

			<div class="mt-4 md:mt-8 flex flex-col gap-4">
				<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<Label for="name">Name</Label>
						<div class="mt-1.5">
							<Input
								placeholder="Your Name"
								type="text"
								name="name"
								id="name"
								bind:value={data.info.firstName}
							/>
						</div>
					</div>
					<div>
						<Label for="insta">Instagram</Label>
						<div class="mt-1.5">
							<Input
								placeholder="instagram.com/aditya"
								name="insta"
								id="insta"
								bind:value={data.info.socialInsta}
							/>
						</div>
					</div>
					<div>
						<Label for="twitter">Twitter</Label>
						<div class="mt-1.5">
							<Input
								placeholder="x.com/aditya"
								name="twitter"
								id="twitter"
								bind:value={data.info.socialTweet}
							/>
						</div>
					</div>
					<div>
						<Label for="linked">Linked In</Label>
						<div class="mt-1.5">
							<Input
								placeholder="linkedin.com/aditya"
								name="linked"
								id="linked"
								bind:value={data.info.socialLinked}
							/>
						</div>
					</div>
				</div>
				<div class="col-span-full">
					<label for="about" class="block text-sm font-medium leading-6 text-primary">About</label>
					<div class="mt-2">
						<Textarea
							placeholder="Short description of yourself...."
							class="max-w-lg"
							name="desc"
							id="desc"
							rows="5"
							bind:value={data.info.desc}
						/>
					</div>
				</div>

				<div class="col-span-full">
					<label for="photo" class="block text-sm font-medium leading-6 text-primary"
						>Profile Photo</label
					>
					<div
						class="mt-2 flex items-center gap-3 justify-center md:justify-start flex-col md:flex-row"
					>
						<div>
							{#if avatar}
								<!-- content here -->
								<img
									src={avatar}
									alt="user icon"
									class="rounded-full h-24 w-24 transition-all duration-200 p-1 border-2 border-blue-400 object-cover object-center"
								/>
							{:else}
								<img
									src={userIcon}
									alt="user icon"
									class="rounded-full p-0.5 h-16 w-16 border-2 border-blue-400"
								/>
							{/if}
						</div>

						<Button
							size="sm"
							on:click={() => {
								fileinput.click();
							}}
						>
							<Upload size="18" strokeWidth="1.3" class="mr-1" />
							Upload Image</Button
						>
						<input
							name="inputImage"
							id="inputImage"
							style="display:none"
							type="file"
							accept=".jpg, .jpeg, .png"
							on:change={(e) => onFileSelected(e)}
							bind:this={fileinput}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-4">
		<!-- <Button>Cancel</Button> -->
		<Button type="submit">
			<Save strokeWidth="1.3" class="mr-1" size="20" />
			Save</Button
		>
	</div>
</form>
<div class="flex gap-4 flex-col mb-4">
	<div>
		<h2 class="text-xl md:text-3xl font-bold mb-1">Select Category</h2>
		<p class="text-primary/70 text-sm">
			Select the category to add features, price,delivery time and more
		</p>
	</div>
	<Select.Root>
		<Select.Trigger class="w-full md:w-[180px]">
			<Select.Value placeholder="Category" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="0" on:click={() => (isCategory = 0)}>Basic</Select.Item>
			<Select.Item value="1" on:click={() => (isCategory = 1)}>Standard</Select.Item>
			<Select.Item value="2" on:click={() => (isCategory = 2)}>Premium</Select.Item>
		</Select.Content>
	</Select.Root>
</div>
<div>
	{#if isCategory === 0}
		<FeatureForm feature="basic" />
	{:else if isCategory === 1}
		<FeatureForm feature="standard" />
	{:else if isCategory === 2}
		<FeatureForm feature="premium" />
	{/if}
</div>
<div>
	<UserDetailsStuff />
</div>
