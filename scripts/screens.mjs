// 랜딩용 앱 스크린샷 가공 — 캡처 파일을 넣으면 크롭·리사이즈·JPEG 압축까지 한 번에.
//
//   node scripts/screens.mjs raw   <입력.png> <출력이름>   실기기 캡처: 상단 상태바만 제거
//   node scripts/screens.mjs store <입력.png> <출력이름>   App Store 합성본: 흰 베젤 안쪽 화면만 자동 감지 크롭
//
// 출력은 public/assets/screens/<출력이름>.jpg (640px 폭, 품질 84). 예:
//   npm run screens -- raw ~/Desktop/room.png hero-room
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT_DIR = 'public/assets/screens';
const WIDTH = 640;          // 랜딩 표시 폭(292px) @2x + 여유
const STATUS_BAR = 180;     // iPhone 상태바 높이(59pt @3x ≈ 177px) — 1179px 폭 기준
const BASE_WIDTH = 1179;    // 실기기 캡처 기준 폭(iPhone 15/16) — 다른 폭은 비율로 환산

const [mode, input, name] = process.argv.slice(2);
if (!['raw', 'store'].includes(mode) || !input || !name) {
  console.error('usage: node scripts/screens.mjs <raw|store> <input.png> <output-name>');
  process.exit(1);
}

const isWhite = (data, i) => data[i] >= 248 && data[i + 1] >= 248 && data[i + 2] >= 248;

/** 합성본에서 흰 베젤 안쪽 화면 사각형을 찾는다 — 중앙 열/행을 따라 첫 흰 띠를 건너뛴 지점. */
function innerRect(data, w, h, ch) {
  const px = (x, y) => (y * w + x) * ch;
  const cx = Math.floor(w / 2);
  let y = Math.floor(h * 0.15);
  while (!isWhite(data, px(cx, y))) y++;
  while (isWhite(data, px(cx, y))) y++;
  const top = y;
  y = h - 1;
  while (!isWhite(data, px(cx, y))) y--;
  while (isWhite(data, px(cx, y))) y--;
  const bottom = y;
  const cy = Math.floor((top + bottom) / 2);
  let x = 0;
  while (!isWhite(data, px(x, cy))) x++;
  while (isWhite(data, px(x, cy))) x++;
  const left = x;
  x = w - 1;
  while (!isWhite(data, px(x, cy))) x--;
  while (isWhite(data, px(x, cy))) x--;
  return { left, top, right: x, bottom };
}

mkdirSync(OUT_DIR, { recursive: true });
const img = sharp(input);
const { width, height } = await img.metadata();
let region;

if (mode === 'raw') {
  const status = Math.round((STATUS_BAR * width) / BASE_WIDTH);
  region = { left: 0, top: status, width, height: height - status };
} else {
  const { data, info } = await img.clone().raw().toBuffer({ resolveWithObject: true });
  const r = innerRect(data, info.width, info.height, info.channels);
  const screenW = r.right - r.left;
  const status = Math.round((STATUS_BAR * screenW) / BASE_WIDTH);
  region = { left: r.left + 4, top: r.top + status, width: screenW - 8, height: r.bottom - 4 - (r.top + status) };
  console.log('detected screen', r);
}

const out = `${OUT_DIR}/${name}.jpg`;
const result = await img
  .extract(region)
  .resize({ width: WIDTH })
  .jpeg({ quality: 84, progressive: true, mozjpeg: true })
  .toFile(out);
console.log(`${out}: ${result.width}x${result.height}, ${(result.size / 1024).toFixed(0)}KB`);
