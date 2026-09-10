```jsx
<SegmentedControl value={v} onChange={setV} items={[{ value: 'a', label: '추천' }, { value: 'b', label: '최신' }]} />
```

Heights are fixed: 48 / 40 / 32px. Solid sits on `fill.normal` and the active segment is an elevated white thumb with a 4px ambient shadow; outlined is a hairline row where the active segment tints 5% primary. Items always flex to equal widths — never use it for more than four.
