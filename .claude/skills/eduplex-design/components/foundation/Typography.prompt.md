Typography is how every piece of text in the system gets its size — never hand-write a `font-size`, pick one of the 19 variants instead.

```jsx
<Typography as="h1" variant="title1" weight="bold">에듀플렉스 자기주도학습</Typography>
<Typography variant="body2" color="var(--semantic-label-alternative)">지점 안내</Typography>
```

The scale runs display1–3, title1–3, heading1–2, headline1–2, body1, body1-reading, body2, body2-reading, label1, label1-reading, label2, caption1, caption2; the `-reading` variants are the same size with a taller line-height for paragraphs. Weight is `regular` 400, `medium` 500, and `bold` — 700 on display and title variants, 600 everywhere else. Color defaults to `inherit`, so text takes the color of the surface it sits in; only pass `color` when it must differ. `noWrap` clamps to a single line with an ellipsis, and `as` sets the tag so heading levels stay semantic.
