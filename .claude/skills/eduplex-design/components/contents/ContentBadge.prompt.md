Static labels on cards and list rows. Never put a click handler on one — use Chip.

```jsx
<ContentBadge accentColor="blue">전체</ContentBadge>
<ContentBadge variant="outlined" accentColor="red">신청임박</ContentBadge>
<ContentBadge color="neutral">최근 7일</ContentBadge>
```

Solid = the accent's foreground color on an 8% tint of itself; outlined = the same text on the page surface with a 43% border. Twelve accent hues are available (yellow was added in the 2026-09 token update) and all of them are legible on white.
