The card has no border, no shadow and no padding around the thumbnail — it is an image with text under it, and the 12px thumbnail radius is the only rounding. The thumbnail itself always carries a 1px `line.normal.neutral` hairline, the same one `Thumbnail` draws with `radius border`.

```jsx
<Card src="…" title="개별지도 노하우" caption="강사명 · 교육기간" badges={<ContentBadge>전체</ContentBadge>} />
<Card platform="mobile" src="…" title="…" caption="…" />
<Card src="…" overlay="D-3" overlayAction={<IconButton aria-pressed="false" aria-label="찜"><Icon name="heart" /></IconButton>} title="…" />
```

Desktop: 8px gap, 3:2 thumbnail, body1 bold title, content inset 6px, 14px overlay padding, label2 bold overlay text. Mobile: 6px gap, 4:3, body2 bold title, inset 2px, 10px overlay padding, caption2 bold overlay text. Titles clamp to two lines, captions to one.

The title takes no color of its own — it inherits, so tint it on the Card when the surface calls for it. Only the caption has a default, `label.alternative`.

The overlay is a top scrim, not a flat wash: a `mask-image` ramp over `static.black` at 0.35 opacity with a 12px radius, so it fades out well before the bottom of the image. Its row keeps a 4px gap, pushes text and toggle to opposite edges, and sizes a toggle icon button at 24px on desktop, 20px on mobile, tinting it `static.white` while `aria-pressed="false"`.

Inline styles cannot reach `::before` or a descendant `> button`, so the scrim and the thumbnail hairline are real spans, and the toggle slot's sizing ships as a scoped `<style>` rule.
