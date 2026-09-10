For information that stays on the page. Transient confirmation goes in a Toast.

```jsx
<SectionMessage variant="cautionary" icon={<Icon name="circle-info" size={20} />} title="위클리 제출 마감이 3일 남았습니다">
  마감은 월요일 오후 2시까지 입니다.
</SectionMessage>
```

The surface is two stacked layers — 88% page background, then 5% of the status color — over a 32px blur, at a 12px radius with 12px padding. The status color appears in the icon only; body text stays `label.neutral`.
