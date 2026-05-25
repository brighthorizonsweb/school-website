import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'faqItem',
	title: 'FAQ Item',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Question',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'answer',
			title: 'Answer',
			type: 'text',
			rows: 4,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'isExample',
			title: 'Example Item',
			type: 'boolean',
			description: 'Mark as an example placeholder for editors.',
			initialValue: false,
		}),
		defineField({
			name: 'sortOrder',
			title: 'Sort Order',
			type: 'number',
			initialValue: 0,
		}),
	],
	orderings: [
		{
			title: 'Sort Order',
			name: 'sortOrderAsc',
			by: [{ field: 'sortOrder', direction: 'asc' }],
		},
	],
	preview: {
		select: { title: 'question', subtitle: 'isExample' },
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: subtitle ? 'Example' : 'Live',
			};
		},
	},
});
