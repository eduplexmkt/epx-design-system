const { Button, IconButton, TextButton, Chip, TextField, SearchField, Select, Checkbox, RadioGroup, Switch, SegmentedControl, Card, ContentBadge, Avatar, Divider, Skeleton, SectionMessage, Toast, Tooltip, Tab, TopNavigation, BottomNavigation, Icon } = window.MontageDesignSystem_4afdc8;

const H1 = ({ children }) => <h1 style={{ margin: 0, fontSize: 36, lineHeight: '48px', letterSpacing: '-0.027em', fontWeight: 700, color: 'var(--semantic-label-normal)' }}>{children}</h1>;
const Lead = ({ children }) => <p style={{ margin: '12px 0 0', fontSize: 16, lineHeight: '26px', letterSpacing: '0.0057em', color: 'var(--semantic-label-neutral)', maxWidth: 640 }}>{children}</p>;
const H2 = ({ children }) => <h2 style={{ margin: '56px 0 0', fontSize: 22, lineHeight: '30px', letterSpacing: '-0.0194em', fontWeight: 600, color: 'var(--semantic-label-normal)' }}>{children}</h2>;
const P = ({ children }) => <p style={{ margin: '8px 0 0', fontSize: 15, lineHeight: '24px', letterSpacing: '0.0096em', color: 'var(--semantic-label-neutral)', maxWidth: 640 }}>{children}</p>;

function Example({ children, code }) {
  const [showCode, setShowCode] = React.useState(false);
  return (
    <div style={{ marginTop: 20, borderRadius: 12, overflow: 'hidden', boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, padding: 32, backgroundColor: 'var(--semantic-background-normal-alternative)' }}>{children}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderTop: '1px solid var(--semantic-line-normal-alternative)' }}>
        <span style={{ fontSize: 12, lineHeight: '16px', letterSpacing: '0.0252em', color: 'var(--semantic-label-assistive)' }}>Preview</span>
        <TextButton size="small" color="assistive" onClick={() => setShowCode(!showCode)}>{showCode ? 'Hide code' : 'Show code'}</TextButton>
      </div>
      {showCode && (
        <pre style={{ margin: 0, padding: 16, borderTop: '1px solid var(--semantic-line-normal-alternative)', backgroundColor: 'var(--semantic-background-normal-alternative)', fontFamily: 'var(--font-family-mono)', fontSize: 13, lineHeight: '20px', color: 'var(--semantic-label-normal)', overflowX: 'auto' }}>{code}</pre>
      )}
    </div>
  );
}

function PropsTable({ rows }) {
  return (
    <div style={{ marginTop: 20, borderRadius: 12, overflow: 'hidden', boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, lineHeight: '20px', letterSpacing: '0.0145em' }}>
        <thead>
          <tr style={{ backgroundColor: 'var(--semantic-background-normal-alternative)' }}>
            {['Prop', 'Type', 'Default'].map((h) => (
              <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 600, color: 'var(--semantic-label-normal)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} style={{ borderTop: '1px solid var(--semantic-line-normal-alternative)' }}>
              <td style={{ padding: '10px 14px', fontFamily: 'var(--font-family-mono)', color: 'var(--semantic-label-normal)' }}>{r[0]}</td>
              <td style={{ padding: '10px 14px', fontFamily: 'var(--font-family-mono)', color: 'var(--semantic-label-alternative)' }}>{r[1]}</td>
              <td style={{ padding: '10px 14px', fontFamily: 'var(--font-family-mono)', color: 'var(--semantic-label-alternative)' }}>{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ButtonDoc() {
  return (
    <>
      <H1>Button</H1>
      <Lead>사용자가 화면에서 가장 먼저 실행할 동작을 담습니다. 한 화면에 solid primary 버튼은 하나만 두세요.</Lead>
      <H2>Variant</H2>
      <P>solid는 실행, outlined는 보조 동작에 사용합니다. color가 assistive일 때 라벨 두께는 medium으로 내려갑니다.</P>
      <Example code={'<Button>신청하기</Button>\n<Button variant="outlined">지점찾기</Button>\n<Button color="assistive">나중에</Button>'}>
        <Button>신청하기</Button>
        <Button variant="outlined">지점찾기</Button>
        <Button color="assistive">나중에</Button>
        <Button variant="outlined" color="assistive">취소</Button>
      </Example>
      <H2>Size</H2>
      <P>size마다 radius·padding·타이포가 함께 바뀝니다. large 12px / 12px 28px / body1, medium 10px / 9px 20px / body2, small 8px / 7px 14px / label2.</P>
      <Example code={'<Button size="large" />\n<Button size="medium" />\n<Button size="small" />'}>
        <Button size="large">신청하기</Button>
        <Button size="medium">신청하기</Button>
        <Button size="small">신청하기</Button>
        <Button size="large" iconOnly aria-label="북마크"><Icon name="bookmark" size={24} /></Button>
        <Button iconOnly aria-label="북마크"><Icon name="bookmark" size={20} /></Button>
      </Example>
      <H2>State</H2>
      <Example code={'<Button loading />\n<Button disabled />'}>
        <Button loading>신청하기</Button>
        <Button disabled>신청 완료</Button>
        <Button variant="outlined" disabled>지점찾기</Button>
        <Button leadingContent={<Icon name="plus" size={18} />}>후기 추가</Button>
      </Example>
      <H2>Props</H2>
      <PropsTable rows={[['size', "'small' | 'medium' | 'large'", "'medium'"], ['variant', "'solid' | 'outlined'", "'solid'"], ['color', "'primary' | 'assistive'", "'primary'"], ['fullWidth', 'boolean', 'false'], ['iconOnly', 'boolean', 'false'], ['loading', 'boolean', 'false'], ['disabled', 'boolean', 'false']]} />
    </>
  );
}

function ColorDoc() {
  const rows = [
    ['primary.normal', 'var(--semantic-primary-normal)', '#0054A7'],
    ['label.normal', 'var(--semantic-label-normal)', 'coolNeutral.10'],
    ['label.alternative', 'var(--semantic-label-alternative)', 'coolNeutral.25 @ 61%'],
    ['line.normal.neutral', 'var(--semantic-line-normal-neutral)', 'coolNeutral.50 @ 16%'],
    ['fill.normal', 'var(--semantic-fill-normal)', 'coolNeutral.50 @ 8%'],
    ['status.negative', 'var(--semantic-status-negative)', '#FF4242'],
  ];
  return (
    <>
      <H1>Color</H1>
      <Lead>색은 atomic 스케일과 semantic 토큰 두 층으로 나뉩니다. 제품 코드는 semantic 토큰만 사용합니다.</Lead>
      <H2>Semantic tokens</H2>
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
        {rows.map(([name, value, note]) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ height: 64, borderRadius: 10, background: value, boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-alternative)' }} />
            <div style={{ fontSize: 13, lineHeight: '18px', fontWeight: 600, color: 'var(--semantic-label-normal)' }}>{name}</div>
            <div style={{ fontSize: 12, lineHeight: '16px', fontFamily: 'var(--font-family-mono)', color: 'var(--semantic-label-assistive)' }}>{note}</div>
          </div>
        ))}
      </div>
      <H2>Accent</H2>
      <P>accent.background는 카테고리 아트에, accent.foreground는 텍스트에 사용합니다. 반대로 쓰지 않습니다.</P>
      <Example code={'<ContentBadge accentColor="violet">추천</ContentBadge>'}>
        {['red', 'redOrange', 'orange', 'lime', 'green', 'cyan', 'lightBlue', 'blue', 'violet', 'purple', 'pink', 'yellow'].map((c) => (
          <ContentBadge key={c} accentColor={c}>{c}</ContentBadge>
        ))}
      </Example>
    </>
  );
}

function GalleryDoc({ page }) {
  const [seg, setSeg] = React.useState('reco');
  const [tab, setTab] = React.useState('all');
  const [nav, setNav] = React.useState('home');
  const [radio, setRadio] = React.useState('all');
  const [on, setOn] = React.useState(true);
  return (
    <>
      <H1>{page}</H1>
      <Lead>에듀플렉스 디자인 시스템 컴포넌트는 모두 semantic 토큰 위에서 동작하며, 다크 모드는 토큰 값만 바꿔 지원합니다.</Lead>
      <H2>Selection & input</H2>
      <Example code={'<TextField /> <Select /> <Checkbox /> <Switch />'}>
        <TextField placeholder="이메일을 입력해 주세요" width={220} />
        <Select width={160} placeholder="지역" options={[{ value: 'seoul', label: '서울' }, { value: 'busan', label: '부산' }]} />
        <Checkbox checked label="전체 동의" />
        <RadioGroup direction="row" value={radio} onChange={setRadio} options={[{ value: 'all', label: '전체' }, { value: 'new', label: '직영' }]} />
        <Switch checked={on} onChange={() => setOn(!on)} />
      </Example>
      <H2>Navigation</H2>
      <Example code={'<Tab /> <SegmentedControl /> <BottomNavigation />'}>
        <div style={{ width: '100%' }}>
          <Tab value={tab} onChange={setTab} items={[{ value: 'all', label: '전체' }, { value: 'dev', label: '학습하기' }, { value: 'design', label: '나의스크랩' }]} />
        </div>
        <div style={{ width: 320 }}>
          <SegmentedControl value={seg} onChange={setSeg} items={[{ value: 'reco', label: '추천' }, { value: 'new', label: '최신' }]} />
        </div>
        <div style={{ width: 320, borderRadius: 12, overflow: 'hidden', boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-alternative)' }}>
          <BottomNavigation value={nav} onChange={setNav} items={[
            { value: 'home', icon: <Icon name="home" size={24} />, label: '홈' },
            { value: 'search', icon: <Icon name="search" size={24} />, label: '탐색' },
            { value: 'saved', icon: <Icon name="bookmark" size={24} />, label: '저장' },
            { value: 'me', icon: <Icon name="person" size={24} />, label: '마이' },
          ]} />
        </div>
      </Example>
      <H2>Contents & feedback</H2>
      <Example code={'<Card /> <SectionMessage /> <Toast /> <Tooltip />'}>
        <Card width={200} title="개별지도 노하우" caption="강사명 · 교육기간" badges={<ContentBadge size="xsmall">전체</ContentBadge>} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: '1 1 260px', minWidth: 0 }}>
          <SectionMessage variant="info" icon={<Icon name="circle-info" size={20} />} title="위클리 플랜을 제출해 보세요">마감은 월요일 오후 2시까지 입니다.</SectionMessage>
          <Toast icon={<Icon name="check" size={20} />}>위클리가 저장되었습니다.</Toast>
          <Tooltip size="small" shortcut="⌘K">검색</Tooltip>
        </div>
      </Example>
      <H2>Loading</H2>
      <Example code={'<Skeleton variant="rectangle" /> <Skeleton variant="text" />'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 200 }}>
          <Skeleton variant="rectangle" width="100%" height={120} />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="55%" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Skeleton variant="circle" width={40} height={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 160 }}>
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="45%" />
          </div>
        </div>
      </Example>
    </>
  );
}

function DocPage({ section, page }) {
  if (page === 'Button') return <ButtonDoc />;
  if (page === 'Color') return <ColorDoc />;
  return <GalleryDoc page={page} />;
}

Object.assign(window, { DocPage, Example, PropsTable });
