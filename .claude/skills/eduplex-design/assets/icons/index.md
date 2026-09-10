# 아이콘 — 에듀플렉스 디자인 시스템

`packages/eduplex-icon/src/icon-*.tsx` 에서 추출한 354종. 파일명은 `<이름>.svg`, 컴포넌트명은 `Icon<PascalCase>`.

## 쓰는 법

모든 path가 `fill="currentColor"` 라서 부모의 `color` 를 따라간다. 크기는 `width`/`height` 로 조절한다.

```html
<span style="color: var(--primary)">
  <!-- bell.svg 내용 붙여넣기 -->
</span>
```

React에서는 `@eduplexmkt/mkt-icon` 의 컴포넌트를 쓴다.

```jsx
import IconBell from '@eduplexmkt/mkt-icon/icon-bell';
<IconBell style={{ fontSize: 24 }} />
```

기본 viewBox는 `0 0 24 24`. 이름 끝의 `-fill` 은 채운 형태, `-thick` 은 굵은 선, `-small` 은 작은 크기용, `-color` 는 다색 아이콘이다.

## 목록

| 이름 | 설명 | 키워드 | 속성 |
| --- | --- | --- | --- |
| `agent` | 원티드 에이전트 아이콘을 표현합니다. | 에이전트, Agent, 원티드 AI, 원티드 에이전트 | Outlined |
| `agent-color` | 에이전트를 표현합니다. | agent, AI, 에이전트 |  |
| `agent-search` | AI 에이전틱 검색 기능을 표현합니다. | AI, AI Agent, 에이전트, 검색, AI Search, Agent Search, 에이전트 서치, 채용 에이전트 | Outlined |
| `ai-review` | AI 맞춤 리뷰 기능을 표현합니다. | AI Review, Review, AI, Ai, Sparkle, Star, 이력서 리뷰, 맞춤 리뷰, 이력서 코칭, 맞춤 포지션 리뷰, 포지션 리뷰, 스마트 | Outlined |
| `align-center` | 가운데 정렬을 표현합니다. | Paragraph, 얼라인, 중앙정렬, Align | Outlined |
| `align-justify` | 양끝 정렬을 표현합니다. | Paragraph, 얼라인, Align, 양끝 정렬 | Outlined |
| `align-left` | 왼쪽 정렬을 표현합니다. | Paragraph, 얼라인, Align, Left Align, 왼쪽 정렬, Right | Outlined |
| `align-right` | 오른쪽 정렬을 표현합니다. | Paragraph, 얼라인, Align, 오른쪽 정렬, Right | Outlined |
| `android` | 안드로이드 기기를 표현합니다. | 안드로이드, Android | Outlined |
| `apps` | 여러 앱 리스트를 표현합니다. | 전체보기, All, More, App | Outlined |
| `arrow-down` | 아래쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, Bottom | Outlined |
| `arrow-down-thick` | 아래쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, Bottom, Thick | Outlined |
| `arrow-left` | 왼쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, Left, Back | Outlined |
| `arrow-left-thick` | 왼쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, Left, Back, Thick | Outlined |
| `arrow-right` | 오른쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, Right | Outlined |
| `arrow-right-thick` | 오른쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, Right, Thick | Outlined |
| `arrow-turn-down-left` | 왼쪽으로 들어가는 화살표를 표현합니다. | Select, Enter, 선택, 엔터 | Outlined |
| `arrow-turn-down-right` | 오른쪽으로 들어가는 화살표를 표현합니다. | Indent, 개행 | Outlined |
| `arrow-up` | 위쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, 꺽쇠, Top | Outlined |
| `arrow-up-right` | 오른쪽 위쪽 화살표를 표현합니다. 외부 링크로 연결되거나 새 창으로 이동을 표현합니다. | 애로우, Arrow, 화살표, 꺽쇠, Outward, 오른쪽 위, 대각선, Right, External Link, 링크, 새창, New Window, 외부링크, 바로가기, 이동, 화살표 | Outlined |
| `arrow-up-right-thick` | 오른쪽 위쪽 화살표를 표현합니다. 외부 링크로 연결되거나 새 창으로 이동을 표현합니다. | Thick, 애로우, Arrow, 화살표, 꺽쇠, Outward, 오른쪽 위, 대각선, Right, External Link, 링크, 새창, New Window, 외부링크, 바로가기, 이동, 화살표 | Outlined |
| `arrow-up-thick` | 위쪽 화살표를 표현합니다. | 애로우, Arrow, 화살표, Top, Thick | Outlined |
| `attachment` | 첨부파일을 표현합니다. | Paperclip, 클립 | Outlined |
| `bell` | 새 정보와 관련한 내용을 표현할 때 사용합니다. | 노티피케이션, 벨, 알람, Ring, Bell, Alarm Center, Notification, Noti, Notify | Outlined |
| `bell-fill` | 새 정보와 관련한 내용을 표현할 때 사용합니다. | 노티피케이션, 벨, 알람, Ring, Bell, Alarm Center, Notification, Noti, Notify | Solid |
| `bell-plus` | 알림으로 추가할 때 사용합니다. | 알림 설정 추가, Alarm, Bell, 벨, Add | Outlined |
| `blank` | 기본 표시를 위한 아이콘으로, 쓰지 않습니다. |  | Outlined |
| `blank-color` | 기본 표시를 위한 아이콘으로, 쓰지 않습니다. |  |  |
| `bold` | 텍스트의 두께를 표현합니다. | Bold, 두께, B, B, 폰트, 볼드 | Outlined |
| `book` | 책을 표현합니다. | 책, Book, Library, 도서관, 북 | Outlined |
| `book-fill` | 책을 표현합니다. | 책, Book, Library, 도서관, 북 | Solid |
| `bookmark` | 북마크나 저장을 표시할 때 사용합니다. | 북마크, Bookmark, Save, 저장, 추가, Add | Outlined |
| `bookmark-fill` | 북마크나 저장을 표시할 때 사용합니다. | 북마크, Bookmark, Save, 저장, 추가, Add | Solid |
| `bubble` | 댓글을 표현합니다. | Comment, Bubble, 버블, 코멘트, 댓글, 답글, Reply | Outlined |
| `bubble-fill` | 댓글을 표현합니다. | Comment, Bubble, 버블, 코멘트, 댓글, 답글, Reply | Solid |
| `bubble-plus` | 댓글이나 대화를 추가할 때 사용합니다. | Conversation, Comment, Add, Bubble, 추가, 코멘트, 대화, 댓글 | Outlined |
| `bubble-plus-fill` | 댓글이나 대화를 추가할 때 사용합니다. | Conversation, Comment, Add, Bubble, 추가, 코멘트, 대화, 댓글 | Solid |
| `bulb` | 아이디어 등을 표현합니다. | 전구, Bulb, 아이디어 | Outlined |
| `bulb-fill` | 아이디어 등을 표현합니다. | 전구, Bulb, 아이디어 | Solid |
| `business-bag` | 채용, 커리어를 표현합니다. | Brief Case, Careerbox, Business, 브리프케이스, 채용, 비즈니스, 비지니스, 커리어 박스, 가방 | Outlined |
| `business-bag-fill` | 채용, 커리어를 표현합니다. | Brief Case, Careerbox, Business, 브리프케이스, 채용, 비즈니스, 비지니스, 커리어 박스, 가방 | Solid |
| `calendar` | 일정과 관련한 기능을 표시할 때 사용합니다. | Monthly, 캘린더, 달력 | Outlined |
| `calendar-fill` | 일정과 관련한 기능을 표시할 때 사용합니다. | Monthly, 캘린더, 달력 | Outlined |
| `calendar-person` | 캘린더 속 사람을 표현합니다. | 이벤트, Event | Outlined |
| `camera` | 사진을 촬영할 때 사용합니다. | 사진, Capture, Camera, 캡쳐, 촬영 | Outlined |
| `camera-fill` | 사진을 촬영할 때 사용합니다. | 사진, Capture, Camera, 캡쳐, 촬영 | Solid |
| `caret-down` | 작은 아래쪽 화살표를 표현합니다. | Bottom, Down, Caret, 캐릿 | Outlined |
| `caret-up` | 작은 위쪽 화살표를 표현합니다. | Up, Top, Caret, 캐릿 | Outlined |
| `certificate` | 인증을 표현합니다. | Certification | Outlined |
| `change` | 순서를 변경할 때 사용합니다. | Swap, 스왑, 변경, 바꾸기, 전환 | Outlined |
| `chat` | 대화를 표현합니다. | Conversation, 대화, 채팅 | Outlined |
| `check` | 선택 여부를 표시할 때 사용합니다. | 확인, 체크, 첵, Check, Checked, Confirm | Outlined |
| `check-thick` | 선택 여부를 표시할 때 사용합니다. | Thick, 확인, 체크, 첵, Check, Checked, Confirm | Outlined |
| `chevron-double-left` | 왼쪽으로 큰 상태 변화를 표현합니다. | 왼쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Left | Outlined |
| `chevron-double-left-small` | 왼쪽으로 큰 상태 변화를 표현합니다. | 왼쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Left, Small | Outlined |
| `chevron-double-left-thick` | 왼쪽으로 큰 상태 변화를 표현합니다. | Thick, 왼쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Left | Outlined |
| `chevron-double-left-thick-small` | 왼쪽으로 큰 상태 변화를 표현합니다. | Thick, 왼쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Left, Small | Outlined |
| `chevron-double-right` | 오른쪽으로 큰 상태 변화를 표현합니다. | 오른쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Right | Outlined |
| `chevron-double-right-small` | 오른쪽으로 큰 상태 변화를 표현합니다. | 오른쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Right, Small, Big | Outlined |
| `chevron-double-right-thick` | 오른쪽으로 큰 상태 변화를 표현합니다. | Thick, 오른쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Right | Outlined |
| `chevron-double-right-thick-small` | 오른쪽으로 큰 상태 변화를 표현합니다. | Thick, 오른쪽 꺾쇠, 굵은, 얇은, 작은, 큰, Double Chevron, Right, Small | Outlined |
| `chevron-down` | 아래쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Chevron, Arrow, Down, Bottom, 꺾쇠, 아래, 화살표, 표시, 하단 | Outlined |
| `chevron-down-small` | 아래쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Chevron, Arrow, Down, Bottom, 꺾쇠, 아래, 화살표, 표시, 하단, Small | Outlined |
| `chevron-down-thick` | 아래쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Thick, Chevron, Arrow, Down, Bottom, 꺾쇠, 아래, 화살표, 표시, 하단 | Outlined |
| `chevron-down-thick-small` | 아래쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Thick, Chevron, Arrow, Down, Bottom, 꺾쇠, 아래, 화살표, 표시, 하단, Small | Outlined |
| `chevron-left` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 뒤로가기, Chevron, Back, Left, Size | Outlined |
| `chevron-left-small` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 뒤로가기, Chevron, Back, Left, Size, Tight, Small | Outlined |
| `chevron-left-thick` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 뒤로가기, Chevron, Back, Left | Outlined |
| `chevron-left-thick-small` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 뒤로가기, Chevron, Back, Left, Small | Outlined |
| `chevron-left-tight` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 뒤로가기, Chevron, Back, Left, Tight | Outlined |
| `chevron-left-tight-small` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 뒤로가기, Chevron, Back, Left, Tight, Small | Outlined |
| `chevron-left-tight-thick` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 뒤로가기, Chevron, Back, Left, Size, Tight | Outlined |
| `chevron-left-tight-thick-small` | 왼쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 뒤로가기, Chevron, Back, Left, Tight, Small | Outlined |
| `chevron-right` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 앞으로 가기, Chevron, Forward, Right | Outlined |
| `chevron-right-small` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 앞으로 가기, Chevron, Forward, Right, Small | Outlined |
| `chevron-right-thick` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 앞으로 가기, Chevron, Forward, Right | Outlined |
| `chevron-right-thick-small` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 앞으로 가기, Chevron, Forward, Right, Small | Outlined |
| `chevron-right-tight` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 앞으로 가기, Chevron, Forward, Right, Tight | Outlined |
| `chevron-right-tight-small` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | 꺾쇠, 앞으로 가기, Chevron, Forward, Right, Tight, Small | Outlined |
| `chevron-right-tight-thick` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 앞으로 가기, Chevron, Forward, Right, Tight | Outlined |
| `chevron-right-tight-thick-small` | 오른쪽 꺾쇠를 표현합니다. 여백, 두께, 사이즈를 조정할 수 있습니다. | Thick, 꺾쇠, 앞으로 가기, Chevron, Forward, Right, Tight, Small | Outlined |
| `chevron-up` | 위쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Chevron, Arrow, Up, Top, 꺾쇠, 위, 화살표, 표시, 상단 | Outlined |
| `chevron-up-small` | 위쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Chevron, Arrow, Up, Top, 꺾쇠, 위, 화살표, 표시, 상단, Small | Outlined |
| `chevron-up-thick` | 위쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Thick, Chevron, Arrow, Up, Top, 꺾쇠, 위, 화살표, 표시, 상단 | Outlined |
| `chevron-up-thick-small` | 위쪽 방향의 꺾쇠를 표현합니다. 굵기와 사이즈 옵션을 조절할 수 있습니다. | Thick, Chevron, Arrow, Up, Top, 꺾쇠, 위, 화살표, 표시, 상단, Small | Outlined |
| `circle` | 원형을 표현합니다. | Oval, 원형 | Outlined |
| `circle-block` | 금지된 상황을 표현합니다. | Stop, 멈춤, 밴, Banned, Prohibited, 금지, Blocked, No, 그만, 멈춰, 동그란 금지 | Outlined |
| `circle-check` | 정상적으로 확인된 상태를 표현합니다. | 체크, 확인, Check, Checked, Confirm | Outlined |
| `circle-check-fill` | 정상적으로 확인된 상태를 표현합니다. | 체크, 확인, Check, Checked, Confirm | Solid |
| `circle-check-opaque` | 정상적으로 확인된 상태를 표현합니다. | 체크, 확인, Check, Checked, Confirm | Solid |
| `circle-close` | 정보를 지울 때 사용합니다. | Closed, Delete, 삭제, 제거, 닫기 | Outlined |
| `circle-close-fill` | 정보를 지울 때 사용합니다. | Closed, Delete, 삭제, 제거, 닫기 | Solid |
| `circle-close-opaque` | 정보를 지울 때 사용합니다. | Closed, Delete, 삭제, 제거, 닫기 | Solid |
| `circle-dot` | 라디오 버튼을 표현합니다. | 서클 닷 | Outlined |
| `circle-exclamation` | 주의할 정보를 표현합니다. | 워닝, Warning, Wait, 기다리기, 주의 | Outlined |
| `circle-exclamation-fill` | 주의할 정보를 표현합니다. | 워닝, Warning, Wait, 기다리기, 주의 | Solid |
| `circle-exclamation-opaque` | 주의할 정보를 표현합니다. | 워닝, Warning, Wait, 기다리기, 주의 | Solid |
| `circle-fill` | 원형을 표현합니다. | Oval, 원형 | Solid |
| `circle-info` | 정보를 표시할 때 사용합니다. | Additional Information, Info | Outlined |
| `circle-info-fill` | 정보를 표시할 때 사용합니다. | Additional Information, Info | Solid |
| `circle-info-opaque` | 정보를 표시할 때 사용합니다. | Additional Information, Info | Solid |
| `circle-plus` | 요소를 추가할 때 사용합니다. | 플러스, 추가, Add, Plus | Outlined |
| `circle-plus-fill` | 요소를 추가할 때 사용합니다. | 플러스, 추가, Add, Plus | Solid |
| `circle-plus-opaque` | 요소를 추가할 때 사용합니다. | 플러스, 추가, Add, Plus | Solid |
| `circle-question` | 이해에 도움이 되는 정보를 표시할 때 사용합니다. | 물음표, 추가 정보, Question, Additional Information | Outlined |
| `circle-question-fill` | 이해에 도움이 되는 정보를 표시할 때 사용합니다. | 물음표, 추가 정보, Question, Additional Information | Solid |
| `circle-question-opaque` | 이해에 도움이 되는 정보를 표시할 때 사용합니다. | 물음표, 추가 정보, Question, Additional Information | Solid |
| `circle-up-right` | 오른쪽 위쪽 화살표를 표현합니다. 외부 링크 연결과 같은 액션을 강조하여 표현합니다. | 애로우, Arrow, 화살표, 꺽쇠, Outward, 오른쪽 위, 대각선, Right, External Link, Circle, 오른쪽, 우측, 외부링크, 원형, 바로가기 | Outlined |
| `circle-up-right-fill` | 오른쪽 위쪽 화살표를 표현합니다. 외부 링크 연결과 같은 액션을 강조하여 표현합니다. | 애로우, Arrow, 화살표, 꺽쇠, Outward, 오른쪽 위, 대각선, Right, External Link, Circle, 오른쪽, 우측, 외부링크, 원형, 바로가기 | Solid |
| `clock` | 시간을 표현합니다. | 시계, Clock | Outlined |
| `clock-fill` | 시간을 표현합니다. | 시계, Clock | Solid |
| `close` | 요소를 닫을 때 사용합니다. | 닫기, Close | Outlined |
| `close-thick` | 요소를 닫을 때 사용합니다. | Thick, 닫기, Close | Outlined |
| `code` | 에디터 등에서 코드 에디터를 여는 기능을 지칭할 때 사용합니다. | 코드, 에디터, Editor, Code | Outlined |
| `coffee` | 커피를 표현합니다. | Coffee, Coffeechat, 커피챗 | Outlined |
| `coffee-fill` | 커피를 표현합니다. | Coffee, Coffeechat, 커피챗 | Solid |
| `coins` | 쌓인 동전을 표현합니다. | Coins, Stacked Rewards 리워드, 코인, 동전, Money, 돈 | Outlined |
| `coins-fill` | 쌓인 동전을 표현합니다. | Coins, Stacked Rewards 리워드, 코인, 동전, Money, 돈 | Solid |
| `column` | 컬럼을 표현합니다. | 계층, 칸반, Kanban | Outlined |
| `company` | 회사를 표현합니다. | 회사, Company | Outlined |
| `company-check` | 회사를 팔로우한 상태를 표현합니다. | 팔로우 완료, 팔로우, 회사, 체크, Checked, Added, Followed, Company | Outlined |
| `company-check-fill` | 회사를 팔로우한 상태를 표현합니다. | 팔로우 완료, 팔로우, 회사, 체크, Checked, Added, Followed, Company | Solid |
| `company-fill` | 회사를 표현합니다. | 회사, Company | Solid |
| `company-plus` | 회사를 추가할 때 사용합니다. | 팔로우, 회사, 추가, 더하기, Add, Follow, Company | Outlined |
| `company-plus-fill` | 회사를 추가할 때 사용합니다. | 팔로우, 회사, 추가, 더하기, Add, Follow, Company | Solid |
| `compass` | 나침반을 표현합니다. | 콤파스, 컴파스, 나침반, 방향, Direction, Compass, Way, Path | Outlined |
| `compass-fill` | 나침반을 표현합니다. | 콤파스, 컴파스, 나침반, 방향, Direction, Compass, Way, Path | Solid |
| `component` | 컴포넌트를 표현합니다. | Component | Outlined |
| `component-fill` | 컴포넌트를 표현합니다. | Component | Solid |
| `copy` | 정보를 복사할 때 사용합니다. | 복사, 복붙, Copy, Clipboard, Paste | Outlined |
| `corner-down-left` |  |  |  |
| `crop` | 이미지 크롭을 표현합니다. | Crop, 크롭, 자르기, 이미지 크롭 | Outlined |
| `crown` | 대표적 성격 또는 성과 달성 등을 표현합니다. | 왕관, 성취, 달성, 킹, 짱, 리더, King, Crown, Achieved, Great, Best, Leader | Outlined |
| `crown-fill` | 대표적 성격 또는 성과 달성 등을 표현합니다. | 왕관, 성취, 달성, 킹, 짱, 리더, King, Crown, Achieved, Great, Best, Leader | Solid |
| `deep-search` | 딥서치 기능을 표현합니다. | Deep Search, Search, 검색, 검색 관리, 딥서치, Deep Search, 리스트, 검색 리스트 | Outlined |
| `desktop` | 데스크톱 기기를 표현합니다. | Computer, PC, 컴퓨터, 모니터, Monitor | Outlined |
| `desktop-fill` | 데스크톱 기기를 표현합니다. | Computer, PC, 컴퓨터, 모니터, Monitor | Solid |
| `diamond` | 다이아몬드를 표현합니다. | 보석, Jewelry, 주얼리 | Outlined |
| `diamond-fill` | 다이아몬드를 표현합니다. | 보석, Jewelry, 주얼리 | Solid |
| `dislike` | 내용을 비추천할 때 사용합니다. | 반대, Thumbs Down, 노따봉, Bad | Outlined |
| `dislike-fill` | 내용을 비추천할 때 사용합니다. | 반대, Thumbs Down, 노따봉, Bad | Solid |
| `document` | 문서를 표현합니다. | Page, 접힌 페이지, 파일, 문서, Docs, Folded | Outlined |
| `document-fill` | 문서를 표현합니다. | Page, 접힌 페이지, 파일, 문서, Docs, Folded | Solid |
| `document-person` | 개인정보가 포함된 문서를 표현합니다. | Resume, CV, 이력서, 프로필, 사람, 인물, 개인정보, Personal Information, Profile, Docs, Folded | Outlined |
| `document-person-fill` | 개인정보가 포함된 문서를 표현합니다. | Resume, CV, 이력서, 프로필, 사람, 인물, 개인정보, Personal Information, Profile, Docs, Folded | Solid |
| `document-search` | 문서 검색을 표현합니다. | Search, 검색, Document, 문서 | Outlined |
| `document-text` | 정보가 포함된 문서를 표현합니다. | 문서, 접힌, 내용 있는, Written, Docs, Filled, Information, Folded | Outlined |
| `document-text-fill` | 정보가 포함된 문서를 표현합니다. | 문서, 접힌, 내용 있는, Written, Docs, Filled, Information, Folded | Solid |
| `dot` | 업데이트된 내용을 표현합니다. | 점, Dot | Outlined |
| `download` | 에셋을 다운로드할 때 사용합니다. | 다운로드, Download | Outlined |
| `exclamation` | 경고하는 상황을 표현합니다. | 느낌표, 경고, 주의, 부적합, Warning | Outlined |
| `external-link` | 새 창으로 정보를 표시할 때 사용합니다. | 바깥 링크, 외부 링크, 새 창, Another Window, External Link | Outlined |
| `eye` | 정보 표시 여부를 구분할 때 사용합니다. | 뷰, 눈, 눈알, 조회, 비밀번호 조회, 문자표시, 문자 표시 안함. View, Eye, Browse, Password Reveal | Outlined |
| `eye-fill` | 정보 표시 여부를 구분할 때 사용합니다. | 뷰, 눈, 눈알, 조회, 비밀번호 조회, 문자표시, 문자 표시 안함. View, Eye, Browse, Password Reveal | Solid |
| `eye-slash` | 개인정보를 가릴 때 사용합니다. | 가려진 정보, 뷰 슬래시, 안보임, 안 보임, 눈알 슬래시, View Slash, Can&Amp;Amp;#39;T See, Unseen, Slashed Eye, Hidden Eye | Outlined |
| `eye-slash-fill` | 개인정보를 가릴 때 사용합니다. | 가려진 정보, 뷰 슬래시, 안보임, 안 보임, 눈알 슬래시, View Slash, Can&Amp;#39;T See, Unseen, Slashed Eye, Hidden Eye | Solid |
| `face-smile` | 긍정적인 웃는 얼굴을 표현합니다. | 스마일, 웃는 얼굴, 웃음, 나이스, Smile, Face, Good, Nice | Outlined |
| `face-smile-fill` | 긍정적인 웃는 얼굴을 표현합니다. | 스마일, 웃는 얼굴, 웃음, 나이스, Smile, Face, Good, Nice | Solid |
| `filter` | 정보를 필터링할 때 사용합니다. | 필터, Filter, 깔때기 | Outlined |
| `filter-fill` | 정보를 필터링할 때 사용합니다. | 필터, Filter, 깔때기 | Solid |
| `fire` | 불꽃을 표현합니다. | Featured, Hot, 인기 | Outlined |
| `fire-fill` | 불꽃을 표현합니다. | Featured, Hot, 인기 | Solid |
| `flag` | 깃발을 표현합니다. | 휘날림, Milestone, 마일스톤 | Outlined |
| `flag-fill` | 깃발을 표현합니다. | 휘날림, Milestone, 마일스톤 | Solid |
| `flip` | 좌우반전을 표현합니다. | Flip, Reflect, 좌우반전, 반전 | Outlined |
| `flip-backward` | 되돌리기를 표현합니다. | Flip, Backward, Reverse, Undo | Outlined |
| `folder` | 폴더를 표현합니다. | 폴더, 파일들, 모음, Stacked, Gathered | Outlined |
| `folder-fill` | 폴더를 표현합니다. | 폴더, 파일들, 모음, Stacked, Gathered | Solid |
| `folder-job` | 개인정보가 포함된 폴더를 표현합니다. | Job File, 프로필 폴더, Profile | Outlined |
| `folder-job-fill` | 개인정보가 포함된 폴더를 표현합니다. | Job File, 프로필 폴더, Profile | Solid |
| `folder-star` | 즐겨찾기한 폴더를 표현합니다. | Menu Star | Outlined |
| `folder-star-fill` | 즐겨찾기한 폴더를 표현합니다. | Menu Star | Solid |
| `full` | 요소를 확장하거나 확대할 때 사용합니다. | Expand, 확대, 확장, 전체 | Outlined |
| `globe` | 국가나 언어를 변경할 때 사용합니다. | 글로벌, Globe, Global, 지구본 | Outlined |
| `globe-fill` | 국가나 언어를 변경할 때 사용합니다. | 글로벌, Globe, Global, 지구본 | Solid |
| `graduation` | 학위, 교육 이력을 표현합니다. | 졸업, 학사모, Graduation, Education, 교육과정, 학위, Degree | Outlined |
| `graduation-fill` | 학위, 교육 이력을 표현합니다. | 졸업, 학사모, Graduation, Education, 교육과정, 학위, Degree | Solid |
| `handle` | 요소를 옮길 때 사용합니다. | Grabber, 그랩, 그래빙, 핸들러, 핸들, 옮기기 | Outlined |
| `handle-desktop` | 데스크톱에서 요소를 옮길 때 사용합니다. | Grabber, 그랩, 그래빙, 핸들러, 핸들, 옮기기 | Outlined |
| `hash-tag` | 해시태그를 표현합니다. | Hashtag, tag, 해시태그, 태그, 해시태그, 샵 | Outlined |
| `heart` | 내용을 좋아할 때 사용합니다. | 하트 아이콘, 좋아요, Heart, Like, Liked, 따봉, 최고, 굿 | Outlined |
| `heart-fill` | 내용을 좋아할 때 사용합니다. | 하트 아이콘, 좋아요, Heart, Like, Liked, 따봉, 최고, 굿 | Solid |
| `heart-in-heart` | 하트 속 하트를 표현합니다. | Heart Double, 더블 하트 | Outlined |
| `heart-in-heart-fill` | 하트 속 하트를 표현합니다. | Heart Double, 더블 하트 | Solid |
| `history` | 기록을 표시할 때 사용합니다. | 히스토리, History, 기록, 예전 기록 | Outlined |
| `home` | 메인 화면 또는 홈을 표시할 때 사용합니다. | 홈, 홈 화면, Home, Main | Outlined |
| `home-fill` | 메인 화면 또는 홈을 표시할 때 사용합니다. | 홈, 홈 화면, Home, Main | Solid |
| `hourglass` | 모래시계를 표현합니다. | Hourglass, Timer, 타이머 | Outlined |
| `image` | 이미지를 표현합니다. | 이미지 아이콘, 첨부, 업로드, Place Image, Upload | Outlined |
| `image-fill` | 이미지를 표현합니다. | 이미지 아이콘, 첨부, 업로드, Place Image, Upload | Outlined |
| `inbox` | 받은 메일함을 표현합니다. | 인박스, Inbox, Tray, Mailbox | Outlined |
| `instance` | 인스턴스를 표현합니다. | Instance | Outlined |
| `keyboard` | 키보드를 표시할 때 사용합니다. | Keyboard, 키보드 | Outlined |
| `left-side` | 좌측 메뉴를 표현합니다. | Left, Side, LNB, 왼쪽, 좌측, 사이드, 메뉴 | Outlined |
| `like` | 내용을 추천할 때 사용합니다. | Thumb, 엄지척, Thumbsup, Like, 좋아요, 따봉, 굿, Good | Outlined |
| `like-fill` | 내용을 추천할 때 사용합니다. | Thumb, 엄지척, Thumbsup, Like, 좋아요, 따봉, 굿, Good | Solid |
| `line-horizontal` | 정보의 변화가 없음을 표현합니다. | 수평라인, 라인, 수평선, Horizontal Line | Outlined |
| `line-horizontal-thick` | 정보의 변화가 없음을 표현합니다. | Thick, 수평라인, 라인, 수평선, Horizontal Line | Outlined |
| `link` | URL을 복사할 때 사용합니다. | URL, Link, 인터넷, 온라인, Online, Internet, 링크, 주소창 | Outlined |
| `list` | 리스트로 표시할 때 사용합니다. | 불릿 리스트, Unordered List, Bullet List | Outlined |
| `list-category` | 여러 목록을 표현합니다. | 리스트, 메뉴, List, Menu | Outlined |
| `list-ordered` | 숫자 리스트로 표시할 때 사용합니다. | 숫자 리스트, Ordered Lists | Outlined |
| `location` | 현재 또는 특정 위치를 표현합니다. | GPS, Location, Place, 좌표, 위치 | Outlined |
| `location-fill` | 현재 또는 특정 위치를 표현합니다. | GPS, Location, Place, 좌표, 위치 | Solid |
| `lock` | 정보를 비공개할 때 사용합니다. | 잠김, 잠금, 닫힌 자물쇠, Locked, Lock, Closed | Outlined |
| `lock-fill` | 정보를 비공개할 때 사용합니다. | 잠김, 잠금, 닫힌 자물쇠, Locked, Lock, Closed | Solid |
| `lock-open` | 비공개 정보를 해제할 때 사용합니다. | 잠금 해제, Unlock, Open, 열린 자물쇠 | Outlined |
| `lock-open-fill` | 비공개 정보를 해제할 때 사용합니다. | 잠금 해제, Unlock, Open, 열린 자물쇠 | Solid |
| `login` | 로그인을 표현합니다. | Sign In | Outlined |
| `logo-apple` | 애플 로고를 표현합니다. | Apple Logo, 애플 로고 | Outlined |
| `logo-apple-color` | 애플 로고를 표현합니다. | 애플, 로고, Apple, Icon, Size, Small |  |
| `logo-brunch` | 브런치 로고를 표현합니다. | 브런치스토리 | Outlined |
| `logo-facebook` | 페이스북 로고를 표현합니다. | 페이스북 로고, FB, Facebook, Meta, Logo, 메타 | Outlined |
| `logo-facebook-color` | 페이스북 로고를 표현합니다. | 페이스북, 로고, 페북, Facebook, Meta, Icon, Size, Small |  |
| `logo-google-color` | 구글 로고를 표현합니다. | 구글, 로고, Google, Icon, Size, Small |  |
| `logo-google-play` | 구글 플레이 로고를 표현합니다. | 플레이, 구글, 플레이스토어, Google, Playstore, Play Logo | Outlined |
| `logo-google-play-color` | 구글 플레이 로고를 표현합니다. | 구글 플레이, 로고, Google Play, Playstore, Icon, Size, Small |  |
| `logo-instagram` | 인스타그램 로고를 표현합니다. | 인스타그램, 인스타, 로고, Instagram, Insta, IG Logo, 메타, Meta | Outlined |
| `logo-kakao` | 카카오 로고를 표현합니다. | 카카오톡, 카카오, KakaoTalk, Kakao Logo | Outlined |
| `logo-kakao-color` | 카카오 로고를 표현합니다. | 카카오, Kakao, Kakaotalk, 카카오톡, 카톡, 로고, Icon, Size, Small |  |
| `logo-linked-in` | 링크드인 로고를 표현합니다. | 링크드인, LinkedIn Logo | Outlined |
| `logo-linked-in-color` | 링크드인 로고를 표현합니다. | 링크드인, 로고, Linkedin, Icon, Size, Small |  |
| `logo-microsoft` | 마이크로소프트 로고를 표현합니다. | 마소 | Outlined |
| `logo-microsoft-color` | 마이크로소프트 로고를 표현합니다. | 마소 |  |
| `logo-naver-blog` | 네이버 블로그 로고를 표현합니다. | Blog, 네이버 블로그 Logo | Outlined |
| `logo-naver-blog-color` | 네이버 블로그 로고를 표현합니다. | Naver Blog, 네이버 블로그, 로고, Icon, Size, Small |  |
| `logo-x` | X 로고를 표현합니다. | 엑스, Twitter, 트위터 | Outlined |
| `logo-youtube` | 유튜브 로고를 표현합니다. | 유튜브, YouTube Logo | Outlined |
| `logo-youtube-color` | 유튜브 로고를 표현합니다. | YouTube, 유튭, 유튜브, 로고, Icon, Size, Small |  |
| `logout` | 로그아웃을 표현합니다. | Sign Out | Outlined |
| `magic-wand` | 정보를 생성하거나 랜덤 표시할 때 사용합니다. | 마법봉, Magic, Wand, 반짝, 랜덤, Random, Magical, Surprise Me, 다른 | Outlined |
| `mail` | 이메일을 표현합니다. | Email, Mail, Letter, 이메일, 편지, 레터 | Outlined |
| `mail-open` | 읽은 이메일을 표현합니다. | Email, Mail, Letter, 이메일, 편지, 레터 | Outlined |
| `medal` | 메달을 표현합니다. | Award, Medal, 어워드 | Outlined |
| `megaphone` | 알리는 상황에서 사용합니다. | Announcement | Outlined |
| `megaphone-fill` | 알리는 상황에서 사용합니다. | Announcement | Solid |
| `menu` | 메뉴를 표시할 때 사용합니다. | Hamburger, 햄버거, 삼선 메뉴, Menu | Outlined |
| `menu-thick` | 메뉴를 표시할 때 사용합니다. | Thick, Hamburger, 햄버거, 삼선 메뉴, Menu, Thick | Outlined |
| `message` | 메시지를 표현합니다. | 메시지 | Outlined |
| `message-fill` | 메시지를 표현합니다. | 메시지 | Solid |
| `microphone` | 마이크를 표현합니다. | Record, 마이크, 녹음 | Outlined |
| `microphone-fill` | 마이크를 표현합니다. | Record, 마이크, 녹음 | Solid |
| `microphone-slash` | 마이크 해제를 표현합니다. | Microphone Off, 마이크 끄기 | Outlined |
| `microphone-slash-fill` | 마이크 해제를 표현합니다. | Microphone Off, 마이크 끄기 | Solid |
| `minus` | 요소를 제거할 때 사용합니다. | Delete, 마이너스, 빼기 | Outlined |
| `minus-thick` | 요소를 제거할 때 사용합니다. | Thick, Delete, 마이너스, 빼기, Thick | Outlined |
| `mobile` | 모바일 기기를 표현합니다. | Phone, Mobile, 핸드폰, 모바일 | Outlined |
| `mobile-fill` | 모바일 기기를 표현합니다. | Phone, Mobile, 핸드폰, 모바일 | Solid |
| `moon` | 달을 표현합니다. | 다크모드, Dark, Night, Night Time, Weather | Outlined |
| `more-horizontal` | 추가 요소를 표시할 때 사용합니다. | More, 3dots, See More, 추가, 땡땡땡 | Outlined |
| `more-vertical` | 한정된 공간에 추가 요소를 표시할 때 사용합니다. | More, 3dots, See More, 추가, 땡땡떙 | Outlined |
| `more-vertical-tight` | 한정된 공간에 추가 요소를 표시할 때 사용합니다. | More, 3dots, See More, 추가, 땡땡땡, Tight | Outlined |
| `music-microphone` | 무대용 마이크를 표현합니다. | 세미나, Seminar | Outlined |
| `navigation-career` | 모바일 환경 하단의 내비게이션 바에 들어가는 아이콘입니다. | 커리어, 깃발, 내비게이션, Career navigation |  |
| `navigation-menu` | 모바일 환경 하단의 내비게이션 바에 들어가는 아이콘입니다. | 메뉴 내비게이션, Menu, Hamburger, Three lines |  |
| `navigation-recruit` | 모바일 환경 하단의 내비게이션 바에 들어가는 아이콘입니다. | 리크루트, 채용, Recruit 내비게이션 |  |
| `navigation-social` | 모바일 환경 하단의 내비게이션 바에 들어가는 아이콘입니다. | 소셜 내비게이션, Social navigation |  |
| `palette` | 팔레트를 표현합니다. | Palette, 팔레트 | Outlined |
| `palette-fill` | 팔레트를 표현합니다. | Palette, 팔레트 | Solid |
| `passport` | 여권, 비자를 표현합니다. | 여권, 비자, Passport, Visa | Outlined |
| `passport-fill` | 여권, 비자를 표현합니다. | 여권, 비자, Passport, Visa | Solid |
| `pause` | 콘텐츠를 일시정지할 때 사용합니다. | Pause, 일시정지, 정지, 잠깐, Wait | Outlined |
| `pencil` | 정보를 수정할 때 사용합니다. | Edit, 연필, 펜슬, 적다, 쓰다, Write | Outlined |
| `pencil-fill` | 정보를 수정할 때 사용합니다. | Edit, 연필, 펜슬, 적다, 쓰다, Write | Solid |
| `person` | 프로필을 표현합니다. | Profile, 사람, Human, Person, 인간, 유저, User, 프로필 | Outlined |
| `person-fill` | 프로필을 표현합니다. | Profile, 사람, Human, Person, 인간, 유저, User, 프로필 | Solid |
| `person-plus` | 사람을 추가하거나 초대할 때 사용합니다. | 사람, 사람 추가, 인원, 유저, 프로필, Person Plus, Add People, Gather People, User, Profile | Outlined |
| `person-plus-fill` | 사람을 추가하거나 초대할 때 사용합니다. | 사람, 사람 추가, 인원, 유저, 프로필, Person Plus, Add People, Gather People, User, Profile | Solid |
| `persons` | 여러 사람이 있는 그룹을 표현합니다. | Group, People, Persons, Profiles, 프로필, 그룹, 피플, 사람들, 모임 | Outlined |
| `persons-fill` | 여러 사람이 있는 그룹을 표현합니다. | Group, People, Persons, Profiles, 프로필, 그룹, 피플, 사람들, 모임 | Solid |
| `phone` | 수화기를 표현합니다. | 전화기, Phone | Outlined |
| `phone-fill` | 수화기를 표현합니다. | 전화기, Phone | Solid |
| `pin` | 정보를 고정할 때 사용합니다. | 핀, 고정, Pin, Fixed | Outlined |
| `pin-fill` | 정보를 고정할 때 사용합니다. | 핀, 고정, Pin, Fixed | Solid |
| `play` | 콘텐츠를 재생할 때 사용합니다. | 플레이, Play, Resume, 재생 | Outlined |
| `plus` | 내용을 추가할 때 사용합니다. | Plus, 플러스, Add | Outlined |
| `plus-thick` | 내용을 추가할 때 사용합니다. | Thick, Plus, 플러스, Add, Thick | Outlined |
| `position-review` | 이미지 크롭을 표현합니다. | Crop, 크롭, 자르기, 이미지 크롭 | Outlined |
| `pouch` | 돈 주머니를 표현합니다. | Pouch, 돈가방, 복주머니, money, 돈 | Outlined |
| `pouch-fill` | 돈주머니를 표현합니다. | Pouch, 돈가방, 복주머니, money, 돈 | Solid |
| `presentation` | 프리젠테이션을 표현합니다. | Stand, 스탠드, Presentation, Workshop, 워크숍 | Outlined |
| `printer` | 프린터를 표현합니다. | Printer | Outlined |
| `question` | 이해에 도움이 되는 정보를 표시할 때 사용합니다. | 물음표, Question, Why, 왜, Additional Help | Outlined |
| `quote` | 인용구를 표현할 때 사용합니다. | Quote, 인용, 견적, 따옴표 | Outlined |
| `refresh` | 새로고침 관련 정보를 표현할 때 사용합니다. | 리프레시, F5, Cmd+R, 새로고침, Refresh | Outlined |
| `regex` | 코드 에디터에서 정규식을 표현합니다. | 정규식, Regex, Regular Expression, 코드 에디터, Code Editor | Outlined |
| `replace` | 코드 에디터에서 문자열을 하나씩 바꾸는 기능을 표현합니다. | Replace, 대치, 치환, 코드 에디터, Code Editor | Outlined |
| `replace-all` | 코드 에디터에서 문자열을 한 번에 전부 바꾸는 기능을 표현합니다. | Replace All, 대치, 치환, 코드 에디터, Code Editor, 모두 치환 | Outlined |
| `reset` | 초기화를 표현합니다. | Arrow Counter Clockwise, 반시계 화살표 | Outlined |
| `right-side` | 우측 메뉴를 표현합니다. | Right, Side, LNB, 오른쪽, 우측, 사이드, 메뉴 | Outlined |
| `rotate` | 회전을 표현합니다. | Rotate, 회전, 돌리기 | Outlined |
| `search` | 검색 관련 정보를 표현하고 싶을 때 사용합니다. | Find, 돋보기, 찾기, Search | Outlined |
| `search-thick` | 검색 관련 정보를 표현하고 싶을 때 사용합니다. | Thick, Find, 돋보기, 찾기, Search, Thick | Outlined |
| `send` | 입력한 내용을 전송할 때 사용합니다. | Message, Messenger, Sent, Paper Plane, 종이비행기, 보내기 | Outlined |
| `send-fill` | 입력한 내용을 전송할 때 사용합니다. | Message, Messenger, Sent, Paper Plane, 종이비행기, 보내기 | Solid |
| `setting` | 설정으로 이동할 때 사용합니다. | Gear, Setting, 설정, 톱니바퀴 | Outlined |
| `share` | 내용을 공유할 때 사용합니다. Android/웹에서 사용합니다. | Share, 공유 | Outlined |
| `share-ios` | IOS에서 내용을 공유할 때 사용합니다. | Share, IOS, Contents, Link, Clipboard, 아이오에스, 애플, 클립보드, 공유, 링크, 콘텐츠 | Outlined |
| `sparkle` | 반짝임을 표현합니다. | Stars, New, Smart, 신규, AI, 스마트 | Outlined |
| `sparkle-fill` | 반짝임을 표현합니다. | Stars, New, Smart, 신규, AI, 스마트 | Solid |
| `square` | 사각형을 표현합니다. | Square, Rectangle, 정사각형, 사각형 | Outlined |
| `square-caret` | 셀렉트 박스를 표현합니다. | 박스 캐럿, Box Caret | Outlined |
| `square-check` | 체크박스를 표현합니다. | 박스 체크, Box Check | Outlined |
| `square-fill` | 사각형을 표현합니다. | Square, Rectangle, 정사각형, 사각형 | Solid |
| `square-han` | 중국어 또는 한자를 표현합니다. | Chinese Character, Kanji, Hanja, 한자, 문자, 중국어 | Outlined |
| `square-hangul` | 한국어 또는 한글을 표현합니다. | 한글, Korean, 한국어 | Outlined |
| `square-kana` | 일본어, 가나 문자를 표현합니다. | Japanese, Gana Moji, Character, 일본어, 히라가나, 가타카나, 문자 | Outlined |
| `square-latin` | 알파벳, 라틴 문자를 표현합니다. | Latin, English, International, Global, Letter, Alphabet, 영어, 글로벌, 문자, 알파벳 | Outlined |
| `square-latin-fill` | 알파벳, 라틴 문자를 표현합니다. | Latin, English, International, Global, Letter, Alphabet, 영어, 글로벌, 문자, 알파벳 | Solid |
| `square-more` | 추가적인 정보를 분명히 표시할 때 사용합니다. | 더 많은 정보, More, 땡땡땡, 3 Dots, Additional Information | Outlined |
| `square-play` | 동영상 프레임을 표현합니다. | Video, 비디오 | Outlined |
| `square-plus` | 콘텐츠를 추가할 때 사용합니다. | Add, Plus, S | Outlined |
| `square-plus-fill` | 콘텐츠를 추가할 때 사용합니다. | Add, Plus, S | Solid |
| `star` | 특정 정보를 즐겨찾을 때 사용합니다. | Favorite, Star, 즐겨찾기, 선호하는 정보, 별 | Outlined |
| `star-fill` | 특정 정보를 즐겨찾을 때 사용합니다. | Favorite, Star, 즐겨찾기, 선호하는 정보, 별 | Solid |
| `storage` | AI 이전 대화 기록 보관 기능을 표현합니다. | Storage, 보관함, AI, 보관, 이전 대화 기록, 이전 대화, 대화 기록, 채용 에이전트, AI 추천 포지션 | Outlined |
| `strikethrough` | 텍스트에 취소선을 표현합니다. | 취소선 | Outlined |
| `sun` | 해를 표현합니다. | 라이트모드, Light, Weather | Outlined |
| `tag` | 태그를 표현합니다. | Tag, Label, 라벨 | Outlined |
| `tag-fill` | 태그를 표현합니다. | Tag, Label, 라벨 | Solid |
| `telescope` | 망원경을 표현합니다. | Telescope, 망원경, 둘러보기, 보기 | Outlined |
| `template` | 레이아웃을 표현합니다. | 템플릿, 레이아웃, 스플릿, Template, Layout, Split | Outlined |
| `template-fill` | 레이아웃을 표현합니다. | 템플릿, 레이아웃, 스플릿, Template, Layout, Split | Solid |
| `text-format` | 텍스트 포맷을 표현합니다. | Type | Outlined |
| `text-variable` | 텍스트 변수를 표현합니다. | 텍스트 베리어블 | Outlined |
| `thumbnail` | 여러 정보를 썸네일 형태로 표시할 때 사용합니다. | Gallery, 갤러리, 썸네일, Thumbnail | Outlined |
| `thunder` | 번개처럼 빠른 상태 및 연상되는 기능을 표현합니다. | Lightning, Zap, Thunder, 번개, 빠름, 우사인볼트, Volt, Fast | Outlined |
| `thunder-fill` | 번개처럼 빠른 상태 및 연상되는 기능을 표현합니다. | Lightning, Zap, Thunder, 번개, 빠름, 우사인볼트, Volt, Fast | Solid |
| `ticket` | 티켓을 표현합니다. | Ticket, Coupon, 쿠폰 | Outlined |
| `ticket-fill` | 티켓을 표현합니다. | Ticket, Coupon, 쿠폰 | Solid |
| `trash` | 내용을 삭제할 때 사용합니다. | 휴지통, 쓰레기통, Rubbish, Garbage, Can, Delete, 삭제, 제거, Bin | Outlined |
| `triangle` | 삼각형을 표현합니다. | Triangle, 삼각형 | Outlined |
| `triangle-exclamation` | 주의해야 할 정보를 표현합니다. | Warning, 경고, Triangle, 삼각형, Stop | Outlined |
| `triangle-exclamation-fill` | 주의해야 할 정보를 표현합니다. | Warning, 경고, Triangle, 삼각형, Stop | Solid |
| `triangle-fill` | 삼각형을 표현합니다. | Triangle, 삼각형 | Solid |
| `trophy` | 우수한 상태 및 정보를 표현합니다. | 트로피, 우승, 우수한, 최고, Trophy, Best, Extraordinary | Outlined |
| `trophy-fill` | 우수한 상태 및 정보를 표현합니다. | 트로피, 우승, 우수한, 최고, Trophy, Best, Extraordinary | Solid |
| `tune` | 옵션 또는 필터를 조정할 때 사용합니다. | 튠, Tune, 튜닝, 옵션 설정, 조정, Options, Settings, Adjustment | Outlined |
| `umbrella` | 우산을 표현합니다. | Rain, 비, 날씨, Weather | Outlined |
| `umbrella-fill` | 우산을 표현합니다. | Rain, 비, 날씨, Weather | Solid |
| `underline` | 텍스트의 밑줄을 표현합니다. | 강조, 밑줄, Underline, Underscore | Outlined |
| `upload` | 내용을 업로드할 때 사용합니다. | 업로드, Upload, File, Content, 콘텐츠, 파일 | Outlined |
| `utility` | 유틸리티를 표현합니다. | 공구, Utility | Outlined |
| `utility-fill` | 유틸리티를 표현합니다. | 공구, Utility | Solid |
| `verified-check` | 인증된 상태를 표현합니다. | 인증, 체크, 뱃지, 확인, Verified, Check, Badge | Outlined |
| `verified-check-fill` | 인증된 상태를 표현합니다. | 인증, 체크, 뱃지, 확인, Verified, Check, Badge | Solid |
| `verified-star` | 인증된 상태, 우수한 상태를 표현합니다. | 인증, 별, 뱃지, 우수한, Verified, Star, Badge, Extraordinary | Outlined |
| `verified-star-fill` | 인증된 상태, 우수한 상태를 표현합니다. | 인증, 별, 뱃지, 우수한, Verified, Star, Badge, Extraordinary | Solid |
| `video` | 동영상을 표현합니다. | Video, 비디오, Film, 영화 | Outlined |
| `webinar` | 웨비나를 표현합니다. | 세미나, Seminar | Outlined |
| `whole-word` | 코드 에디터에서 단어 선택 기능을 표현합니다. | Whole Word, 코드 에디터, Code Editor, Word, Code | Outlined |
| `write` | 내용을 새로 작성할 때 사용합니다. | Write, Pencil, Note, Create, 글쓰기, 추가, 쓰기, 연필, 노트, 공책 | Outlined |
| `zep-fast` | 속도를 표현합니다. | Thunder, 번개, 속도, Fast | Outlined |
| `zep-fast-fill` | 속도를 표현합니다. | Thunder, 번개, 속도, Fast | Solid |
