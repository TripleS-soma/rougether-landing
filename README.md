# rougether-landing

루게더(Rougether) 랜딩페이지 — https://rougether.com

- **Astro** 정적 생성(SSG). `main` 푸시 → GitHub Actions 빌드 → GitHub Pages 배포.
- `npm install` 후 `npm run dev`(개발) / `npm run build`(빌드) / `npm run preview`(빌드 확인).
- 구조: `src/pages/`(index·invite·join — 기존 `.html` URL 유지: `build.format: 'file'`), `src/components/`(Header·Footer·StoreBadges·TourRow·Faq·InviteCard), `src/layouts/Base.astro`(메타·파비콘·GA 공통), `public/`(assets·robots·sitemap·CNAME·privacy/terms는 원본 그대로).
- FAQ 문구와 FAQPage JSON-LD는 `Faq.astro`의 `FAQ_ITEMS` 한 곳에서 생성된다 — 문구 수정은 거기서만.
- 색상은 앱의 cozy 테마 토큰(`rougether-mobile` `src/constants/theme.ts`)을 CSS 변수로 옮긴 것 — 토큰이 바뀌면 `src/styles/landing.css`·`InviteCard.astro`의 `:root` 블록을 함께 갱신.
- 앱이 공유하는 딥링크 경로(`/invite.html?code=`, `/join.html?code=`)는 절대 바꾸지 말 것.

## 계측 (GA4)

index·invite·join에 GA4 태그(측정 ID `G-3B36GQQB4R`, 속성 "루게더 Rougether" / evan7484 계정)가 붙어 있다.

- **목표 이벤트**: App Store 링크의 `data-cta` 속성으로 탭이 `appstore_tap` 이벤트(파라미터 `placement`: header/hero/closing/invite/join)로 잡힌다. 페이지뷰·유입 채널(utm)·아웃바운드 클릭은 향상된 측정이 자동 수집.
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
