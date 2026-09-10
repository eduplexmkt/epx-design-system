import { Box, FlexBox, Slot } from '@eduplexmkt/mkt-design-system';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import {
  carouselContentStyle,
  carouselItemStyle,
  carouselWrapperStyle,
} from './style';

import type {
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  RefObject,
} from 'react';
import type { SxProp } from '@eduplexmkt/mkt-design-system';

type Props = PropsWithChildren<{
  sx?: SxProp;
  items: Array<ReactNode>;
  containerRef?: RefObject<HTMLDivElement | null>;
}> &
  HTMLAttributes<HTMLDivElement>;

const Carousel = ({ sx, items, containerRef, ...props }: Props) => {
  const [carouselRef] = useEmblaCarousel(
    {
      dragFree: true,
    },
    [WheelGesturesPlugin()],
  );

  return (
    <FlexBox
      ref={carouselRef}
      role="region"
      aria-roledescription="carousel"
      {...props}
      sx={[carouselWrapperStyle, sx]}
    >
      <FlexBox flexDirection="row" sx={carouselContentStyle} ref={containerRef}>
        {items.map((item, idx) => (
          <Box
            key={idx}
            as={Slot}
            sx={carouselItemStyle}
            role="group"
            aria-roledescription="carousel slide"
          >
            {item}
          </Box>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default Carousel;
