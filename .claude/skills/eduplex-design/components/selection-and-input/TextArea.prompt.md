Use TextArea when the answer runs to more than one line — a review, a memo, an inquiry — and TextField when it does not.

```jsx
<TextArea placeholder="문의 내용을 입력해 주세요" width={360} minRows={3} trailingContent={<TextAreaContent>200</TextAreaContent>} />
<TextArea invalid defaultValue="너무 짧습니다" width={360} />
```

The shell is the same as TextField — 12px radius, `background.transparent.normal` under a 32px backdrop blur, an xsmall elevation shadow, and a hairline that thickens to 2px at 43% primary on focus or 43% negative when invalid — but padded 12px on all four sides and stacked as a column with a 12px gap. The field auto-grows one 26px row at a time between `minRows` (2) and `maxRows`. The bottom row appears only when `invalid`, `leadingContent` or `trailingContent` is set; put counters, badges and icon buttons there wrapped in `TextAreaContent`, whose `characterCounter` variant reads the live length itself and turns it `status.negative` past the max you pass as children. Disabled swaps the frost for `fill.alternative` and drops the blur entirely.
