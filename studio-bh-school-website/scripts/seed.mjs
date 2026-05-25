/**
 * Seed Sanity with initial Bright Horizons Academy content.
 *
 * Usage (from studio-bh-school-website):
 *   $env:SANITY_AUTH_TOKEN="your-token"; node scripts/seed.mjs
 *
 * Create a token at https://sanity.io/manage → API → Tokens (Editor permissions).
 */

import { createClient } from '@sanity/client';

const projectId = 'w4n109hm';
const dataset = 'production';
const token = process.env.SANITY_AUTH_TOKEN;

if (!token) {
	console.error('Set SANITY_AUTH_TOKEN before running this script.');
	process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: '2026-03-01', useCdn: false });

const mission =
	'The mission of Bright Horizons Academy is to provide a faith-based education that blends strong academic instruction with hands-on, project-based learning to ensure students not only master core subjects, but know how to apply them in real life. Our students are challenged to think critically, solve problems, and take ownership of their learning. Through intentional leadership development and real-world skill building, they grow into confident, capable individuals prepared for both higher education and life beyond the classroom. Bright Horizons Academy is a carefully-curated learning community designed for families seeking more than traditional education currently offers. At Bright Horizons Academy, we believe education should be meaningful, engaging, and purpose-driven— guiding each student toward a bright and capable future.';

function dateOffset(days) {
	const d = new Date();
	d.setDate(d.getDate() + days);
	return d.toISOString().slice(0, 10);
}

const documents = [
	{
		_id: 'siteSettings',
		_type: 'siteSettings',
		schoolName: 'Bright Horizons Academy',
		tagline: 'Proactive Learning, Empowered Futures',
		adminEmail: 'admin@brighthorizonsal.org',
		phoneNumber: '(555) 987-6543',
		alertBanner: '',
	},
	{
		_id: 'homePage',
		_type: 'homePage',
		introLine: 'A micro-school community where structure meets individuality.',
		missionStatement: mission,
	},
	{
		_id: 'aboutPage',
		_type: 'aboutPage',
		pageTitle: 'About Bright Horizons Academy',
		introParagraph:
			'Bright Horizons Academy is a carefully-curated learning community for families seeking meaningful, engaging, purpose-driven education.',
		missionStatement: mission,
		sections: [
			{
				_type: 'contentSection',
				heading: 'Our Approach',
				body: 'We blend strong academic instruction with hands-on, project-based learning so students master core subjects and know how to apply them in real life.',
			},
			{
				_type: 'contentSection',
				heading: 'Micro-School Community',
				body: 'With about 10–20 students, we offer a structured environment that still fosters individuality—every learner is known, challenged, and supported.',
			},
			{
				_type: 'contentSection',
				heading: 'Project-Based Learning',
				body: 'Students think critically, solve problems, and take ownership of their learning through intentional projects that connect classroom work to the real world.',
			},
		],
	},
	{
		_id: 'contactPage',
		_type: 'contactPage',
		headline: 'We would love to hear from you',
		bodyText:
			'Whether you are exploring enrollment, scheduling a visit, or have a question about our program, our team is happy to help.',
	},
	{
		_id: 'learningLifePage',
		_type: 'learningLifePage',
		pageTitle: 'Student Life',
		introText:
			'A look at the creative, hands-on work happening across our community—highlights from student life at Bright Horizons Academy.',
		sections: [
			{
				_type: 'contentSection',
				heading: 'Art',
				body: 'Students explore color, form, and expression through projects tied to history, literature, and their own imaginations.',
			},
			{
				_type: 'contentSection',
				heading: 'Music',
				body: 'From rhythm workshops to collaborative performances, music connects discipline with joy and creative risk-taking.',
			},
			{
				_type: 'contentSection',
				heading: 'Project Day',
				body: 'Multi-subject projects bring learning to life through research, building, presenting, and reflecting as a team.',
			},
		],
	},
	{
		_id: 'faq-example-1',
		_type: 'faqItem',
		question: 'What ages or grades do you serve?',
		answer: 'Example: Contact us for current availability and grade levels.',
		isExample: true,
		sortOrder: 1,
	},
	{
		_id: 'faq-example-2',
		_type: 'faqItem',
		question: 'How large are your classes?',
		answer: 'Example: We are a micro-school of about 10–20 students.',
		isExample: true,
		sortOrder: 2,
	},
	{
		_id: 'faq-example-3',
		_type: 'faqItem',
		question: 'Do you offer tours for prospective families?',
		answer: 'Example: Yes. Reach out via our contact page to schedule a visit.',
		isExample: true,
		sortOrder: 3,
	},
	{
		_id: 'faq-example-4',
		_type: 'faqItem',
		question: 'What makes your program different?',
		answer: 'Example: Rigorous academics plus project-based, real-world learning in a small community.',
		isExample: true,
		sortOrder: 4,
	},
	{
		_id: 'calendar-1',
		_type: 'calendarEvent',
		date: dateOffset(0),
		timeLabel: 'All day',
		title: 'Project showcase day',
		description: 'Students present current project work to families.',
	},
	{
		_id: 'calendar-2',
		_type: 'calendarEvent',
		date: dateOffset(7),
		timeLabel: 'All day',
		title: 'Field trip to aquarium',
		linkUrl: 'https://example.com/permission-form',
		linkLabel: 'Permission form',
	},
	{
		_id: 'newsletter-1',
		_type: 'newsletterIssue',
		title: 'Week of May 19',
		weekOf: dateOffset(-7),
		slug: { _type: 'slug', current: 'week-of-may-19' },
		publishedAt: new Date().toISOString(),
		body: [
			{
				_type: 'block',
				_key: 'b1',
				style: 'normal',
				markDefs: [],
				children: [
					{
						_type: 'span',
						_key: 's1',
						text: 'This week students wrapped up their bridge-building project, explored watercolor techniques, and prepared for our upcoming field trip.',
						marks: [],
					},
				],
			},
		],
	},
];

const tx = client.transaction();
for (const doc of documents) {
	tx.createOrReplace(doc);
}

await tx.commit();
console.log(`Seeded ${documents.length} documents to ${projectId}/${dataset}.`);
