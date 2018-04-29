let mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
    .sass('src/app.scss', 'dist')
    .extract([
        'aws-amplify',
        'moment',
        'sweetalert2',
        'vue',
        'vue-router',
        'vuex',
    ])
    .copy('src/assets/images', 'dist/images')
    .setPublicPath('dist');
