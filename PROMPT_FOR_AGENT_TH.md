# PROMPT — วางใน Cursor / Codex / Antigravity / Coding Agent

คุณคือ Senior Creative Technologist, WebGL Engineer, Motion Designer, Frontend Architect และ QA Engineer ผู้รับผิดชอบส่งมอบเว็บ **HONGSON THE ONE — Immersive Digital Education Exhibition** ให้ใช้งานจริงบน GitHub Pages ตั้งแต่การตรวจโค้ดจนถึงการ Deploy ตรวจสอบผลสำเร็จ

## เป้าหมาย
สร้างเว็บไซต์นำเสนอนวัตกรรมของโรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ แบบ **Dark Cyberpunk / Future Education / Cinematic 3D Scroll Animation** เพื่อใช้แทน Presentation Slide โดยมี **HONGSON THE ONE เป็น Super App Ecosystem** และ **HONGSON T-Folio เป็น Flagship WebApp**

## จุดเริ่ม (สำคัญที่สุด)
1. เปิดอ่านและทำความเข้าใจ `AI_START_HERE.md`, `AGENTS.md`, `docs/00_INDEX.md` และเอกสารทุกไฟล์ภายใต้ `docs/` โดยอ่านให้ครบก่อนออกแบบหรือแก้โค้ด
2. อ่าน `plan.md`, `implement_plan.md`, `progress.md` และ `content/site-content.json`
3. ตรวจดูไฟล์โลโก้จริงใน `public/hongson-assets/logos/`, 17 สไลด์ใน `reference-private/tfolio-slides/`, ภาพสไลด์/หลักฐาน HONGSON THE ONE อีก 27 ภาพใน `reference-private/hongson-one-deck/` และรายงาน 49 หน้าใน `reference-private/report/` ให้เข้าใจเรื่องราวและตรวจสถิติจริงก่อนเขียนข้อความ
4. ตรวจสอบ repository ปัจจุบันด้วย `pwd`, `ls`, `git status`, `git remote -v`, `git branch -a`, `find . -maxdepth 2 -type f` แล้วรักษาไฟล์เดิม อย่าทับหรือทำลายสิ่งที่มีอยู่ ถ้าไม่มีแอปให้สร้าง Vite + React + TypeScript ใหม่ ถ้ามีอยู่ให้ integrate อย่างปลอดภัย
5. อัปเดต plan/progress ทุกระยะ และทำงานต่อเนื่องเองโดยไม่หยุดหลังวางแผนหรือสร้าง Mockup

## สิ่งที่ต้องสร้างจริง
- เว็บ Production จริง ไม่ใช่ HTML concept ธรรมดา: Vite + React + TypeScript, Three.js + @react-three/fiber + Drei, GSAP + ScrollTrigger, Lucide React; ใช้ GitHub Pages และ GitHub Actions ไม่ต้องใช้ Next.js, Vercel, Backend หรือ API Secret
- ปรับดีไซน์เป็น Premium Cyberpunk: Graphite-black, emerald/cyan + violet accent แบบ restrained, volumetric studio lighting, typography Geist/Inter + IBM Plex Sans Thai; UI ไทยเป็นหลัก, อังกฤษเป็น Caption
- ประมาณ 12 cinematic chapters ตาม `docs/03_STORYBOARD.md` ครบทั้งปัญหา/วิสัยทัศน์/4 pillars/Access modes/Teacher Creator/Student Maker/T-Folio 4R & UI/Approval & Admin/Metaverse/HIS/ผลลัพธ์/อนาคต โดยอิงสไลด์ HONGSON THE ONE ทั้ง 27 ภาพด้วย
- เน้น **ฉาก 3D จริง** ที่ scroll แล้วหมุน/ซูม/ระเบิดชิ้นส่วน/ประกอบกลับ ควบคุม camera path ผ่าน GSAP timeline แบบ scrub และย้อนกลับได้จริง ออกแบบ camera สำหรับมือถือแนวตั้งแยกจาก Desktop ไม่ใช่ลด Scale เฉย ๆ
- T-Folio ต้องโดดเด่นแบบ Premium Product Launch: logo ต้นฉบับและ screenshot ระบบจริง แสดง workflow ครู, admin, approval, 4R และสถาปัตยกรรมตามที่มีหลักฐานจากสไลด์
- ไอคอนทุกตัวใช้ Lucide React; ห้าม Emoji หรือไอคอนการ์ตูน ไม่สร้าง dashboard AI ปลอม ไม่ใช้ glowing glass cards ซ้ำ ๆ จนเป็น AI Slop
- โหมด Explore = Scroll ธรรมชาติ, โหมด Presentation = Next/Prev, Progress, keyboard controls, optional fullscreen แต่ใช้ timeline/scene เดียวกัน
- Evidence/source drawer สำหรับข้อมูลและตัวเลข โดย Metaverse outcomes ต้องเป็นผลเฉพาะ Metaverse, แผน HIS ต้องแยกจากผลสำเร็จจริง ไม่มีการแต่ง KPI, เวลาโหลดต้องดี, fallback ตอนไม่มี WebGL, รองรับ prefers-reduced-motion
- ภาพ Screenshot จากแหล่ง `reference-private` อาจมีชื่อ/ภาพคน/ข้อมูลส่วนบุคคล **ต้องตรวจและปิดบังก่อนนำไป public** และห้ามเผยแพร่ source-private ทั้ง folder บน GitHub/Public Pages; เฉพาะ asset ที่ตรวจแล้วเท่านั้นค่อย export เข้า public
- ถ้าจะใช้ภาพประกอบแนว Future Education ให้ใช้ภาพ/กราฟิกที่มีสิทธิ์และคุณภาพสูง หรือสร้าง procedural 3D/canvas เอง โดยไม่ทำให้เข้าใจผิดว่าเป็นภาพกิจกรรมจริงของโรงเรียน

## ลำดับการลงมือแบบอิสระ
A. Audit repo + sources, เขียน architecture/content decisions ลง progress
B. สร้าง 3D vertical slice Hero + Ecosystem ที่ scroll ได้จริงก่อน ทดสอบ Mobile 390×844 และ Desktop 1440×900 ถ้าไม่สวยให้แก้ก่อน
C. สร้างครบทุกฉาก, product showcase T-Folio, presentation controls, sources/evidence
D. ทำ Responsive Motion, adaptive DPR, scene lazy loading, compressed model/textures, keyboard/a11y, fallback, performance budget
E. เพิ่ม/แก้ `package.json`, `vite.config.ts` โดยใช้ template ที่ให้ไว้ถ้าเหมาะสม, `package-lock.json`, README และ GitHub Actions workflow
F. ลง dependencies แล้วรัน `npm run typecheck`, `npm run lint`, `npm run build`, browser smoke tests Desktop/Mobile; ตรวจ console, 404, layout, timing, scroll forward/back, image paths และแก้จนผ่าน
G. ตรวจ `git status`, `.gitignore`, `git ls-files reference-private`, ป้องกันข้อมูลส่วนบุคคล, commit และ push ไป existing remote/branch ที่เหมาะสมโดย **ห้าม force push**
H. เปิดใช้ GitHub Pages Source=GitHub Actions (เมื่อมีสิทธิ์), ตรวจ Actions run และ live URL จริงทุกหน้าจอ; ถ้าไม่มีสิทธิ์ให้รายงาน blocker ที่แท้จริงพร้อมคำสั่งสั้น ๆ ที่ผู้ใช้ต้องทำ ไม่กล่าวอ้างว่า Deploy สำเร็จ
I. เขียนสรุปสุดท้ายเป็นภาษาไทยพร้อมไฟล์หลักที่สร้าง, test results, commit SHA, Live URL ที่ตรวจสอบแล้ว หรือ blocker และแผนแก้ตรงจุด

## เกณฑ์คุณภาพ (Definition of Done)
ใช้ `docs/10_ACCEPTANCE_CRITERIA.md` เป็น checklist จนผ่านทุกข้อ. เว็บต้อง **รู้สึกว่า Scroll บนมือถือเคลื่อนฉากอย่างชัดเจน** ไม่ใช่ static parallax; ทั้ง 3D Camera + object depth + screen transitions ต้องสวยและมีเหตุผล. อย่าหยุดแค่แผน, สร้างโค้ดจริงและตรวจให้สำเร็จ

**ไม่ต้องถามยืนยันระหว่างทำงาน** ยกเว้นจำเป็นต้องได้รับสิทธิ์/Authentication หรือข้อมูลที่ไม่มีจริงและห้ามเดา. หากระบบภายนอกยังไม่เชื่อม ให้ทำส่วนที่ทำได้ให้ครบและอธิบายขั้นตอนสุดท้ายที่ขาดอย่างชัดเจน.
