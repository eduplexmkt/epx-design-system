```jsx
<Tab value={v} onChange={setV} items={[{ value: 'all', label: '전체' }, { value: 'dev', label: '개발' }]} />
```

Labels are always bold: body2 at small, headline2 at medium/large. Unselected is `label.assistive`, hover `label.alternative`, selected `label.strong` plus a 2px rule. A 1px `line.normal.alternative` hairline runs the full width underneath.
