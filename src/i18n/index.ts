// 랜딩 문구 사전 — 한국어가 원본, 영어는 헤더 언어 드롭다운으로 전환되는 /en.html 페이지용.
// 페이지·컴포넌트는 문구를 직접 쓰지 않고 t(locale)로 받는다. 딥링크 페이지(invite/join)는 단일 HTML이라
// 한국어로 렌더한 뒤 브라우저 언어(또는 ?lang=)에 따라 클라이언트에서 영어로 바꾼다 — INVITE_COPY.
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
  tour: { title: [string, string]; desc: string; alt: string }[];
  web: { eyebrow: string; title: [string, string]; button: string; stepsLabel: string; steps: { where: string; how: string }[] };
  faq: { heading: string; reward: string; items: (links: { instagram: string; email: string; appStore: string; playStore: string }) => FaqItem[] };
  closing: { title: string; body: string };
  footer: { privacy: string; terms: string; github: string; web: string; instagramLabel: string };
}

const ko: Dict = {
  htmlLang: 'ko',
  brand: '루게더',
  // 검색 타이틀 = 브랜드 + 카테고리 키워드. 브랜드 단독은 이미 브랜드로 검색되는 서비스에만 통한다 —
  // 신규 앱은 '루틴 앱'·'습관 앱' 검색에 걸리려면 타이틀에 그 단어가 있어야 한다(검색엔진 최상위 신호).
  title: '루게더 - 친구와 함께 키우는 루틴·습관 관리 앱',
  ogTitle: '루게더 — 친구들과 한 집에 살며 같이 갓생 사는 루틴·할 일 앱',
  desc: '친구들과 한 집에 살며 같이 갓생 사는 루틴 앱, 루게더. 집 채팅으로 이야기하고, 서로의 방에 놀러 가 응원하고, 공동 미션으로 집을 함께 키워요. 혼자면 작심삼일인 습관도 같이 하면 계속돼요. iPhone·안드로이드·PC에서 무료로 시작하세요.',
  nav: { tour: '둘러보기', faq: 'FAQ', instagram: 'Instagram', language: '언어' },
  hero: {
    title: ['친구들과 한 집에서', '같이 갓생 살아요'],
    lead: '서로의 방에 놀러 가고, 응원하고, 같이 미션을 채우는 루틴·할 일 앱, 루게더.',
    webLink: 'PC에서 설치 없이 웹으로 시작하기 →',
    scrollHint: '스크롤해서 더 알아보기',
    heroAlt: '루게더 내 방 화면 — 구름 벽지 방에서 쉬는 고양이 캐릭터와 오늘의 할 일',
  },
  // 카피·캡처는 App Store 스크린샷(2026-09)과 동일 — 스토어에서 본 앱을 랜딩에서 그대로 만나게
  tour: [
    { title: ['친구들과 한 집에서', '함께 쌓는 루틴'], desc: '초대코드로 모인 친구들의 방이 한 집에 — 채팅으로 이야기하고, 응원을 보내고, 같이 지킨 루틴이 집 레벨을 올려요', alt: '집 화면 — 구름 위 집에 모인 방들, 집 레벨·멤버와 목표·집 탐색·집 관리 버튼' },
    { title: ['친구가 놀러 오는', '내 취향의 방'], desc: '루틴으로 모은 코인으로 가구·소품·벽지·바닥을 골라 꾸미면, 친구들이 놀러 와 구경하고 방명록을 남겨요', alt: '방 꾸미기 화면 — 가구·소품·벽지·바닥 탭과 적용하기' },
    { title: ['매일의 할 일은', '가볍게 체크'], desc: '학업·건강처럼 카테고리로 묶고, 오늘 몇 개 해냈는지 한눈에 봐요', alt: '오늘의 할 일 화면 — 할 일·학업·건강 카테고리와 곰 체크' },
    { title: ['차곡차곡 쌓인 하루', '달력에서 한눈에'], desc: '해낸 날엔 달력에 동그라미가 그려지고, 루틴·할 일별로 골라 볼 수 있어요', alt: '달력 화면 — 완료한 날에 동그라미가 표시된 9월 달력과 그날의 할 일' },
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
    items: ({ instagram, email, appStore, playStore }) => [
      { q: '루게더는 어떤 앱인가요?', a: '친구들과 한 집에 살며 같이 루틴을 지키는 루틴·습관 앱이에요. 집 채팅으로 이야기하고, 서로의 방에 놀러 가 응원하고, 공동 미션으로 집을 함께 키워요. 루틴을 지킬 때마다 받는 코인으로 친구가 놀러 올 내 방도 꾸며요. iPhone·안드로이드·PC 웹에서 쓸 수 있어요.' },
      { q: '무료인가요?', a: '네, 무료로 시작할 수 있어요. 루틴을 지키면 받는 코인으로 방을 꾸밀 수 있어요.' },
      {
        q: '어디서 받을 수 있나요? 안드로이드도 되나요?',
        a: '네, 둘 다 돼요. iPhone은 App Store, 안드로이드는 Google Play에서 받으세요. 같은 계정으로 로그인하면 기기를 바꿔도 내 방과 할 일이 그대로예요.',
        html: `네, 둘 다 돼요. iPhone은 <a href="${appStore}" target="_blank" rel="noopener">App Store</a>, 안드로이드는 <a href="${playStore}" target="_blank" rel="noopener">Google Play</a>에서 받으세요. 같은 계정으로 로그인하면 기기를 바꿔도 내 방과 할 일이 그대로예요.`,
      },
      { q: 'PC에서도 쓸 수 있나요?', a: '네. 브라우저에서 app.rougether.com 을 열고 같은 계정으로 로그인하면 내 방과 할 일이 그대로예요. 자주 쓰면 브라우저의 설치(홈 화면에 추가) 기능으로 앱처럼 둘 수 있어요.' },
      { q: '친구랑 어떻게 같이 쓰나요?', a: '집을 만들고 초대코드를 공유하면 친구가 같은 집에 들어올 수 있어요. iPhone 친구와 안드로이드 친구가 한 집에 모여도 돼요. 집 채팅, 방 구경, 방명록, 응원 보내기, 공동 미션으로 집이 함께 자라요. 집은 여러 개에 참여할 수 있어요.' },
      { q: '습관 만들기에 어떻게 도움이 되나요?', a: '작심삼일이 되지 않게 매일 체크한 기록이 스트릭으로 이어지고, 해낸 날엔 달력에 동그라미가 그려져요. 친구들과 한 집에 모이면 서로 방을 구경하고 응원을 보내며 공동 미션을 함께 채워서, 혼자보다 오래 가는 습관을 만들 수 있어요.' },
      { q: '루틴을 지키면 뭐가 생기나요?', a: '완료할 때마다 코인과 스트릭이 쌓이고, 모은 보상으로 방을 꾸미거나 뽑기에서 캐릭터·가구를 얻을 수 있어요.' },
      {
        q: '문의나 버그 제보는 어디로 하나요?',
        a: `앱의 설정 → 버그 제보 기능을 쓰거나, ${email}으로 보내주세요.`,
        html: `앱의 설정 → 버그 제보 기능을 쓰거나, <a href="mailto:${email}">${email}</a>으로 보내주세요.`,
      },
    ],
  },
  closing: { title: '루게더에 오신 걸 환영해요', body: '혼자면 작심삼일, 같이 하면 계속돼요 — 친구들과 한 집에서 함께 시작해보세요.' },
  footer: { privacy: '개인정보처리방침', terms: '이용약관', github: 'GitHub', web: '웹에서 열기', instagramLabel: '루게더 인스타그램' },
};

const en: Dict = {
  htmlLang: 'en',
  brand: 'Rougether',
  title: 'Rougether - Routine & Habit Tracker with Friends',
  ogTitle: 'Rougether — live in one house with friends and keep your routines together',
  desc: 'Rougether is a routine and habit app where you live in one house with your friends. Chat in the house, visit and cheer on each other’s rooms, and grow your house with shared missions — habits that fizzle out alone keep going together. Free on iPhone, Android and the web.',
  nav: { tour: 'Tour', faq: 'FAQ', instagram: 'Instagram', language: 'Language' },
  hero: {
    title: ['Move in with friends,', 'keep routines together'],
    lead: 'Visit each other’s rooms, send cheers and fill missions together — a routine and to-do app, Rougether.',
    webLink: 'On PC? Start on the web, no install →',
    scrollHint: 'Scroll to learn more',
    heroAlt: 'Rougether room screen — a cat character resting in a cloud-wallpaper room above today’s to-dos',
  },
  tour: [
    { title: ['One house with friends,', 'routines you build together'], desc: 'Friends join with an invite code — chat, send cheers, and the routines you keep together level up the house', alt: 'House screen — rooms gathered in a house above the clouds, with house level, members and goal, explore and manage buttons' },
    { title: ['A room in your taste,', 'for friends to visit'], desc: 'Spend the coins from your routines on furniture, décor, wallpaper and floors — friends drop by and leave a note in your guestbook', alt: 'Room decorating screen — furniture, décor, wallpaper and floor tabs with an apply button' },
    { title: ['Check off the day’s to-dos', 'with a light touch'], desc: 'Group them by category, like study or health, and see how many you’ve done today at a glance', alt: 'Today’s to-dos screen — to-do, study and health categories with bear check marks' },
    { title: ['Every day, stacked up,', 'at a glance on the calendar'], desc: 'Days you get things done are circled on the calendar, and you can filter by routines or to-dos', alt: 'Calendar screen — a September calendar with completed days circled and that day’s to-dos' },
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
    items: ({ instagram, email, appStore, playStore }) => [
      { q: 'What is Rougether?', a: 'A routine and habit app where you live in one house with your friends and keep your routines together. Chat in the house, visit and cheer on each other’s rooms, and grow your house with shared missions. Every routine you keep earns coins to decorate a room your friends will visit. Available on iPhone, Android and the web.' },
      { q: 'Is it free?', a: 'Yes, it’s free to start. Coins you earn by keeping routines let you decorate your room.' },
      { q: 'Is the app available in English?', a: 'The app itself is currently available in Korean only. This page is in English so you can see what Rougether is.' },
      {
        q: 'Where do I get it? Is it on Android?',
        a: 'Yes, both. iPhone users get it on the App Store, Android users on Google Play. Sign in with the same account and your room and to-dos carry over between devices.',
        html: `Yes, both. iPhone users get it on the <a href="${appStore}" target="_blank" rel="noopener">App Store</a>, Android users on <a href="${playStore}" target="_blank" rel="noopener">Google Play</a>. Sign in with the same account and your room and to-dos carry over between devices.`,
      },
      { q: 'Can I use it on a PC?', a: 'Yes. Open app.rougether.com in your browser and sign in with the same account — your room and to-dos are right there. If you use it often, your browser’s install (Add to Home Screen) feature keeps it like an app.' },
      { q: 'How do I use it with friends?', a: 'Create a house and share its invite code, and friends can join the same house — iPhone and Android friends can share one house. House chat, visiting rooms, guestbooks, sending cheers and shared missions help the house grow together. You can be in more than one house.' },
      { q: 'What do I get for keeping routines?', a: 'Every completion adds coins and streaks. Spend the rewards to decorate your room, or draw characters and furniture from the gacha.' },
      {
        q: 'Where do I send questions or bug reports?',
        a: `Use Settings → Report a bug in the app, or email ${email}.`,
        html: `Use Settings → Report a bug in the app, or email <a href="mailto:${email}">${email}</a>.`,
      },
    ],
  },
  closing: { title: 'Welcome to Rougether', body: 'Habits that fizzle alone keep going together — start with friends in one house.' },
  footer: { privacy: 'Privacy Policy', terms: 'Terms of Service', github: 'GitHub', web: 'Open on the web', instagramLabel: 'Rougether on Instagram' },
};

const DICTS: Record<Locale, Dict> = { ko, en };
export function t(locale: Locale): Dict {
  return DICTS[locale];
}

/** 초대 딥링크 페이지(invite/join) 문구 — 서버 렌더는 ko, en은 InviteCard 인라인 스크립트가 교체한다. */
export interface InviteCopy {
  title: string;
  description: string;
  heading: string;
  lead: string;
  hint: string;
  openApp: string;
  openWeb: string;
  copyCode: string;
  copied: string;
  noCode: string;
  installLead: string;
  appStore: string;
  playStore: string;
  whatIs: string;
  iconAlt: string;
}
const inviteCommonKo = {
  openApp: '앱에서 초대 받기',
  openWeb: '웹에서 초대 받기',
  copyCode: '초대코드 복사',
  copied: '복사됐어요 ✓',
  noCode: '초대코드가 링크에 없어요. 친구에게 링크를 다시 받아주세요.',
  installLead: '아직 루게더가 없다면 —',
  appStore: 'App Store',
  playStore: 'Google Play',
  whatIs: '루게더가 뭔가요? →',
  iconAlt: '루게더 앱 아이콘',
};
const inviteCommonEn = {
  openApp: 'Accept in the app',
  openWeb: 'Accept on the web',
  copyCode: 'Copy invite code',
  copied: 'Copied ✓',
  noCode: 'There is no invite code in this link. Ask your friend to send it again.',
  installLead: "Don't have Rougether yet? —",
  appStore: 'App Store',
  playStore: 'Google Play',
  whatIs: 'What is Rougether? →',
  iconAlt: 'Rougether app icon',
};
export const INVITE_COPY: Record<'invite' | 'join', Record<Locale, InviteCopy>> = {
  invite: {
    ko: {
      title: '루게더 친구 초대',
      description: '친구가 루게더에 초대했어요. 초대코드로 가입하면 둘 다 코인을 받아요.',
      heading: '루게더에 초대받았어요!',
      lead: '초대코드를 쓰면 나도 친구도 코인을 받아요.',
      hint: '앱이 안 열리면 이 코드를 복사해 설정 → 친구 초대에서 입력하세요.',
      ...inviteCommonKo,
    },
    en: {
      title: 'Rougether friend invite',
      description: 'A friend invited you to Rougether. Sign up with the invite code and you both get coins.',
      heading: "You're invited to Rougether!",
      lead: 'Use the invite code and both you and your friend get coins.',
      hint: "If the app doesn't open, copy this code and enter it under Settings → Invite friends.",
      ...inviteCommonEn,
    },
  },
  join: {
    ko: {
      title: '루게더 집에 초대받았어요',
      description: '친구가 루게더 집에 초대했어요. 함께 루틴을 지키며 방과 집을 키워보세요.',
      heading: '루게더 집에 초대받았어요!',
      lead: '함께 루틴을 지키며 방과 집을 키워요.',
      hint: '앱이 안 열리면 이 초대코드를 복사해 집 탐색에서 입력하세요.',
      ...inviteCommonKo,
    },
    en: {
      title: "You're invited to a Rougether house",
      description: 'A friend invited you to their Rougether house. Keep routines together and grow your room and house.',
      heading: "You're invited to a Rougether house!",
      lead: 'Keep routines together and grow your room and house.',
      hint: "If the app doesn't open, copy this invite code and enter it in Explore houses.",
      ...inviteCommonEn,
    },
  },
};
