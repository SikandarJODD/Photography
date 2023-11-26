<script lang="ts">
	import { goto } from '$app/navigation';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
	import { Home, LogIn, UserCog } from 'lucide-svelte';
	export let isOpen = false;
</script>

<AlertDialog.Root bind:open={isOpen}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title class="flex items-center ">
				<UserCog class="mr-2" size="21" strokeWidth="1.6" />
				Login to View Your Profile</AlertDialog.Title
			>
			<AlertDialog.Description>You Need to Login to View Your Profile..</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel
				on:click={() => {
					goto('/');
				}}
			>
				<Home size="18" class="mr-1.5" strokeWidth="1.5" />
				Home</AlertDialog.Cancel
			>
			<AlertDialog.Action
				on:click={() => {
					goto('/login');
				}}
			>
				<LogIn size="18" class="mr-1.5" strokeWidth="1.5" />
				Login</AlertDialog.Action
			>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
