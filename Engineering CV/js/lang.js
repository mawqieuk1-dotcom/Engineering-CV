const translations = {
    ar: {
        page_title: 'م. خالد الشمري | مهندس مدني',
        brand_name: 'م. خالد الشمري',
        nav_home: 'الرئيسية', nav_projects: 'مشاريع', nav_exp: 'خبرات', nav_skills: 'مهارات', nav_contact: 'تواصل',
        hero_badge: 'مهندس مدني', hero_hello: 'م.', hero_name: 'خالد الشمري',
        hero_desc: 'متخصص في التصميم الإنشائي وإدارة المشاريع. أعمل على بناء مستقبل الكويت العمراني.',
        hero_btn1: 'شاهد مشاريعي', hero_btn2: 'تواصل معي',
        stat_years: 'عام خبرة', stat_projects: 'مشروع', stat_awards: 'جائزة',
        badge_license: 'م. كويتي معتمد',
        projects_title: 'مشاريعي الهندسية', projects_sub: 'أبرز المشاريع التي شاركت فيها',
        proj1_title: 'برج الكويت التجاري', proj1_desc: 'إشراف إنشائي – 30 طابق',
        proj2_title: 'جسر الشيخ جابر', proj2_desc: 'تصميم إنشائي – 36 كم',
        proj3_title: 'طريق الدائري السابع', proj3_desc: 'إدارة مشروع – 15 كم',
        exp_title: 'الخبرات العملية', exp_sub: 'مسيرتي المهنية', exp_now: 'الآن',
        exp1_title: 'مدير مشروع أول', exp1_company: 'شركة الكويت للمقاولات',
        exp2_title: 'مهندس إنشائي', exp2_company: 'مكتب الاستشارات الهندسية',
        exp3_title: 'مهندس موقع', exp3_company: 'شركة البناء الحديث',
        skills_title: 'المهارات الهندسية', skills_sub: 'البرامج والتقنيات التي أتقنها',
        contact_title: 'تواصل معي', contact_sub: 'للاستشارات الهندسية والتعاون',
        form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_msg: 'الرسالة', form_submit: 'إرسال',
        copyright: '© 2025 م. خالد الشمري. قالب من <strong>موقعك</strong> – Mawqeak'
    },
    en: {
        page_title: 'Eng. Khaled Al-Shammari | Civil Engineer',
        brand_name: 'Eng. Khaled Al-Shammari',
        nav_home: 'Home', nav_projects: 'Projects', nav_exp: 'Experience', nav_skills: 'Skills', nav_contact: 'Contact',
        hero_badge: 'Civil Engineer', hero_hello: 'Eng.', hero_name: 'Khaled Al-Shammari',
        hero_desc: 'Specialized in structural design and project management. Building Kuwait\'s architectural future.',
        hero_btn1: 'View My Projects', hero_btn2: 'Contact Me',
        stat_years: 'Years Exp.', stat_projects: 'Projects', stat_awards: 'Awards',
        badge_license: 'Certified Kuwaiti Eng.',
        projects_title: 'My Engineering Projects', projects_sub: 'Major projects I have participated in',
        proj1_title: 'Kuwait Commercial Tower', proj1_desc: 'Structural Supervision – 30 Floors',
        proj2_title: 'Sheikh Jaber Bridge', proj2_desc: 'Structural Design – 36 km',
        proj3_title: '7th Ring Road', proj3_desc: 'Project Management – 15 km',
        exp_title: 'Work Experience', exp_sub: 'My career path', exp_now: 'Present',
        exp1_title: 'Senior Project Manager', exp1_company: 'Kuwait Contracting Company',
        exp2_title: 'Structural Engineer', exp2_company: 'Engineering Consultancy Office',
        exp3_title: 'Site Engineer', exp3_company: 'Modern Construction Company',
        skills_title: 'Engineering Skills', skills_sub: 'Software & technologies I master',
        contact_title: 'Contact Me', contact_sub: 'For engineering consultations',
        form_name: 'Name', form_email: 'Email', form_msg: 'Message', form_submit: 'Send',
        copyright: '© 2025 Eng. Khaled Al-Shammari. Template by <strong>Mawqeak</strong>'
    }
};
let currentLang = 'ar';
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const btn = document.getElementById('langToggle');
    if (btn) btn.innerHTML = lang === 'ar' ? '<i class="fas fa-globe"></i> English' : '<i class="fas fa-globe"></i> العربية';
    localStorage.setItem('lang', lang);
}
function switchLanguage() { setLanguage(currentLang === 'ar' ? 'en' : 'ar'); }
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('lang') || 'ar');
    document.getElementById('langToggle')?.addEventListener('click', switchLanguage);
});