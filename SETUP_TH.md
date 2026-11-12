# วิธีใช้ชุด HONGSON THE ONE GitHub Pages AI Build Kit

1. **สร้างหรือเปิด Repository สำหรับเว็บนำเสนอโดยเฉพาะ** อย่า Extract ไปทับโค้ด Super App ที่ใช้งานจริง (`hongson.one`).
2. แตกไฟล์ ZIP แล้วคัดลอก **เนื้อหาภายใน** ไปยัง Root ของ Project (ไม่ต้องสร้างโฟลเดอร์ซ้อน): `AI_START_HERE.md`, `AGENTS.md`, `docs/`, `content/`, `public/`, `reference-private/`, `.github/`, ฯลฯ
3. ถ้า Repo มี `.gitignore`, `AGENTS.md`, `plan.md`, `implement_plan.md`, `progress.md` หรือ Workflow เดิม **อย่า Replace All** ให้เปิดสองไฟล์แล้ว Merge หรือให้ Coding Agent ทำเองก่อนแก้ไข
4. เปิด Project Root ใน Cursor, Codex หรือ Antigravity **โหมด Local Workspace ที่อ่านไฟล์ `reference-private/` ได้** แล้วคัดลอก Prompt จาก `PROMPT_FOR_AGENT_TH.md` เข้าแชตของ Agent
5. ปล่อยให้ Agent อ่านเอกสาร ออกแบบ เขียน Vite/React/Three.js/GSAP จริง สร้าง `index.html` / `src/` / `package.json` / `package-lock.json` เอง ทดสอบบน Desktop และ Mobile
6. Agent ต้อง Build ผ่านก่อน Push และตั้งค่า Repository บน GitHub: `Settings → Pages → Build and deployment → Source: GitHub Actions` ซึ่ง Workflow ใน ZIP จะ Deploy หลัง Push branch `main` เมื่อมีแอปพร้อม
7. ถ้าเป็น Repo ปกติ URL ประมาณ `https://USERNAME.github.io/REPOSITORY/`; Workflow คำนวณ base path จากชื่อ Repo อัตโนมัติ ถ้าใช้ custom domain ค่อยกำหนด `VITE_BASE_PATH=/` ใน GitHub Actions Variables และเพิ่ม CNAME เมื่อพร้อม
8. **ห้าม Push `reference-private/`**: ประกอบด้วยรายงาน/สไลด์/ภาพกิจกรรมที่อาจมีข้อมูลบุคคล มี `.gitignore` ป้องกันไว้แล้ว แต่ควรเช็ก `git status` และ `git ls-files reference-private` ก่อน Push เสมอ
9. ผลลัพธ์สำเร็จเมื่อ Agent ตรวจสอบหน้าเว็บที่ Deploy แล้วจริง ไม่ใช่แค่ `npm run build` ผ่าน

> ชุดนี้เป็น **ข้อมูลตั้งต้น + งานออกแบบระบบ + ข้อกำหนด + แหล่งข้อมูล + Workflow** ไม่ใช่เว็บไซต์สำเร็จรูป การสร้างและ Deploy ตัวเว็บไซต์เป็นหน้าที่ของ Coding Agent ตาม Prompt
