'use client';

import { Box, Typography } from '@eduplexmkt/mkt-design-system';
import { FlexBox } from '@eduplexmkt/mkt-design-system';
import Link from 'next/link';

import { breakWordStyle } from '@/styles/text';
import FadeInOut from '@/components/fade-in-out';
import { getImageUrl } from '@/helpers/image';

import {
  contentWrapperStyle,
  descriptionStyle,
  marqueeBackgroundOverlayStyle,
  marqueeGroupStyle,
  marqueeImageStyle,
  marqueeWrapperStyle,
  startButtonStyle,
  titleStyle,
  wrapperStyle,
} from './style';
import { IMAGES, RENDER_REPEAT, REVERSE_IMAGES } from './constants';

const Hero = () => {
  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={wrapperStyle}
      as="section"
      aria-label="Hero Section"
    >
      <FlexBox
        flexDirection="column"
        sx={contentWrapperStyle}
        alignItems="center"
      >
        <FlexBox
          flexDirection="column"
          sx={{
            width: '100%',
            maxWidth: 'var(--layout-max-width)',
          }}
        >
          <FlexBox
            flexDirection="column"
            sx={{ width: '100%' }}
            alignItems="center"
          >
            <FadeInOut duration={600}>
              <Box as="h1" sx={[titleStyle, breakWordStyle]}>
                {`One Brand,\nOne System`}
                <br />
                Eduplex MKT Design System
              </Box>
            </FadeInOut>

            <FadeInOut duration={600} delay={200}>
              <Typography
                variant="label2"
                weight="medium"
                as="p"
                color="semantic.label.normal"
                align="center"
                lg={{
                  variant: 'label1-reading',
                }}
                xl={{
                  variant: 'body2-reading',
                }}
                sx={[descriptionStyle, breakWordStyle]}
              >
                {`에듀플렉스의 일관된 브랜드 경험을 만들기 위해\n디자인 원칙과 UI 컴포넌트를 하나의 시스템으로 정리했습니다.`}
              </Typography>
            </FadeInOut>

            <FadeInOut duration={600} delay={200}>
              <Box as={Link} href="/docs/getting-started" sx={startButtonStyle}>
                <Typography variant="label1" weight="medium">
                  디자인 시스템 시작하기
                </Typography>
              </Box>
            </FadeInOut>
          </FlexBox>
        </FlexBox>

        <FadeInOut duration={1000} delay={400}>
          <FlexBox sx={marqueeWrapperStyle} flexDirection="column">
            <FlexBox gap="var(--marquee-gap)" justifyContent="space-around">
              {Array(RENDER_REPEAT)
                .fill(0)
                .map((_, i) => (
                  <FlexBox
                    key={i}
                    alignItems="center"
                    justifyContent="space-around"
                    gap="var(--marquee-gap)"
                    data-role="marquee-wrapper"
                    sx={marqueeGroupStyle}
                  >
                    {IMAGES.map((j) => (
                      <Box
                        as="figure"
                        key={j.id}
                        aria-hidden
                        sx={[marqueeImageStyle, { aspectRatio: j.ratio }]}
                      >
                        <Box
                          as="img"
                          src={getImageUrl(j.src)}
                          alt={`marquee-image-${j.id}`}
                          aria-hidden
                        />
                      </Box>
                    ))}
                  </FlexBox>
                ))}
            </FlexBox>

            <FlexBox gap="var(--marquee-gap)" justifyContent="space-around">
              {Array(RENDER_REPEAT)
                .fill(0)
                .map((_, i) => (
                  <FlexBox
                    key={i}
                    alignItems="center"
                    justifyContent="space-around"
                    gap="var(--marquee-gap)"
                    data-role="marquee-wrapper"
                    sx={marqueeGroupStyle}
                    style={{
                      animationDirection: 'reverse',
                    }}
                  >
                    {REVERSE_IMAGES.map((j) => (
                      <Box
                        as="figure"
                        key={j.id}
                        aria-hidden
                        sx={[marqueeImageStyle, { aspectRatio: j.ratio }]}
                      >
                        <Box
                          as="img"
                          src={getImageUrl(j.src)}
                          alt={`marquee-image-${j.id}`}
                          aria-hidden
                        />
                      </Box>
                    ))}
                  </FlexBox>
                ))}
            </FlexBox>

            <FlexBox aria-hidden sx={marqueeBackgroundOverlayStyle('left')}>
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
            </FlexBox>

            <FlexBox aria-hidden sx={marqueeBackgroundOverlayStyle('right')}>
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
              <Box aria-hidden data-role="marquee-background-overlay-layer" />
            </FlexBox>
          </FlexBox>
        </FadeInOut>
      </FlexBox>
    </FlexBox>
  );
};

export default Hero;
