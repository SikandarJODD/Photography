<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Instagram, Linkedin, Twitter, CopyCheck, Mail } from 'lucide-svelte';
	import { page } from '$app/stores';
	import PicGrid from '$lib/home/photos/PicGrid.svelte';
	// Show Profile Code
	export let data;
	let profileName = $page.url.pathname.split('/')[2];
	console.log(profileName, 'profile name');

	let filterProfile = data.allprofiles.filter((item) => {
		return item.username === profileName;
	})[0];
	console.log(filterProfile, 'filter profile');

	let allimages = data.userPosts;
	console.log(data);

	let profile = filterProfile;
	let socials = [
		{
			link: filterProfile.socialInsta || '',
			icon: Instagram
		},
		{
			link: filterProfile.socialTweet || '',
			icon: Twitter
		},
		{
			link: filterProfile.socialLinked || '',
			icon: Linkedin
		}
		// {
		// 	link: filterProfile.socialProfileLink || '',
		// 	icon: CopyCheck
		// }
	];

	let screenwidth = 0;
	$: btnsize = screenwidth < 500 ? 'sm' : 'default';
</script>

<svelte:window bind:innerWidth={screenwidth} />
<div>
	<div class="grid grid-cols-8 space-x-1 md:space-x-6 xl:space-x-0 lg:grid-cols-5 xl:px-32 mb-4">
		<div class="col-span-2 lg:col-span-1">
			<img
				src={profile.userImage ||
					'https://i.pinimg.com/564x/26/82/78/2682787e9d8241a3164a67748ac505b6.jpg'}
				alt="userImage={profile.firstName}"
				style:--imgtag="img-{profile.id}"
				class="h-16 w-16 md:h-32 md:w-32 xl:w-40 xl:h-40 object-cover origin-center rounded-full p-0.5 border-blue-600 border-2"
			/>
		</div>
		<div class="col-span-6 lg:col-span-4">
			<div class="flex items-center justify-between mb-2">
				<h2 class="text-md font-semibold">@{profile.username}</h2>
				<div>
					<Button size={btnsize} class="px-1.5 md:px-3">
						<Mail size="19" strokeWidth="1.3" class="sm:mr-1.5" />
						{screenwidth > 500 ? 'Mail' : ''}
					</Button>
				</div>
			</div>
			<div class="mt-10 -ml-[33%] md:ml-0 md:mt-2">
				<h1 class="font-semibold text-xl" style:--title="title-{profile.id}">
					{profile.firstName}
				</h1>
				<p>{profile.desc || ''}</p>
			</div>
			<div class="mt-2 ml-10 sm:ml-0 flex items-center">
				<Button size="sm" variant="outline"
					><span class="mr-2">{profile.totalImages || 0}</span>Posts</Button
				>
			</div>
			<div class="mt-4 sm:ml-0 flex items-center gap-x-4">
				{#each socials as item}
					<Button
						size="icon"
						variant="outline"
						class="md:h-10 md:w-10 border-primary/60"
						href={item.link}
						target="_blank"
					>
						<svelte:component this={item.icon} strokeWidth="1.4" />
					</Button>
				{/each}
			</div>
		</div>
	</div>
	<Separator />
</div>
<div>
	<div class="mt-4 md:mt-6">
		<PicGrid {allimages} />
	</div>
</div>

<style>
	h1 {
		view-transition-name: var(--title);
	}

	img {
		view-transition-name: var(--imgtag);
	}
</style>
