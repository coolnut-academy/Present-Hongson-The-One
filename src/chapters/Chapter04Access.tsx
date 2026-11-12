import React from 'react';

export const Chapter04Access: React.FC = () => {
  const basePath = import.meta.env.BASE_URL || './';

  const roles = [
    {
      code: 'ROLE 01',
      title: 'ครูผู้สร้างสรรค์การเรียนรู้',
      role: 'TEACHER AS CREATOR',
      desc: 'ใช้งาน Digital Plan Online, ส่งแฟ้มผลงาน T-Folio, และนำ AI มาช่วยจัดกิจกรรมการเรียนรู้',
      img: 'photo-digital-plan.webp',
      caption: 'การอบรมสร้างแผนการจัดการเรียนรู้ออนไลน์ 25 มิ.ย. 2569',
    },
    {
      code: 'ROLE 02',
      title: 'นักเรียนผู้ลงมือปฏิบัติจริง',
      role: 'STUDENT AS MAKER',
      desc: 'สร้างสรรค์นวัตกรรมดิจิทัล, หุ่นยนต์, และสำรวจพิพิธภัณฑ์วัฒนธรรมเสมือนจริง 7 อำเภอ',
      img: 'photo-student-maker.webp',
      caption: 'กิจกรรมนักเรียนแกนนำและชิ้นงานนวัตกรรม',
    },
    {
      code: 'ROLE 03',
      title: 'การพัฒนาศักยภาพครูด้วย AI',
      role: 'AI PEDAGOGY & INNOVATION',
      desc: 'การอบรมพัฒนาครูด้านการจัดการเรียนรู้ด้วย AI ณ ห้องนวัตกรรม โรงเรียนห้องสอนศึกษา',
      img: 'photo-ai-workshop.webp',
      caption: 'การอบรมพัฒนาครูด้วย AI วันที่ 12 และ 16 ส.ค. 2569',
    },
  ];

  return (
    <section
      id="access"
      data-chapter-index="4"
      className="chapter-section min-h-screen relative flex items-center justify-center px-4 sm:px-8 py-32"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver-muted mb-4">
            SECTION 04 // USER ROLES & PRACTICE EVIDENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-6">
            บทบาทผู้ใช้งานในสถานศึกษา <br />
            <span className="text-silver">ผ่านการอบรมและลงมือปฏิบัติจริง</span>
          </h2>
          <p className="text-base sm:text-lg text-silver font-light leading-relaxed">
            ไม่ใช่เพียงคอนเซ็ปต์บนหน้าจอ: แต่มีการจัดอบรมเชิงปฏิบัติการและขับเคลื่อนการใช้งานจริงทั้งโรงเรียน
          </p>
        </div>

        {/* 3 Real Photographic Exhibit Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div
              key={r.code}
              className="precision-surface overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/80 hairline-b">
                  <img
                    src={`${basePath}hongson-assets/exhibit/${r.img}`}
                    alt={r.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 font-mono text-[10px] tracking-[0.14em] text-white px-2 py-0.5 bg-black/80 border border-white/[0.1]">
                    {r.code}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-mono text-[11px] text-signal-emerald tracking-[0.14em] uppercase block mb-1">
                    {r.role}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-[-0.01em] mb-2.5">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-silver font-light leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 mx-6 mb-6 bg-surface border border-white/[0.06] font-mono text-[11px] text-silver-muted">
                {r.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
