let mix = require('laravel-mix');

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/regular.js',
    'js/regular.min.js'
  )
} else {
  mix.js(
    'src/regular.js',
    'js/regular.js'
  )
}
