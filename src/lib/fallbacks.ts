import type {
	AboutPage,
	CalendarEvent,
	ContactPage,
	FaqItem,
	HomePage,
	LearningLifePage,
	NewsletterIssue,
	SiteSettings,
} from './types';
import { DEFAULT_EMAIL, DEFAULT_MISSION, DEFAULT_PHONE, DEFAULT_SCHOOL_NAME, DEFAULT_TAGLINE } from './types';

export const fallbackSiteSettings: SiteSettings = {
	schoolName: DEFAULT_SCHOOL_NAME,
	tagline: DEFAULT_TAGLINE,
	adminEmail: DEFAULT_EMAIL,
	phoneNumber: DEFAULT_PHONE,
	alertBanner: '',
};

export const fallbackHomePage: HomePage = {
	introLine: 'A micro-school community where structure meets individuality.',
	missionStatement: DEFAULT_MISSION,
};

export const fallbackAboutPage: AboutPage = {
	pageTitle: 'About Bright Horizons Academy',
	introParagraph:
		'Bright Horizons Academy is a carefully-curated learning community for families seeking meaningful, engaging, purpose-driven education.',
	missionStatement: DEFAULT_MISSION,
	sections: [
		{
			heading: 'Our Approach',
			body: 'We blend strong academic instruction with hands-on, project-based learning so students master core subjects and know how to apply them in real life.',
		},
		{
			heading: 'Micro-School Community',
			body: 'With about 10–20 students, we offer a structured environment that still fosters individuality—every learner is known, challenged, and supported.',
		},
		{
			heading: 'Project-Based Learning',
			body: 'Students think critically, solve problems, and take ownership of their learning through intentional projects that connect classroom work to the real world.',
		},
	],
};

export const fallbackContactPage: ContactPage = {
	headline: 'We would love to hear from you',
	bodyText:
		'Whether you are exploring enrollment, scheduling a visit, or have a question about our program, our team is happy to help. Please reach out and we will respond as soon as we can.',
};

export const fallbackLearningLifePage: LearningLifePage = {
	pageTitle: 'Student Life',
	introText:
		'A look at the creative, hands-on work happening across our community—stories and highlights from student life at Bright Horizons Academy.',
	sections: [
		{
			heading: 'Art',
			body: 'Students explore color, form, and expression through projects tied to history, literature, and their own imaginations—building confidence along with skill.',
		},
		{
			heading: 'Music',
			body: 'From rhythm workshops to collaborative performances, music at Bright Horizons connects discipline with joy and creative risk-taking.',
		},
		{
			heading: 'Project Day',
			body: 'Multi-subject projects bring learning to life: research, building, presenting, and reflecting as a team—just like the real world asks us to do.',
		},
	],
};

export const fallbackFaqItems: FaqItem[] = [
	{
		_id: 'example-1',
		question: 'What ages or grades do you serve?',
		answer:
			'Example: Bright Horizons Academy serves a small multi-age cohort. Contact us for current availability and grade levels.',
		isExample: true,
		sortOrder: 1,
	},
	{
		_id: 'example-2',
		question: 'How large are your classes?',
		answer:
			'Example: We are a micro-school of about 10–20 students, designed for individualized attention within a structured community.',
		isExample: true,
		sortOrder: 2,
	},
	{
		_id: 'example-3',
		question: 'Do you offer tours for prospective families?',
		answer: 'Example: Yes. Reach out via our contact page to schedule a visit and learn more about our approach.',
		isExample: true,
		sortOrder: 3,
	},
	{
		_id: 'example-4',
		question: 'What makes your program different?',
		answer:
			'Example: We combine rigorous academics with project-based, real-world learning in an intentionally small community.',
		isExample: true,
		sortOrder: 4,
	},
];

function formatDateOffset(daysFromToday: number): string {
	const date = new Date();
	date.setDate(date.getDate() + daysFromToday);
	return date.toISOString().slice(0, 10);
}

export const fallbackCalendarEvents: CalendarEvent[] = [
	{
		_id: 'example-cal-1',
		date: formatDateOffset(-14),
		timeLabel: 'All day',
		title: 'Example: Spring community picnic',
		description: 'Past example event for layout preview.',
	},
	{
		_id: 'example-cal-2',
		date: formatDateOffset(-3),
		timeLabel: '2:00 PM',
		title: 'Example: Parent information session',
	},
	{
		_id: 'example-cal-3',
		date: formatDateOffset(0),
		timeLabel: 'All day',
		title: 'Example: Project showcase day',
		description: 'Students present current project work to families.',
	},
	{
		_id: 'example-cal-4',
		date: formatDateOffset(7),
		timeLabel: 'All day',
		title: 'Field trip to aquarium',
		description: 'Example upcoming event.',
		linkUrl: 'https://example.com/permission-form',
		linkLabel: 'Permission form',
	},
	{
		_id: 'example-cal-5',
		date: formatDateOffset(21),
		timeLabel: '6:30 PM',
		title: 'Example: End-of-term celebration',
	},
];

export const fallbackNewsletterIssues: NewsletterIssue[] = [
	{
		_id: 'example-news-1',
		title: 'Week of May 19 — Example Issue',
		weekOf: formatDateOffset(-7),
		slug: { current: 'week-of-may-19-example' },
		teaser:
			'Example newsletter content: This week students wrapped up their bridge-building project, explored watercolor techniques, and prepared for our upcoming field trip...',
	},
];

export const fallbackNewsletterDetail: NewsletterIssue = {
	_id: 'example-news-1',
	title: 'Week of May 19 — Example Issue',
	weekOf: formatDateOffset(-7),
	slug: { current: 'week-of-may-19-example' },
	body: [
		{
			_type: 'block',
			_key: 'example1',
			style: 'normal',
			markDefs: [],
			children: [
				{
					_type: 'span',
					_key: 's1',
					text: 'Example newsletter: This week students wrapped up their bridge-building project in science, shared watercolor landscapes in art, and rehearsed pieces for our small-group music recital.',
					marks: [],
				},
			],
		},
		{
			_type: 'block',
			_key: 'example2',
			style: 'normal',
			markDefs: [],
			children: [
				{
					_type: 'span',
					_key: 's2',
					text: 'Look for permission forms for our upcoming aquarium field trip. Thank you for partnering with us in your child\'s learning journey.',
					marks: [],
				},
			],
		},
	],
};
