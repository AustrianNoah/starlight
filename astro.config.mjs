// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PocketCloudSystem',
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/PocketCloudSystem/PocketCloud' 
				},
				{ 
					icon: 'discord', 
					label: 'Discord', 
					href: 'https://discord.gg/9kJjqcsH7B'
				},
			],
			sidebar: [
				{ slug: 'home/home'},
				{ slug: 'features/features' },
				{
					label: "Installation",
					items: [
						{ label: 'Requirements', slug: 'installation/requirements'},
						{ label: 'Installation', slug: 'installation/installation'},					
					]
				},

				{
					label: "Modules",
					items: [
						{
							label: 'Sign Module', slug: 'modules/signmodule',
						}
					]
				}
				
			],
		}),
	],
});
