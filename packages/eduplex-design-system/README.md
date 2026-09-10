# Eduplex MKT Design System

에듀플렉스 마케팅 서비스와 내부 도구에서 일관된 사용자 경험을 만들기 위한 디자인 시스템입니다.

브랜드 컬러, 디자인 토큰, UI 컴포넌트와 공통 인터랙션 규칙을 하나의 패키지로 제공합니다.

## Package

@eduplexmkt/mkt-design-system

## 설치

GitHub Packages를 사용하는 프로젝트의 `.npmrc`에 아래 설정을 추가합니다.

@eduplexmkt:registry=https://npm.pkg.github.com

이후 패키지를 설치합니다.

pnpm add @eduplexmkt/mkt-design-system

## 기본 사용법

import {
  Button,
  FlexBox,
  ThemeProvider,
  Typography,
} from '@eduplexmkt/mkt-design-system';

import '@eduplexmkt/mkt-design-system/global.css';

export default function Example() {
  return (
    <ThemeProvider>
      <FlexBox direction="column" gap="12px">
        <Typography variant="headline2">
          Eduplex MKT Design System
        </Typography>

        <Button>
          시작하기
        </Button>
      </FlexBox>
    </ThemeProvider>
  );
}

## 브랜드 컬러

### Primary Blue

#0054A7

에듀플렉스의 주요 액션, 강조 요소 및 브랜드 표현에 사용합니다.

### Accent Yellow

#FFF100

보조 강조, 포인트 요소 및 주요 인터랙션에 사용합니다.

## 패키지 구조

@eduplexmkt/mkt-design-system
↓
@eduplexmkt/mkt-engine
↓
@eduplexmkt/mkt-theme

디자인 시스템은 다음 영역으로 구성됩니다.

- Components
- Design Tokens
- Theme
- Typography
- Layout
- Interaction
- Utilities

## 사용 원칙

에듀플렉스 마케팅 서비스 및 내부 도구를 제작할 때는 가능한 한 이 디자인 시스템에서 제공하는 컴포넌트와 디자인 토큰을 우선 사용합니다.

임의의 컬러, 간격, 타이포그래피 값을 새로 추가하기보다 기존 토큰과 컴포넌트를 우선적으로 활용합니다.

새로운 패턴이 반복적으로 필요할 경우 디자인 시스템에 공통 규칙으로 추가합니다.

## Repository

https://github.com/eduplexmkt/mkt-design-system

## License

이 프로젝트에는 MIT License로 제공된 오픈소스 기반 코드가 포함되어 있습니다.

원 저작권 및 라이선스 고지는 저장소의 LICENSE 및 관련 고지 파일을 따릅니다.