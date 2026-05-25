import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const projectId = 'w4n109hm';
const dataset = 'production';

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

export function optimizedImageUrl(
	source: SanityImageSource,
	options?: { width?: number; height?: number; quality?: number },
) {
	const { width = 800, height, quality = 80 } = options ?? {};
	let img = urlFor(source).auto('format').format('webp').quality(quality).width(width);
	if (height) {
		img = img.height(height);
	}
	return img.url();
}
