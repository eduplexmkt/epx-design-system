import Gnb from '@/features/layout/components/gnb';
import { MDXProvider } from '@/features/docs/contexts';
import { getAllFrontmatter } from '@/features/docs/helpers/mdx';
import LnbMobile from '@/features/docs/components/lnb/mobile';
import { parseGroupedPages } from '@/features/docs/helpers/pages';
import { createMetadata } from '@/helpers/metadata';

import Providers from './providers';

import type { Metadata, Viewport } from 'next';

import '@eduplexmkt/mkt-design-system/global.css';

export const metadata: Metadata = createMetadata({
  title: 'Eduplex MKT Design System',
  metadataBase: process.env.NEXT_PUBLIC_BASE_PATH!,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#1B1C1E',
    },
  ],
};

const RootLayout = async ({ children }: LayoutProps<'/'>) => {
  const allFrontmatter = await getAllFrontmatter();
  const groupedPages = parseGroupedPages(allFrontmatter);

  return (
    <html suppressHydrationWarning lang="ko">
      <head>
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />

        <meta
          name="msapplication-TileColor"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />

        <link rel="icon" type="image/svg+xml" href="/eduplex-logo.svg" />

        <link
          rel="preload stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />

        <link
          rel="preload stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />

        <link
          rel="preload stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />

        <link
          rel="preconnect"
          href={`https://${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION?.toLowerCase()}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </head>

      <body suppressHydrationWarning>
        <MDXProvider
          allFrontmatter={allFrontmatter}
          groupedPages={groupedPages}
        >
          <Providers>
            <LnbMobile />
            <Gnb />

            {children}
          </Providers>
        </MDXProvider>
      </body>
    </html>
  );
};

export default RootLayout;
