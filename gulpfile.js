var elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(function(mix) {
    mix.webpack('index.js')
       .copy('src/index.html', 'dist/index.html');
});
