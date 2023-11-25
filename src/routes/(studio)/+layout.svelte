<script>
	import { page } from '$app/stores';
	import StudioLayout from '$lib/home/studio/StudioLayout.svelte';
</script>

<StudioLayout email={$page.data.email}>
	<slot />
</StudioLayout>
