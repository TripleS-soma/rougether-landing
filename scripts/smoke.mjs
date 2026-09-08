// 빌드 산출물 스모크 테스트 — 배포 전에 깨지면 안 되는 것들만 검사한다.
// 지금까지 손으로 grep 하던 검증을 코드로: GA 태그, 구조화 데이터, 딥링크, noindex, 사이트맵.
import { readFileSync, existsSync } from 'node:fs';

let failed = 0;
const check = (ok, msg) => { console.log(`${ok ? '✓' : '✗'} ${msg}`); if (!ok) failed++; };
const read = (p) => readFileSync(`dist/${p}`, 'utf8');

for (const p of ['index.html', 'invite.html', 'join.html', 'privacy.html', 'terms.html', 'sitemap.xml', 'robots.txt', 'CNAME']) {
  check(existsSync(`dist/${p}`), `dist/${p} 존재`);
}

const index = read('index.html');
check(/googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+/.test(index), 'GA4 태그 로드');
check(index.includes("'appstore_tap'") && index.includes("transport_type: 'beacon'"), 'appstore_tap 계측 (beacon)');
check(index.includes('<title>루게더</title>'), '검색 타이틀 브랜드 단독');
check(index.includes('rel="canonical" href="https://rougether.com/"'), 'canonical');
check(index.includes('naver-site-verification'), '네이버 소유확인 태그');

const lds = [...index.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));
check(lds.some((d) => d['@type'] === 'MobileApplication'), 'JSON-LD MobileApplication');
const faq = lds.find((d) => d['@type'] === 'FAQPage');
check(faq && faq.mainEntity.length === (index.match(/<details>/g) || []).length, 'FAQPage 항목 수 = 화면 FAQ 수');
check(index.includes('data-cta="hero"') && index.includes('data-cta="closing"'), '스토어 배지 계측 placement');
check(index.includes('data-web-cta="hero"') && index.includes('data-web-cta="section"') && index.includes("'webapp_open'"), '웹앱 진입 계측 (webapp_open)');
check(index.includes('href="https://app.rougether.com"'), '웹앱 링크');
check(!index.includes('rel="stylesheet"'), 'CSS 인라인 (외부 스타일시트 없음)');

for (const p of ['invite.html', 'join.html']) {
  const html = read(p);
  check(html.includes('<meta name="robots" content="noindex">'), `${p} noindex`);
  check(html.includes("'rougether://' + scheme"), `${p} 딥링크 스크립트`);
  check(html.includes(`data-cta="${p.replace('.html', '')}"`), `${p} 스토어 링크 계측`);
}

const sitemap = read('sitemap.xml');
check(!sitemap.includes('invite') && !sitemap.includes('join'), 'sitemap에 초대 페이지 미포함');

if (failed) { console.error(`\n${failed}개 실패`); process.exit(1); }
console.log('\n스모크 테스트 통과');
