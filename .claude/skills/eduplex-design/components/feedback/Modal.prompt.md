Modal is the only component that claims `z-index: 1300`, and it always sits over a `material.dimmer` scrim that cross-fades in 200ms `ease`.

```jsx
<Modal open={open} onOpenChange={setOpen} size="medium" title="위클리 플랜 제출" actions={<Button size="large" style={{width:'100%'}}>제출하기</Button>}>
  <ModalContentItem>
    <ModalHeading>제출하시겠습니까?</ModalHeading>
    <ModalDescription>제출 후에는 담당 선생님만 수정할 수 있습니다.</ModalDescription>
  </ModalContentItem>
</Modal>
<Modal open={open} variant="bottom" handle onOpenChange={setOpen}>…</Modal>
```

Content sits on two rhythms: the content column gaps its blocks by the size's content margin, while `ModalContentItem` keeps a tighter 12px column for lines that belong together — a heading and its description.

Size drives four numbers at once — small 360px wide / 12px radius / 20px content margin, medium 400 / 12 / 20, large 480 / 20 / 24, xlarge 560 / 20 / 32 (its action area keeps a 24px vertical margin) — and `resize="fixed"` pins the height to 400 / 480 / 560 / 640. Popup caps at `min(760px, 100%)`; bottom is a 480px-wide sheet with a `12px 12px 0 0` radius, a 200ms `ease` translate and the `--elevation-spread-medium` shadow; full drops radius and fills the viewport. The drag handle is a 40×5px `fill.strong` pill in a `7px 2px 0 2px` well.

Portal, scroll lock and focus trap are simplified out of this JSX version — it renders inline as a fixed layer — so only the visual spec above is authoritative here.
