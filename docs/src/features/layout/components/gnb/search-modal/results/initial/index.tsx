import { FlexBox, Typography } from '@eduplexmkt/mkt-design-system';
import { IconSearch } from '@eduplexmkt/mkt-icon';

const SearchResultInitial = () => {
  return (
    <FlexBox flexDirection="column" flex="1" sx={{ minHeight: '280px' }}>
      <FlexBox
        alignItems="center"
        justifyContent="center"
        flex="1"
        flexDirection="column"
        gap="20px"
      >
        <IconSearch
          sx={(theme) => ({
            fontSize: 40,
            color: theme.semantic.label.assistive,
          })}
        />
        <Typography
          variant="label1"
          weight="medium"
          color="semantic.label.assistive"
        >
          Search Eduplex MKT Design System
        </Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default SearchResultInitial;
