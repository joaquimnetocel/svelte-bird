<script lang="ts">
	import { ColorScheme, Header, SvelteBird, User } from '$lib/index.js';
	import '../tailwind.css';
	import imageLogo from './imageLogo.webp';

	// DEVELOPMENT
	//import '$lib/tailwind.generated.css'; // PRODUCTION
</script>

<SvelteBird>
	<Header>
		<a class="flex items-end space-x-2 lg:hidden" href="/">
			<img src={imageLogo} alt="Logo" width="30" />
			<div class="hidden text-2xl font-bold md:block bold">SVELTE-BIRD</div>
		</a>
		<div class="flex items-center space-x-3 ms-auto">
			<div>
				<button
					class="flex items-center justify-center w-8 h-8 ml-3 rounded-full false bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80"
					aria-controls="search-modal"
				>
					<span class="sr-only">Search</span><svg
						class="w-4 h-4"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="fill-current text-slate-500 dark:text-slate-400"
							d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
						/>
						<path
							class="fill-current text-slate-400 dark:text-slate-500"
							d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
						/>
					</svg>
				</button>

				<div
					class="fixed inset-0 z-50 transition-opacity bg-slate-900 bg-opacity-30"
					aria-hidden="true"
					style="display: none"
				/>
				<div
					id="search-modal"
					class="fixed inset-0 z-50 flex items-start justify-center px-4 mb-4 overflow-hidden top-20 sm:px-6"
					role="dialog"
					aria-modal="true"
					style="display: none"
				>
					<div
						class="w-full max-w-2xl max-h-full overflow-auto bg-white border border-transparent rounded shadow-lg dark:border-slate-700 dark:bg-slate-800"
					>
						<form class="border-b border-slate-200 dark:border-slate-700">
							<div class="relative">
								<label for="search" class="sr-only">Search</label><input
									id="search"
									class="w-full py-3 pl-10 pr-4 bg-white border-0 appearance-none placeholder-slate-400 focus:ring-transparent dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-500"
									type="search"
									placeholder="Search Anything…"
								/><button
									class="absolute inset-0 right-auto group"
									type="submit"
									aria-label="Search"
								>
									<svg
										class="w-4 h-4 ml-4 mr-2 fill-current shrink-0 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400"
										viewBox="0 0 16 16"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
										/>
										<path
											d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
										/>
									</svg>
								</button>
							</div>
						</form>
						<div class="px-2 py-4">
							<div class="mb-3 last:mb-0">
								<div
									class="px-2 mb-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500"
								>
									Recent searches
								</div>
								<ul class="text-sm">
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
												/></svg
											><span>Form Builder - 23 hours on-demand video</span></a
										>
									</li>
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
												/></svg
											><span>Access Mosaic on mobile and TV</span></a
										>
									</li>
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
												/></svg
											><span>Product Update - Q4 2021</span></a
										>
									</li>
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
												/></svg
											><span>Master Digital Marketing Strategy course</span></a
										>
									</li>
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
												/></svg
											><span>Dedicated forms for products</span></a
										>
									</li>
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
												/></svg
											><span>Product Update - Q4 2021</span></a
										>
									</li>
								</ul>
							</div>
							<div class="mb-3 last:mb-0">
								<div
									class="px-2 mb-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500"
								>
									Recent pages
								</div>
								<ul class="text-sm">
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
												/></svg
											><span
												><span class="font-medium">Messages</span> -
												<span class="text-slate-600 group-hover:text-white dark:text-slate-400"
													>Conversation / … / Mike Mills</span
												></span
											></a
										>
									</li>
									<li>
										<a
											class="flex items-center p-2 rounded group text-slate-800 hover:bg-indigo-500 hover:text-white dark:text-slate-100"
											href="/#0"
											><svg
												class="w-4 h-4 mr-3 fill-current shrink-0 text-slate-400 group-hover:text-white group-hover:text-opacity-50 dark:text-slate-500"
												viewBox="0 0 16 16"
											>
												<path
													d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
												/></svg
											><span
												><span class="font-medium">Messages</span> -
												<span class="text-slate-600 group-hover:text-white dark:text-slate-400"
													>Conversation / … / Eva Patrick</span
												></span
											></a
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="relative inline-flex">
				<button
					class="flex items-center justify-center w-8 h-8 rounded-full false bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<span class="sr-only">Notifications</span><svg
						class="w-4 h-4"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="fill-current text-slate-500 dark:text-slate-400"
							d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
						/>
						<path
							class="fill-current text-slate-400 dark:text-slate-500"
							d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
						/>
					</svg>
					<div
						class="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-500 dark:border-[#182235]"
					/>
				</button>
				<div
					class="min-w-80 absolute right-0 top-full z-10 -mr-48 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:mr-0"
					style="display: none"
				>
					<div>
						<div
							class="px-4 pb-2 pt-1.5 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500"
						>
							Notifications
						</div>
						<ul>
							<li class="border-b border-slate-200 last:border-0 dark:border-slate-700">
								<a class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20" href="/#0"
									><span class="block mb-2 text-sm"
										>📣
										<span class="font-medium text-slate-800 dark:text-slate-100"
											>Edit your information in a swipe</span
										>
										Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</span
									><span class="block text-xs font-medium text-slate-400 dark:text-slate-500"
										>Feb 12, 2021</span
									></a
								>
							</li>
							<li class="border-b border-slate-200 last:border-0 dark:border-slate-700">
								<a class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20" href="/#0"
									><span class="block mb-2 text-sm"
										>📣
										<span class="font-medium text-slate-800 dark:text-slate-100"
											>Edit your information in a swipe</span
										>
										Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</span
									><span class="block text-xs font-medium text-slate-400 dark:text-slate-500"
										>Feb 9, 2021</span
									></a
								>
							</li>
							<li class="border-b border-slate-200 last:border-0 dark:border-slate-700">
								<a class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20" href="/#0"
									><span class="block mb-2 text-sm"
										>🚀<span class="font-medium text-slate-800 dark:text-slate-100"
											>Say goodbye to paper receipts!</span
										>
										Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</span
									><span class="block text-xs font-medium text-slate-400 dark:text-slate-500"
										>Jan 24, 2020</span
									></a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="relative inline-flex">
				<button
					class="flex items-center justify-center w-8 h-8 rounded-full false bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<span class="sr-only">Need help?</span><svg
						class="w-4 h-4"
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="fill-current text-slate-500 dark:text-slate-400"
							d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
						/>
					</svg>
				</button>
				<div
					class="min-w-44 absolute right-0 top-full z-10 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800"
					style="display: none"
				>
					<div>
						<div
							class="px-3 pb-2 pt-1.5 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500"
						>
							Need help?
						</div>
						<ul>
							<li>
								<a
									class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
									href="/#0"
									><svg
										class="w-3 h-3 mr-2 text-indigo-300 fill-current shrink-0 dark:text-indigo-500"
										viewBox="0 0 12 12"
									>
										<rect y="3" width="12" height="9" rx="1" />
										<path d="M2 0h8v2H2z" /></svg
									><span>Documentation</span></a
								>
							</li>
							<li>
								<a
									class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
									href="/#0"
									><svg
										class="w-3 h-3 mr-2 text-indigo-300 fill-current shrink-0 dark:text-indigo-500"
										viewBox="0 0 12 12"
									>
										<path
											d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
										/></svg
									><span>Support Site</span></a
								>
							</li>
							<li>
								<a
									class="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
									href="/#0"
									><svg
										class="w-3 h-3 mr-2 text-indigo-300 fill-current shrink-0 dark:text-indigo-500"
										viewBox="0 0 12 12"
									>
										<path
											d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
										/></svg
									><span>Contact us</span></a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<ColorScheme />
			<hr class="w-px h-6 border-none bg-slate-200 dark:bg-slate-700" />
			<User />
		</div>
	</Header>
	<slot />
</SvelteBird>
