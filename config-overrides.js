/**
 * 覆盖默认的webpack的配置,将我们的antd-mobile变成按需引入的方式
 * 
 */


// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     console.log(config)
//     return config;
//   };

const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);