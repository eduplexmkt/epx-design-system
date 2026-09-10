const LNB_PAGES = {
  'getting-started': [{ group: 'Overview', items: ['Introduction', 'Installation', 'Theming'] }],
  foundations: [
    { group: 'Foundations', items: ['Overview', 'Color', 'Typography', 'Spacing', 'Elevation', 'Grid'] },
  ],
  components: [
    { group: 'Actions', items: ['Button', 'Icon Button', 'Text Button', 'Chip'] },
    { group: 'Selection & input', items: ['Text Field', 'Search Field', 'Select', 'Checkbox', 'Radio Group', 'Switch', 'Segmented Control'] },
    { group: 'Contents', items: ['Card', 'Content Badge', 'Avatar', 'Divider', 'Skeleton'] },
    { group: 'Feedback', items: ['Section Message', 'Toast', 'Tooltip'] },
    { group: 'Navigations', items: ['Top Navigation', 'Tab', 'Bottom Navigation'] },
  ],
  utilities: [{ group: 'Utilities', items: ['Box', 'FlexBox', 'Grid', 'Typography'] }],
};

function Lnb({ section, page, onPage }) {
  const groups = LNB_PAGES[section] || [];
  return (
    <aside style={lnbStyles.wrapper}>
      <div style={lnbStyles.scroll}>
        {groups.map((g) => (
          <div key={g.group} style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 24 }}>
            <div style={lnbStyles.group}>{g.group}</div>
            {g.items.map((item) => {
              const on = item === page;
              return (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => { e.preventDefault(); onPage(item); }}
                  aria-current={on ? 'page' : undefined}
                  style={{
                    ...lnbStyles.item,
                    color: on ? 'var(--semantic-primary-normal)' : 'var(--semantic-label-alternative)',
                    backgroundColor: on ? 'rgba(var(--semantic-primary-normal-rgb),0.05)' : 'transparent',
                    fontWeight: on ? 600 : 500,
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}

const lnbStyles = {
  wrapper: { width: 190, flexShrink: 0, position: 'sticky', top: 'var(--gnb-height)', height: 'calc(100vh - var(--gnb-height))', overflow: 'hidden' },
  scroll: { padding: '56px 10px 20px', overflowY: 'auto', height: '100%', boxSizing: 'border-box' },
  group: { padding: '6px 10px', fontSize: 13, lineHeight: '18px', letterSpacing: '0.0194em', fontWeight: 600, color: 'var(--semantic-label-normal)' },
  item: { padding: '7px 10px', borderRadius: 8, fontSize: 14, lineHeight: '20px', letterSpacing: '0.0145em', textDecoration: 'none', transition: 'color 0.2s ease, background-color 0.2s ease' },
};

Object.assign(window, { Lnb, LNB_PAGES });
