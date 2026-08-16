import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rougether.com',
  build: {
    // 기존 URL(/invite.html 등)을 그대로 유지한다 — 앱이 공유하는 딥링크가 이 경로를 쓴다.
    format: 'file',
    // 현재 손코딩 HTML처럼 CSS를 인라인으로 넣어 추가 요청을 없앤다.
    inlineStylesheets: 'always',
  },
});
