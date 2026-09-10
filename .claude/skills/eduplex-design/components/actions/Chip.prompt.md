Chips are for filtering and tagging, and they are always interactive — for a read-only label use ContentBadge instead.

```jsx
<Chip active>전체</Chip>
<Chip variant="outlined" trailingContent={<Icon name="chevron-down" size={14} />}>직군</Chip>
```

Weight is medium (500) at every size. Active solid = inverse background with inverse label; active outlined = 5% primary fill, 43% primary border, primary text. Transitions run at 0.3s, slower than the rest of the system.
