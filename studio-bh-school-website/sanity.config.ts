import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
	name: 'default',
	title: 'Bright Horizons Academy',
	projectId: 'w4n109hm',
	dataset: 'production',
	plugins: [structureTool({ structure }), visionTool()],
	schema: {
		types: schemaTypes,
	},
});
