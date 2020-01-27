const path = require("path");

const ManifestPlugin = require("webpack-pwa-manifest");

module.exports = {
	entry: "./src/index.js",
	mode: process.env.WEBPACK_MODE || "production",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "./dist"),
	},
	plugins: [
		new ManifestPlugin({
			/* eslint-disable camelcase */
			background_color: "#222222",
			display: "standalone",
			fingerprints: false,
			inject: false,
			lang: "en",
			name: "Latticed Flower Generator",
			short_name: "Flower Gen",
			theme_color: "#6c757d",
			/* eslint-enable camelcase */
		}),
	],
};