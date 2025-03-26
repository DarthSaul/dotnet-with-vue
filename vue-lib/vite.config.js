import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: './src/components/Footer/index.js', // Entry point for the library
			name: 'FooterComponent', // Global name for the UMD build
			fileName: (format) => `footer-component.${format}.js`,
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
