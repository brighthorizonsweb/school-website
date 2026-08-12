import { toHTML } from '@portabletext/to-html';
import type { PortableTextBlock } from '@portabletext/types';
import type { NewsletterBodyBlock, NewsletterImageBlock } from './types';

export function isNewsletterImageBlock(block: NewsletterBodyBlock): block is NewsletterImageBlock {
	return block._type === 'captionedImage';
}

export type NewsletterBodySegment =
	| { kind: 'text'; blocks: PortableTextBlock[] }
	| { kind: 'image'; image: NewsletterImageBlock };

export function groupNewsletterBody(
	body: NewsletterBodyBlock[] | undefined,
): NewsletterBodySegment[] {
	const segments: NewsletterBodySegment[] = [];

	for (const block of body ?? []) {
		if (isNewsletterImageBlock(block)) {
			segments.push({ kind: 'image', image: block });
			continue;
		}

		const last = segments.at(-1);
		if (last?.kind === 'text') {
			last.blocks.push(block);
		} else {
			segments.push({ kind: 'text', blocks: [block] });
		}
	}

	return segments;
}

export function portableTextToHtml(blocks: PortableTextBlock[] | undefined): string {
	if (!blocks?.length) return '';
	return toHTML(blocks, {
		components: {
			block: {
				normal: ({ children }) => `<p class="mb-4 leading-relaxed text-slate-700">${children}</p>`,
				h2: ({ children }) => `<h2 class="mb-3 mt-6 text-xl font-bold text-sky-950">${children}</h2>`,
				h3: ({ children }) => `<h3 class="mb-2 mt-4 text-lg font-semibold text-sky-900">${children}</h3>`,
			},
			list: {
				bullet: ({ children }) =>
					`<ul class="mb-4 list-disc space-y-1 pl-5 text-slate-700">${children}</ul>`,
				number: ({ children }) =>
					`<ol class="mb-4 list-decimal space-y-1 pl-5 text-slate-700">${children}</ol>`,
			},
			marks: {
				link: ({ children, value }) => {
					const href = typeof value?.href === 'string' ? value.href : '#';
					return `<a href="${href}" class="text-sky-700 underline hover:text-sky-900">${children}</a>`;
				},
			},
		},
	});
}
