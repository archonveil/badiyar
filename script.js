const translations = {
    ru: {
        page_title: 'Badiyar — Стоматология',
        nav_main: 'Главная',
        nav_services: 'Услуги',
        nav_contact: 'Контакты',
        cta_book: 'ЗАПИСАТЬСЯ',
        hero_line1: 'Здоровая улыбка —',
        hero_line2: '<span class="hero__accent">наша</span> забота.',
        hero_subtitle: 'Современная стоматология с заботой о каждом пациенте. Безболезненное лечение, опытные специалисты, новейшее оборудование.',
        hero_badge: 'лет опыта',
        services_label: '— НАШИ УСЛУГИ',
        services_title: 'Всё для вашей улыбки',
        service1_title: 'Профилактика',
        service1_text: 'Профессиональная чистка, фторирование эмали и регулярные осмотры для здоровья зубов.',
        service2_title: 'Лечение',
        service2_text: 'Безболезненное лечение кариеса, пульпита и других заболеваний под микроскопом.',
        service3_title: 'Эстетика',
        service3_text: 'Виниры, отбеливание и реставрация — создаём идеальную улыбку вашей мечты.',
        service4_title: 'Имплантация',
        service4_text: 'Восстановление зубов с помощью современных имплантов премиум-класса.',
        service5_title: 'Ортодонтия',
        service5_text: 'Исправление прикуса брекет-системами и прозрачными элайнерами любой сложности.',
        service6_title: 'Детская стоматология',
        service6_text: 'Бережное отношение к маленьким пациентам в комфортной и дружелюбной атмосфере.',
        contact_label: '— КОНТАКТЫ',
        contact_title: 'Приходите в гости',
        info_address_title: 'Адрес',
        info_address: 'г. Бишкек, ул. Чуй, 154<br>Кыргызстан',
        info_phone_title: 'Телефон',
        info_hours_title: 'Часы работы',
        info_hours: 'Пн–Сб: 09:00 — 19:00<br>Вс: выходной',
        footer_copy: '© 2026. Все права защищены.'
    },
    kg: {
        page_title: 'Badiyar — Тиш дарыгери',
        nav_main: 'Башкы бет',
        nav_services: 'Кызматтар',
        nav_contact: 'Байланыш',
        cta_book: 'ЖАЗЫЛУУ',
        hero_line1: 'Сак жылмаюу —',
        hero_line2: '<span class="hero__accent">биздин</span> камкордук.',
        hero_subtitle: 'Ар бир бейтапка камкордук менен мамиле кылган заманбап стоматология. Оорутпай дарылоо, тажрыйбалуу адистер, жаңы жабдуулар.',
        hero_badge: 'жылдык тажрыйба',
        services_label: '— БИЗДИН КЫЗМАТТАР',
        services_title: 'Жылмаюуңуз үчүн баары',
        service1_title: 'Алдын алуу',
        service1_text: 'Кесипкөй тазалоо, эмалды фтордоо жана тиштердин ден соолугу үчүн үзгүлтүксүз текшерүү.',
        service2_title: 'Дарылоо',
        service2_text: 'Кариести, пульпитти жана башка ооруларды микроскоп астында оорутпай дарылайбыз.',
        service3_title: 'Эстетика',
        service3_text: 'Виниры, агартуу жана реставрация — кыялыңыздагы кемчиликсиз жылмаюуну жаратабыз.',
        service4_title: 'Имплантация',
        service4_text: 'Премиум-класстагы заманбап импланттар менен тиштерди калыбына келтирүү.',
        service5_title: 'Ортодонтия',
        service5_text: 'Брекет системалары жана тунук элайнерлер менен тиш тизмегин оңдоо.',
        service6_title: 'Балдар стоматологиясы',
        service6_text: 'Жагымдуу жана достук чөйрөдө кичинекей бейтаптарга этияттык менен мамиле.',
        contact_label: '— БАЙЛАНЫШ',
        contact_title: 'Бизге келиңиз',
        info_address_title: 'Дарек',
        info_address: 'Бишкек ш., Чүй көч., 154<br>Кыргызстан',
        info_phone_title: 'Телефон',
        info_hours_title: 'Иш убакыты',
        info_hours: 'Дш–Иш: 09:00 — 19:00<br>Жк: эс алуу күнү',
        footer_copy: '© 2026. Бардык укуктар корголгон.'
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
