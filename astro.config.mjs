// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://about.kaharagia.org',
	integrations: [
		starlight({
			title: 'Kaharagia Docs',
			customCss: ['./src/styles/kaharagia.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kaharez/about.kaharagia' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
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
