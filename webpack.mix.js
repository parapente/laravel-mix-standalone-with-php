const mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-serve');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.webpackConfig({
    output:{
        chunkFilename:'js/vuejs_code_split/[name].js',
    }
});*/

var publicFolder = process.env.MIX_PUBLIC_FOLDER;

mix.setPublicPath(publicFolder);

mix.copy('src/*.php', publicFolder);

mix.js('src/js/app.js', 'js')
   .sass('src/sass/app.scss', 'css')
   //.vue({ version: 2 })
   //.version('js/vuejs_code_split/*.js')
   .version()
   .extract()
   .purgeCss();

if (!mix.inProduction()) {
    mix.sourceMaps()
       .browserSync({
            proxy: 'localhost:8888',
            files: publicFolder,
            watch: true
       })
       .serve({
            cmd: 'php',
            args: [
                '-S', 'localhost:8888',
                '-t', publicFolder,
                '-d', 'include_path=".:..:/usr/share/php"',
                '2>&1'
            ],
            verbose: true,
            dev: false,
       });

}

