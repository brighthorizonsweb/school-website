import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'homePage',
	title: 'Home Page',
	type: 'document',
	fields: [
		defineField({
			name: 'introLine',
			title: 'Intro Line',
			type: 'string',
			description: 'Optional short line displayed beneath the logo on the home page.',
		}),
		defineField({
			name: 'missionStatement',
			title: 'Mission Statement',
			type: 'text',
			rows: 10,
		}),
	],
});
