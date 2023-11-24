<script>
	import { enhance } from '$app/forms';
	import { LogOut, Settings, User } from 'lucide-svelte';

	let isProfileMenuOpen = false;
	let webdata = {
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
		profileName: 'Saloni Maheshwari',
		email: 'Tom Cook',
		profileImg: 'https://i.pinimg.com/564x/88/db/6f/88db6fd38202de80d7c7c3964783cb04.jpg',
		profileLink: '#',
		topic: 'Dashboard'
	};
	let profileTabs = [
		{
			name: 'Your Profile',
			link: '#',
			icon: User
		},
		{
			name: 'Settings',
			link: '#',
			icon: Settings
		},
		{
			name: 'logout',
			link: '#',
			icon: LogOut
		}
	];
</script>

<div class="relative">
	<button
		type="button"
		class="-m-1.5 flex items-center p-1.5 outline-none"
		id="user-menu-button"
		aria-expanded="false"
		aria-haspopup="true"
		on:click={() => (isProfileMenuOpen = !isProfileMenuOpen)}
	>
		<span class="sr-only">Open user menu</span>
		<img class="h-8 w-8 rounded-full bg-gray-50" src={webdata.profileImg} alt="" />
		<span class="hidden lg:flex lg:items-center">
			<span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true"
				>{webdata.profileName}</span
			>
			<svg
				class="{isProfileMenuOpen
					? 'rotate-180 transition-all duration-300'
					: 'transition-all duration-200'} ml-2 h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</button>
	<div
		class="{isProfileMenuOpen
			? 'transform opacity-100 scale-100 transition ease-out duration-100'
			: 'transform opacity-0 scale-95 transition ease-out duration-100'} absolute right-0 z-10 mt-2.5 w-36 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
		role="menu"
		aria-orientation="vertical"
		aria-labelledby="user-menu-button"
		tabindex="-1"
	>
		<!-- Active: "bg-gray-50", Not Active: "" -->
		{#each profileTabs as item, i}
			{#if item.name === 'logout'}
				<form method="POST" use:enhance action="?/logout">
					<button
						type="submit"
						class="w-full outline-none flex gap-1.5 items-center px-3 py-1.5 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-blue-500 transition-all duration-100"
						role="menuitem"
						tabindex="-1"
						id="user-menu-item-{i}"
					>
						<svelte:component this={item.icon} size="18" strokeWidth="1.3" />
						<div class="mb-0.5">{item.name}</div></button
					>
				</form>
			{:else}
				<a
					href={item.link}
					class="flex gap-1.5 items-center px-3 py-1.5 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-blue-500 transition-all duration-100"
					role="menuitem"
					tabindex="-1"
					id="user-menu-item-{i}"
				>
					<svelte:component this={item.icon} size="18" strokeWidth="1.3" />
					<div class="mb-0.5">{item.name}</div></a
				>
			{/if}
		{/each}
	</div>
</div>
