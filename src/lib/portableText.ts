import { toHTML } from '@portabletext/to-html';
import type { PortableTextBlock } from '@portabletext/types';

export function portableTextToHtml(blocks: PortableTextBlock[] | undefined): string {
	if (!blocks?.length) return '';
	return toHTML(blocks, {
		components: {
			block: {
				normal: ({ children }) => `<p class="mb-4 leading-relaxed text-slate-700">${children}</p>`,
				h2: ({ children }) => `<h2 class="mb-3 mt-6 text-xl font-bold text-sky-950">${children}</h2>`,
				h3: ({ children }) => `<h3 class="mb-2 mt-4 text-lg font-semibold text-sky-900">${children}</h3>`,
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
