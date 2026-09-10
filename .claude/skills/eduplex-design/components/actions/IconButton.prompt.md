An icon action with no container — the overlay is what responds to hover/press. Always give it an `aria-label`.

```jsx
<IconButton size="medium" aria-label="알림"><Icon name="bell" size={20} /></IconButton>
```

Boxes are 24/32/40/48px with 16/18/20/24px glyphs. `color="assistive"` for secondary chrome, `"primary"` only when the icon itself is the action.
