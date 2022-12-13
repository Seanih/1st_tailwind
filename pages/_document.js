import Document, { Html, Head, Main, NextScript } from 'next/document';

// APPLY FONTS AND STYLES TO <body> and entire app
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
