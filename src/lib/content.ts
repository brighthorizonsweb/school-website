import type {
	AboutPage,
	CalendarEvent,
	ContactPage,
	FaqItem,
	HomePage,
	LearningLifePage,
	NewsletterIssue,
	Person,
	SiteSettings,
} from './types';
import {
	fallbackAboutPage,
	fallbackBoardMembers,
	fallbackCalendarEvents,
	fallbackContactPage,
	fallbackFaculty,
	fallbackFaqItems,
	fallbackHomePage,
	fallbackLearningLifePage,
	fallbackNewsletterIssues,
	fallbackSiteSettings,
} from './fallbacks';

export function withSiteSettings(data: SiteSettings | null): SiteSettings {
	return { ...fallbackSiteSettings, ...stripNulls(data) };
}

export function withHomePage(data: HomePage | null): HomePage {
	return { ...fallbackHomePage, ...stripNulls(data) };
}

export function withAboutPage(data: AboutPage | null): AboutPage {
	const merged = { ...fallbackAboutPage, ...stripNulls(data) };
	return {
		...merged,
		sections: merged.sections?.length ? merged.sections : fallbackAboutPage.sections,
	};
}

export function withContactPage(data: ContactPage | null): ContactPage {
	return { ...fallbackContactPage, ...stripNulls(data) };
}

export function withLearningLifePage(data: LearningLifePage | null): LearningLifePage {
	const merged = { ...fallbackLearningLifePage, ...stripNulls(data) };
	return {
		...merged,
		sections: merged.sections?.length ? merged.sections : fallbackLearningLifePage.sections,
	};
}

export function withFaqItems(data: FaqItem[] | null): FaqItem[] {
	return data?.length ? data : fallbackFaqItems;
}

export function withCalendarEvents(data: CalendarEvent[] | null): CalendarEvent[] {
	return data?.length ? data : fallbackCalendarEvents;
}

export function withNewsletterIssues(data: NewsletterIssue[] | null): NewsletterIssue[] {
	return data?.length ? data : fallbackNewsletterIssues;
}

export function withFaculty(data: Person[] | null): Person[] {
	return data?.length ? data : fallbackFaculty;
}

export function withBoardMembers(data: Person[] | null): Person[] {
	return data?.length ? data : fallbackBoardMembers;
}

function stripNulls<T extends object>(data: T | null | undefined): Partial<T> {
	if (!data) return {};
	return Object.fromEntries(
		Object.entries(data).filter(([, value]) => value !== null && value !== undefined),
	) as Partial<T>;
}

export function formatDisplayDate(dateString: string): string {
	const date = new Date(`${dateString}T12:00:00`);
	return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}

export function formatWeekOf(dateString: string): string {
	const date = new Date(`${dateString}T12:00:00`);
	return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
