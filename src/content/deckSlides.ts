export interface DeckSlideData {
  slideNumber: number;
  fileName: string;
  imageSrc: string;
  sectionKey: 'genesis' | 'pillars' | 'tfolio' | 'workshops' | 'makers' | 'cycle' | 'vision';
  sectionLabel: string;
  category: string;
  eyebrow: string;
  titleTh: string;
  titleEn: string;
  quoteTh: string;
  descriptionTh: string;
  takeaways: string[];
  scene3dMode: 'core' | 'problem' | 'orbits' | 'work' | 'tfolio' | 'workflow4r' | 'architecture' | 'learn' | 'ai' | 'metaverse' | 'makers' | 'cycle' | 'appcenter' | 'creator' | 'vision';
}

export const DECK_SLIDES: DeckSlideData[] = [
  {
    slideNumber: 1,
    fileName: '1.jpg',
    imageSrc: 'hongson-assets/deck/slide-01.webp',
    sectionKey: 'genesis',
    sectionLabel: 'GENESIS',
    category: 'COVER & IDENTITY',
    eyebrow: 'SLIDE 01 // PLATFORM VISION',
    titleTh: 'HONGSON The One — โรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ',
    titleEn: 'One Platform to Work. Learn. Create. Share.',
    quoteTh: 'HONGSON The One — One Platform to Work, Learn, Create, Share',
    descriptionTh: 'ระบบนิเวศการเรียนรู้และนวัตกรรมดิจิทัลแห่งอนาคต เพื่อการขับเคลื่อนสถานศึกษาทั้งระบบ',
    takeaways: [
      'แพลตฟอร์มการศึกษายุคใหม่ของโรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ จังหวัดแม่ฮ่องสอน',
      'บูรณาการระบบงาน การจัดการเรียนรู้ และการพัฒนานวัตกรรมไว้ในจุดเดียว',
      'ก้าวสำคัญสู่การเป็นองค์กรแห่งการเรียนรู้ดิจิทัลเต็มรูปแบบ'
    ],
    scene3dMode: 'core'
  },
  {
    slideNumber: 2,
    fileName: '2.jpg',
    imageSrc: 'hongson-assets/deck/slide-02.webp',
    sectionKey: 'genesis',
    sectionLabel: 'THE CHALLENGE',
    category: 'PAIN POINTS',
    eyebrow: 'SLIDE 02 // CHALLENGE',
    titleTh: 'ปัญหาและจุดเจ็บปวด (Pain Points) ในการทำงาน',
    titleEn: 'Fragmented Tools & Administrative Overhead',
    quoteTh: 'เมื่อทุกงานแยกจากกัน ภาระงานจึงเพิ่มขึ้น เอกสารกระดาษ ข้อมูลกระจัดกระจาย',
    descriptionTh: 'ความท้าทายจากระบบที่แยกส่วน ภาระงานเอกสารซ้ำซ้อน และการติดตามประเมินผลที่ล่าช้า',
    takeaways: [
      'ภาระงานเอกสารซ้ำซ้อนและต้องกรอกข้อมูลเดิมในหลายระบบ',
      'แอปพลิเคชันและช่องทางข้อมูลกระจัดกระจาย ไม่เชื่อมโยงกัน',
      'การติดตามผลและการประเมินประสิทธิภาพทำได้ยากและล่าช้า'
    ],
    scene3dMode: 'problem'
  },
  {
    slideNumber: 3,
    fileName: '3.jpg',
    imageSrc: 'hongson-assets/deck/slide-03.webp',
    sectionKey: 'genesis',
    sectionLabel: 'STRATEGY',
    category: 'PARADIGM SHIFT',
    eyebrow: 'SLIDE 03 // STRATEGY',
    titleTh: 'ปรับมุมคิด: จาก App รวม สู่ Super App',
    titleEn: 'From App Aggregator to Unified Ecosystem',
    quoteTh: 'เราไม่ได้รวมแอปเพราะอยากมีแอปเยอะ แต่รวมเพื่อให้ครูเข้าถึงเครื่องมือที่จำเป็นได้จากจุดเดียว',
    descriptionTh: 'ยุทธศาสตร์การรวมศูนย์เครื่องมือที่จำเป็น เพื่อให้ครูและบุคลากรเข้าถึงงานได้จากจุดเดียว',
    takeaways: [
      'ไม่ใช่แค่การนำลิงก์มารวมกัน แต่คือการบูรณาการกระบวนการทำงาน',
      'ศูนย์กลางเข้าถึงเครื่องมือดิจิทัลที่ปลอดภัย สะดวก และรวดเร็ว',
      'ยกระดับประสิทธิภาพการทำงานของครูทั้งระบบเพื่อคืนเวลาสู่ห้องเรียน'
    ],
    scene3dMode: 'core'
  },
  {
    slideNumber: 4,
    fileName: '4.jpg',
    imageSrc: 'hongson-assets/deck/slide-04.webp',
    sectionKey: 'genesis',
    sectionLabel: 'CONTEXT',
    category: 'GLOBAL & LOCAL EDTECH',
    eyebrow: 'SLIDE 04 // CONTEXT',
    titleTh: 'บริบทเทคโนโลยีการศึกษาในระดับสากลและพื้นที่',
    titleEn: 'Global Innovation Meets Local Realities',
    quoteTh: 'เชื่อมโยงทิศทางเทคโนโลยีระดับโลก เข้ากับบริบทการศึกษาในพื้นที่จริง',
    descriptionTh: 'การเชื่อมประสานทิศทางเทคโนโลยีระดับโลก เข้ากับบริบทจริงของพื้นที่จังหวัดแม่ฮ่องสอน',
    takeaways: [
      'บูรณาการมาตรฐาน EdTech สากลเข้ากับวิถีโรงเรียนในพื้นที่สูง',
      'ยกระดับความพร้อมด้านโครงสร้างพื้นฐานดิจิทัลอย่างยั่งยืน',
      'มุ่งเน้นการใช้งานที่เกิดประโยชน์จริงต่อผู้เรียนและครูผู้สอน'
    ],
    scene3dMode: 'core'
  },
  {
    slideNumber: 5,
    fileName: '5.jpg',
    imageSrc: 'hongson-assets/deck/slide-05.webp',
    sectionKey: 'pillars',
    sectionLabel: 'FRAMEWORK',
    category: '4-PILLAR ARCHITECTURE',
    eyebrow: 'SLIDE 05 // FRAMEWORK',
    titleTh: 'กรอบแนวคิด 4 แกนหลัก: WORK · LEARN · CREATE · SHARE',
    titleEn: 'The Four Pillars of HONGSON The One',
    quoteTh: '4 เสาหลักแห่งการขับเคลื่อน: WORK · LEARN · CREATE · SHARE',
    descriptionTh: 'สถาปัตยกรรมโครงสร้าง 4 แกนหลักที่ขับเคลื่อนระบบนิเวศ HONGSON The One',
    takeaways: [
      'WORK: ระบบงานและกระบวนการทำงานที่มีประสิทธิภาพ',
      'LEARN: การเรียนรู้อย่างต่อเนื่องของทั้งครูและนักเรียน',
      'CREATE: การสร้างสรรค์นวัตกรรมและสื่อการเรียนรู้ใหม่',
      'SHARE: การแบ่งปันองค์ความรู้และขยายผลสู่ชุมชน'
    ],
    scene3dMode: 'orbits'
  },
  {
    slideNumber: 6,
    fileName: '6.jpg',
    imageSrc: 'hongson-assets/deck/slide-06.webp',
    sectionKey: 'pillars',
    sectionLabel: 'PILLAR 1: WORK',
    category: 'OPERATIONAL EXCELLENCE',
    eyebrow: 'SLIDE 06 // PILLAR 1: WORK',
    titleTh: 'แกนที่ 1: WORK — Smart Tools for Efficient Workflows',
    titleEn: 'Streamlined School Operations & Portfolios',
    quoteTh: 'บริหารจัดการข้อมูลโรงเรียนอย่างเป็นระบบ ลดขั้นตอนเอกสาร คืนเวลาให้ห้องเรียน',
    descriptionTh: 'เครื่องมืออัจฉริยะเพื่อลดภาระงาน เพิ่มความแม่นยำ และจัดการข้อมูลอย่างเป็นระบบ',
    takeaways: [
      'ระบบบริหารจัดการภาระงานและเอกสารอิเล็กทรอนิกส์ครบวงจร',
      'ลดความซ้ำซ้อนในการกรอกข้อมูลและการจัดเก็บหลักฐาน',
      'รายงานสถิติและข้อมูลสำหรับผู้บริหารแบบเรียลไทม์'
    ],
    scene3dMode: 'work'
  },
  {
    slideNumber: 7,
    fileName: '7.jpg',
    imageSrc: 'hongson-assets/deck/slide-07.webp',
    sectionKey: 'tfolio',
    sectionLabel: 'T-FOLIO PLATFORM',
    category: 'FLAGSHIP WEB APPLICATION',
    eyebrow: 'SLIDE 07 // FLAGSHIP APPLICATION',
    titleTh: 'HONGSON T-Folio — แพลตฟอร์มแฟ้มสะสมงานดิจิทัล',
    titleEn: 'Digital Portfolio & Performance Management',
    quoteTh: 'HONGSON T-Folio: Teacher Portfolio, Performance Management & Data-Driven Excellence',
    descriptionTh: 'ระบบจัดเก็บผลงานครู ประเมินประสิทธิภาพ และขับเคลื่อนด้วยข้อมูลเชิงประจักษ์',
    takeaways: [
      'Flagship Web Application สำหรับครูโรงเรียนห้องสอนศึกษา',
      'จัดเก็บรวบรวมหลักฐานและผลงานทางวิชาการอย่างเป็นหมวดหมู่',
      'พร้อมรับการประเมินวิทยฐานะและการประเมินผลการปฏิบัติงาน'
    ],
    scene3dMode: 'tfolio'
  },
  {
    slideNumber: 8,
    fileName: '8.jpg',
    imageSrc: 'hongson-assets/deck/slide-08.webp',
    sectionKey: 'tfolio',
    sectionLabel: 'TRANSFORMATION',
    category: 'DIGITAL TRANSFORMATION',
    eyebrow: 'SLIDE 08 // TRANSFORMATION',
    titleTh: 'ก่อนและหลังการใช้ T-Folio (Before & After)',
    titleEn: 'From Paper Binders to Real-Time Digital Records',
    quoteTh: 'จากแฟ้มกระดาษหนาเตอะ สู่ฐานข้อมูลดิจิทัลที่ค้นหาได้ในเสี้ยววินาที',
    descriptionTh: 'เปรียบเทียบการเปลี่ยนแปลงจากการจัดการแฟ้มเอกสารกระดาษสู่ระบบดิจิทัล',
    takeaways: [
      'Before: เอกสารกระดาษกระจัดกระจาย เสี่ยงสูญหาย ตรวจสอบยาก',
      'After: บันทึกครั้งเดียว จัดหมวดหมู่อัตโนมัติ ตรวจสอบได้ทุกที่ทุกเวลา',
      'ลดต้นทุนการพิมพ์และพื้นที่จัดเก็บเอกสารอย่างมีนัยสำคัญ'
    ],
    scene3dMode: 'tfolio'
  },
  {
    slideNumber: 9,
    fileName: '9.jpg',
    imageSrc: 'hongson-assets/deck/slide-09.webp',
    sectionKey: 'tfolio',
    sectionLabel: '4R WORKFLOW',
    category: 'PROCESS INTEGRATION',
    eyebrow: 'SLIDE 09 // 4R WORKFLOW',
    titleTh: 'กระบวนการทำงานดิจิทัล 4R (4R Digital Workflow)',
    titleEn: 'Record · Review · Retrieve · Report',
    quoteTh: 'RECORD บันทึกผลงาน · REVIEW ตรวจสอบและรับรอง · RETRIEVE สืบค้นง่าย · REPORT สรุปสถิติ',
    descriptionTh: 'วงจรการทำงาน 4 ขั้นตอน: Record → Review → Retrieve → Report',
    takeaways: [
      'RECORD: บันทึกข้อมูลและแนบหลักฐานดิจิทัลเพียงครั้งเดียว',
      'REVIEW: รองรับกระบวนการตรวจสอบและอนุมัติจากหัวหน้ากลุ่มสาระและฝ่ายบริหาร',
      'RETRIEVE: ค้นหา เรียกดูข้อมูล และกรองตามตัวชี้วัดได้อย่างรวดเร็ว',
      'REPORT: ประมวลผลและส่งออกรายงานสรุป PDF อัตโนมัติ'
    ],
    scene3dMode: 'workflow4r'
  },
  {
    slideNumber: 10,
    fileName: '10.jpg',
    imageSrc: 'hongson-assets/deck/slide-10.webp',
    sectionKey: 'tfolio',
    sectionLabel: 'STAKEHOLDERS',
    category: 'LIVE PRESENTATION',
    eyebrow: 'SLIDE 10 // GOVERNANCE & STAKEHOLDERS',
    titleTh: 'การนำเสนอระบบจริงต่อคณะกรรมการและผู้บริหาร',
    titleEn: 'Executive Demonstration & Governance Review',
    quoteTh: 'การนำเสนอผลการพัฒนาระบบจริง และการรับฟังข้อเสนอแนะเชิงนโยบายจากผู้บริหาร',
    descriptionTh: 'ภาพบรรยากาศการนำเสนอการใช้งานระบบ HONGSON T-Folio บนเวทีต่อคณะผู้บริหารสถานศึกษา',
    takeaways: [
      'การสาธิตการใช้งานจริง (Live Demo) บนเวทีประชุมอย่างเป็นทางการ',
      'นำเสนอสถาปัตยกรรมระบบและแนวทางขยายผลสู่ทุกกลุ่มสาระการเรียนรู้',
      'สอดรับกับเป้าหมายการพัฒนาคุณภาพการศึกษาของโรงเรียน'
    ],
    scene3dMode: 'architecture'
  },
  {
    slideNumber: 11,
    fileName: '11.jpg',
    imageSrc: 'hongson-assets/deck/slide-11.webp',
    sectionKey: 'tfolio',
    sectionLabel: 'TRAINING',
    category: 'TEACHER WORKSHOP',
    eyebrow: 'SLIDE 11 // CAPACITY BUILDING',
    titleTh: 'การอบรมเชิงปฏิบัติการคณะครูในห้องปฏิบัติการคอมพิวเตอร์',
    titleEn: 'Teacher Digital Literacy Hands-on Training',
    quoteTh: 'เสริมสร้างทักษะดิจิทัลให้แก่คุณครูทุกคน เพื่อการใช้งานระบบได้อย่างมั่นใจและมีประสิทธิภาพ',
    descriptionTh: 'ภาพกิจกรรมการฝึกอบรมเชิงปฏิบัติการให้แก่คณะครู เพื่อสร้างความเข้าใจและฝึกทักษะการใช้งานจริง',
    takeaways: [
      'คุณครูลงมือปฏิบัติตามขั้นตอนจริงบนคอมพิวเตอร์ในห้องปฏิบัติการ',
      'มีทีมวิทยากรและครูแกนนำคอยให้คำแนะนำแบบรายบุคคล',
      'สร้างการมีส่วนร่วมและการยอมรับในการเปลี่ยนผ่านสู่ดิจิทัล'
    ],
    scene3dMode: 'architecture'
  },
  {
    slideNumber: 12,
    fileName: '12.jpg',
    imageSrc: 'hongson-assets/deck/slide-12.webp',
    sectionKey: 'tfolio',
    sectionLabel: 'ARCHITECTURE',
    category: 'ECOSYSTEM BLUEPRINT',
    eyebrow: 'SLIDE 12 // ARCHITECTURE',
    titleTh: 'แผนผังสถาปัตยกรรมการเชื่อมโยงระบบนิเวศ',
    titleEn: 'Integrated Architecture Blueprint',
    quoteTh: 'ผังสถาปัตยกรรมระบบเชื่อมโยงข้อมูลอย่างไร้รอยต่อระหว่างโมดูลต่างๆ',
    descriptionTh: 'ผังแสดงการเชื่อมต่อระหว่างระบบ T-Folio, Digital Plan, แหล่งเรียนรู้ และศูนย์รวมแอป',
    takeaways: [
      'ศูนย์กลางเชื่อมโยงระบบฐานข้อมูลและเครื่องมือดิจิทัล',
      'รองรับการเข้าถึงผ่านอุปกรณ์หลากหลาย (Desktop, Tablet, Mobile)',
      'การออกแบบที่รองรับการขยายตัวในอนาคตอย่างยืดหยุ่น'
    ],
    scene3dMode: 'architecture'
  },
  {
    slideNumber: 13,
    fileName: '13.jpg',
    imageSrc: 'hongson-assets/deck/slide-13.webp',
    sectionKey: 'workshops',
    sectionLabel: 'PILLAR 2: LEARN',
    category: 'DIGITAL PEDAGOGY',
    eyebrow: 'SLIDE 13 // PILLAR 2: LEARN',
    titleTh: 'แกนที่ 2: LEARN — Continuous Learning for All',
    titleEn: 'Continuous Learning for Educators & Students',
    quoteTh: 'เปิดประตูสู่การเรียนรู้ไร้ขีดจำกัด พัฒนาทักษะแห่งศตวรรษที่ 21 ร่วมกัน',
    descriptionTh: 'ส่งเสริมการเรียนรู้ตลอดชีวิตของทั้งครูและผู้เรียน ด้วยเทคโนโลยีและปัญญาประดิษฐ์',
    takeaways: [
      'แหล่งเรียนรู้ดิจิทัลและคลังความรู้สำหรับครูและนักเรียน',
      'พัฒนาทักษะความฉลาดรู้ทางดิจิทัลและ AI Literacy',
      'สนับสนุนการจัดการเรียนรู้เชิงรุก (Active Learning)'
    ],
    scene3dMode: 'learn'
  },
  {
    slideNumber: 14,
    fileName: '14.jpg',
    imageSrc: 'hongson-assets/deck/slide-14.webp',
    sectionKey: 'workshops',
    sectionLabel: 'PILLAR 3: CREATE',
    category: 'INNOVATION & MAKER',
    eyebrow: 'SLIDE 14 // PILLAR 3: CREATE',
    titleTh: 'แกนที่ 3: CREATE — Inspire Innovation & New Possibilities',
    titleEn: 'Inspiring Innovation and New Possibilities',
    quoteTh: 'เปลี่ยนจากผู้ใช้เทคโนโลยี สู่ผู้สร้างสรรค์นวัตกรรมดิจิทัล',
    descriptionTh: 'จุดประกายความคิดสร้างสรรค์ ส่งเสริมการสร้างนวัตกรรมและผลงานจริง',
    takeaways: [
      'ส่งเสริมครูสร้างสื่อนวัตกรรมและแผนการสอนยุคใหม่',
      'สนับสนุนนักเรียนลงมือประดิษฐ์และสร้างสรรค์โครงงาน',
      'สร้างบรรยากาศและสภาพแวดล้อมที่เอื้อต่อความคิดสร้างสรรค์'
    ],
    scene3dMode: 'learn'
  },
  {
    slideNumber: 15,
    fileName: '15.jpg',
    imageSrc: 'hongson-assets/deck/slide-15.webp',
    sectionKey: 'workshops',
    sectionLabel: 'AI PEDAGOGY',
    category: 'WORKSHOP & EVIDENCE',
    eyebrow: 'SLIDE 15 // AI IN ACTION',
    titleTh: 'โปสเตอร์และภาพกิจกรรมอบรม "การใช้ AI เพื่อการจัดการเรียนรู้"',
    titleEn: 'AI Workshop for Teachers (August 2569)',
    quoteTh: 'ยกระดับการจัดการเรียนรู้ด้วย AI: จากแนวคิดสู่การออกแบบแผนการสอนจริงในห้องเรียน',
    descriptionTh: 'การอบรมเชิงปฏิบัติการการประยุกต์ใช้ปัญญาประดิษฐ์ (AI) ในการออกแบบการเรียนการสอน (12 และ 16 ส.ค. 2569)',
    takeaways: [
      'การอบรมเข้มข้นวันที่ 12 และ 16 สิงหาคม 2569',
      'ครอบคลุมการใช้ Prompt Engineering, Generative AI และเครื่องมือช่วยสอน',
      'คณะครูร่วมฝึกปฏิบัติการสร้างสื่อการสอนและแผนการจัดการเรียนรู้จริง'
    ],
    scene3dMode: 'ai'
  },
  {
    slideNumber: 16,
    fileName: '16.jpg',
    imageSrc: 'hongson-assets/deck/slide-16.webp',
    sectionKey: 'makers',
    sectionLabel: 'IMMERSIVE LEARNING',
    category: 'METAVERSE EXHIBITION',
    eyebrow: 'SLIDE 16 // IMMERSIVE LEARNING',
    titleTh: 'กิจกรรมนิทรรศการและการเรียนรู้ผ่านโลกเสมือนจริงของนักเรียน',
    titleEn: 'Student Metaverse Exploration & Exhibition',
    quoteTh: 'เปิดประสบการณ์การเรียนรู้รูปแบบใหม่ ผ่านเทคโนโลยีเสมือนจริงและนิทรรศการแบบโต้ตอบ',
    descriptionTh: 'ภาพบรรยากาศนักเรียนมีส่วนร่วมในกิจกรรมนิทรรศการและการสำรวจโลกเสมือนจริง',
    takeaways: [
      'นักเรียนได้สัมผัสและสำรวจสื่อการเรียนรู้ 3D และโลกเสมือน',
      'เชื่อมโยงความรู้ท้องถิ่นเข้ากับเทคโนโลยีดิจิทัลยุคใหม่',
      'กระตุ้นความกระตือรือร้นและความสนใจในการเรียนรู้'
    ],
    scene3dMode: 'metaverse'
  },
  {
    slideNumber: 17,
    fileName: '17.jpg',
    imageSrc: 'hongson-assets/deck/slide-17.webp',
    sectionKey: 'makers',
    sectionLabel: 'ROBOTICS & MAKER',
    category: 'STUDENT INNOVATION',
    eyebrow: 'SLIDE 17 // MAKER & ROBOTICS',
    titleTh: 'ชุมนุมหุ่นยนต์และนวัตกรผู้เรียน (Student as Maker)',
    titleEn: 'Robotics Club & Computational Thinking',
    quoteTh: 'ลงมือปฏิบัติจริง: สร้างหุ่นยนต์ เขียนโปรแกรม และพัฒนานวัตกรรมด้วยตนเอง',
    descriptionTh: 'ภาพกิจกรรมของนักเรียนในการประดิษฐ์หุ่นยนต์ การเขียนโค้ด และการแก้ปัญหาจริง',
    takeaways: [
      'พัฒนาทักษะการคิดเชิงคำนวณ (Computational Thinking)',
      'การเรียนรู้แบบ Maker-Centered Learning ผ่านโครงงานจริง',
      'เตรียมความพร้อมสู่เวทีการแข่งขันและทักษะแห่งอนาคต'
    ],
    scene3dMode: 'makers'
  },
  {
    slideNumber: 18,
    fileName: '18.jpg',
    imageSrc: 'hongson-assets/deck/slide-18.webp',
    sectionKey: 'makers',
    sectionLabel: 'ONLINE WORKSHOP',
    category: 'ONLINE PEDAGOGY',
    eyebrow: 'SLIDE 18 // DIGITAL PLAN WORKSHOP',
    titleTh: 'บรรยากาศการอบรมออนไลน์ "Digital Plan Online"',
    titleEn: 'Digital Lesson Planning Webinar',
    quoteTh: 'การจัดทำแผนการจัดการเรียนรู้ยุคใหม่ ผ่านระบบออนไลน์ที่สะดวกและยืดหยุ่น',
    descriptionTh: 'ภาพการจัดอบรมออนไลน์เพื่อแนะนำระบบการจัดทำแผนการจัดการเรียนรู้ดิจิทัล',
    takeaways: [
      'รูปแบบการอบรมออนไลน์ที่เปิดโอกาสให้ครูเข้าร่วมได้อย่างทั่วถึง',
      'อธิบายโครงสร้างและการกรอกแผนการจัดการเรียนรู้ดิจิทัล',
      'บูรณาการการวัดและประเมินผลเข้ากับมาตรฐานการเรียนรู้'
    ],
    scene3dMode: 'makers'
  },
  {
    slideNumber: 19,
    fileName: '19.jpg',
    imageSrc: 'hongson-assets/deck/slide-19.webp',
    sectionKey: 'makers',
    sectionLabel: 'SHOWCASE',
    category: 'EXHIBITION BOOTH',
    eyebrow: 'SLIDE 19 // SHOWCASE',
    titleTh: 'บูธจัดแสดงนิทรรศการและนวัตกรรมการศึกษาของโรงเรียน',
    titleEn: 'School Educational Innovation Showcase Booth',
    quoteTh: 'เผยแพร่นวัตกรรมและองค์ความรู้ สู่สาธารณชนและเครือข่ายสถานศึกษา',
    descriptionTh: 'ภาพบูธจัดแสดงผลงานนวัตกรรมของโรงเรียนห้องสอนศึกษา ในงานมหกรรมการศึกษา',
    takeaways: [
      'นำเสนอผลสัมฤทธิ์ของการพัฒนาระบบดิจิทัลของโรงเรียน',
      'สร้างการแลกเปลี่ยนเรียนรู้กับสถานศึกษาและหน่วยงานภายนอก',
      'สะท้อนความก้าวหน้าและการขับเคลื่อนนวัตกรรมอย่างเป็นรูปธรรม'
    ],
    scene3dMode: 'makers'
  },
  {
    slideNumber: 20,
    fileName: '20.jpg',
    imageSrc: 'hongson-assets/deck/slide-20.webp',
    sectionKey: 'makers',
    sectionLabel: 'DIGITAL PLAN',
    category: 'WORKSHOP ARCHIVE',
    eyebrow: 'SLIDE 20 // CURRICULUM DIGITIZATION',
    titleTh: 'โปสเตอร์และภาพกิจกรรม "การจัดทำแผนจัดการเรียนรู้ Digital Plan"',
    titleEn: 'Digital Plan Workshop (25 June 2569)',
    quoteTh: 'ก้าวสู่การจัดทำแผนการสอนดิจิทัลเต็มรูปแบบ: วันที่ 25 มิถุนายน 2569',
    descriptionTh: 'โปสเตอร์ประชาสัมพันธ์และภาพกิจกรรมการอบรมเชิงปฏิบัติการ Digital Plan เมื่อวันที่ 25 มิถุนายน 2569',
    takeaways: [
      'กิจกรรมอบรมเชิงปฏิบัติการประจำวันที่ 25 มิถุนายน 2569',
      'การอบรมและฝึกปฏิบัติจริงโดยวิทยากรผู้เชี่ยวชาญ',
      'สร้างความพร้อมในการเปลี่ยนผ่านสู่การจัดการเรียนรู้ดิจิทัล'
    ],
    scene3dMode: 'makers'
  },
  {
    slideNumber: 21,
    fileName: '21.jpg',
    imageSrc: 'hongson-assets/deck/slide-21.webp',
    sectionKey: 'cycle',
    sectionLabel: 'INNOVATION CYCLE',
    category: 'INNOVATION METHODOLOGY',
    eyebrow: 'SLIDE 21 // CONTINUOUS EVOLUTION',
    titleTh: 'วงจรการพัฒนานวัตกรรม (Innovation Cycle)',
    titleEn: 'Problem · Learn · Create · Share · Improve',
    quoteTh: 'วงจรนวัตกรรมที่ไม่หยุดนิ่ง: เริ่มจากปัญหาจริง สู่การเรียนรู้ สร้างสรรค์ แบ่งปัน และพัฒนาต่อเนื่อง',
    descriptionTh: 'โมเดลวงจรนวัตกรรม: Problem → Learn → Create → Share → Improve',
    takeaways: [
      'Problem: ตั้งต้นจากปัญหาและบริบทจริงในห้องเรียน',
      'Learn & Create: ศึกษาองค์ความรู้ใหม่และพัฒนาเป็นนวัตกรรม',
      'Share & Improve: แลกเปลี่ยน สะท้อนผล และปรับปรุงอย่างต่อเนื่อง'
    ],
    scene3dMode: 'cycle'
  },
  {
    slideNumber: 22,
    fileName: '22.jpg',
    imageSrc: 'hongson-assets/deck/slide-22.webp',
    sectionKey: 'cycle',
    sectionLabel: 'APP CENTER',
    category: 'PORTAL ARCHITECTURE',
    eyebrow: 'SLIDE 22 // APP CENTER & ROLES',
    titleTh: 'ศูนย์รวมแอปพลิเคชันและการใช้งานตามบทบาท (App Center)',
    titleEn: 'Role-Based Access for Teachers & Students',
    quoteTh: 'หนึ่งประตูเข้าสู่ทุกบริการ: จัดสรรเครื่องมือตรงตามบทบาทของครูและนักเรียน',
    descriptionTh: 'โครงสร้างพอร์ทัลที่แบ่งการเข้าถึงตามบทบาทของผู้ใช้งาน: สำหรับครู และ สำหรับนักเรียน',
    takeaways: [
      'หน้าทางเข้าสำหรับครู (Teacher Portal): T-Folio, Digital Plan, ระบบงานโรงเรียน',
      'หน้าทางเข้าสำหรับนักเรียน (Student Portal): สื่อการเรียนรู้, ชุมนุม, ผลงาน',
      'เข้าถึงได้ง่ายและปลอดภัยผ่านระบบ Single Point of Access'
    ],
    scene3dMode: 'appcenter'
  },
  {
    slideNumber: 23,
    fileName: '23.jpg',
    imageSrc: 'hongson-assets/deck/slide-23.webp',
    sectionKey: 'cycle',
    sectionLabel: 'TEACHER ROLE',
    category: 'EMPOWERED EDUCATORS',
    eyebrow: 'SLIDE 23 // EMPOWERED EDUCATORS',
    titleTh: 'ครูผู้สร้างสรรค์ (Teacher as Creator)',
    titleEn: 'Teachers as Innovators and Content Creators',
    quoteTh: 'ครูคือหัวใจสำคัญของการเปลี่ยนแปลง: จากผู้สอน สู่ผู้ออกแบบนวัตกรรมการเรียนรู้',
    descriptionTh: 'การส่งเสริมบทบาทของครูจากการเป็นผู้ถ่ายทอดความรู้ สู่การเป็นผู้ออกแบบและสร้างสรรค์นวัตกรรม',
    takeaways: [
      'สร้างสรรค์สื่อการสอนและเครื่องมือดิจิทัลที่ตอบโจทย์นักเรียน',
      'บูรณาการเครื่องมือ AI และเทคโนโลยีสมัยใหม่เข้ากับแผนการสอน',
      'มีความภาคภูมิใจในผลงานและการพัฒนาวิชาชีพอย่างต่อเนื่อง'
    ],
    scene3dMode: 'creator'
  },
  {
    slideNumber: 24,
    fileName: '24.jpg',
    imageSrc: 'hongson-assets/deck/slide-24.webp',
    sectionKey: 'cycle',
    sectionLabel: 'STUDENT ROLE',
    category: 'STUDENT EMPOWERMENT',
    eyebrow: 'SLIDE 24 // ACTIVE LEARNERS',
    titleTh: 'นักเรียนผู้ลงมือสร้าง (Student as Maker)',
    titleEn: 'Students as Active Makers & Problem Solvers',
    quoteTh: 'เปลี่ยนการเรียนรู้แบบรับฟัง สู่การเป็นผู้สร้างสรรค์ผลงานจริงที่มีคุณค่า',
    descriptionTh: 'การเปิดพื้นที่และสนับสนุนให้ผู้เรียนได้ลงมือทำจริง สร้างผลงาน และแก้ปัญหาด้วยตนเอง',
    takeaways: [
      'ฝึกฝนทักษะการคิดวิเคราะห์ การออกแบบ และการแก้ปัญหา',
      'เชื่อมโยงความรู้สู่การสร้างสรรค์ชิ้นงาน โครงงาน หรือนวัตกรรม',
      'เสริมสร้างความมั่นใจและการทำงานเป็นทีม'
    ],
    scene3dMode: 'makers'
  },
  {
    slideNumber: 25,
    fileName: '25.jpg',
    imageSrc: 'hongson-assets/deck/slide-25.webp',
    sectionKey: 'vision',
    sectionLabel: 'ORGANIZATION',
    category: 'STRATEGIC VALUE',
    eyebrow: 'SLIDE 25 // STRATEGIC VALUE',
    titleTh: 'มิติผลลัพธ์และคุณค่าต่อการพัฒนาองค์กร (Organizational Impact)',
    titleEn: 'Institutional Impact & Cultural Transformation',
    quoteTh: 'ขับเคลื่อนโรงเรียนสู่อนาคต: เพิ่มประสิทธิภาพ ลดความสูญเปล่า ยกระดับคุณภาพการเรียนรู้',
    descriptionTh: 'ผลลัพธ์และทิศทางการยกระดับสถานศึกษาในทุกมิติ: ประสิทธิภาพ คุณภาพ และความยั่งยืน',
    takeaways: [
      'การบริหารจัดการที่รวดเร็ว ชัดเจน และโปร่งใส',
      'การตัดสินใจบนพื้นฐานของข้อมูลเชิงประจักษ์ (Data-Driven Decision)',
      'การสร้างวัฒนธรรมองค์กรแห่งการเรียนรู้และนวัตกรรม'
    ],
    scene3dMode: 'vision'
  },
  {
    slideNumber: 26,
    fileName: '26.jpg',
    imageSrc: 'hongson-assets/deck/slide-26.webp',
    sectionKey: 'vision',
    sectionLabel: 'CLOSING MANIFESTO',
    category: 'ECOSYSTEM CONVERGENCE',
    eyebrow: 'SLIDE 26 // CLOSING MANIFESTO',
    titleTh: 'One Platform to Work, Learn, Create, Share',
    titleEn: 'Unified Learning & Innovation Ecosystem',
    quoteTh: 'One Platform to Work. Learn. Create. Share. จากศูนย์รวมแอป สู่ระบบนิเวศการเรียนรู้และนวัตกรรมของโรงเรียน',
    descriptionTh: 'บทสรุปวิสัยทัศน์: จากศูนย์รวมแอป สู่ระบบนิเวศการเรียนรู้และนวัตกรรมดิจิทัลที่แท้จริง',
    takeaways: [
      'การผสานรวมอย่างสมบูรณ์ของทั้ง 4 แกนหลัก',
      'เชื่อมโยงทุกคนในประชาคมโรงเรียนเข้าด้วยกัน',
      'รากฐานที่แข็งแกร่งสำหรับการศึกษาแห่งอนาคต'
    ],
    scene3dMode: 'vision'
  },
  {
    slideNumber: 27,
    fileName: '27.jpg',
    imageSrc: 'hongson-assets/deck/slide-27.webp',
    sectionKey: 'vision',
    sectionLabel: 'OFFICIAL DOMAIN',
    category: 'NEW DOMAIN LAUNCH',
    eyebrow: 'SLIDE 27 // OFFICIAL DOMAIN',
    titleTh: 'แนะนำ! โดเมนใหม่ของ HONGSON THE ONE: hongson.one',
    titleEn: 'Official Launch: hongson.one (ห้องสอนดอทวัน)',
    quoteTh: 'จาก “ห้องสอนเดอะวัน” สู่ “ห้องสอนดอทวัน” — HONGSON THE ONE = hongson.one ชื่อคล้องจอง จำง่าย พิมพ์ตรงบน URL ก็เข้าได้เลย',
    descriptionTh: 'แนะนำโดเมนเนมใหม่ hongson.one เพื่อการเข้าใช้งานที่ง่ายและสะดวกรวดเร็วยิ่งขึ้น เข้าถึงศูนย์รวมแอปพลิเคชันเพื่อการศึกษาของโรงเรียนห้องสอนศึกษา ในพระอุปถัมภ์ฯ ได้โดยตรง ไม่ต้องผ่านหน้าเว็บโรงเรียน',
    takeaways: [
      'เข้าถึงได้รวดเร็ว: พิมพ์ตรงบน URL ที่ hongson.one หรือ www.hongson.one ก็ใช้งานได้ทันที',
      'จำง่ายและคล้องจอง: จาก "ห้องสอนเดอะวัน" สู่ "ห้องสอนดอทวัน" จำง่ายกว่าเดิม',
      'รวมทุกแอปไว้ในที่เดียว: ทั้ง T-Folio, DigitalPlan, School PAY, กิจกรรมนักเรียน ฯลฯ',
      'ไม่ต้องผ่านหน้าเว็บโรงเรียน: ลดขั้นตอนการเข้าสู่ระบบ ใช้งานได้ทันทีจากทุกอุปกรณ์',
      'ใช้งานได้ทั้งครูและนักเรียน: จัดสรรเครื่องมือและทางเข้าตรงตามบทบาทของผู้ใช้งาน'
    ],
    scene3dMode: 'vision'
  }
];

export const DECK_SECTIONS = [
  { key: 'genesis', label: '01 · GENESIS', slideRange: '01–04', startSlide: 1 },
  { key: 'pillars', label: '02 · 4 PILLARS', slideRange: '05–06', startSlide: 5 },
  { key: 'tfolio', label: '03 · T-FOLIO & 4R', slideRange: '07–12', startSlide: 7 },
  { key: 'workshops', label: '04 · LEARN & AI', slideRange: '13–15', startSlide: 13 },
  { key: 'makers', label: '05 · CREATE & MAKERS', slideRange: '16–20', startSlide: 16 },
  { key: 'cycle', label: '06 · INNOVATION CYCLE', slideRange: '21–24', startSlide: 21 },
  { key: 'vision', label: '07 · ONE PLATFORM', slideRange: '25–27', startSlide: 25 },
];

