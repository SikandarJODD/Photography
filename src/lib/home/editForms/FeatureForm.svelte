<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Description } from '$lib/components/ui/alert-dialog';
	import { enhance } from '$app/forms';

	export let feature: string;

	let smFeatures = [
		{
			text: '',
			status: false,
			id: crypto.randomUUID().slice(0, 10)
		}
	];

	let addSmFeatures = () => {
		if (smFeatures.length <= 5) {
			smFeatures = [
				...smFeatures,
				{ text: '', status: false, id: crypto.randomUUID().slice(0, 10) }
			];
		}
	};
	$: pas = JSON.stringify(smFeatures);
</script>

<form action="?/basic" method="post" use:enhance>
	<div class="dark:bg-slate-950">
		<div class="border-b border-white/10 pb-8">
			<h2 class="text-xl font-semibold leading-7 text-primary md:font-bold lg:text-3xl capitalize">
				{feature} - Category
			</h2>
			<p class="mt-1 text-sm leading-6 text-primary/70">
				Basic Category includes the basic information about you provide to the customer.
			</p>

			<div class="mt-4 md:mt-8 flex flex-col gap-4">
				<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<Label for="name">Pictures</Label>
						<div class="mt-1.5">
							<Input
								type="number"
								name="pictures"
								id="pictures"
								placeholder="how many pictrues you provide ?"
							/>
						</div>
					</div>
					<div>
						<Label for="insta">Price</Label>
						<div class="mt-1.5">
							<Input type="number" name="price" id="price-img" placeholder="Price of your work" />
						</div>
					</div>
					<div>
						<Label for="twitter">Delivery</Label>
						<div class="mt-1.5">
							<Input
								type="number"
								name="delivery-time"
								id="delivery-time"
								placeholder="how much time you need to deliver ?"
							/>
						</div>
					</div>
					<div>
						<Label for="linked">Revision</Label>
						<div class="mt-1.5">
							<Input
								type="number"
								name="revision-work"
								id="revision-work"
								placeholder=" how much revisions you provide ? "
							/>
						</div>
					</div>
				</div>
				<div class="col-span-full">
					<label for="about" class="block text-sm font-medium leading-6 text-primary"
						>Short Description
					</label>
					<div class="mt-2">
						<Textarea
							placeholder="Short description of basic Category...."
							class="w-full"
							name="desc-feature"
							id="desc-feature"
						/>
					</div>
				</div>
				<div class="flex flex-col gap-1 w-fit">
					<Button class="w-fit" on:click={addSmFeatures}>Add List</Button>
					<p class="text-sm text-primary/80">You can Upload Maximum 6 List</p>
				</div>
				<div>
					<h1 class="text-xl font-semibold mb-2">List of Basic Features</h1>
					<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
						{#each smFeatures as item, i}
							<div>
								<Label for="linked">List {i + 1}</Label>
								<div class="mt-1.5 flex items-center gap-1">
									<Input
										type="text"
										id="revision-work-{i}"
										placeholder="List of Features with Status"
										bind:value={item.text}
									/>
									<Checkbox
										id="revision-work-{i}"
										bind:checked={item.status}
										class="text-primary"
									/>
								</div>
							</div>
						{/each}

						<input type="hidden" name="bfeatures" id="bfeatures" bind:value={pas} />
						<input type="hidden" name="typefeature" id="typefeature" bind:value={feature} />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-4">
		<!-- <Button>Cancel</Button> -->
		<Button type="submit">Save</Button>
	</div>
</form>
