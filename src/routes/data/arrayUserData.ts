import type { typeUserData } from '$lib/types/index.js';
import { iconEmail } from '../icons/iconEmail.js';
import { iconGithub } from '../icons/iconGithub.js';
import { iconWhatsapp } from '../icons/iconWhatsapp.js';

export const arrayUserData: typeUserData = [
	{
		stringText: `${iconGithub}&nbsp;GITHUB`,
		stringTarget: '_blank',
		stringHref: 'https://github.com/joaquimnetocel/svelte-bird',
	},
	{
		stringText: `${iconWhatsapp}&nbsp;WHATSAPP`,
		stringTarget: '_blank',
		stringHref: `https://api.whatsapp.com/send?phone=5532991313703&text=${'Hello'}!`,
	},
	{
		stringText: `${iconEmail}&nbsp;E-MAIL`,
		stringTarget: '_blank',
		stringHref: `https://api.whatsapp.com/send?phone=5532991313703&text=${'Hello'}!`,
	},
];
