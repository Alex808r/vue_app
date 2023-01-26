process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');

// включение линтера при компиляции в dev режиме
// const eslint = require('./loaders/eslint_plugin');
//
// environment.plugins.prepend('EslintWebpackPlugin', eslint);

module.exports = environment.toWebpackConfig();
