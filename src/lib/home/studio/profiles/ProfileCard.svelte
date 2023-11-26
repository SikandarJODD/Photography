<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { CheckCircle, Plus } from 'lucide-svelte';
	let btnText = 'Follow';
	let icon = Plus;
	let isFollowed = () => {
		if (btnText === 'Follow') {
			icon = CheckCircle;
			btnText = 'Following';
		} else {
			icon = Plus;
			btnText = 'Follow';
		}
	};
	export let pdata = {
		name: 'Aditya Karle',
		img: 'https://i.pinimg.com/564x/e2/96/08/e29608084a33d6d24d874bbd32b316f1.jpg',
		desc: 'Professional Photographer',
		username: 'bhide'
	};
</script>

<Card.Root class="w-fit flex flex-col items-center justify-center">
	<Card.Header class="mb-0 md:pb-2 px-2.5 pt-3.5 pb-1.5 md:px-6 md:pt-5">
		<a href={pdata.username}>
			<img
				src={pdata.img}
				alt="userImage"
				class="h-36 w-36 md:h-40 md:w-40 xl:h-52 xl:w-52 rounded-full p-1 border border-blue-500 object-cover object-center"
			/>
		</a>
	</Card.Header>
	<Card.Content class="lg:ml-2 mb-0 pb-4 w-full">
		<div class="md:font-bold flex flex-col items-center md:justify-between gap-1">
			<a href={pdata.username}>{pdata.name}</a>
			<Button size="usm" on:click={isFollowed}>
				<svelte:component this={icon} size="15" strokeWidth="1.4" class="mr-0.5" />
				{btnText}</Button
			>
		</div>
		<Card.Description class="mt-0.5 hidden md:flex text-center justify-center"
			>{pdata.desc.slice(0, 30)}...</Card.Description
		>
	</Card.Content>
</Card.Root>
