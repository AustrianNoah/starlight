// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PocketCloudSystem',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/PocketCloudSystem/PocketCloud' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/9kJjqcsH7B'},
			],
			sidebar: [
				{ slug: 'home/home'},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				
			],
		}),
	],
});
