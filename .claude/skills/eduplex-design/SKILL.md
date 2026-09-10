---
name: eduplex-design
description: Use this skill to generate well-branded interfaces and assets for 에듀플렉스 (Eduplex, @eduplexmkt/mkt-design-system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

**초안을 만들기 전에 물어볼 것.** 생산용 덱·문서·랜딩·홍보 자료를 만들 때 커버(표지) 메인 이미지가 필요한 경우가 많다. 그럴 때는 작업에 들어가기 전에 한 번 물어봐라 — "커버 배경을 브랜드 룰대로 브랜드 블루(#0054A7)로 지정할까요?"

**폰트.** 파일 하나로 전달되는 결과물(아티팩트, 단일 HTML 시안, 메일 첨부)에는 `tokens/fonts-embed.css` 내용을 `<style>`에 그대로 넣어라 — 폰트가 base64로 들어 있어 외부 요청 없이 Pretendard가 나온다. 폴더째 쓰는 문서 사이트나 프로덕션 코드에서는 기존 `tokens/fonts.css`(상대경로 + CDN 폴백)를 쓴다. 둘을 동시에 넣지 마라.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
