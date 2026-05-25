import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'siteSettings',
	title: 'Site Settings',
	type: 'document',
	fields: [
		defineField({
			name: 'schoolName',
			title: 'School Name',
			type: 'string',
			initialValue: 'Bright Horizons Academy',
		}),
		defineField({
			name: 'tagline',
			title: 'Tagline',
			type: 'string',
			initialValue: 'Proactive Learning, Empowered Futures',
		}),
		defineField({
			name: 'alertBanner',
			title: 'Alert Banner',
			type: 'string',
			description: 'Optional site-wide notice shown at the top of every page.',
		}),
		defineField({
			name: 'adminEmail',
			title: 'Admin Email',
			type: 'string',
			initialValue: 'admin@brighthorizonsal.org',
		}),
		defineField({
			name: 'phoneNumber',
			title: 'Phone Number',
			type: 'string',
			initialValue: '(555) 987-6543',
		}),
	],
});
