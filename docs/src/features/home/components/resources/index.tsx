'use client';
import { FlexBox } from '@eduplexmkt/mkt-design-system';

import FadeInOut from '@/components/fade-in-out';

import SectionWrapper from '../section/wrapper';
import SectionTitle from '../section/title';

import ResourcesItem from './item';
import { RESOURCE_ITEMS } from './constants';

const Resources = () => {
  return (
    <SectionWrapper
      gap="20px"
      md={{ gap: '24px' }}
      aria-label="Resources Section"
    >
      <FadeInOut duration={600}>
        <SectionTitle>Start with Eduplex MKT Design System</SectionTitle>
      </FadeInOut>

      <FlexBox
        gap="0px"
        flexDirection="column"
        md={{
          gap: '32px',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {RESOURCE_ITEMS.map((item, idx) => (
          <FadeInOut duration={600} delay={(idx + 1) * 100} key={item.title}>
            <ResourcesItem {...item} />
          </FadeInOut>
        ))}
      </FlexBox>
    </SectionWrapper>
  );
};

export default Resources;
