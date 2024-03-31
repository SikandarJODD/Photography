<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let data;
	console.log(data.chatUsers, 'Chat users');
	let chatUsers = data.chatUsers;
	$: ({ chatSender } = data);
	let isClickedonSend = false;
</script>

<div class="bg-gray-900">
	<div class="mx-auto max-w-7xl">
		<div class="bg-slate-900 border border-primary/50 py-10">
			<div class="px-4 sm:px-6 lg:px-8">
				<div class="sm:flex sm:items-center">
					<div class="sm:flex-auto">
						<h1 class="text-base md:text-2xl font-semibold leading-6 text-white">
							Notification Management
						</h1>
						<p class="mt-2 text-sm text-gray-300">
							A list of all the Notifications that are currently active
						</p>
					</div>
				</div>
				<div class="mt-2 flex items-center gap-2">
					<Button
						size="sm"
						on:click={() => {
							isClickedonSend = true;
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="17"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-send mr-1"
							><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg
						> Send</Button
					>
					<Button
						size="sm"
						on:click={() => {
							isClickedonSend = false;
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="17"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-1"
							><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path
								d="M8 10h.01"
							/><path d="M12 10h.01" /><path d="M16 10h.01" /></svg
						>
						Receive</Button
					>
				</div>
				<div class="mt-8 flow-root">
					<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
							{#if isClickedonSend}
								{#if chatSender.length > 0}
									<table class="min-w-full divide-y divide-gray-700">
										<thead>
											<tr>
												<th
													scope="col"
													class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
													>ID</th
												>
												<th
													scope="col"
													class="px-3 py-3.5 text-left text-sm font-semibold text-white">Sender</th
												>
												<th
													scope="col"
													class="px-3 py-3.5 text-left text-sm font-semibold text-white"
													>Receiver</th
												>
												<th
													scope="col"
													class="px-3 py-3.5 text-left text-sm font-semibold text-white">Message</th
												>
												<th
													scope="col"
													class="px-3 py-3.5 text-left text-sm font-semibold text-white">Type</th
												>
												<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
													<span class="sr-only">Edit</span>
												</th>
											</tr>
										</thead>
										<tbody class="divide-y divide-gray-800">
											{#each chatSender || [] as item, i}
												<tr>
													<td
														class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
														>{i + 1}</td
													>
													<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
														<a href="/profiles/{item.sender}" class="hover:text-gray-100"
															>{item.sender}</a
														>
													</td>
													<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
														<a href="/profiles/{item.sender}" class="hover:text-gray-100"
															>{item.receiver}</a
														>
													</td>
													<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
														>{item.desc}</td
													>
													<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
														>{item.type}</td
													>
												</tr>
											{/each}
										</tbody>
									</table>
								{:else}
									<Separator />
									<div class="flex items-center justify-center h-24">
										<p class="text-gray-300">No Notifications to show</p>
									</div>
								{/if}
							{:else if chatUsers.length > 0}
								<table class="min-w-full divide-y divide-gray-700">
									<thead>
										<tr>
											<th
												scope="col"
												class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
												>ID</th
											>
											<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white"
												>Sender</th
											>
											<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white"
												>Message</th
											>
											<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white"
												>Type</th
											>
											<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
												<span class="sr-only">Edit</span>
											</th>
										</tr>
									</thead>
									<tbody class="divide-y divide-gray-800">
										{#each chatUsers || [] as item, i}
											<tr>
												<td
													class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
													>{i + 1}</td
												>
												<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
													<a href="/profiles/{item.sender}">{item.sender}</a>
												</td>
												<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
													>{item.desc}</td
												>
												<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300"
													>{item.type}</td
												>
											</tr>
										{/each}
									</tbody>
								</table>
							{:else}
								<Separator />
								<div class="flex items-center justify-center h-24">
									<p class="text-gray-300">No Notifications to show</p>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
