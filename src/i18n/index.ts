// 랜딩 문구 사전 — 한국어가 원본, 영어는 헤더 언어 드롭다운으로 전환되는 /en.html 페이지용.
// 페이지·컴포넌트는 문구를 직접 쓰지 않고 t(locale)로 받는다. 딥링크 페이지(invite/join)는 한국어 고정.
export type Locale = 'ko' | 'en';
export const LOCALES: Locale[] = ['ko', 'en'];
export const LOCALE_LABEL: Record<Locale, string> = { ko: '한국어', en: 'English' };
export const LOCALE_PATH: Record<Locale, string> = { ko: '/', en: '/en.html' };

export interface FaqItem { q: string; a: string; html?: string }
export interface Dict {
  htmlLang: string;
  /** 헤더 워드마크 — 영어 페이지는 로마자 표기. */
  brand: string;
  title: string;
  ogTitle: string;
  desc: string;
  nav: { tour: string; faq: string; instagram: string; language: string };
  hero: { title: [string, string]; lead: string; webLink: string; scrollHint: string; heroAlt: string };
  badges: { comingSoon: string };
  tour: { title: [string, string]; desc: string; alt: string }[];
  web: { eyebrow: string; title: [string, string]; button: string; stepsLabel: string; steps: { where: string; how: string }[] };
  faq: { heading: string; reward: string; items: (instagram: string, email: string) => FaqItem[] };
  closing: { title: string; body: string };
  footer: { privacy: string; terms: string; github: string; web: string; instagramLabel: string };
}

const ko: Dict = {
  htmlLang: 'ko',
  brand: '루게더',
  // 검색 타이틀은 토스처럼 브랜드 단독 — 설명은 meta description이 맡는다.
  title: '루게더',
  ogTitle: '루게더 — 내 캐릭터와, 친구들과 한 집에서 함께 크는 할 일 관리 앱',
  desc: '내 캐릭터와, 친구들과 한 집에서 함께 크는 할 일 관리 앱, 루게더. 루틴을 지키면 방이 자라요.',
  nav: { tour: '둘러보기', faq: 'FAQ', instagram: 'Instagram', language: '언어' },
  hero: {
    title: ['루틴을 지키면', '내 방이 자라요'],
    lead: '내 캐릭터와, 친구들과 한 집에서 함께 크는 할 일 관리 앱, 루게더.',
    webLink: 'PC에서 설치 없이 웹으로 시작하기 →',
    scrollHint: '스크롤해서 더 알아보기',
    heroAlt: '루게더 내 방 화면 — 구름 벽지 방에서 쉬는 고양이 캐릭터와 오늘의 할 일',
  },
  badges: { comingSoon: '출시 예정' },
  // 카피·캡처는 App Store 스크린샷(2026-09)과 동일 — 스토어에서 본 앱을 랜딩에서 그대로 만나게
  tour: [
    { title: ['매일의 할 일을', '가볍게 체크'], desc: '모닝·건강·성장처럼 카테고리로 묶고, 알림 시간까지 딱 정해요', alt: '오늘의 할 일 화면 — 할 일·학업·건강 카테고리와 곰 체크' },
    { title: ['가구부터 벽지까지', '내 취향대로'], desc: '체크로 모은 코인으로 가구·소품·벽지·바닥을 골라 내 방을 꾸며요', alt: '방 꾸미기 화면 — 가구·소품·벽지·바닥 탭과 적용하기' },
    { title: ['친구들과 한 집에서', '함께 쌓는 루틴'], desc: '초대코드로 모인 친구들의 방이 한 집에 — 함께 지킨 루틴이 집 레벨을 올려요', alt: '집 화면 — 구름 위 집에 모인 방들, 집 레벨·멤버와 목표·집 탐색·집 관리 버튼' },
    { title: ['차곡차곡 쌓인 하루', '달력에서 한눈에'], desc: '지킨 날마다 달력에 점이 찍히고, 주간 회고로 한 주를 돌아봐요', alt: '달력 화면 — 완료한 날에 동그라미가 표시된 9월 달력과 그날의 할 일' },
  ],
  web: {
    eyebrow: '웹에서도',
    title: ['PC에서도, 설치 없이', '브라우저에서 바로'],
    button: '웹에서 루게더 열기',
    stepsLabel: '앱처럼 설치하는 방법',
    steps: [
      { where: 'Chrome · Edge', how: '주소창 오른쪽 <em>설치</em> 아이콘' },
      { where: 'Mac Safari', how: '파일 메뉴 → <em>Dock에 추가</em>' },
      { where: '휴대폰 브라우저', how: '공유 → <em>홈 화면에 추가</em>' },
    ],
  },
  faq: {
    heading: '자주 묻는 질문',
    reward: '전부 읽어주셨네요, 고마워요!',
    // 문구는 rougether-spec 근거. FAQPage JSON-LD는 이 목록에서 생성된다.
    items: (instagram, email) => [
      { q: '루게더는 어떤 앱인가요?', a: '내 캐릭터와, 친구들과 한 집에서 함께 크는 할 일 관리 앱이에요. 루틴을 지킬 때마다 보상을 받아 내 방을 꾸미고, 친구들과 모인 집을 함께 키워요.' },
      { q: '무료인가요?', a: '네, 무료로 시작할 수 있어요. 루틴을 지키면 받는 코인으로 방을 꾸밀 수 있어요.' },
      {
        q: '안드로이드 버전은 언제 나오나요?',
        a: 'Google Play 출시를 준비하고 있어요. 소식은 인스타그램에서 가장 먼저 알려드려요.',
        html: `Google Play 출시를 준비하고 있어요. 소식은 <a href="${instagram}" target="_blank" rel="noopener">인스타그램</a>에서 가장 먼저 알려드려요.`,
      },
      { q: 'PC에서도 쓸 수 있나요?', a: '네. 브라우저에서 app.rougether.com 을 열고 같은 계정으로 로그인하면 내 방과 할 일이 그대로예요. 자주 쓰면 브라우저의 설치(홈 화면에 추가) 기능으로 앱처럼 둘 수 있어요.' },
      { q: '친구랑 어떻게 같이 쓰나요?', a: '집을 만들고 초대코드를 공유하면 친구가 같은 집에 들어올 수 있어요. 방 구경, 응원 보내기, 공동 미션으로 집이 함께 자라요. 집은 여러 개에 참여할 수 있어요.' },
      { q: '루틴을 지키면 뭐가 생기나요?', a: '완료할 때마다 코인과 스트릭이 쌓이고, 모은 보상으로 방을 꾸미거나 뽑기에서 캐릭터·가구를 얻을 수 있어요.' },
      {
        q: '문의나 버그 제보는 어디로 하나요?',
        a: `앱의 설정 → 버그 제보 기능을 쓰거나, ${email}으로 보내주세요.`,
        html: `앱의 설정 → 버그 제보 기능을 쓰거나, <a href="mailto:${email}">${email}</a>으로 보내주세요.`,
      },
    ],
  },
  closing: { title: '루게더에 오신 걸 환영해요', body: '루틴을 지키면 내 방이 자라요 — 친구들과 한 집에서 함께 시작해보세요.' },
  footer: { privacy: '개인정보처리방침', terms: '이용약관', github: 'GitHub', web: '웹에서 열기', instagramLabel: '루게더 인스타그램' },
};

const en: Dict = {
  htmlLang: 'en',
  brand: 'Rougether',
  title: 'Rougether',
  ogTitle: 'Rougether — a to-do app where you grow with your character and friends in one house',
  desc: 'Rougether is a routine and to-do app where your character, your friends and your shared house grow as you keep your routines.',
  nav: { tour: 'Tour', faq: 'FAQ', instagram: 'Instagram', language: 'Language' },
  hero: {
    title: ['Keep your routines,', 'and your room grows'],
    lead: 'A routine and to-do app where you grow with your character and friends, all in one house.',
    webLink: 'On PC? Start on the web, no install →',
    scrollHint: 'Scroll to learn more',
    heroAlt: 'Rougether room screen — a cat character resting in a cloud-wallpaper room above today’s to-dos',
  },
  badges: { comingSoon: 'Coming soon' },
  tour: [
    { title: ['Check off the day’s to-dos', 'with a light touch'], desc: 'Group them by category — morning, health, growth — and set exact reminder times', alt: 'Today’s to-dos screen — to-do, study and health categories with bear check marks' },
    { title: ['From furniture to wallpaper,', 'your taste, your room'], desc: 'Spend the coins from your check-ins on furniture, décor, wallpaper and floors', alt: 'Room decorating screen — furniture, décor, wallpaper and floor tabs with an apply button' },
    { title: ['One house with friends,', 'routines you build together'], desc: 'Friends join with an invite code — the routines you keep together level up the house', alt: 'House screen — rooms gathered in a house above the clouds, with house level, members and goal, explore and manage buttons' },
    { title: ['Every day, stacked up,', 'at a glance on the calendar'], desc: 'Each day you keep a routine gets a dot, and a weekly review helps you look back', alt: 'Calendar screen — a September calendar with completed days circled and that day’s to-dos' },
  ],
  web: {
    eyebrow: 'ALSO ON THE WEB',
    title: ['On PC too, no install —', 'right in your browser'],
    button: 'Open Rougether on the web',
    stepsLabel: 'How to install it like an app',
    steps: [
      { where: 'Chrome · Edge', how: '<em>Install</em> icon at the right of the address bar' },
      { where: 'Safari on Mac', how: 'File menu → <em>Add to Dock</em>' },
      { where: 'Phone browser', how: 'Share → <em>Add to Home Screen</em>' },
    ],
  },
  faq: {
    heading: 'FAQ',
    reward: 'You read them all — thank you!',
    items: (instagram, email) => [
      { q: 'What is Rougether?', a: 'A to-do app where you grow together with your character and your friends in one house. Every routine you keep earns rewards to decorate your room, and the house you share with friends grows too.' },
      { q: 'Is it free?', a: 'Yes, it’s free to start. Coins you earn by keeping routines let you decorate your room.' },
      { q: 'Is the app available in English?', a: 'The app itself is currently available in Korean only. This page is in English so you can see what Rougether is.' },
      {
        q: 'When is the Android version coming?',
        a: 'We’re preparing the Google Play release. News lands on Instagram first.',
        html: `We’re preparing the Google Play release. News lands on <a href="${instagram}" target="_blank" rel="noopener">Instagram</a> first.`,
      },
      { q: 'Can I use it on a PC?', a: 'Yes. Open app.rougether.com in your browser and sign in with the same account — your room and to-dos are right there. If you use it often, your browser’s install (Add to Home Screen) feature keeps it like an app.' },
      { q: 'How do I use it with friends?', a: 'Create a house and share its invite code, and friends can join the same house. Visiting rooms, sending cheers and shared missions help the house grow together. You can be in more than one house.' },
      { q: 'What do I get for keeping routines?', a: 'Every completion adds coins and streaks. Spend the rewards to decorate your room, or draw characters and furniture from the gacha.' },
      {
        q: 'Where do I send questions or bug reports?',
        a: `Use Settings → Report a bug in the app, or email ${email}.`,
        html: `Use Settings → Report a bug in the app, or email <a href="mailto:${email}">${email}</a>.`,
      },
    ],
  },
  closing: { title: 'Welcome to Rougether', body: 'Keep your routines and your room grows — start together with friends in one house.' },
  footer: { privacy: 'Privacy Policy', terms: 'Terms of Service', github: 'GitHub', web: 'Open on the web', instagramLabel: 'Rougether on Instagram' },
};

const DICTS: Record<Locale, Dict> = { ko, en };
export function t(locale: Locale): Dict {
  return DICTS[locale];
}
