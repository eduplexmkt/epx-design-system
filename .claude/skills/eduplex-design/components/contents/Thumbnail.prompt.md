Thumbnail is the image frame Card uses internally — reach for it directly when you need a ratio-locked picture outside a card, such as a logo tile or a hero crop.

```jsx
<Thumbnail src="…" ratio="16:9" radius width={280} />
<Thumbnail src="…" ratio="1:1" radius border overlay={<PlayBadge />} />
```

`ratio` is a `w:h` string from the fixed set (1:1, 5:4, 4:3, 3:2, 16:10, 1.618:1, 16:9, 2:1, 21:9) and `portrait` flips it to h:w; the default is 4:3. `radius` is a boolean, not a number — true means exactly 12px, false means 0. Images always fill the frame with `object-fit: cover` and inherit its radius, and `overlay` is centred with a 50%/50% translate.

`border` draws a 1px `line.normal.neutral` hairline. Upstream draws it with `::after`, which inline styles cannot reach, so this version stacks an absolutely positioned `<span>` at `inset: 0` with `border-radius: inherit` — the hairline lands on top of the image and follows the corner rounding exactly as the pseudo-element does. The empty (no `src`) frame falls back to `fill.alternative`, matching Card's own placeholder rather than the source's untokenised grey.
