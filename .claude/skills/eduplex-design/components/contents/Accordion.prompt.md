An accordion is a list cell that opens — stack several to build an FAQ, and let each one keep its own divider rather than drawing rules between them.

```jsx
<Accordion summary="자기주도학습이 무엇인가요?" description="스스로 계획하고 점검하는 학습 방식입니다." />
<Accordion defaultExpanded summary="상담은 어떻게 신청하나요?">{children}</Accordion>
```

The summary is body2 bold with a 24px minimum line box, 8px gaps between its slots and 16px of vertical padding at the default `verticalPadding="large"` (8 at small, 12 at medium, 0 at none). The chevron rotates 180° and the panel animates its height, both over 0.3s on `cubic-bezier(0.25, 0.1, 0.25, 1)`; `disableAnimation` removes both. `description` is label1 regular on `label.neutral`, and any `children` sit one vertical padding step below it.

The `line.normal.alternative` divider fades to zero while a collapsed row is hovered or pressed, and a disabled accordion drops everything except that divider to 20% opacity.
