/** @type {import('next').NextConfig} */

// const nextConfig = {
// 	reactStrictMode: true,
// };
// module.exports = nextConfig;

// const withPWA = require('next-pwa');
// module.exports = withPWA({
// 	pwa: {
// 		dest: 'public',
// 	},
// });

const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const nextConfig = {
	generateEtags: false,
	webpack: (config, { isServer }) => {
		config.plugins.push(
			new FilterWarningsPlugin({
				exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
			})
		);
		config.resolve.modules.push(__dirname);
		return config;
	},
};
module.exports = withPlugins(
	[
		[withPWA, { pwa: { dest: 'public' } }],
		[
			withOptimizedImages,
			{ mozjpeg: { quality: 90 }, webp: { preset: 'default', quality: 90 } },
		],
		withFonts,
	],
	nextConfig
);
