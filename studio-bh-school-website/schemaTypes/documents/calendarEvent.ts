import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'calendarEvent',
	title: 'Calendar Event',
	type: 'document',
	fields: [
		defineField({
			name: 'date',
			title: 'Date',
			type: 'date',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'timeLabel',
			title: 'Time Label',
			type: 'string',
			description: 'e.g. "All day" or "3:00 PM"',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'linkUrl',
			title: 'Link URL',
			type: 'url',
		}),
		defineField({
			name: 'linkLabel',
			title: 'Link Label',
			type: 'string',
			description: 'e.g. "Permission form"',
		}),
	],
	orderings: [
		{
			title: 'Date, Earliest',
			name: 'dateAsc',
			by: [{ field: 'date', direction: 'asc' }],
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'date' },
	},
});
