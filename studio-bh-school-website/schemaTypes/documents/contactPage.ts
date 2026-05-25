import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'contactPage',
	title: 'Contact Page',
	type: 'document',
	fields: [
		defineField({
			name: 'headline',
			title: 'Headline',
			type: 'string',
			initialValue: 'We would love to hear from you',
		}),
		defineField({
			name: 'bodyText',
			title: 'Body Text',
			type: 'text',
			rows: 4,
		}),
	],
});
