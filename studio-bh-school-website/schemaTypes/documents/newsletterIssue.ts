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
			name: 'format',
			title: 'Issue format',
			type: 'string',
			initialValue: 'page',
			options: {
				list: [
					{ title: 'Web page (text and images)', value: 'page' },
					{ title: 'PDF', value: 'pdf' },
				],
				layout: 'radio',
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'array',
			description:
				'Write the issue in order. Click the + icon between blocks to add a paragraph or an image with caption.',
			hidden: ({ document }) => document?.format === 'pdf',
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
			validation: (rule) =>
				rule.custom((value, context) => {
					if (context.document?.format !== 'page') return true;
					return value && value.length > 0 ? true : 'Add newsletter content, or switch to PDF.';
				}),
		}),
		defineField({
			name: 'pdf',
			title: 'Newsletter PDF',
			type: 'file',
			options: { accept: 'application/pdf' },
			hidden: ({ document }) => document?.format !== 'pdf',
			validation: (rule) =>
				rule.custom((value, context) => {
					if (context.document?.format !== 'pdf') return true;
					const file = value as { asset?: { _ref?: string } } | undefined;
					return file?.asset?._ref ? true : 'Upload a PDF for this issue.';
				}),
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
		select: { title: 'title', weekOf: 'weekOf', format: 'format' },
		prepare({ title, weekOf, format }) {
			const kind = format === 'pdf' ? 'PDF' : 'Web page';
			return {
				title,
				subtitle: weekOf ? `${weekOf} · ${kind}` : kind,
			};
		},
	},
});
