GridItem is one cell of a Grid — it must be a direct child of Grid, since its gutter padding comes from the CSS variables Grid publishes.

```jsx
<Grid spacing={24}>
  <GridItem columns={6} />
  <GridItem columns={2.4} offset="auto" />
</Grid>
```

`columns` takes 1–12 (plus 2.4, the five-across step) and is turned into a percentage width of twelfths; `columns` set to `true` means "share the leftover space equally" (`flex-grow: 1`, `flex-basis: 0`), and `'auto'` means "as wide as the content" (`flex: 0 0 auto`). `offset` indents the cell by that many twelfths, or `'auto'` to push it and everything after it to the right edge. With no `columns` the cell keeps its natural flex sizing, and `alignSelf` overrides the row's cross-axis alignment for this one cell.
