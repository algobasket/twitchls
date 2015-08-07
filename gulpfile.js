var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss')
       .browserify('app.js', './public/js/app.js')
       .browserify('stream.js', './public/js/stream.js');
});
