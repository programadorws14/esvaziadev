const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'resources/css/style.css',
], 'public/css/style.css');

mix.styles([
    'resources/css/app-style.css',
], 'public/css/app-style.css');
