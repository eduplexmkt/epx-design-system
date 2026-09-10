```jsx
<Avatar size="medium" src={user.photo} alt="" />
<Avatar size="large" variant="company" fallback="원" />
```

Sizes are 24/32/40/48/56px, with radii 6/8/10/12/14px for company + academy and a full circle for person. Company logos use `object-fit: contain` (never crop a logo); person photos cover. A numeric size derives its own radius.
