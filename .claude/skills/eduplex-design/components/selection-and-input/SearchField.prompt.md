Search, not data entry. The magnifier is **built in** — there is no `leadingContent` prop, so do not pass one.

```jsx
<SearchField placeholder="에듀플렉스 지점 검색" width="100%" onReset={(prev) => console.log(prev)} />
```

Padding is 12px (medium) or 8px (small). Background is `fill.normal` under a 32px blur — no border and no shadow, which is what distinguishes it from TextField.

The magnifier tracks the field's state: `label.assistive` while the placeholder shows, `label.alternative` once there is text, `label.disable` when disabled. A reset button sits on the right and is hidden until the field is both focused and non-empty; clicking it clears the input and calls `onReset(previousValue)`. `wrapperRef` reaches the shell rather than the input.

The source drives icon and reset visibility through `:has()` selectors and `::placeholder`, neither of which is expressible as an inline style, so this build carries them as React state plus a scoped `<style>` element.
