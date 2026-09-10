Renders one of the 25 Montage icons copied into `assets/icons`, tinted with `currentColor`.

```jsx
<Icon name="chevron-right" size={20} />
```

Set `window.__WDS_ICON_BASE__` once per page to the relative path of `assets/icons` (cards inside `components/<group>/` use `'../../assets/icons'`). Sizes follow the host component: 24 for icon-only large buttons, 20 for large button leading icons, 18 medium, 16 small, 14 chips/badges, 12 xsmall chips.

Intentional addition: the upstream library ships one React component per icon (`@wanteddev/wds-icon`); this wrapper is the browser-friendly equivalent.
