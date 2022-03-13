# GULP

## :fire: Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используются препроцессоры [Pug](https://pugjs.org/) и [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей


## :trumpet: Установка
* npm i
* yarn install

## :keyboard: Команды
* gulp
* gulp build
* gulp build-watch

## :open_file_folder: Файловая структура

```
gulp
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   │   ├── components
│   │   ├── modules
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   │   ├── base
│   │   ├── helpers
│   │   ├── vendor
│   ├── views
│   │   ├── helpers
│   │   ├── pages
│   │   ├── templates
├── .stylelintrc.json
├── gulpfile.js
├── package.json
├── webpack.config.js
└── .gitignore
```

* Корень папки:
    * ```.gitignore``` – запрет на отслеживание файлов git'ом
    * ```.stylelintrc.json``` — настройки stylelint
    * ```gulpfile.js``` — настройки gulp
    * ```webpack.config.js``` — настройки webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * БЭМ-блоки и компоненты: ```src/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * страницы сайта: ```src/views/pages```
    * SCSS-файлы: ```src/styles```
    * служебные Pug-файлы: ```src/views```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки
* Папка ```gulp-tasks``` - папка с Gulp-тасками



## :bulb: Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один Pug-файл, один SCSS-файл и один JS-файл
    * Pug-файл блока импортируется в файл ```src/views/index.pug```
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```

Пример структуры папки с БЭМ-блоком:
```
blocks
├── modules
│   ├── header
│   │   ├── header.pug
│   │   ├── header.js
│   │   ├── header.scss
```

### Страницы проекта
* страницы проекта находятся в папке ```src/views/pages```
    * каждая страница (в том числе главная) наследует шаблон ```src/views/layouts/default.pug```
    * главная страница: ```src/views/index.pug```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```

### Изображения
* изображения находятся в папке ```src/img```