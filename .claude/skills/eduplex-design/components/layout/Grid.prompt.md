Grid is the 12-column page layout container; it only ever holds GridItem children.

```jsx
<Grid spacing={20}>
  <GridItem columns={8}><Card title="개별지도 노하우" /></GridItem>
  <GridItem columns={4}><Card title="지점 안내" /></GridItem>
</Grid>
```

`spacing` is a *key of the spacing scale*, not a px number — 0, 0.5, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80 — and defaults to `20`; `rowSpacing` (horizontal gutter) and `columnSpacing` (vertical gutter) override it independently. Gutters work the classic way: the container pulls itself out with negative margins and hands the values down as `--wds-row-spacing` / `--wds-column-spacing`, which each GridItem turns into padding — so a GridItem outside a Grid gets no gutter at all. The container is `display: flex` with `flex-wrap: wrap` at `width: 100%`, so `justifyContent` and `alignItems` behave as flex alignment, not grid alignment. For simple one-directional stacks and rows, FlexBox is the lighter choice.
