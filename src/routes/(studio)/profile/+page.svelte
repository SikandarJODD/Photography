<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Instagram, Linkedin, PenSquare, Twitter, CopyCheck } from 'lucide-svelte';
	import { page } from '$app/stores';
	import IsLoginAleart from '$lib/home/comps/IsLoginAleart.svelte';
	import PicGrid from '$lib/home/photos/PicGrid.svelte';
	let profile = $page.data.userProfile;
	export let data;
	let allimages = data.allposts;

	let socials = [
		{
			link: $page.data.userProfile.socialInsta || '',
			icon: Instagram
		},
		{
			link: $page.data.userProfile.socialTweet || '',
			icon: Twitter
		},
		{
			link: $page.data.userProfile.socialLinked || '',
			icon: Linkedin
		},
		{
			link: $page.data.userProfile.socialProfileLink || '',
			icon: CopyCheck
		}
	];

	let screenwidth = 0;
	$: btnsize = screenwidth < 500 ? 'sm' : 'default';
	let email = $page.data.email || '';
	$: isOpen = email.length === 0 ? true : false;
</script>

<svelte:window bind:innerWidth={screenwidth} />
<div>
	<div class="grid grid-cols-8 space-x-1 md:space-x-6 xl:space-x-0 lg:grid-cols-5 xl:px-32 mb-4">
		<div class="col-span-2 lg:col-span-1">
			<img
				src={profile.userImage ||
					'https://i.pinimg.com/564x/26/82/78/2682787e9d8241a3164a67748ac505b6.jpg'}
				alt="profile_image"
				class="h-16 w-16 md:h-32 md:w-32 xl:w-40 xl:h-40 object-cover origin-center rounded-full p-0.5 border-blue-600 border-2"
			/>
		</div>
		<div class="col-span-6 lg:col-span-4">
			<div class="flex items-center justify-between mb-2">
				<h2 class="text-md font-semibold">@{profile.username}</h2>
				<div>
					<Button href="/edit" size={btnsize} class="px-1.5 md:px-3">
						<PenSquare size="18" strokeWidth="1.3" class="sm:mr-1.5" />
						{screenwidth > 500 ? 'Edit' : ''}
					</Button>
				</div>
			</div>
			<div class="mt-10 -ml-[33%] md:ml-0 md:mt-2">
				<h1 class="font-semibold text-xl">{profile.firstName}</h1>
				<p>{profile.desc || ''}</p>
			</div>
			<div class="mt-2 -ml-[34%] sm:ml-0 flex items-center">
				<Button size="sm" variant="outline"
					><span class="mr-2">{profile.totalImages}</span>Posts</Button
				>
			</div>
			<div class="mt-4 -ml-8 sm:ml-0 flex items-center gap-x-4">
				{#each socials as item}
					<Button size="icon" class="md:h-10 md:w-10" href={item.link} target="_blank">
						<svelte:component this={item.icon} strokeWidth="1.5" />
					</Button>
				{/each}
			</div>
		</div>
	</div>
	<Separator />
	<div class="mt-2 md:mt-6">
		<PicGrid {allimages} />
	</div>
</div>
<IsLoginAleart {isOpen} />
