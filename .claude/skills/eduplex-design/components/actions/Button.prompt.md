The main action control — use `variant="solid" color="primary"` for the one committing action on a view and `outlined`/`assistive` for everything beside it.

```jsx
<Button size="large" leadingContent={<Icon name="plus" size={20} />}>신청하기</Button>
<Button variant="outlined" color="assistive">취소</Button>
```

Sizes carry their own radius, padding and type: large 12px radius / 12px 28px / body1, medium 10px / 9px 20px / body2, small 8px / 7px 14px / label2. `iconOnly` swaps to square padding (12/10/7px). `loading` hides the label and shows a centered spinner. Assistive labels are medium (500) weight; primary labels are bold (600).

The `label.normal` interaction overlay is not one strength for every button — it follows the variant/color pair: `outlined` (any color) 0.0375 hover / 0.09 press, `solid` + `assistive` 0.05 / 0.12, `solid` + `primary` 0.075 / 0.18. Hover and press live in React state because inline styles cannot express `:hover` / `:active`.
