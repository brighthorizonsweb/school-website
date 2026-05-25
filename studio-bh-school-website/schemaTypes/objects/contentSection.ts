import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'contentSection',
	title: 'Content Section',
	type: 'object',
	fields: [
		defineField({
			name: 'heading',
			title: 'Heading',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'text',
			rows: 5,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'captionedImage' }],
		}),
	],
	preview: {
		select: { title: 'heading' },
	},
});
