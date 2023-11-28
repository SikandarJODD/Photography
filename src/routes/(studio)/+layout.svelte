<script>
	import StudioLayout from '$lib/home/studio/StudioLayout.svelte';
	export let data;
	// import { onNavigate } from '$app/navigation';

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
</script>

<StudioLayout email={data.email}>
	<slot />
</StudioLayout>
