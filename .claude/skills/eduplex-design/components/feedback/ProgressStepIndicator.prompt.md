Use this when progress is counted in named steps rather than a percentage — a wizard, an application flow, a multi-page form.

```jsx
<ProgressStepIndicator value="two" steps={[{ value: 'one' }, { value: 'two' }, { value: 'three' }]} />
<ProgressStepIndicator size="small" divider={false} value="one" steps={…} />
```

Segments share the width equally on a `fill.normal` track, filling with `primary.normal` for every step up to and including the current one. Height is 8px at medium, 4px at small; `divider` opens a 1px gap between segments (default true, `false` welds them together). Only the outer ends are rounded — a 999px radius on the first segment's left and the last segment's right — so the bar reads as one capsule.
