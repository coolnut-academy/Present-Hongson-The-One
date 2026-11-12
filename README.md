# HONGSON THE ONE — Immersive Digital Education Exhibition

> **เว็บนำเสนอนวัตกรรมระบบนิเวศดิจิทัลทางการศึกษา โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ จ.แม่ฮ่องสอน**  
> ออกแบบในรูปแบบ **Dark Cyberpunk / Cinematic 3D Scroll-Driven Presentation** เพื่อใช้แทน Presentation Slide หรือเปิดให้ผู้ประเมินและสาธารณชนเข้าสำรวจ

---

## 🌟 จุดเด่นของระบบ (Key Highlights)

- **Super App & Flagship WebApp:** นำเสนอภาพรวมของ **HONGSON THE ONE** (Super App Ecosystem) ร่วมกับนวัตกรรมชูโรง **HONGSON T-Folio** (ระบบแฟ้มผลงานดิจิทัลและประเมินผลการปฏิบัติงานครู)
- **Cinematic 3D WebGL Scroll:** ขับเคลื่อนด้วย Three.js, React Three Fiber และ Drei ควบคุมมุมกล้องและวัตถุ 3D ผ่าน GSAP ScrollTrigger พร้อมกล้องแยกเฉพาะสำหรับจอมือถือแนวตั้ง (Portrait First-Class)
- **Dual Experience Modes:**
  - **Explore Mode:** เลื่อน Scroll ธรรมชาติเพื่อซึมซับเรื่องราวและระบบ 3D ตามจังหวะของตนเอง
  - **Presentation Mode:** ปุ่มควบคุมสไลด์ (ถัดไป/ย้อนกลับ), สเต็ป 01/12, รองรับคีย์บอร์ด (ลูกศรซ้าย/ขวา), โหมดเต็มจอ (Fullscreen), และบันทึกสำหรับผู้นำเสนอ (Presenter Notes)
- **4R Data Layer Exploded View:** แสดงโครงสร้างการจัดการข้อมูล Record → Review → Retrieve → Report ในมุมมอง 3D แยกชั้นความลึก
- **Verified Evidence Drawer:** แผงตรวจสอบหลักฐานและที่มาของข้อมูล (Provenance) พร้อมแยกแยะผลสัมฤทธิ์เฉพาะของแต่ละโครงการอย่างโปร่งใส ไม่มีการแต่งตัวเลขความสำเร็จ
- **Authentic Brand Identity:** ใช้โลโก้ทางการที่มีความคมชัดสูง (`hongson-the-one.webp`, `hongson-tfolio.webp`) พร้อมภาพหน้าจออินเทอร์เฟซจริงที่ผ่านการปิดบังข้อมูลส่วนบุคคล (Privacy Redacted) ตามมาตรฐาน PDPA
- **Universal Fallback:** รองรับโหมด 2D ประหยัดพลังงานอัตโนมัติสำหรับอุปกรณ์ที่ไม่มี WebGL หรือเปิดการตั้งค่า `prefers-reduced-motion`

---

## 🏗️ โครงสร้างเทคโนโลยี (Tech Stack)

| องค์ประกอบ | เทคโนโลยี |
|---|---|
| **Core Framework** | React 18, TypeScript, Vite 5 |
| **3D & WebGL Engine** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Animation & Scrubbing** | GSAP 3, `@gsap/react`, ScrollTrigger |
| **UI & Styling** | Tailwind CSS, Custom Cyberpunk CSS Tokens, Lucide React |
| **Deployment** | GitHub Pages via GitHub Actions (Static output ใน `dist/`) |

---

## 📖 12 บทการนำเสนอ (Storyboard Chapters)

0. **00 // Digital Genesis:** เปิดตัว Data Core และอัตลักษณ์ HONGSON THE ONE
1. **01 // The Problem:** ภาพสะท้อนความกระจัดกระจายและภาระเอกสารซ้ำซ้อน
2. **02 // One Digital Ecosystem:** นิยามของ Super App ประจำสถานศึกษา
3. **03 // 4 Pillars:** WORK, LEARN, CREATE, SHARE
4. **04 // People & Access:** สิทธิ์การเข้าถึงสำหรับครู (Creator), นักเรียน (Maker), และฝ่ายบริหาร
5. **05 // Enter T-Folio:** เปิดตัวนวัตกรรมเรือธง HONGSON T-Folio
6. **06 // 4R Workflow:** Record, Review, Retrieve, Report ในมุมมอง 3D Exploded View
7. **07 // Product Tour:** ขั้นตอนการทำงานจริง 6 สเต็ปของครูพร้อมภาพหน้าจอระบบ
8. **08 // Approval & Governance:** สายงานการอนุมัติ 4 ลำดับขั้น และ 6 โมดูลแอดมิน
9. **09 // Hongson Metaverse:** พิพิธภัณฑ์วัฒนธรรมเสมือนจริง 7 อำเภอ จ.แม่ฮ่องสอน บน Roblox
10. **10 // Verified Evidence:** ข้อมูลสถิติและคะแนนประเมินที่มีบริบทกำกับชัดเจน
11. **11 // The Next Horizon:** ก้าวต่อไปด้วย Hongson Innovation Space (HIS) และทางเข้าพอร์ทัลจริง

---

## 🚀 การติดตั้งและรันในเครื่อง (Local Development)

```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. เริ่มต้น Dev Server
npm run dev

# 3. ตรวจสอบ Typecheck
npm run typecheck

# 4. ทดสอบ Build เพื่อขึ้น Production
npm run build

# 5. ทดสอบพรีวิวผลลัพธ์ Production
npm run preview
```

---

## 🚢 การ Deploy ขึ้น GitHub Pages

โปรเจกต์นี้มาพร้อมกับ GitHub Actions Workflow ใน `.github/workflows/deploy-pages.yml` ซึ่งจะทำการ Build และ Deploy ไปยัง GitHub Pages โดยอัตโนมัติเมื่อ Push โค้ดขึ้น branch `main`

1. ไปที่ GitHub Repository: **Settings → Pages**
2. ในหัวข้อ **Build and deployment → Source**: ให้เลือกเป็น **GitHub Actions**
3. Push โค้ดขึ้น branch `main`:
   ```bash
   git add .
   git commit -m "feat: complete HONGSON THE ONE cinematic exhibition"
   git push origin main
   ```
4. ระบบจะคำนวณ Base Path ตามชื่อ Repository ให้อัตโนมัติ และเผยแพร่เว็บไซต์ทันที

---

## 🔒 ข้อกำหนดความปลอดภัยและความเป็นส่วนตัว (Privacy & Guardrails)

- โฟลเดอร์ `reference-private/` (รายงานต้นฉบับ 49 หน้า, สไลด์ 17 ภาพ, และภาพถ่ายกิจกรรม 27 ภาพ) จะถูกเก็บไว้ในเครื่องเท่านั้น และถูกละเว้นโดย `.gitignore` เพื่อป้องกันการเผยแพร่ข้อมูลส่วนบุคคลสู่สาธารณะ
- ภาพหน้าจอทั้งหมดใน `public/hongson-assets/screenshots/` ได้รับการจัดทำเป็น WebP คุณภาพสูง และปิดทับชื่อ/บัญชีผู้ใช้ด้วย Privacy Mask แล้ว

