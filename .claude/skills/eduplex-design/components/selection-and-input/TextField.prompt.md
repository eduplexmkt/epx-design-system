The standard input: 12px radius, xsmall elevation on the shell, an inset hairline on the row inside it, 12px padding, body1 text, placeholder in `label.assistive` (`label.disable` when disabled).

```jsx
<TextField placeholder="이메일을 입력해 주세요" width={320} />
<TextField invalid defaultValue="wrong@" width={320} />
<TextField placeholder="인증번호" trailingButton="확인" width={320} />
```

Focus thickens the inset hairline to 2px at 43% primary (43% negative when `invalid`). Disabled swaps the fill to `fill.alternative` and drops the blur. The row keeps an 8px gap between its slots; the breathing room around the text itself is the input's own `padding: 0 4px`, not extra gap.

`leadingContent` / `trailingContent` slots set nothing but `max-height: 24px` — pass an already-sized, already-tinted element rather than expecting the slot to style it. Status icons (the `invalid` marker included) are 22px with 1px padding. The `invalid` marker is that 22px filled glyph in `status.negative` over a white square covering the middle 50% × 50%, so it stays readable on any fill.

`trailingButton` squares off the field's right corners, takes an 80px minimum width and 12px/16px padding, and is bold (600) primary text — `trailingButtonVariant="assistive"` makes it medium (500) `label.normal`. Its border is 3px wider than the button and pinned to the right edge so `overflow: hidden` clips the overhang and the seam against the field stays 1px; disabled drops it to `line.normal.alternative`.

Inline styles cannot express `::placeholder` or `::before`, so the placeholder colors ship as a scoped `<style>` rule and the trailing button's border and the invalid marker's white mask are real spans.
