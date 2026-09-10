```jsx
<Checkbox checked label="이용약관에 동의합니다" required />
<Checkbox size="small" indeterminate label="일부 선택" />
<Checkbox tight bold label="전체 동의" />
```

24px (medium, body2 label) or 20px (small, label1 label). Checked fills with primary and keeps the 1.5px ring; disabled drops the whole control to 43% opacity rather than recoloring it, and the label goes `label.disable`.

`bold` sets the label to 600. `tight` removes the side spacing — the box narrows to 20px (medium) or 16px (small) — so a column of checkboxes aligns flush with the text above it. `icon` and `indeterminateIcon` swap in custom glyphs; both inherit `static.white` from the filled box and animate on the same opacity/scale curve.

`invalid` only sets `aria-invalid` — the system deliberately ships no error styling for a checkbox, so put the message in a `FormErrorMessage` beside it rather than expecting the box to turn red. Use `onCheckedChange(state)` for the boolean, `onChange(event)` when you need the event.
