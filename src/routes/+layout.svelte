<script lang="ts">
	import Links from '$lib/Links.svelte';
	import Notifications from '$lib/Notifications.svelte';
	import Search from '$lib/Search.svelte';
	import { DarkModeButton, SvelteBird, User } from '$lib/index.js';
	import '../tailwind.css';
	import { arrayNotificationsData } from './data/arrayNotificationsData.js';
	import { arraySidebarData } from './data/arraySidebarData.js';
	import { arrayUserData } from './data/arrayUserData.js';
	import { iconNotification } from './icons/iconNotification.js';
	// DEVELOPMENT
	//import '$lib/tailwind.generated.css'; // PRODUCTION
</script>

<SvelteBird
	propLogoImage="images/logo.webp"
	propLogoWidth={30}
	propTitle={'SVELTE-BIRD'}
	propSidebarData={arraySidebarData}
	propExpandAllMenus={false}
	propLogoHref="/"
>
	<svelte:fragment slot="slotHeader">
		<a class="flex items-end space-x-2 lg:hidden" href="/">
			<img src="images/logo.webp" alt="Logo" width="30" />
			<div class="hidden text-2xl font-bold md:block bold">SVELTE-BIRD</div>
		</a>
		<div class="flex items-center space-x-3 ms-auto">
			<Search />
			<Notifications
				propData={arrayNotificationsData}
				propNewNotifications={true}
				propTitle="NOTIFICATIONS:"
				propIcon={iconNotification}
				propNotFoundMessage={'NO NOTIFICATION FOUND!'}
			/>
			<Links />
			<DarkModeButton />
			<hr class="w-px h-6 border-none bg-slate-200 dark:bg-slate-700" />
			<User
				propUserMenuArray={arrayUserData}
				propTitle="Joaquim"
				propInternalTitle="Joaquim"
				propButtonText="SIGN OUT"
				propButtonLink="/"
				propImage={undefined}
			/>
		</div>
	</svelte:fragment>
	<div class="px-4 py-4">
		<slot />
	</div>
	<svelte-fragment slot="slotFooter">
		<div class="flex items-center justify-between h-8">
			<div>All Rights Reserved ©</div>
			<div>VERSION 0.0.0</div>
		</div>
	</svelte-fragment>
</SvelteBird>
