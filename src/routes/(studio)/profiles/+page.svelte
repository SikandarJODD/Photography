<script>
	import ProfileCard from '$lib/home/studio/profiles/ProfileCard.svelte';

	export let data;
	let pdatas = data.allprofiles.map((k) => {
		return {
			id: k.id,
			name: k.firstName,
			img: k.userImage,
			desc: k.desc,
			username: `/profiles/${k.username}`
		};
	});
</script>

<!-- {JSON.stringify(data.allprofiles)} -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 place-items-center">
	{#each pdatas as pdata, i}
		<ProfileCard {pdata} />
	{/each}
</div>
