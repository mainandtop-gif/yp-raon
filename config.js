/* =======================================================================
   SITE CONFIG — 용인 기흥 라온프라이빗 아르디에
   이 파일 하나만 수정하면 페이지 내용이 전부 바뀝니다.
   ======================================================================= */
const SITE_CONFIG = {
  /* ── 기본 정보 ── */
  siteName:   "용인 기흥 라온프라이빗 아르디에",
  brandEN:    "YONGIN GIHEUNG RAON PRIVATE ARDIE",
  tagline:    "비전, 자연, 교통, 생활 다 품은 진정한 용인의 핵심 플레이스. 테라스 라이프를 즐기는 품격 있는 주거단지.",

  /* 하단 '전화걸기' 버튼 및 상담 대표번호 */
  callPhone:  "1800-7081",
  sitePhone:  "1800-7081",

  address:      "경기도 용인시 기흥구 영덕동 55-1번지 일원",
  modelHouse:   "경기도 용인시 수지구 수지로 454-9 (견본주택)",
  developer:    "시행위탁 명주산업개발㈜ | 시행수탁 코리아신탁 | 시공 라온건설",
  totalUnits:   238,
  aptUnits:     238,
  officeUnits:  0,
  unitTypes:    ["84A","84B","84C","103A","103B","116","119A","119B"],
  openHours:    "OPEN 10:00 ~ CLOSE 18:00",

  /* ── 방문예약(관심고객등록 폼) ── */
  visitBooking: {
    dateLabel:    "방문예약 날짜",
    timeLabel:    "방문예약 시간",
    help:         "희망하시는 방문 날짜와 시간을 선택해 주세요. (미선택 시 담당자가 상담 후 조율해 드립니다.)",
    maxDaysAhead: 90,
    times: [
      "오전 10:00", "오전 11:00",
      "오후 12:00", "오후 1:00", "오후 2:00",
      "오후 3:00",  "오후 4:00", "오후 5:00"
    ]
  },

  /* ── 첫 화면 이미지 팝업 ──
     사용하려면 enabled를 true로 바꾸고 image에 배너 이미지 경로를 넣으세요. */
  popup: {
    enabled:      false,
    image:        "",
    alt:          "",
    link:         "#register",
    hideForHours: 24
  },

  /* 히어로(첫 화면) */
  heroBadge:  "용인 기흥 라온프라이빗 아르디에 분양중",
  heroImage:  "assets/images/hero.jpg",

  /* SEO */
  seo: {
    title:       "용인 기흥 라온프라이빗 아르디에 | 공식 관심고객등록",
    description: "용인 기흥 라온프라이빗 아르디에 공식 홍보 페이지. 경기도 용인시 기흥구 영덕동 55-1번지 일원, 84㎡~119㎡ 총 238세대. 사업개요·입지환경·프리미엄·단지배치도·단지설계·커뮤니티·시스템·평면도·인테리어 확인 및 관심고객등록.",
    keywords:    "용인 기흥 라온프라이빗 아르디에, 라온프라이빗 아르디에, 용인 아파트 분양, 기흥 아파트 분양, 영덕동 아파트, 용인 플랫폼시티, 구성역 GTX-A, 라온건설, 테라스 아파트",
    ogImage:     "assets/images/hero.jpg",
    canonical:   "" // 배포 후 실제 도메인 입력 (예: https://yongin-raon.vercel.app/)
  },

  /* ── 상단/모바일 내비게이션 (섹션 id와 1:1) ── */
  nav: [
    { label: "사업개요",   href: "#overview" },
    { label: "입지환경",   href: "#location" },
    { label: "프리미엄",   href: "#premium" },
    { label: "단지배치도", href: "#block" },
    { label: "단지설계",   href: "#plan" },
    { label: "커뮤니티",   href: "#community" },
    { label: "시스템",     href: "#system" },
    { label: "평면도",     href: "#unit" },
    { label: "인테리어",   href: "#interior" }
  ],

  /* ── 사업개요 표 ── */
  overviewTable: [
    ["사 업 명",   "<strong>용인 기흥 라온프라이빗 아르디에</strong><br>영덕지구 공동주택 신축공사"],
    ["대지위치",   "경기도 용인시 기흥구 영덕동 55-1번지 일원"],
    ["대지면적",   "18,608.00㎡ (5,628.92평)"],
    ["연 면 적",   "46,725.90㎡ (14,134.58평)"],
    ["건폐율/용적률", "50.30% / 159.97%"],
    ["건축규모",   "지하 2층, 지상 7층"],
    ["세 대 수",   "<strong>아파트 84㎡~119㎡, 총 238세대</strong>"],
    ["주차대수",   "363대 (세대당 1.52대)"],
    ["시행 · 시공", "시행위탁 명주산업개발㈜ / 시행수탁 코리아신탁 / 시공 라온건설"],
    ["문의전화",   "<strong>1800-7081</strong>"]
  ],

  /* ── 섹션 ──
     images: 본문 이미지 / planTypes: 1단 탭 / planGroups: 2단 탭(그룹 → 타입) */
  sections: [
    {
      id: "overview", ko: "사업개요", en: "BUSINESS SUMMARY",
      desc: "경기도 용인시 기흥구 영덕동, 지하 2층 ~ 지상 7층 84㎡~119㎡ 총 238세대의 테라스 특화 주거단지.",
      table: true,
      images: ["assets/images/pc_overview.jpg"]
    },
    {
      id: "location", ko: "입지환경", en: "LOCATION",
      desc: "용인 플랫폼시티(판교 테크노밸리 약 4배 규모)의 미래가치, 구성역(GTX-A · 수인분당선)과 에버라인 영덕역(신설 예정), 광교신도시 · 수원 영통 · 기흥역세권 인프라를 함께 누리는 용인의 핵심 입지.",
      images: ["assets/images/pc_location.jpg"]
    },
    {
      id: "premium", ko: "프리미엄", en: "PREMIUM 6",
      desc: "플랫폼시티의 미래가치, 트리플 생활환경, 더 빠른 쾌속 교통망, 특화 품은 주거가치, 쾌적한 힐링라이프, 다 갖춘 교육환경까지 6가지 프리미엄.",
      images: ["assets/images/pc_premium.jpg"]
    },
    {
      id: "block", ko: "단지배치도", en: "COMPLEX LAYOUT",
      desc: "태광CC와 문화공원을 마주한 단지 배치와 동별 위치를 확인하세요.",
      images: ["assets/images/pc_block.jpg"]
    },
    {
      id: "plan", ko: "단지설계", en: "SITE DESIGN",
      desc: "폭 2.5m · 최대 17m의 테라스 세대와 골프장 조망 세대(일부세대), 최상층 거실 최대 3.5m 층고와 우물천장 · 알파룸 등 혁신설계.",
      images: ["assets/images/pc_plan.jpg"]
    },
    {
      id: "community", ko: "커뮤니티", en: "COMMUNITY",
      desc: "골프연습장, 피트니스, 작은도서관 등 일상을 채우는 다채로운 커뮤니티 시설.",
      images: ["assets/images/pc_community.jpg"]
    },
    {
      id: "system", ko: "시스템", en: "SMART SYSTEM",
      desc: "입주민의 안전과 편의를 위한 스마트 · 보안 · 에너지 시스템을 단지 전반에 적용했습니다.",
      images: ["assets/images/pc_system.jpg"]
    },
    {
      id: "unit", ko: "평면도", en: "FLOOR PLAN",
      desc: "타입을 선택하면 해당 평면도를 확인할 수 있습니다.",
      planTypes: [
        { label: "84A",  images: ["assets/images/unit_84a.jpg"] },
        { label: "84B",  images: ["assets/images/unit_84b.jpg"] },
        { label: "84C",  images: ["assets/images/unit_84c.jpg"] },
        { label: "103A", images: ["assets/images/unit_103a.jpg"] },
        { label: "103B", images: ["assets/images/unit_103b.jpg"] },
        { label: "116",  images: ["assets/images/unit_116.jpg"] },
        { label: "119A", images: ["assets/images/unit_119a.jpg"] },
        { label: "119B", images: ["assets/images/unit_119b.jpg"] }
      ]
    },
    {
      id: "interior", ko: "인테리어", en: "INTERIOR",
      desc: "타입별 인테리어 컷입니다. 유상옵션과 전시품목이 혼재되어 있으니 반드시 견본주택에서 확인해 주세요.",
      planTypes: [
        { label: "84B",  images: ["assets/images/interior_84b.jpg"] },
        { label: "119A", images: ["assets/images/interior_119a.jpg"] }
      ]
    }
  ],

  /* ── 개인정보/푸터 ── */
  privacyPurpose: "용인 기흥 라온프라이빗 아르디에 관련 상담 및 분양 안내 서비스 제공",
  footerDisclaimer: "본 사이트에 사용된 CG, 일러스트, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다소 차이가 있을 수 있으며, 사업과정 및 실제 시공에 따라 변경될 수 있습니다. 본 사이트에 표기된 모든 개발계획 및 예정사항 등은 추후 관계기관 혹은 지자체의 사정에 따라 변경 또는 취소될 수 있습니다. 정확한 내용은 반드시 입주자 모집공고문 및 견본주택을 통해 확인하시기 바랍니다.",
  year: 2026
};
