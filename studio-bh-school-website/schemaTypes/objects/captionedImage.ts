import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'captionedImage',
	title: 'Captioned Image',
	type: 'object',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'alt',
			title: 'Alt Text',
			type: 'string',
			description: 'Describe the image for accessibility.',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'caption',
			title: 'Caption',
			type: 'string',
		}),
	],
	preview: {
		select: { title: 'caption', media: 'image', subtitle: 'alt' },
	},
});
