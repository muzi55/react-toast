module.exports = {
  // 프로젝트의 루트 디렉토리임을 명시
  root: true,
  // TypeScript를 파싱하기 위한 파서 설정
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // ECMAScript 2020 문법을 사용
    ecmaVersion: 2020,
    // 모듈 시스템을 사용
    sourceType: "module",
    ecmaFeatures: {
      // JSX 문법을 사용
      jsx: true,
    },
  },
  settings: {
    react: {
      // React 버전을 자동으로 감지
      version: "detect",
    },
  },
  env: {
    // 브라우저 환경을 설정
    browser: true,
    // AMD 환경을 설정
    amd: true,
    // Node.js 환경을 설정
    node: true,
  },
  extends: [
    // 기본 ESLint 권장 설정
    "eslint:recommended",
    // React 권장 설정
    "plugin:react/recommended",
    // TypeScript 권장 설정
    "plugin:@typescript-eslint/recommended",
    // JSX 접근성 권장 설정
    "plugin:jsx-a11y/recommended",
    // Prettier 권장 설정
    "plugin:prettier/recommended",
    // Next.js Core Web Vitals 설정
    "next/core-web-vitals",
  ],
  plugins: [
    // React 플러그인
    "react",
    // TypeScript 플러그인
    "@typescript-eslint",
    // JSX 접근성 플러그인
    "jsx-a11y",
    // Prettier 플러그인
    "prettier",
    // Unused imports 플러그인
    "unused-imports",
  ],
  rules: {
    // Prettier 규칙을 ESLint 오류로 설정
    "prettier/prettier": [
      "error",
      {
        // 작은 따옴표 대신 큰 따옴표 사용
        singleQuote: false,
        // 세미콜론 사용
        semi: true,
        // 줄바꿈을 적용할 최대 줄 길이
        printWidth: 80,
        // 객체 리터럴에서 중괄호 내부에 공백을 추가
        bracketSpacing: true,
        // 가능한 모든 곳에 후행 쉼표 추가
        trailingComma: "all",
        // 닫는 태그를 다음 줄로 넘김
        jsxBracketSameLine: false,
      },
    ],
    // React 17 이상에서는 JSX에서 React를 명시적으로 import할 필요가 없음
    "react/react-in-jsx-scope": "off",
    // 함수의 반환 타입을 명시적으로 정의하지 않아도 됨
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // any 타입 사용을 허용
    "@typescript-eslint/no-explicit-any": "off",
    // 사용되지 않는 import 구문을 제거
    "unused-imports/no-unused-imports": "error",
    // 사용되지 않는 변수와 함수는 경고로 설정
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
