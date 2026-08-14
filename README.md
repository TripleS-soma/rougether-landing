# rougether-landing

루게더(Rougether) 랜딩페이지 — https://rougether.com

- 정적 HTML(index · invite · join · privacy · terms). `main` 푸시가 곧 배포(GitHub Pages).
- 색상은 앱의 cozy 테마 토큰(`rougether-mobile` `src/constants/theme.ts`)을 CSS 변수로 옮긴 것 — 토큰이 바뀌면 `:root` 블록을 함께 갱신.

## 계측 (GoatCounter)

index·invite·join에 [GoatCounter](https://www.goatcounter.com) 스크립트가 붙어 있다.

- **최초 1회**: goatcounter.com에서 코드 `rougether`로 사이트 등록(무료) → https://rougether.goatcounter.com 대시보드에서 확인. 등록 전에는 핑이 조용히 실패할 뿐 페이지 동작에는 영향 없다.
- **목표 이벤트**: App Store 링크에 `data-goatcounter-click`이 붙어 있어 탭이 이벤트로 잡힌다 — `appstore-header` / `appstore-hero` / `appstore-closing` / `appstore-invite` / `appstore-join`.
- **유입 채널 구분**: 마케팅 링크에 `?utm_source=`를 붙여 배포한다. 예: `https://rougether.com/?utm_source=twitter`, `?utm_source=everytime`.
- 선택: App Store Connect의 provider token(pt)을 발급받으면 스토어 링크에 `?pt=…&ct=landing&mt=8`을 붙여 스토어 쪽 설치 수까지 교차 확인 가능.

## SEO

목표는 **브랜드 검색 방어**("루게더" 검색 시 공식 사이트·앱 노출). 제네릭 키워드("루틴 앱 추천" 등)는 콘텐츠 운영 없이는 불가 — GoatCounter로 검색 유입을 보고 나중에 결정.

- 기술 베이스라인은 적용돼 있다: `sitemap.xml` · `robots.txt` · canonical(index·privacy·terms) · JSON-LD(MobileApplication) · invite/join `noindex`(초대 페이지는 검색 노출 금지).
- **최초 1회 등록 (계정 필요, 각 5분)**:
  1. [Google Search Console](https://search.google.com/search-console) → 속성 추가 `rougether.com` → DNS TXT 또는 HTML 태그로 소유 확인 → Sitemaps에 `https://rougether.com/sitemap.xml` 제출.
  2. [네이버 서치어드바이저](https://searchadvisor.naver.com) → 사이트 등록 → 소유 확인(HTML 태그를 주면 index.html `<head>`에 추가) → 요청 > 사이트맵 제출. 타겟(대학생·취준생)의 네이버 검색 비중이 커서 구글만큼 중요하다.
- 소유 확인용 메타 태그·HTML 파일이 발급되면 이 레포에 커밋하면 된다.

## TODO

- 초대 전용 OG 카드 이미지(현재 invite/join은 공용 `og-cover.jpg` 사용).
- Google Play 출시 시: 히어로·클로징의 비활성 배지를 실링크로 교체(`aria-disabled` 스팬 → `<a>`), invite/join의 "준비 중" 문구 교체.
