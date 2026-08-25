# 용인 기흥 라온프라이빗 아르디에 — 분양 랜딩 페이지

경기도 용인시 기흥구 영덕동 55-1번지 일원 / 84㎡~119㎡ 총 238세대
(참고 원본: 용인 기흥 라온프라이빗 아르디에 공식 홈페이지 yp-raon.com — 저작권 사용 허락 받음)

## 구조

```
index.html            정적 페이지 (HTML/CSS/JS 한 파일)
config.js             ★ 내용 수정은 여기서만 — 문구/이미지/메뉴/평면 탭
api/contact.js        관심고객등록 메일 발송 (Vercel Serverless, nodemailer)
assets/images/        원본 사이트 이미지
vercel.json           빌드/라우팅 설정
```

## 메뉴 (config.js `nav` + `sections`가 1:1)

| 메뉴 | 앵커 | 내용 |
|---|---|---|
| 사업개요 | `#overview` | 요약표 + 블록별 개요표(가로 스크롤) |
| 입지환경 | `#location` | 위치도 |
| 프리미엄 | `#premium` | PREMIUM 5 |
| 단지/동호수 배치도 | `#complex` | 탭: 단지배치도 / 1블록 / 11블록 / 3~6블록 / 3~6블록(오피스텔) |
| 커뮤니티 | `#community` | 커뮤니티 안내 |
| 평면안내(아파트) | `#plans-apt` | 2단 탭: 면적대(84·100~102·118~124·128~129·188·펜트) → 타입 26개 |
| 평면안내(오피스텔) | `#plans-ot` | 탭: 84OA,OB / 84OC,OD / 84OE,OF / 84OG,OH |

하단 고정바: **관심고객등록**(`#register`로 이동) / **전화걸기**(`tel:1600-0255`).
전화번호는 `config.js`의 `callPhone` 하나만 고치면 전부 반영됩니다.

## 이미지 추가 시 주의 (필수)

`index.html`의 `IMG_SIZE` 표에 **[가로, 세로]를 반드시 등록**하세요.
누락하면 `loading="lazy"` 이미지가 로드 전 높이 0으로 접혀 문서 높이가 무너지고,
메뉴 클릭 시 엉뚱한 위치로 스크롤됩니다.

## 로컬 미리보기

```bash
npx serve .
```

## 배포 (GitHub + Vercel)

1. GitHub 저장소 생성 후 push
2. Vercel > New Project > 해당 저장소 Import
3. Settings > Environment Variables 에 `.env.example` 항목 등록
   (`EMAIL_USER`, `EMAIL_PASS`, `RECEIVER_EMAILS`, `SITE_NAME`)
4. 배포 후 `config.js`의 `seo.canonical`에 실제 도메인 입력

수신자 추가는 `RECEIVER_EMAILS`에 콤마로 이어 붙이면 됩니다 (코드 수정 불필요).
