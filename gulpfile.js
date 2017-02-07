var gulp = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'),// Подключаем Browser Sync
    cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    del         = require('del'), // Подключаем библиотеку для удаления файлов и папок
    rename      = require('gulp-rename'), // Подключаем библиотеку для переименования файлов;
    imagemin    = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant    = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache       = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов


gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('src/scss/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'], { cascade: true })) // Создаем префиксы
        .pipe(cssnano()) // Сжимаем
        .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('cssnano', ['sass'], function() {
    return gulp.src('dist/css/*.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(gulp.dest('dist/css')); // Выгружаем в папку app/css
});

gulp.task('img', function() {
    return gulp.src('dist/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('watch', ['browser-sync','cssnano'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('dist/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('dist/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
    // Наблюдение за другими типами файлов
});


gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});



gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);