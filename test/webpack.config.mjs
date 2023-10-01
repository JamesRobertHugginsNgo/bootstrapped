import Path from 'path';
import { fileURLToPath, URL } from 'url';

import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default function () {
	return {
		entry: Path.resolve(__dirname, './test.js'),
		output: {
			path: Path.resolve(__dirname, '.'),
			filename: 'test-complied.js',
		},
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										autoprefixer
									]
								}
							}
						},
						'sass-loader'
					],
				},
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Test Page',
				filename: 'test-compiled.html',
				template: Path.resolve(__dirname, './test.ejs'),
				inject: false
			}),
			new MiniCssExtractPlugin({
				filename: 'test-compiled.css',
			})
		],
		mode: 'development'
	};
}
