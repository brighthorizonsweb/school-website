import type { StructureResolver } from 'sanity/structure';

const singletonListItem = (
	S: Parameters<StructureResolver>[0],
	typeName: string,
	title: string,
	documentId: string,
) =>
	S.listItem()
		.title(title)
		.id(documentId)
		.child(S.document().schemaType(typeName).documentId(documentId).title(title));

export const structure: StructureResolver = (S) =>
	S.list()
		.title('Content')
		.items([
			singletonListItem(S, 'siteSettings', 'Site Settings', 'siteSettings'),
			S.divider(),
			S.listItem()
				.title('Pages')
				.child(
					S.list()
						.title('Pages')
						.items([
							singletonListItem(S, 'homePage', 'Home Page', 'homePage'),
							singletonListItem(S, 'aboutPage', 'About Page', 'aboutPage'),
							singletonListItem(S, 'learningLifePage', 'Student Life', 'learningLifePage'),
							singletonListItem(S, 'contactPage', 'Contact Page', 'contactPage'),
						]),
				),
			S.divider(),
			S.listItem()
				.title('Weekly Newsletter')
				.child(
					S.documentTypeList('newsletterIssue')
						.title('Newsletter Issues')
						.defaultOrdering([{ field: 'weekOf', direction: 'desc' }]),
				),
			S.listItem()
				.title('Calendar')
				.child(
					S.documentTypeList('calendarEvent')
						.title('Calendar Events')
						.defaultOrdering([{ field: 'date', direction: 'asc' }]),
				),
		S.listItem()
			.title('FAQ')
			.child(
				S.documentTypeList('faqItem')
					.title('FAQ Items')
					.defaultOrdering([{ field: 'sortOrder', direction: 'asc' }]),
			),
		S.divider(),
		S.listItem()
			.title('Faculty')
			.child(
				S.documentTypeList('facultyMember')
					.title('Faculty Members')
					.defaultOrdering([{ field: 'sortOrder', direction: 'asc' }]),
			),
		S.listItem()
			.title('Board Members')
			.child(
				S.documentTypeList('boardMember')
					.title('Board Members')
					.defaultOrdering([{ field: 'sortOrder', direction: 'asc' }]),
			),
	]);
