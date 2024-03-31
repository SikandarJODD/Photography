<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { tabSelected } from '$lib/state';
	import { MailCheck, MoveRight } from 'lucide-svelte';
	import { page } from '$app/stores';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { toast } from 'svelte-sonner';
	import supabase from '$lib';
	export let isUsername: string;
	let user = $page.params.id;
	let userText = '';

	let sendNotify = async () => {
		if (userText === '') {
			toast.error('Please type a message');
		} else {
			try {
				let data = await supabase
					.from('chat')
					.insert({ sender: isUsername, receiver: user, desc: userText, type: $tabSelected });
				console.log(data, 'Data');
			} catch (e) {
				console.log(e);
			} finally {
				userText = '';
				toast.success('Message Sent to ' + user);
			}
		}
	};
</script>

<Dialog.Root>
	<Dialog.Trigger class="{buttonVariants({ variant: 'default' })} w-full">
		Continue
		<MoveRight class="ml-1.5 mt-px" size={20} strokeWidth={1.75} />
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title class="mb-2">Notify : {user}</Dialog.Title>
			<Dialog.Description class="border w-fit px-3.5 py-1 rounded-sm">
				type : {$tabSelected}
			</Dialog.Description>
			<Dialog.Description>
				<Textarea
					bind:value={userText}
					rows="4"
					placeholder="Type your message here"
					class="w-full mt-2"
				/>
			</Dialog.Description>
		</Dialog.Header>
		<!-- <Dialog.Footer>
			<Button on:click={sendNotify} class="w-full">
				Send
				<MailCheck size={20} strokeWidth={1.75} class="ml-1.5 mt-px" />
			</Button>
		</Dialog.Footer> -->
		<DialogPrimitive.Close>
			<Button on:click={sendNotify} class="w-full">
				Send
				<MailCheck size={20} strokeWidth={1.75} class="ml-1.5 mt-px" />
			</Button>
		</DialogPrimitive.Close>
	</Dialog.Content>
</Dialog.Root>
