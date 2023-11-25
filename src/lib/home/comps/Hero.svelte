<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Image, Users } from 'lucide-svelte';
</script>

<div class="bg-white dark:bg-slate-950">
	<div class="relative isolate">
		<div class="overflow-hidden">
			<div class="mx-auto max-w-7xl px-4 md:px-6 pb-5 pt-5 sm:pt-5 lg:px-8 lg:pt-6">
				<div class="mx-auto max-w-2xl lg:mx-0 lg:flex lg:max-w-none lg:items-center">
					<div
						class="w-full flex flex-col items-center lg:items-start max-w-xl md:max-w-full lg:max-w-xl lg:shrink-0 xl:max-w-3xl lg:mb-56"
					>
						<h1
							class="mainTitle w-full md:w-fit text-center md:text-left text-4xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 capitalize"
						>
							When I photograph I make love.
						</h1>
						<p
							class="text-center lg:text-start relative mt-6 lg:my-8 text-lg leading-8 text-gray-500/80 sm:max-w-md lg:max-w-none lg:text-xl subtitle"
						>
							The art of <span class="text-primary">photography</span> is all about directing the attention
							of the viewer.
						</p>
						<div class="mt-5 flex items-center justify-center md:justify-start gap-x-2 md:gap-x-6">
							<Button size="lg"
								><Users size="20" strokeWidth="1.3" class="mr-1.5" /> Profiles</Button
							>
							<Button size="lg"><Image size="20" strokeWidth="1.3" class="mr-1.5" />Moments</Button>
							<!-- <Button size="lg" variant="outline" class="border border-primary"
								><img src={imgsIcon} class="h-6 w-6 mr-2" alt="imagesicon" /> Moments</Button
							> -->
						</div>
					</div>
					<div
						class="mt-14 flex md:hidden lg:flex justify-around md:justify-end md:gap-6 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 lg:ml-10 xl:-ml-16"
					>
						<div
							class="hidden xl:flex ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
						>
							<div class="relative">
								<img
									src="https://i.pinimg.com/564x/76/c9/7e/76c97e7331503011369f148eda57166c.jpg"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								/>
							</div>
						</div>
						<div
							class="md:mr-auto w-44 md:w-40 xl:w-48 flex-none space-y-3 md:space-y-6 sm:mr-0 sm:pt-52 lg:pt-32 px-1 md:px-0"
						>
							<div class="relative">
								<img
									src="https://i.pinimg.com/564x/85/5a/a4/855aa454d29a158207932db836f0c8a6.jpg"
									alt=""
									class="aspect-[2/3] w-full rounded-xl object-cover shadow-md"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								/>
							</div>
							<div class="relative">
								<img
									src="https://i.pinimg.com/564x/81/a9/1e/81a91e4a8097632e374a17459ff6a7d6.jpg"
									alt=""
									class="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								/>
							</div>
						</div>
						<div
							class="w-44 md:w-40 xl:w-48 flex-none space-y-3 md:space-y-6 md:mr-0 pt-0 sm:pt-0 px-1 md:px-0"
						>
							<div class="relative">
								<img
									src="https://i.pinimg.com/564x/f1/f8/39/f1f839cf6dff6d4133f13e43fdc5d446.jpg "
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								/>
							</div>
							<div class="relative">
								<img
									src="https://i.pinimg.com/564x/41/f0/cb/41f0cb9e6950ab91f50c17ab787ac29a.jpg"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Poppins:wght@300;500&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
	.subtitle {
		font-family: 'Poppins', sans-serif;
		font-weight: 300;
	}
	.mainTitle {
		font-family: 'Inter', sans-serif;
	}
</style>
