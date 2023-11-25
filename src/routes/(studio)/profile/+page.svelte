<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { UserCog, Instagram, X, Linkedin, Github, Image } from 'lucide-svelte';
	let socials = [
		{
			link: '',
			icon: Instagram
		},
		{
			link: '',
			icon: Github
		},
		{
			link: '',
			icon: Linkedin
		},
		{
			link: '',
			icon: Image
		}
	];
	let btnsize = 'sm';
	let screenwidth = 0;
</script>

<svelte:window bind:innerWidth={screenwidth} />
<div>
	<div class="grid grid-cols-8 space-x-1 md:space-x-6 xl:space-x-0 lg:grid-cols-5 xl:px-32 mb-4">
		<div class="col-span-2 lg:col-span-1">
			<img
				src="https://i.pinimg.com/564x/26/82/78/2682787e9d8241a3164a67748ac505b6.jpg"
				alt="profile_image"
				class="h-16 md:h-36 rounded-full p-0.5 border-blue-600 border-2"
			/>
		</div>
		<div class="col-span-6 lg:col-span-4">
			<div class="flex items-center justify-between mb-2">
				<h2 class="text-md font-semibold">@Sikandar.S.Bhide</h2>
				<div>
					<Button href="/edit" size={btnsize}>
						<UserCog size="18" strokeWidth="1.3" class="md:mr-1.5" />
						{screenwidth > 400 ? 'Edit' : ''}
					</Button>
				</div>
			</div>
			<div class="mt-10 -ml-[33%] md:ml-0 md:mt-2">
				<h1 class="font-semibold text-xl">Sikandar Bhide</h1>
				<p class="">Hello Professional Photographer, Living in Peace</p>
			</div>
			<div class="mt-2 -ml-8 sm:ml-0 flex items-center gap-x-3">
				<Button size="sm" variant="outline"><span class="mr-2">89</span>Followers</Button>
				<Button size="sm" variant="outline"><span class="mr-2">10</span>Posts</Button>
			</div>
			<div class="mt-4 -ml-8 sm:ml-0 flex items-center gap-x-4">
				{#each socials as item}
					<Button size="icon" class="md:h-10 md:w-10">
						<svelte:component this={item.icon} strokeWidth="1.5" />
					</Button>
				{/each}
			</div>
		</div>
	</div>
	<Separator />
</div>
