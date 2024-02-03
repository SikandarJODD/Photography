<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/comps/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import '../app.css';
	$: routeID = $page.route.id?.split('/') || '/';
	export let data;
	import { onNavigate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<ModeWatcher />
<Toaster />
{#if routeID[1] !== '(studio)'}
	<Navbar email={data.email} />
{/if}
<slot />
