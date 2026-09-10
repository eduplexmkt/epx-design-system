import { FlexBox } from '@eduplexmkt/mkt-design-system';

import { wrapperStyle } from './style';

import type { FlexBoxProps } from '@eduplexmkt/mkt-design-system';

type Props = FlexBoxProps;

const SectionWrapper = ({ sx, ...props }: Props) => {
  return (
    <FlexBox
      as="section"
      flexDirection="column"
      {...props}
      sx={[wrapperStyle, sx]}
    />
  );
};

export default SectionWrapper;
