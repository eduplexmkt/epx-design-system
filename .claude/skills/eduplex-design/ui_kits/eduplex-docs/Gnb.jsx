const { Icon } = window.MontageDesignSystem_4afdc8;

function Gnb({ section, onSection, theme, onTheme, onSearch }) {
  const links = [
    { label: 'Getting started', slug: 'getting-started' },
    { label: 'Foundations', slug: 'foundations' },
    { label: 'Components', slug: 'components' },
    { label: 'Utilities', slug: 'utilities' },
  ];
  return (
    <header style={gnbStyles.wrapper}>
      <div style={gnbStyles.container}>
        <a href="#" onClick={(e) => e.preventDefault()} style={gnbStyles.logo} aria-label="에듀플렉스"><img src={(window.__resources && window.__resources.logo) || "../../assets/logo/eduplex-main.svg"} alt="에듀플렉스" style={{ height: 20, display: 'block' }} /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 72 }}>
          <nav aria-label="Quick Navigation Links" style={gnbStyles.nav}>
            {links.map((l) => (
              <a
                key={l.slug}
                href="#"
                onClick={(e) => { e.preventDefault(); onSection(l.slug); }}
                aria-current={section === l.slug ? 'page' : undefined}
                style={{ ...gnbStyles.link, color: section === l.slug ? 'var(--semantic-label-normal)' : 'var(--semantic-label-alternative)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <button aria-label="search" onClick={onSearch} style={gnbStyles.action}><Icon name="search" size={22} /></button>
            <button aria-label="toggle theme" onClick={onTheme} style={gnbStyles.action}>
              <Icon name={theme === 'light' ? 'sun' : 'moon'} size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

const gnbStyles = {
  wrapper: {
    position: 'sticky',
    top: 0,
    zIndex: 1300,
    width: '100%',
    height: 'var(--gnb-height)',
    padding: '12px var(--layout-padding-inline)',
    boxSizing: 'border-box',
    display: 'flex',
    alignContent: 'center',
    backgroundColor: 'color-mix(in srgb, var(--semantic-background-normal-normal) 88%, transparent)',
    backdropFilter: 'blur(32px)',
  },
  container: { width: '100%', maxWidth: 'var(--layout-max-width)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 },
  logo: { display: 'flex', alignItems: 'center', height: 22, color: 'var(--semantic-label-normal)', textDecoration: 'none' },
  nav: { display: 'flex', alignItems: 'center', gap: 20, height: 22 },
  link: { padding: '12px 10px', fontSize: 15, lineHeight: '22px', letterSpacing: '0.0096em', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s ease' },
  action: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: 12, background: 'transparent', color: 'var(--semantic-label-normal)', cursor: 'pointer' },
};

Object.assign(window, { Gnb });
