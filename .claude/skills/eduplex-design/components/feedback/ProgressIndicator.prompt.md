The determinate progress bar: a full-width 2px track in `fill.normal` with a `primary.normal` fill.

```jsx
<ProgressIndicator percent={40} />
```

The fill is never resized — it is a full-width layer translated to `translateX(-100 + percent)%`, animating over 200ms on `cubic-bezier(0.4, 0, 0.2, 1)`, the system's standard curve for anything that moves. There is no radius, no track inset and no indeterminate mode. For a multi-step bar use ProgressStepIndicator instead.
