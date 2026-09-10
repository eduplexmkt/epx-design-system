import { FlexBox } from '@eduplexmkt/mkt-design-system';

import Hero from '@/features/home/components/hero';
import HomeLayout from '@/features/home/components/layout';
import Resources from '@/features/home/components/resources';
import Behind from '@/features/home/components/behind';
import Faq from '@/features/home/components/faq';
import Footer from '@/features/layout/components/footer';
import { createMetadata } from '@/helpers/metadata';

import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = createMetadata({
  title: 'Eduplex MKT Design System',
  description: '에듀플렉스의 일관된 브랜드 경험을 위한 디자인 시스템',
  image: '/home/Thumbnails.png',
});

const RootPage = () => {
  return (
    <FlexBox
      as="main"
      flexDirection="column"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Hero />

      <HomeLayout>
        <Resources />

        <Behind />

        <Faq />

        <Footer sx={{ marginTop: '80px' }} />
      </HomeLayout>
    </FlexBox>
  );
};

export default RootPage;
