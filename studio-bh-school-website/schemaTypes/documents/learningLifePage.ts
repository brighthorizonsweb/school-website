import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'learningLifePage',
	title: 'Student Life Page',
	type: 'document',
	fields: [
		defineField({
			name: 'pageTitle',
			title: 'Page Title',
			type: 'string',
			initialValue: 'Student Life',
		}),
		defineField({
			name: 'introText',
			title: 'Intro Text',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'sections',
			title: 'Sections',
			type: 'array',
			of: [{ type: 'contentSection' }],
			description: 'Subject sections such as Art, Music, or Project Day.',
		}),
	],
});
