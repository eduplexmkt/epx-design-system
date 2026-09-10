# 로고 — 에듀플렉스

업로드받은 원본을 그대로 옮긴 뒤 c2pa 메타데이터만 제거했습니다. 형상(path 데이터, viewBox `0 0 2733.64 375.72`)은 원본과 동일합니다.

## 사용 규칙

| 배경 | 파일 |
| --- | --- |
| 밝은 배경 | `eduplex-main.svg` — Main Color |
| 어두운 배경 · 브랜드 컬러 배경 | `eduplex-white-point.svg` — White&Point Color |

단색 출력·팩스·1도 인쇄처럼 컬러를 쓸 수 없을 때만 `eduplex-black.svg` / `eduplex-white.svg`를 씁니다.

| 파일 | 색 |
| --- | --- |
| `eduplex-main.svg` | 워드마크 `#0054A7`(Main), 심볼 `#FFF100`(Point) |
| `eduplex-white-point.svg` | 워드마크 `#ffffff`, 심볼 `#FFF100` |
| `eduplex-black.svg` | 전체 `#000000` |
| `eduplex-white.svg` | 전체 `#ffffff` |

## 확인 필요 — 색상 값

업로드된 SVG는 4개 모두 `<defs>`가 비어 있어 원본의 fill 값이 남아 있지 않습니다(저장 과정에서 `<style>` 블록이 사라진 것으로 보입니다). 그래서 Main Color / Point Color 두 값은 **디자인 시스템 토큰에서 추론해 넣었습니다**:

- Main Color → `#0054A7` (`atomic.blue.50` = `semantic.primary.normal`)
- 두 버전 모두 워드마크만 색이 바뀌고 심볼은 항상 Point Color입니다.
- Point Color → `#FFF100` (`atomic.yellow.50` = `semantic.accent.background.yellow`)

브랜드 가이드의 실제 HEX가 다르면 알려주세요. 두 파일의 `<style>` 한 줄만 바꾸면 됩니다.

구조: 워드마크 글자와 오른쪽 4갈래 다이아몬드 심볼. 클래스 이름은 두 원본 파일에서 서로 반대로 붙어 있습니다 — `eduplex-main.svg`는 `.st1`이 워드마크·`.st0`이 심볼, `eduplex-white-point.svg`는 `.st0`이 워드마크·`.st1`이 심볼입니다.
