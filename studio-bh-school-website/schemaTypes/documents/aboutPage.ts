import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'aboutPage',
	title: 'About Page',
	type: 'document',
	fields: [
		defineField({
			name: 'pageTitle',
			title: 'Page Title',
			type: 'string',
			initialValue: 'About Bright Horizons Academy',
		}),
		defineField({
			name: 'introParagraph',
			title: 'Intro Paragraph',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'missionStatement',
			title: 'Mission Statement',
			type: 'text',
			rows: 10,
		}),
		defineField({
			name: 'sections',
			title: 'Sections',
			type: 'array',
			of: [{ type: 'contentSection' }],
			description: 'Additional sections such as Our Approach, Micro-School Community, etc.',
		}),
	],
});
