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
					<meta name='theme-color' content={theme.palette.secondary.main} />
					<meta name='apple-mobile-web-app-capable' content='yes' />
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
