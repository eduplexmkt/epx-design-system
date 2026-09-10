The table is the one component that draws a real 1px `line.solid.neutral` border rather than an inset hairline, because its 12px radius has to clip the head and the rows inside it.

```jsx
<Table columns={[{ key: 'name', label: '이름' }, { key: 'plan', label: '위클리', align: 'right' }]} rows={rows} />
<Table columns={cols} rows={rows} interaction onRowClick={open} pagination={<Pagination />} />
```

Cells are laid out asymmetrically on purpose: padding runs `8px 0 8px 20px` in the head and `16px 0 16px 20px` in the body, with the 20px restored on the right only for the last column, so columns read as left-aligned runs. Both cell types keep a 44px minimum height. Head cells are label2 bold on `label.neutral` over a `fill.alternative` band that sticks to the top while the body scrolls; body cells are body1 regular on `label.normal`. The last row drops its bottom rule so the border does the closing.

`interaction` makes rows clickable and darkens them with the source's *normal* overlay pair — 5% `label.normal` on hover, 12% on press, over 0.2s — not the 7.5%/18% default the rest of this system uses. The overlay is applied as a blended row background rather than an `::after` layer, since inline styles cannot reach pseudo-elements.
