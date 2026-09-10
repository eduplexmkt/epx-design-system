<img src="./.claude/skills/eduplex-design/assets/logo/eduplex-main.svg" width="260" alt="Eduplex">

# 에듀플렉스 디자인 시스템

The design system behind 에듀플렉스 (Eduplex) marketing — one set of tokens, components and assets for every screen, landing page and mockup.

[English](./README.md) | [한국어](./README.ko.md)

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

## Brand basics

| | |
| --- | --- |
| Brand blue | `#0054A7` — the one hue, and it means action or selection |
| Point yellow | `#FFF100` — the logo symbol and accent backgrounds (dark text on it) |
| Type | Pretendard (JP subset first), 400 / 500 / 600 / 700 |
| Icons | 359 |

Tokens are the API. Components carry no hex literals; when a value is missing, add a semantic token rather than inlining a color.

## Designing with Claude

`.claude/skills/eduplex-design/` holds the design system as a Claude skill. Connect this repository and Claude reads the tokens, components, icons and logo, then builds to the brand.

| Path | Contents |
| --- | --- |
| `tokens/` | Color, type, spacing, radius, elevation, motion |
| `components/` | 23 component families — real geometry and usage rules |
| `guidelines/` | Foundation doc cards |
| `assets/` | 354 icons plus a searchable `index.md`, 4 logo files, the Pretendard binary |
| `ui_kits/` | Documentation site layout |

For anything shipped as a single HTML file, use `tokens/fonts-embed.css` — the font travels inside the file, so the type survives anywhere. Folder-based builds and production code use `tokens/fonts.css`.

## Packages

| Package | Description |
| --- | --- |
| [`@eduplexmkt/mkt-design-system`](./packages/eduplex-design-system) | UI components |
| [`@eduplexmkt/mkt-theme`](./packages/eduplex-theme) | Design tokens and theme |
| [`@eduplexmkt/mkt-engine`](./packages/eduplex-engine) | Styling engine |
| [`@eduplexmkt/mkt-icon`](./packages/eduplex-icon) | Icon components |

`packages/wds-*` are the upstream packages named under Credits below, kept as a reference through the rebrand.

## Getting started

Node.js 20+ and pnpm 10.19.0.

```bash
corepack enable
pnpm install
```

## Credits

Built on **Montage**, Wanted Lab's open-source design system for web, used under the MIT License and adapted for 에듀플렉스. The original lives at [wanteddev/montage-web](https://github.com/wanteddev/montage-web).

## License

[MIT License](./LICENSE.md)
