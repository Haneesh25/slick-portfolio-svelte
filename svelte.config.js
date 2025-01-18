/*import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import vercel from '@sveltejs/adapter-vercel';


const base = '/slick-portfolio-svelte';

/** @type {import('@sveltejs/kit').Config}
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    vitePlugin: {
        inspector: {
            showToggleButton: 'never'
        }
    },
    kit: {
        adapter: adapter({ fallback: '404.html' }),
        alias: {
            $lib: './src/lib',
            '@data': './src/lib/data',
            '@components': './src/lib/components',
            '@md': './src/lib/md',
            '@stores': './src/lib/stores',
            '@utils': './src/lib/utils'
        },
        paths: {
            base: process.env.NODE_ENV === 'production' ? base : ''
        }
    }
};

export default config;*/



import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const base = '/slick-portfolio-svelte'; // Adjust for subdirectory hosting if needed

export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'public',
            assets: 'public',
            fallback: '404.html'
        }),
        alias: {
            $lib: './src/lib',
            '@data': './src/lib/data',
            '@components': './src/lib/components',
            '@md': './src/lib/md',
            '@stores': './src/lib/stores',
            '@utils': './src/lib/utils'
        },
        paths: {
            base: process.env.NODE_ENV === 'production' ? base : ''
        }
    }
};