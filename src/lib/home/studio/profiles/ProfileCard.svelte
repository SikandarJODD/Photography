<script lang="ts">
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
		id: 0,
		name: 'Aditya Karle',
		img: 'https://i.pinimg.com/564x/e2/96/08/e29608084a33d6d24d874bbd32b316f1.jpg',
		desc: 'Professional Photographer',
		username: 'bhide'
	};
</script>

<Card.Root class="group w-fit flex flex-col items-center justify-center">
	<Card.Header class="mb-0 md:pb-2 px-2.5 pt-3.5 pb-1.5 md:px-6 md:pt-5">
		<a
			href={pdata.username}
			class="overflow-hidden h-36 w-36 md:h-40 md:w-40 xl:h-48 xl:w-48 rounded-full"
		>
			<img
				src={pdata.img}
				alt="userImage-{pdata.username}"
				style:--imgtag="img-{pdata.id}"
				class=" md:group-hover:scale-110 transition-all duration-100 ease-in h-36 w-36 md:h-40 md:w-40 xl:h-48 xl:w-48 rounded-full object-cover object-center"
			/>
		</a>
	</Card.Header>
	<Card.Content class="lg:ml-2 mb-0 pb-4 w-full">
		<div class=" flex flex-col items-center md:justify-between gap-1">
			<h1 class="text-sm md:text-[17px]">
				<a href={pdata.username} style:--title="title-{pdata.id}">{pdata.name}</a>
			</h1>
		</div>
		<Card.Description class="mt-0.5 flex text-center justify-center"
			>{pdata.desc?.slice(0, 14)}..</Card.Description
		>
	</Card.Content>
</Card.Root>

<style>
	a {
		view-transition-name: var(--title);
	}

	img {
		view-transition-name: var(--imgtag);
	}
</style>
