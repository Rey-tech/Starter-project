let mix = require('laravel-mix');

mix.sass('src/sass/style.sass', 'css').setPublicPath('public_html');