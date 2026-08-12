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
			description:
				'Write the issue in order. Click the + icon between blocks to add a paragraph or an image with caption.',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Paragraph', value: 'normal' },
						{ title: 'Heading', value: 'h2' },
						{ title: 'Subheading', value: 'h3' },
					],
				},
				{ type: 'captionedImage', title: 'Image with caption' },
			],
		}),
		defineField({
			name: 'images',
			title: 'Images (legacy)',
			type: 'array',
			of: [{ type: 'captionedImage' }],
			deprecated: {
				reason:
					'Insert images in the Body field (click + between paragraphs) so photos appear in order with your text. Existing images here still show at the bottom of the issue until you move them.',
			},
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
