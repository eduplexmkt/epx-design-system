SectionHeader titles a block of content — a row of cards, a list, a form step — and is the only heading treatment the system defines; don't hand-roll a bold Typography plus a "전체보기" link.

```jsx
<SectionHeader size="large" trailingContent={<TextButton size="small" trailingContent={<Icon name="chevron-right" size={16} />}>전체보기</TextButton>}>
  가까운 지점 찾기
</SectionHeader>
```

Sizes step through label1 / headline / heading / title, and each one drops a step on `platform="mobile"` (medium is heading1 desktop, heading2 mobile). Weight is always bold; xsmall is the only size tinted `--semantic-label-alternative` rather than `--semantic-label-strong`. `headingContent` sits inline right after the title at 10px gap, `trailingContent` is pushed to the far end at 20px gap and bottom-aligned — upstream tints normal-variant IconButtons in both slots with `--semantic-label-assistive`. Set `headingTag` so the document outline stays correct; it defaults to `h2`.
