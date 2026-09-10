The standard input: 12px radius, xsmall elevation, 12px padding, body1 text, placeholder in `label.assistive`.

```jsx
<TextField placeholder="이메일을 입력해 주세요" width={320} />
<TextField invalid defaultValue="wrong@" width={320} />
```

Focus thickens the inset hairline to 2px at 43% primary (43% negative when `invalid`). Disabled swaps the fill to `fill.alternative` and drops the blur. `trailingButton` squares off the field's right corners and gives the button an 80px minimum width.
