<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { toast } from 'svelte-sonner';

	export let data;
	console.log(data.rallPosts, 'R All Posts');
	// console.log(data);
	/* 
	 rprofile :{
		id,
		username,
		firstName
		desc
		userImage,
		totalImage
		socialProfileLink profile Link ...stuff	
	 }
	*/
	let copyPostLink = () => {
		navigator.clipboard.writeText(window.location.href);
		toast.success('Copied Post Link');
	};
</script>

<Toaster></Toaster>
<svelte:head>
	<title>
		Shutterspot - {data.rpost.username}
	</title>
</svelte:head>
<div class="mx-28">
	<div class="w-full flex flex-col md:flex-row">
		<div class="md:w-1/2 flex items-center justify-center group">
			<div
				class="border p-0 md:p-3 rounded-md md:rounded-3xl transition-all duration-200 dark:group-hover:bg-gray-900/40"
			>
				<img
					src={data.rpost.img}
					alt="{data.rpost.username} image"
					class="h-64 w-64 md:w-96 md:h-96 shadow-xl rounded-md md:rounded-2xl object-cover"
				/>
			</div>
		</div>
		<div class="w-1/2 flex gap-4 flex-col">
			<div class="flex flex-col items-start gap-1 border px-6 py-3 rounded-md md:rounded-xl">
				<h1>
					<a href="/profiles/{data.rpost.username}" class="flex items-center gap-1.5"
						>{data.rpost.username}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#1a71ff"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-badge-check"
							><path
								d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
							/><path d="m9 12 2 2 4-4" /></svg
						>
					</a>
				</h1>
				<h4 class="text-primary/90">
					{data.rprofile.desc}
				</h4>
				<p class="text-primary/70 font-thin">{data.rpost.caption}</p>
				<div class="mt-1 flex gap-2">
					{#if data.rprofile.socialInsta}
						<Button variant="outline" href={data.rprofile.socialInsta} size="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-instagram"
								><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
									d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
								/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
							>
						</Button>
					{/if}
					{#if data.rprofile.socialLinked}
						<Button variant="outline" href={data.rprofile.socialLinked} size="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-linkedin"
								><path
									d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
								/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
							>
						</Button>
					{/if}
					{#if data.rprofile.socialTweet}
						<Button variant="outline" href={data.rprofile.socialTweet} size="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-twitter"
								><path
									d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
								/></svg
							>
						</Button>
					{/if}
					<Button variant="outline" on:click={copyPostLink} size="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-share-2"
							><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
								cx="18"
								cy="19"
								r="3"
							/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line
								x1="15.41"
								x2="8.59"
								y1="6.51"
								y2="10.49"
							/></svg
						>
					</Button>
				</div>
			</div>
			<div class="flex flex-wrap gap-2 border px-6 py-4 rounded-md md:rounded-2xl">
				{#each data.rallPosts.slice(0, 8) as item}
					<a
						class="flex p-2 border rounded-md md:rounded-lg shadow-md md:shadow-lg transition-all duration-200 hover:shadow-xl dark:hover:bg-gray-900/40 border-primary/20 hover:border-cyan-400/50"
						href="https://photix.vercel.app/photos/{item.id}"
						target="_blank"
					>
						<img
							src={item.img}
							alt="{item.username} image"
							class="h-20 w-20 object-cover rounded-md md:rounded-lg shadow-md md:shadow-lg"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
