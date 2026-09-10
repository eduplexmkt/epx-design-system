An icon action in four shapes. `normal` is a bare glyph with no container — the overlay is what responds to hover/press; `background` sits a frosted pill under the icon so it stays legible over a photo; `outlined` and `solid` are real boxes. Always give it an `aria-label`.

```jsx
<IconButton aria-label="알림"><Icon name="bell" /></IconButton>
<IconButton variant="background" aria-label="닫기"><Icon name="close" /></IconButton>
<IconButton variant="outlined" size="small" aria-label="공유"><Icon name="share" /></IconButton>
<IconButton variant="solid" aria-label="다음"><Icon name="chevron-right" /></IconButton>
```

`size` is `number | 'medium' | 'small'`. `outlined`/`solid` take a real box — medium 40px with 10px padding, small 32px with 7px padding, a number with 6px padding — so the glyph is the box minus twice the padding. `normal` and `background` are glyph-sized instead and read only a number, defaulting to 24: `normal` sets the glyph to that number, `background` pads 2px and sets the glyph 4px smaller.

Color defaults per variant: `solid` is `static.white` on `primary.normal`, `outlined` is `label.normal` inside a 1px `line.normal.neutral` box, `normal` is `label.normal` on nothing, `background` is 43% `static.black` on a 52% white pill (or, with `alternative`, 88% white on a 61% `coolNeutral-30` pill). Disabled turns the glyph `label.disable` — solid also swaps to `fill.normal`, outlined to `background.normal.normal`.

The interaction circle is not the same everywhere: it hangs 16px past a `normal` glyph, 8px past a `background` pill and matches the box exactly for `outlined`/`solid`. Its opacity follows the variant — `solid` 0.075 hover / 0.18 press, `background` with `alternative` 0.05 / 0.12, everything else 0.0375 / 0.09 — and only `normal` grows from a 0.95 scale on hover. Inline styles cannot express `::before`, `:hover` or `@supports`, so the frosted pill and its blend layer are real spans, hover/press live in React state, and the source's webkit-only `mix-blend-mode: plus-darker` refinement of the `background` glyph is dropped in favor of its plain fallback color.
