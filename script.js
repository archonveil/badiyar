const translations = {
    ru: {
        page_title: 'Dr. Искендеров Бадияр — Стоматолог в Оше',
        nav_main: 'Главная',
        nav_services: 'Услуги',
        nav_contact: 'Контакты',
        cta_book: 'ЗАПИСАТЬСЯ',
        hero_kicker: 'Искендеров Бадияр • Стоматолог-терапевт • ортопед',
        hero_line1: 'Ваша улыбка —',
        hero_line2: '<span class="hero__accent">моя</span> забота.',
        hero_subtitle: 'Уже более 6 лет я помогаю пациентам обрести здоровую и красивую улыбку. Индивидуальный подход, современные технологии, безболезненное лечение.',
        hero_badge: 'лет опыта',
        services_label: '— МОИ УСЛУГИ',
        services_title: 'Всё для вашей улыбки',
        service1_title: 'Профилактика',
        service1_text: 'Провожу профессиональную чистку, фторирование эмали и регулярные осмотры для здоровья зубов.',
        service2_title: 'Лечение',
        service2_text: 'Лечу кариес, пульпит и другие заболевания бережно и под микроскопом.',
        service3_title: 'Эстетика',
        service3_text: 'Виниры, отбеливание и реставрация — создаю идеальную улыбку вашей мечты.',
        service5_title: 'Ортодонтия',
        service5_text: 'Исправляю прикус брекет-системами и прозрачными элайнерами любой сложности.',
        service6_title: 'Детская стоматология',
        service6_text: 'Нахожу подход к маленьким пациентам в комфортной и дружелюбной атмосфере.',
        contact_label: '— КОНТАКТЫ',
        contact_title: 'Приходите в гости',
        info_address_title: 'Адрес',
        info_address: 'Кыргызстан, г. Ош,<br>ул. Алымбек Датка, 351',
        info_phone_title: 'Телефон',
        info_hours_title: 'Часы приёма',
        info_hours: 'Пн–Сб: 09:00 — 19:00<br>Вс: выходной',
        footer_copy: '© 2026. Dr. Искендеров Бадияр. Все права защищены.'
    },
    kg: {
        page_title: 'Dr. Искендеров Бадияр — Оштогу тиш дарыгери',
        nav_main: 'Башкы бет',
        nav_services: 'Кызматтар',
        nav_contact: 'Байланыш',
        cta_book: 'ЖАЗЫЛУУ',
        hero_kicker: 'Искендеров Бадияр • Стоматолог-терапевт • ортопед',
        hero_line1: 'Сиздин жылмаюуңуз —',
        hero_line2: '<span class="hero__accent">менин</span> камкордугум.',
        hero_subtitle: '6 жылдан ашуун убакыттан бери бейтаптарга дени сак, сулуу жылмаюуну тартуулап келем. Жеке мамиле, заманбап технологиялар, оорутпай дарылоо.',
        hero_badge: 'жылдык тажрыйба',
        services_label: '— МЕНИН КЫЗМАТТАРЫМ',
        services_title: 'Жылмаюуңуз үчүн баары',
        service1_title: 'Алдын алуу',
        service1_text: 'Кесипкөй тазалоо, эмалды фтордоо жана тиштердин ден соолугу үчүн үзгүлтүксүз текшерүү жүргүзөм.',
        service2_title: 'Дарылоо',
        service2_text: 'Кариести, пульпитти жана башка ооруларды микроскоп астында этияттык менен дарылайм.',
        service3_title: 'Эстетика',
        service3_text: 'Виниры, агартуу жана реставрация — кыялыңыздагы кемчиликсиз жылмаюуну жаратам.',
        service5_title: 'Ортодонтия',
        service5_text: 'Брекет системалары жана тунук элайнерлер менен тиш тизмегин оңдойм.',
        service6_title: 'Балдар стоматологиясы',
        service6_text: 'Жагымдуу жана достук чөйрөдө кичинекей бейтаптарга жол табам.',
        contact_label: '— БАЙЛАНЫШ',
        contact_title: 'Бизге келиңиз',
        info_address_title: 'Дарек',
        info_address: 'Ош ш., Алымбек Датка көч., 351<br>Кыргызстан',
        info_phone_title: 'Телефон',
        info_hours_title: 'Кабыл алуу убактысы',
        info_hours: 'Дш–Иш: 09:00 — 19:00<br>Жк: эс алуу күнү',
        footer_copy: '© 2026. Dr. Искендеров Бадияр. Бардык укуктар корголгон.'
    }
};

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'kg' ? 'ky' : 'ru';
    document.title = dict.page_title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
        btn.classList.toggle('lang-switch__btn--active', btn.dataset.lang === lang);
    });

    try { localStorage.setItem('badiyar_lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const savedLang = (() => { try { return localStorage.getItem('badiyar_lang'); } catch (e) { return null; } })();
applyLanguage(savedLang === 'kg' ? 'kg' : 'ru');

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('nav__link--active'));
        link.classList.add('nav__link--active');
        burger?.classList.remove('open');
        nav?.classList.remove('open');
    });
});

const parallaxTiles = document.querySelectorAll('.hero__tiles .tile');
const heroVisual = document.querySelector('.hero__visual');
if (heroVisual && parallaxTiles.length && window.matchMedia('(hover: hover)').matches) {
    heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        parallaxTiles.forEach((tile, i) => {
            const depth = (i % 3 + 1) * 6;
            tile.style.setProperty('translate', `${x * depth}px ${y * depth}px`);
        });
    });
    heroVisual.addEventListener('mouseleave', () => {
        parallaxTiles.forEach(tile => tile.style.removeProperty('translate'));
    });
}

const sections = ['main', 'services', 'contact'].map(id => document.getElementById(id));
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll('.nav__link').forEach(link => {
                link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => s && observer.observe(s));
