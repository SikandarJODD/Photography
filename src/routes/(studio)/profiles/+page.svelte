<script>
	import ProfileCard from '$lib/home/studio/profiles/ProfileCard.svelte';

	export let data;
	let pdatas = data.allprofiles.map((k) => {
		return {
			name: k.firstName,
			img: k.userImage,
			desc: k.desc,
			username: `/profiles/${k.username}`
		};
	});
	let ptrial = [
		{
			name: 'Sikandar Bhide',
			img: 'https://i.pinimg.com/564x/50/29/b7/5029b778d7b738518ba1b9ec0467d3c4.jpg',
			desc: 'Sveltekit Developer',
			username: `/profiles/coding`
		},
		{
			name: 'Saloni Maheshwari',
			img: 'https://i.pinimg.com/564x/c2/02/b8/c202b82275280d15af0a2e728a4d1d75.jpg',
			desc: 'Data Analysis',
			username: `/profiles/coding`
		},
		{
			name: 'Priya Pal',
			img: 'https://i.pinimg.com/736x/47/76/66/4776661ad57b439c711ff0942fb1fd7a.jpg',
			desc: 'Full Stack Developer',
			username: `/profiles/coding`
		},
		{
			name: 'Aditya Karle',
			img: 'https://i.pinimg.com/736x/43/eb/8f/43eb8f2261a090e6ed5414a1c76b0722.jpg',
			desc: 'Creative Marketer',
			username: `/profiles/coding`
		},
		{
			name: 'Rahul Wagh',
			img: 'https://i.pinimg.com/564x/43/86/84/438684f36c8838ea0e1d752f96ab0a92.jpg',
			desc: 'Trading Analysis',
			username: `/profiles/coding`
		},
		{
			name: 'Rutika Bhuimbar',
			img: 'https://i.pinimg.com/564x/cf/84/26/cf8426c53a714ea11d787688778cbc3f.jpg',
			desc: 'DSA Developer',
			username: `/profiles/coding`
		}
	];
</script>

<!-- {JSON.stringify(data.allprofiles)} -->
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 place-items-center">
	{#each ptrial as pdata}
		<ProfileCard {pdata} />
	{/each}
</div>
