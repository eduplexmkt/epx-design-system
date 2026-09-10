Label is the caption that sits above a form control; inside a FormField use FormLabel instead, which is this component with the `htmlFor` wiring already done.

```jsx
<Label htmlFor="phone" required>연락처</Label>
```

The type is not configurable: label1 (14px / 20px / +0.0145em) at bold 600, coloured `semantic.label.neutral` — the 88% tier, deliberately a step softer than `label.normal`. `required` appends an asterisk 4px to the right in `semantic.status.negative` at medium 500, one weight lighter than the label text. It renders `inline-block` by default; pass `display="block"` when the label must claim a full row.
