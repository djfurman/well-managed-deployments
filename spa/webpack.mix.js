let mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
    .sass('src/app.scss', 'dist')
    .extract([
        'vue',
        'vue-router',
        'moment'
    ])
    .setPublicPath('dist');
