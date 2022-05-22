/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { theme } from '../lib/theme';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='ko' dir='ltr'>
				<Head>
					<meta charSet='utf-8' />

					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />

					<meta
						name='viewport'
						content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
					/>
					<meta name='description' content='Description' />
					<meta name='keywords' content='Keywords' />
					<link rel='manifest' href='/manifest.json' />
					<link
						href='/apple-touch-icon.png'
						rel='icon'
						type='image/png'
						sizes='16x16'
					/>
					<link
						href='/apple-touch-icon.png'
						rel='icon'
						type='image/png'
						sizes='32x32'
					/>
					<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
					<link rel='shortcut icon' href='/apple-touch-icon.png' />
					<link rel='apple-touch-startup-image' href='/startup.png' />
					<meta name='apple-mobile-web-app-capable' content='yes' />

					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='ios status bar color'
					/>
					<meta name='apple-mobile-web-app-title' content='Whale Talk' />

					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};
