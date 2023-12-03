<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import HomeIcon from '$lib/images/icons/home.png';
	import { slide } from 'svelte/transition';
	import { CameraIcon, Home, ImageIcon, LogIn, Menu, User2, X } from 'lucide-svelte';
	import ProfileIcon from '../studio/ProfileIcon.svelte';
	import ToggleMode from '$lib/home/comps/ToggleMode.svelte';
	import { emailStatus } from '$lib/state';

	let allData = {
		title: 'Camero',
		img: HomeIcon,
		navs: [
			{
				name: 'Home',
				link: '/',
				icon: Home
			},
			{
				name: 'Photographers',
				link: '/profiles',
				icon: CameraIcon
			},
			{
				name: 'Collection',
				link: '/photos',
				icon: ImageIcon
			},
			{
				name: 'About Us',
				link: '/',
				icon: User2
			}
		]
	};
	let isOpen = false;
	export let email = '';
</script>

<header class="bg-white dark:bg-gray-900 border-b border-slate-400">
	<nav
		class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-3 lg:px-8"
		aria-label="Global"
	>
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5 flex items-center gap-2">
				<span class="sr-only">Your Company</span>
				<img class="h-8 w-auto" src={allData.img} alt={allData.title} />
				<h1 class="font-bold text-xl">{allData.title}</h1>
			</a>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each allData.navs as item}
				<a
					href={item.link}
					class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:bg-gray-200/80 dark:hover:bg-gray-700/40 transition-all duration-200 px-2.5 py-1.5 rounded-md"
					>{item.name}</a
				>
			{/each}
		</div>
		<div class="flex flex-1 items-center justify-end gap-x-2">
			{#if email.length === 0}
				<!-- content here -->
				<ToggleMode />
				<Button variant="outline" class="border-primary/50 hidden md:flex" href="/login"
					>Log In</Button
				>
				<Button href="/signup">Sign Up</Button>
			{:else}
				<ToggleMode />
				<ProfileIcon />
			{/if}
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => (isOpen = true)}
			>
				<span class="sr-only">Open main menu</span>
				<Menu strokeWidth="1.6" />
			</button>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="{isOpen ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="{isOpen ? 'visible ' : 'hidden'} fixed inset-0 z-10" />
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center {email !== '' ? 'justify-between' : ''}  gap-x-6">
				<a href="/" class="-m-1.5 p-1.5 flex items-center gap-2">
					<span class="sr-only">Your Company</span>
					<img class="h-8 w-auto" src={allData.img} alt="Logo Title" />
					<h1 class="font-bold text-xl text-primary">{allData.title}</h1>
				</a>
				{#if email.length === 0}
					<Button href="/signup" class="ml-auto">Sign Up</Button>
				{:else}
					<div class="ml-auto">
						<ProfileIcon />
					</div>
				{/if}
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
					on:click={() => (isOpen = false)}
				>
					<span class="sr-only">Close menu</span>
					<X strokeWidth="1.6" />
				</button>
			</div>
			<div class="mt-5 flow-root">
				{#key isOpen}
					<div class="-my-6 flex flex-col h-[88vh]" in:slide={{ duration: 400 }}>
						<div class="space-y-1 py-6">
							{#each allData.navs as item}
								<a
									on:click={() => (isOpen = false)}
									href={item.link}
									class="-mx-3 flex items-center gap-x-1.5 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-50"
								>
									<div class="flex items-center gap-x-1.5">
										<svelte:component this={item.icon} strokeWidth="1.3" size="22" />
										{item.name}
									</div>
									{#if item.name === 'Photographers'}
										<span
											class="ml-1 inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
										>
											<svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
												<circle cx="3" cy="3" r="3" />
											</svg>
											New
										</span>
									{/if}
								</a>
							{/each}
						</div>
						<div class="flex justify-end gap-x-2">
							<ToggleMode />
							{#if email.length === 0}
								<Button href="/login" on:click={() => (isOpen = false)}
									><LogIn strokeWidth="1.3" size="19" class="mr-2 p-0 " /> Log in</Button
								>
							{/if}
						</div>
					</div>
				{/key}
			</div>
		</div>
	</div>
</header>
