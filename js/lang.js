const translations = {
    ar: {
        page_title: 'د. فهد العنزي | استشاري قلب',
        brand_name: 'د. فهد العنزي',
        nav_home: 'الرئيسية', nav_about: 'نبذة', nav_exp: 'الخبرات', nav_research: 'أبحاث', nav_skills: 'مهارات', nav_contact: 'تواصل',
        hero_badge: 'استشاري أمراض قلب', hero_hello: 'د.', hero_name: 'فهد العنزي',
        hero_desc: 'أكثر من 18 عاماً في تشخيص وعلاج أمراض القلب. حاصل على البورد الأمريكي والزمالة الكندية.',
        hero_btn1: 'تواصل معي', hero_btn2: 'اعرف المزيد',
        stat_years: 'عام خبرة', stat_surgeries: 'عملية', stat_papers: 'بحث منشور',
        id_specialty: 'استشاري قلب', id_license: 'ترخيص: KWT-12345',
        about_title: 'نبذة عني', about_sub: 'تعرف على مسيرتي الطبية',
        about_desc1: 'استشاري أمراض القلب والأوعية الدموية. تخرجت من جامعة الكويت ثم أكملت تخصصي في جامعة هارفارد.',
        about_desc2: 'أجريت أكثر من 5000 عملية قسطرة قلبية ناجحة. عضو في جمعية القلب الأمريكية.',
        edu_harvard: 'زميل – جامعة هارفارد', cert_board: 'البورد الأمريكي', award_excellence: 'جائزة التميز الطبي 2023',
        exp_title: 'الخبرات السريرية', exp_sub: 'مسيرتي المهنية',
        exp_now: 'الآن',
        exp1_title: 'استشاري قلب', exp1_place: 'مستشفى الحياة الحكومي – الكويت',
        exp2_title: 'أخصائي قلب', exp2_place: 'مستشفى الأميري – الكويت',
        exp3_title: 'طبيب مقيم', exp3_place: 'مستشفى مبارك الكبير – الكويت',
        research_title: 'الأبحاث المنشورة', research_sub: 'أحدث أبحاثي في مجال القلب',
        paper1_title: 'تأثير القسطرة المبكرة', paper1_journal: 'مجلة القلب الأمريكية – 2024',
        paper2_title: 'العلاج الدوائي للجلطات', paper2_journal: 'المجلة الأوروبية للقلب – 2023',
        paper3_title: 'تقنيات تخطيط القلب', paper3_journal: 'مجلة الكويت الطبية – 2022',
        skills_title: 'المهارات الإجرائية', skills_sub: 'الإجراءات الطبية التي أتقنها',
        skill1: 'قسطرة قلبية', skill2: 'تخطيط صدى', skill3: 'جراحة مفتوحة', skill4: 'رعاية حرجة',
        contact_title: 'تواصل معي', contact_sub: 'للاستشارات الطبية والتعاون',
        form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_msg: 'الرسالة', form_submit: 'إرسال',
        copyright: '© 2025 د. فهد العنزي. قالب من <strong>موقعك</strong> – Mawqeak'
    },
    en: {
        page_title: 'Dr. Fahad Al-Anzi | Cardiologist',
        brand_name: 'Dr. Fahad Al-Anzi',
        nav_home: 'Home', nav_about: 'About', nav_exp: 'Experience', nav_research: 'Research', nav_skills: 'Skills', nav_contact: 'Contact',
        hero_badge: 'Cardiology Consultant', hero_hello: 'Dr.', hero_name: 'Fahad Al-Anzi',
        hero_desc: 'Over 18 years in diagnosing and treating heart diseases. American Board Certified and Canadian Fellowship.',
        hero_btn1: 'Contact Me', hero_btn2: 'Learn More',
        stat_years: 'Years Exp.', stat_surgeries: 'Surgeries', stat_papers: 'Published Papers',
        id_specialty: 'Cardiologist', id_license: 'License: KWT-12345',
        about_title: 'About Me', about_sub: 'Learn about my medical journey',
        about_desc1: 'Cardiology and vascular consultant. Graduated from Kuwait University, then specialized at Harvard University.',
        about_desc2: 'Performed over 5000 successful catheterizations. Member of the American Heart Association.',
        edu_harvard: 'Fellow – Harvard University', cert_board: 'American Board', award_excellence: 'Medical Excellence Award 2023',
        exp_title: 'Clinical Experience', exp_sub: 'My career path',
        exp_now: 'Present',
        exp1_title: 'Cardiology Consultant', exp1_place: 'Al-Hayat Government Hospital – Kuwait',
        exp2_title: 'Cardiology Specialist', exp2_place: 'Al-Amiri Hospital – Kuwait',
        exp3_title: 'Resident Doctor', exp3_place: 'Mubarak Al-Kabeer Hospital – Kuwait',
        research_title: 'Published Research', research_sub: 'Latest publications in cardiology',
        paper1_title: 'Early Catheterization Impact', paper1_journal: 'American Heart Journal – 2024',
        paper2_title: 'Thrombolytic Therapy', paper2_journal: 'European Heart Journal – 2023',
        paper3_title: 'ECG Techniques', paper3_journal: 'Kuwait Medical Journal – 2022',
        skills_title: 'Procedural Skills', skills_sub: 'Medical procedures I master',
        skill1: 'Catheterization', skill2: 'Echocardiography', skill3: 'Open Surgery', skill4: 'Critical Care',
        contact_title: 'Contact Me', contact_sub: 'For medical consultations and collaboration',
        form_name: 'Name', form_email: 'Email', form_msg: 'Message', form_submit: 'Send',
        copyright: '© 2025 Dr. Fahad Al-Anzi. Template by <strong>Mawqeak</strong>'
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