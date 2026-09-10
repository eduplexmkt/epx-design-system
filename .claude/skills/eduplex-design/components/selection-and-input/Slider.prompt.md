Use Slider for a bounded numeric choice where the approximate position matters more than the exact figure — 예산, 학년 범위, 거리 — and a TextField when the user knows the number they want to type.

```jsx
<Slider defaultValue={[3, 9]} min={1} max={12} title={({ values }) => `${values[0]}학년 ~ ${values[1]}학년`} />
<Slider defaultValue={[40]} disabled label={({ value }) => `${value}분`} />
```

`value` and `defaultValue` are always arrays, so two entries make it a range with no extra prop. The track is 4px tall inside an 8px-padded hit area — `fill.strong` unfilled, `primary.normal` filled — and each thumb is a 20px primary circle ringed with a 2px `background.normal.normal` outline so it reads against the track. Hover, focus and drag fade in a 7.5% primary halo 12px larger than the thumb; disabled recolours track, fill and thumb all to `interaction.disable` and suppresses the halo. `title` is headline2 bold with a 32px gap below it, `label` is label1 medium pinned under each thumb 8px below the track — both accept a function of the current values, which is how you show live figures.
