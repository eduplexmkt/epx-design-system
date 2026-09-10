function Sidebar({ anchors, active, onAnchor }) {
  return (
    <aside style={{ width: 180, flexShrink: 0, position: 'sticky', top: 'var(--gnb-height)', height: 'fit-content', padding: '56px 0 0' }}>
      <div style={{ fontSize: 13, lineHeight: '18px', letterSpacing: '0.0194em', fontWeight: 600, color: 'var(--semantic-label-normal)', padding: '0 0 8px' }}>On this page</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {anchors.map((a) => (
          <a
            key={a}
            href="#"
            onClick={(e) => { e.preventDefault(); onAnchor(a); }}
            style={{
              padding: '5px 0',
              fontSize: 13,
              lineHeight: '18px',
              letterSpacing: '0.0194em',
              textDecoration: 'none',
              fontWeight: a === active ? 600 : 400,
              color: a === active ? 'var(--semantic-label-normal)' : 'var(--semantic-label-assistive)',
              transition: 'color 0.2s ease',
            }}
          >
            {a}
          </a>
        ))}
      </div>
    </aside>
  );
}

function Footer() {
  const links = ['GitHub', 'Figma', 'Changelog', 'Contributing'];
  return (
    <footer style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: 20, padding: '32px 0', marginTop: 120 }}>
      <span style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 1, backgroundColor: 'var(--semantic-line-normal-alternative)' }} />
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 14, lineHeight: '142.9%', letterSpacing: '0.203px', fontWeight: 600, color: 'var(--semantic-label-neutral)', textDecoration: 'none' }}>{l}</a>
        ))}
      </div>
      <div style={{ fontSize: 13, lineHeight: '18px', letterSpacing: '0.0194em', color: 'var(--semantic-label-assistive)' }}>
        에듀플렉스 마케팅 디자인 시스템 · @eduplexmkt/mkt-design-system
      </div>
    </footer>
  );
}

Object.assign(window, { Sidebar, Footer });
