# Dr. Badiyar — сайт стоматолога

Лендинг стоматолога Искендерова Бадияра (г. Ош): услуги, приёмы, запись на консультацию.

**Стек:** статический сайт без сборщика — semantic HTML, CSS, vanilla JS; клиентская i18n через `data-i18n`-атрибуты.

> **EN:** Landing page for a dental practice in Osh, Kyrgyzstan. Dependency-free static site (HTML/CSS/vanilla JS) with attribute-driven i18n. Built with Claude Code (5/6 commits AI-co-authored), reviewed and polished by hand.

## Запуск

Сборка не нужна — открыть `index.html` или отдать папку любым статическим сервером:

```bash
python3 -m http.server 8000
```

## Структура

```
index.html   # разметка с data-i18n атрибутами
styles.css   # стили
script.js    # i18n, навигация, формы
img/         # фотографии и иконки
```
