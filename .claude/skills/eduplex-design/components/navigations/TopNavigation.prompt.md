```jsx
<TopNavigation title="설명회 예약" leftContent={<IconButton aria-label="뒤로"><Icon name="chevron-left" /></IconButton>} />
<TopNavigation variant="display" title="매니저 채용" rightContent={<IconButton aria-label="설정"><Icon name="setting" /></IconButton>} />
<TopNavigation variant="search" title={<SearchField placeholder="검색" />} />
```

Padding is 16px all round, minimum height 56px. `normal` centers a headline2 title and absolutely positions the icon slots; `display` left-aligns a title3 bold; `search` swaps the title for a field. The background is an 88% elevated surface behind a 32px blur.
