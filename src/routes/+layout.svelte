<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/home/comps/Navbar.svelte';
	import '../app.pcss';
	$: routeID = $page.route.id?.split('/') || '/';
	let email = $page.data.email;
</script>

{#if routeID[1] !== '(studio)'}
	<Navbar {email} />
{/if}
<slot />
