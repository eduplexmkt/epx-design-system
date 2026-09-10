The card has no border, no shadow and no padding around the thumbnail — it is an image with text under it, and the 12px thumbnail radius is the only rounding.

```jsx
<Card src="…" title="개별지도 노하우" caption="강사명 · 교육기간" badges={<ContentBadge>전체</ContentBadge>} />
<Card platform="mobile" src="…" title="…" caption="…" />
```

Desktop: 8px gap, 3:2 thumbnail, body1 bold title, content inset 6px. Mobile: 6px gap, 4:3, body2 bold title, inset 2px. Titles clamp to two lines, captions to one.
