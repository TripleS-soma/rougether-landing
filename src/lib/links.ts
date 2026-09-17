// 외부 링크·식별자 단일 소스 — 스토어 URL이 바뀌거나 출시가 나면 여기만 고친다.
export const SITE = 'https://rougether.com';
// 국가 세그먼트(/kr/) 없이 — Apple이 방문자 스토어프론트로 보낸다. 한국 고정이면 외국 사용자가
// "이 지역에서 사용할 수 없음"을 본다 (rougether-mobile#1369 글로벌 출시).
export const APP_STORE = 'https://apps.apple.com/app/id6793513720';
export const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.triples.rougether';
/** 웹앱(PWA, 데스크톱용) — rougether-mobile의 Expo 웹 export, GitHub Pages. */
export const WEB_APP = 'https://app.rougether.com';
export const INSTAGRAM = 'https://www.instagram.com/rou.gether/';
export const GITHUB = 'https://github.com/TripleS-soma';
export const CONTACT_EMAIL = 'triples.rougether@gmail.com';
export const GA_ID = 'G-3B36GQQB4R';
