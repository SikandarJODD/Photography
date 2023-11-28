<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/comps/Navbar.svelte';
	import '../app.pcss';
	import '../app.css';
	$: routeID = $page.route.id?.split('/') || '/';
	export let data;
	import { onNavigate } from '$app/navigation';

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

{#if routeID[1] !== '(studio)'}
	<Navbar email={data.email} />
{/if}
<slot />
