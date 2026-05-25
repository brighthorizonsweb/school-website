import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'newsletterIssue',
	title: 'Newsletter Issue',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'weekOf',
			title: 'Week Of',
			type: 'date',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title', maxLength: 96 },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'captionedImage' }],
		}),
	],
	orderings: [
		{
			title: 'Week Of, Newest',
			name: 'weekOfDesc',
			by: [{ field: 'weekOf', direction: 'desc' }],
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'weekOf' },
	},
});
