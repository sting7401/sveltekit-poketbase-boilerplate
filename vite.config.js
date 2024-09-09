import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { fileURLToPath } from 'url';
import path from 'path';

// ES 모듈 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const aliases = {
	$: path.resolve(__dirname, './src'),
	$context: path.resolve(__dirname, './src/lib/context'),
	$images: path.resolve(__dirname, './src/lib/images'),
	$style: path.resolve(__dirname, './src/lib/css'),
	$edit: path.resolve(__dirname, './src/lib/js/edit'),
	$common: path.resolve(__dirname, './src/lib/js/common'),
	$components: path.resolve(__dirname, './src/lib/components'),
	$state: path.resolve(__dirname, './src/lib/state'),
	$controller: path.resolve(__dirname, './src/lib/controller'),
	$store: path.resolve(__dirname, './src/lib/store'),
	$i18n: path.resolve(__dirname, './src/lib/i18n'),
	$ui: path.resolve(__dirname, './src/lib/js/ui'),
	$html: path.resolve(__dirname, './public/html'),
	$app: path.resolve(__dirname, './app'),
};

export default defineConfig({
	// base: '/',
	build: {
		mode: 'production', // 프로덕션 모드로 설정
		outDir: 'dist', // 빌드 출력 디렉토리 설정
		publicDir: 'public', // public 디렉토리 설정
		assetsInclude: ['**/*.css'], // CSS 파일 포함, 이미지 제외
		assetFileNames: './src/lib/images/[name][extname]',
		chunkSizeWarningLimit: 2000, // 기본값은 500
	},
	resolve: {
		alias: {
			$: path.resolve(__dirname, './src'),
			$context: path.resolve(__dirname, './src/lib/context'),
			$images: path.resolve(__dirname, './src/lib/images'),
			$style: path.resolve(__dirname, './src/lib/css'),
			$edit: path.resolve(__dirname, './src/lib/js/edit'),
			$common: path.resolve(__dirname, './src/lib/js/common'),
			$components: path.resolve(__dirname, './src/lib/components'),
			$state: path.resolve(__dirname, './src/lib/state'),
			$controller: path.resolve(__dirname, './src/lib/controller'),
			$store: path.resolve(__dirname, './src/lib/store'),
			$i18n: path.resolve(__dirname, './src/lib/i18n'),
			$ui: path.resolve(__dirname, './src/lib/js/ui'),
			$html: path.resolve(__dirname, './public/html'),
			$app: path.resolve(__dirname, './app'),
		},
	},
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
	plugins: [sveltekit()],
});
