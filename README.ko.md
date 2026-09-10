<img src="./.claude/skills/eduplex-design/assets/logo/eduplex-main.svg" width="260" alt="에듀플렉스">

# 에듀플렉스 디자인 시스템

에듀플렉스 마케팅의 화면·랜딩·시안을 하나의 기준으로 만들기 위한 디자인 시스템입니다.

[한국어](./README.ko.md) | [English](./README.md)

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

## 브랜드 기본값

| 항목 | 값 |
| --- | --- |
| 브랜드 블루 | `#0054A7` — 동작·선택을 뜻하는 유일한 색 |
| 포인트 옐로 | `#FFF100` — 로고 심볼과 강조 배경 (글자는 어두운 색) |
| 서체 | Pretendard (JP 서브셋 우선), 400 / 500 / 600 / 700 |
| 아이콘 | 359종 |

값은 전부 토큰으로 관리합니다. 컴포넌트에 HEX를 직접 쓰지 않고, 필요한 값이 없으면 시맨틱 토큰을 추가합니다.

## Claude로 디자인하기

`.claude/skills/eduplex-design/` 에 디자인 시스템 스킬이 들어 있습니다. 이 저장소를 Claude에 연결하면 토큰·컴포넌트·아이콘·로고를 읽어 브랜드 기준에 맞는 화면과 시안을 만듭니다.

| 경로 | 내용 |
| --- | --- |
| `tokens/` | 컬러, 타이포, 간격, 라운드, 그림자, 모션 |
| `components/` | 23종 컴포넌트의 실제 형상과 사용 규칙 |
| `guidelines/` | 파운데이션 문서 카드 |
| `assets/` | 아이콘 354종(+`index.md` 검색표), 로고 4종, Pretendard 폰트 |
| `ui_kits/` | 문서 사이트 레이아웃 |

단일 HTML 파일로 내보내는 시안·아티팩트에는 `tokens/fonts-embed.css` 를 씁니다. 폰트가 파일 안에 들어 있어 어디서 열어도 서체가 유지됩니다. 폴더째 쓰는 문서 사이트나 프로덕션 코드에서는 `tokens/fonts.css` 를 씁니다.

## 패키지

| 패키지 | 설명 |
| --- | --- |
| [`@eduplexmkt/mkt-design-system`](./packages/eduplex-design-system) | UI 컴포넌트 |
| [`@eduplexmkt/mkt-theme`](./packages/eduplex-theme) | 디자인 토큰과 테마 |
| [`@eduplexmkt/mkt-engine`](./packages/eduplex-engine) | 스타일 엔진 |
| [`@eduplexmkt/mkt-icon`](./packages/eduplex-icon) | 아이콘 컴포넌트 |

`packages/wds-*` 는 아래 '출처'에 적힌 원본 패키지로, 리브랜드 과정의 참조본으로 남겨둡니다.

## 개발 환경

Node.js 20 이상과 pnpm 10.19.0 이 필요합니다.

```bash
corepack enable
pnpm install
```

## 출처

원티드랩의 오픈소스 디자인 시스템 **Montage**(MIT)를 기반으로 에듀플렉스에 맞게 고쳐 쓰고 있습니다. 원본은 [wanteddev/montage-web](https://github.com/wanteddev/montage-web) 에서 볼 수 있습니다.

## 라이선스

[MIT License](./LICENSE.md)
