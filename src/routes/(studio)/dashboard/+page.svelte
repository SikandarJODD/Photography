<script lang="ts">
	export let data;
	console.log(data.chatUsers, 'Chat users');
	let chatUsers = data.chatUsers;
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
				<div class="mt-8 flow-root">
					<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
									<tr>
										{#each chatUsers || [] as item, i}
											<td
												class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0"
												>{i + 1}</td
											>
											<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
												<a href="/profiles/{item.sender}">{item.sender}</a>
											</td>
											<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{item.desc}</td>
											<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{item.type}</td>
											<!-- <td
												class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
											>
												<a href="#" class="text-indigo-400 hover:text-indigo-300">Edit</a>
											</td> -->
										{:else}
											No Notifications
										{/each}
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
