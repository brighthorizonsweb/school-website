import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'facultyMember',
	title: 'Faculty Member',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (R) => R.required(),
		}),
		defineField({
			name: 'title',
			title: 'Title / Role',
			type: 'string',
			description: 'e.g. "Lead Instructor", "Learning Specialist"',
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'text',
			rows: 4,
		}),
		defineField({
			name: 'headshot',
			title: 'Headshot',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({
			name: 'sortOrder',
			title: 'Sort Order',
			type: 'number',
			description: 'Lower numbers appear first (leave blank to sort by creation date)',
		}),
	],
	preview: {
		select: { title: 'name', subtitle: 'title', media: 'headshot' },
	},
});
