<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Instagram, Linkedin, PenSquare, Twitter, CopyCheck, Share2 } from 'lucide-svelte';
	import { page } from '$app/stores';
	import IsLoginAleart from '$lib/home/comps/IsLoginAleart.svelte';
	import PicGrid from '$lib/home/photos/PicGrid.svelte';
	import ProTabs from '$lib/home/profiletabs/ProTabs.svelte';
	import ProDesc from '$lib/home/profiletabs/ProDesc.svelte';
	import { toast } from 'svelte-sonner';
	let profile = $page.data.userProfile;
	export let data;

	let allimages = data.allposts.filter((item) => item.username === profile.username);

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
			icon: Share2
		}
	];

	let screenwidth = 0;
	$: btnsize = screenwidth < 500 ? 'sm' : 'default';
	let email = $page.data.email || '';
	$: isOpen = email.length === 0 ? true : false;
	let copyLink = () => {
		navigator.clipboard.writeText($page.data.userProfile.socialProfileLink);
		toast.success('Profile Link Copied!');
	};
	let isUsername = data.username || 'none';
	// console.log(isUsername, data.username, 'Check');
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
					<Button
						href="/edit"
						variant="outline"
						size={btnsize}
						class="px-1.5 md:px-3 border-primary/50"
						on:click={copyLink}
					>
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
				{#each socials as item, i}
					{#if i == socials.length - 1}
						<Button
							variant="outline"
							size="icon"
							class="md:h-9 md:w-9 p-1.5 border-primary/50 hover:bg-primary/10 transition-all duration"
							target="_blank"
							on:click={copyLink}
						>
							<svelte:component this={item.icon} strokeWidth="1.5" />
						</Button>
					{:else}
						<Button
							variant="outline"
							size="icon"
							class="md:h-9 md:w-9 p-1.5 border-primary/50 hover:bg-primary/10 transition-all duration"
							href={item.link ? item.link : '/'}
							target="_blank"
						>
							<svelte:component this={item.icon} strokeWidth="1.5" />
						</Button>
					{/if}
				{/each}
			</div>
		</div>
	</div>
	<Separator />
	<div class="flex flex-col md:flex-row my-4 gap-4 md:gap-0">
		<div class="md:w-3/5">
			<ProDesc details={data.userDetailedInfo} />
		</div>
		<div class="md:w-2/5 flex items-center justify-center">
			<ProTabs featuresData={data.featuresProfile} {isUsername} />
		</div>
	</div>
	<Separator />
	<div class="mt-4 md:mt-6">
		<PicGrid {allimages} />
	</div>
</div>
<IsLoginAleart {isOpen} />
