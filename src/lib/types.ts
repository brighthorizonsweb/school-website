import type { PortableTextBlock } from '@portabletext/types';

export interface SiteSettings {
	alertBanner?: string;
	adminEmail?: string;
	phoneNumber?: string;
	schoolName?: string;
	tagline?: string;
}

export interface HomePage {
	missionStatement?: string;
	introLine?: string;
}

export interface CaptionedImage {
	alt: string;
	caption?: string;
	asset?: {
		_id: string;
		url?: string;
	};
}

export interface ContentSection {
	heading: string;
	body: string;
	images?: CaptionedImage[];
}

export interface AboutPage {
	pageTitle?: string;
	introParagraph?: string;
	missionStatement?: string;
	sections?: ContentSection[];
}

export interface Person {
	_id: string;
	name: string;
	title?: string;
	bio?: string;
	headshotUrl?: string;
}

export interface ContactPage {
	headline?: string;
	bodyText?: string;
}

export interface LearningLifePage {
	pageTitle?: string;
	introText?: string;
	sections?: ContentSection[];
}

export interface FaqItem {
	_id: string;
	question: string;
	answer: string;
	isExample?: boolean;
	sortOrder?: number;
}

export interface CalendarEvent {
	_id: string;
	date: string;
	timeLabel: string;
	title: string;
	description?: string;
	linkUrl?: string;
	linkLabel?: string;
}

export interface NewsletterIssue {
	_id: string;
	title: string;
	weekOf: string;
	slug?: { current: string };
	publishedAt?: string;
	teaser?: string;
	body?: PortableTextBlock[];
	images?: CaptionedImage[];
}

export const DEFAULT_SCHOOL_NAME = 'Bright Horizons Academy';
export const DEFAULT_TAGLINE = 'Proactive Learning, Empowered Futures';

export const DEFAULT_MISSION =
	'The mission of Bright Horizons Academy is to provide a faith-based education that blends strong academic instruction with hands-on, project-based learning to ensure students not only master core subjects, but know how to apply them in real life. Our students are challenged to think critically, solve problems, and take ownership of their learning. Through intentional leadership development and real-world skill building, they grow into confident, capable individuals prepared for both higher education and life beyond the classroom. Bright Horizons Academy is a carefully-curated learning community designed for families seeking more than traditional education currently offers. At Bright Horizons Academy, we believe education should be meaningful, engaging, and purpose-driven— guiding each student toward a bright and capable future.';

export const DEFAULT_EMAIL = 'admin@brighthorizonsal.org';
export const DEFAULT_PHONE = '(555) 987-6543';
export const DEFAULT_PHONE_TEL = '+15559876543';

export const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/newsletter', label: 'Newsletter' },
	{ href: '/calendar', label: 'Calendar' },
	{ href: '/student-life', label: 'Student Life' },
	{ href: '/faq', label: 'FAQ' },
	{ href: '/contact', label: 'Contact' },
] as const;
