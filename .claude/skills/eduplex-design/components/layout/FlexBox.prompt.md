FlexBox is the workhorse layout primitive — reach for it any time you would otherwise write `style={{ display: 'flex', ... }}` by hand.

```jsx
<FlexBox flexDirection="column" gap={12}>
  <FlexBox justifyContent="space-between" alignItems="center">
    <SectionHeader size="small">최근 상담</SectionHeader>
    <TextButton size="small">전체보기</TextButton>
  </FlexBox>
</FlexBox>
```

Props are the CSS flex properties verbatim (`flexDirection`, `flexWrap`, `justifyContent`, `alignItems`, `alignContent`, `order`, `flex`, `flexGrow`, `flexShrink`, `flexBasis`, `alignSelf`, `gap`, `rowGap`, `columnGap`); only the ones you pass are emitted, so the element carries nothing but `display: flex` by default. Numbers on `gap`, `rowGap`, `columnGap` and `flexBasis` become px. Take spacing values from the spacing scale (`--spacing-*`) rather than round numbers, and use `as` when the container should be a `section`, `ul` or `header`. For a 12-column page-level layout use Grid + GridItem instead.
