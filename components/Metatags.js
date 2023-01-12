import Head from 'next/head';

export default function Metatags({
  title = '',
  description = 'Personal website of Jonathon Ho.',
  image = '',
}) {
  const displayedTitle = `${title} | Jonathon Ho`;
  return (
    <Head>
      <title>{displayedTitle}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@translatorjon" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}