```jsx
<Tab value={v} onChange={setV} items={[{ value: 'all', label: '전체' }, { value: 'dev', label: '개발' }]} />
<Tab value={v} onChange={setV} horizontalPadding iconButton={<IconButton aria-label="더보기"><Icon name="more" /></IconButton>} items={…} />
```

Labels are always bold: body2 at small, headline2 at medium/large. Vertical padding is 9 / 12 / 14px. Unselected is `label.assistive`, hover `label.alternative`, selected `label.strong` plus a 2px rule; a disabled selected tab's rule drops to `fill.alternative`. A 1px `line.normal.alternative` hairline runs the full width underneath.

`resize="hug"` gives each item its intrinsic width with a 24px gap (twice the 12px horizontal padding); `resize="fill"` splits the row evenly, centers the labels and zeroes that padding. Each item also carries an invisible hit area `calc(100% + 24px)` wide, so the gap between two tabs still belongs to the nearer tab rather than to nothing.

The root keeps a 20px gap between the list and the sticky `iconButton`, and `horizontalPadding` insets the list itself by 20px (the sticky button then pads 16px on its right). When the list is wider than the rail it scrolls, its bar hidden, and the overflowing edges fade under a 48px gradient mask — both edges normally, only the right one when `horizontalPadding` is set alongside an `iconButton`. `resize="fill"` never scrolls, so it never fades and drops the sticky button.

Hover, the hidden scrollbar and the scroll-edge fades cannot be expressed as inline styles, so hover and edge state live in React state and the scrollbar rules ship as a scoped `<style>` element.
