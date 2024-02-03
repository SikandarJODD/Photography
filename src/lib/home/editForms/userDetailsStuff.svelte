<script>
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { enhance } from '$app/forms';
	let skillsStuff = '';
	$: user_skills = skillsStuff.split(',').map((skill) => skill.trim());
</script>

<form action="?/userDetail" method="post" use:enhance>
	<div class="dark:bg-slate-950">
		<div class="border-b border-white/10 pb-8">
			<h2 class="text-xl font-semibold leading-7 text-primary md:font-bold lg:text-3xl capitalize">
				Detail Info - Category
			</h2>
			<div class="mt-4 md:mt-8 flex flex-col gap-4">
				<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<Label for="name">Expert in</Label>
						<div class="mt-1.5">
							<Input
								type="text"
								name="expert_feild"
								id="expert_feild"
								placeholder="Photography, Profile Shoots"
							/>
						</div>
					</div>
				</div>
				<div class="col-span-full">
					<label for="about" class="block text-sm font-medium leading-6 text-primary"
						>Long Description about your work & experience
					</label>
					<div class="mt-2">
						<Textarea
							placeholder="I Will Shoot Professional Product Photography. I have been professional photographer for more than 13 years. I love to edit and produce dynamic, engaging, and high-quality images that make my clients products look appealing to the seller...."
							class="w-full"
							name="user_d_info"
							id="user_d_info"
							rows="5"
						/>
					</div>
				</div>
				<div class="col-span-full">
					<label for="about" class="block text-sm font-medium leading-6 text-primary"
						>Photography Skills
					</label>
					<span class="text-sm">
						use <span class="bg-gray-900 px-1 rounded-md">,</span> to separate the skills :
						<code>Photography, Editing, Portfolio Shoots, Product Photography, etc.... </code>
					</span>
					<div class="mt-2">
						<Textarea
							placeholder="Photography, Editing, Videography, Product Photography, etc...."
							class="w-full"
							name="skills"
							id="skills"
							bind:value={skillsStuff}
						/>
					</div>
					<input type="hidden" bind:value={user_skills} name="user_skills" id="user_skills" />
				</div>
				<div>
					<!-- print all the user skills -->
					{#each user_skills as skill}
						<span class=" bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded-md text-sm mx-px"
							>{skill}</span
						>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-4">
		<Button type="submit">Save</Button>
	</div>
</form>
