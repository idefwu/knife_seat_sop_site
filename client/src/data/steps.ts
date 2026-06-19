// 刀座切換作業 — 8 步驟資料
// 關鍵點語意色：安全=紅 / 品質=藍 / 技巧=琥珀 / 成本=綠

export type KeyPointType = "safety" | "quality" | "skill";

export interface Step {
  no: number;
  phase?: string; // 階段標題（如「刀座退出」）
  title: string;
  cards: string[]; // 對應作業圖卡 URL
  photoRefs: string[]; // 現場照片標號（圖A~圖F）
  keyPointType: KeyPointType;
  keyPoint: string;
  equipment: string;
}

const CARD = (n: number) => `/manus-storage/card${n}`;

export const CARD_URLS: Record<number, string> = {
  1: "/manus-storage/card1_9dec42c3.jpg",
  2: "/manus-storage/card2_4ff78b24.jpg",
  3: "/manus-storage/card3_39ce8bc7.jpg",
  4: "/manus-storage/card4_36635ee0.jpg",
  5: "/manus-storage/card5_7cec0b9d.jpg",
  6: "/manus-storage/card6_13e43076.jpg",
  7: "/manus-storage/card7_df841d1f.jpg",
  8: "/manus-storage/card8_f313c429.jpg",
};

export const PHOTO_URLS: Record<string, string> = {
  圖A: "/manus-storage/photo1_8dd7164b.jpeg",
  圖B: "/manus-storage/photo2_4bf33ff1.jpeg",
  圖C: "/manus-storage/photo3_c84f11bb.jpeg",
  圖D: "/manus-storage/photo4_e7a2d0e8.jpeg",
  圖E: "/manus-storage/photo5_bea78500.jpeg",
  圖F: "/manus-storage/photo6_d9c00b64.jpeg",
};

export const FLOWCHART_URL = "/manus-storage/flowchart_e211bc76.png";
export const FULL_VIDEO_URL = "/manus-storage/full_video_934c6c57.mp4";
export const YOUTUBE_ID = "W9g48AiYodA";
export const HERO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/104103688/Rkj3ivnkaBgkUVRu6GfQiM/hero-RUr9XGn3cmJPcKhuwY2Tam.webp";
export const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/104103688/Rkj3ivnkaBgkUVRu6GfQiM/logo-4fTUPdameEsdkLxHYD4uv6.webp";

export const KEYPOINT_LABEL: Record<KeyPointType, string> = {
  safety: "安全",
  quality: "品質",
  skill: "技巧",
};

export const STEPS: Step[] = [
  {
    no: 1,
    phase: "刀座退出",
    title: "分離下刀軸並設定連動",
    cards: [CARD_URLS[1]],
    photoRefs: ["圖A"],
    keyPointType: "safety",
    keyPoint: "機台未完全停機前，嚴禁退出刀座。",
    equipment: "控制面板",
  },
  {
    no: 2,
    title: "退出離合器並關閉定位",
    cards: [CARD_URLS[2]],
    photoRefs: ["圖A"],
    keyPointType: "skill",
    keyPoint: "確認離合器確實退出，且定位燈號熄滅。",
    equipment: "控制面板",
  },
  {
    no: 3,
    title: "舉起渡橋與面板設為連動",
    cards: [CARD_URLS[3]],
    photoRefs: ["圖B", "圖C"],
    keyPointType: "safety",
    keyPoint: "渡橋舉起後，嚴禁人員通行。",
    equipment: "渡橋、面板",
  },
  {
    no: 4,
    title: "退出刀座並取下接頭",
    cards: [CARD_URLS[4]],
    photoRefs: ["圖C", "圖D"],
    keyPointType: "skill",
    keyPoint: "確認台車完全停止後，再拔接頭。",
    equipment: "電源接頭",
  },
  {
    no: 5,
    phase: "刀座切換",
    title: "取下線外接頭與互換軌道",
    cards: [CARD_URLS[5]],
    photoRefs: ["圖E", "圖A"],
    keyPointType: "safety",
    keyPoint: "切換軌道時，嚴禁站立於軌道內。",
    equipment: "軌道選擇扳手",
  },
  {
    no: 6,
    phase: "刀座連線",
    title: "接上接頭與離合器外扳",
    cards: [CARD_URLS[6]],
    photoRefs: ["圖E", "圖F"],
    keyPointType: "quality",
    keyPoint: "電源接頭需確實鎖緊。",
    equipment: "電源接頭、離合器",
  },
  {
    no: 7,
    title: "刀座進入與定位 ON",
    cards: [CARD_URLS[7]],
    photoRefs: ["圖C", "圖A"],
    keyPointType: "quality",
    keyPoint: "必須確認警報器響起，才可按定位 ON。",
    equipment: "控制面板",
  },
  {
    no: 8,
    title: "離合器進入與結合",
    cards: [CARD_URLS[8]],
    photoRefs: ["圖A"],
    keyPointType: "quality",
    keyPoint: "離合器結合不完全，將導致加工異常。",
    equipment: "控制面板、機正寸",
  },
];

export const SAFETY_LINES = [
  "機台未完全停機前，嚴禁退出刀座。",
  "渡橋舉起後，嚴禁人員通行。",
  "切換軌道時，嚴禁站立於軌道內。",
];

export const DOC_META = {
  docNo: "WI-P-02-09",
  rev: "A",
  title: "刀座切換作業指導書",
  machine: "二米雙刀座分條機",
  station: "排刀工位",
  effectiveDate: "2026-06-19",
  page: "1 / 1",
};
