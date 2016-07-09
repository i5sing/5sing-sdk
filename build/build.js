/**
 * Created by zhaofeng on 7/9/16.
 */
var fs = require('fs');
var zlib = require('zlib');
var rollup = require('rollup');
var uglify = require('uglify-js');
var babel = require('rollup-plugin-babel');
var replace = require('rollup-plugin-replace');
var version = process.env.VERSION || require('../package.json').version;

var banner =
    '/*!\n' +
    ' * SingSdk v' + version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' Elwin-赵小峰\n' +
    ' * Released under the MIT License.\n' +
    ' */';

// CommonJS build.
// this is used as the "main" field in package.json
// and used by bundlers like Webpack and Browserify.
rollup.rollup({
    entry: 'src/index.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}).then(function (bundle) {
    return write('dist/SingSdk.common.js', bundle.generate({
        format: 'cjs',
        banner: banner
    }).code)
}).catch(logError);

function write(dest, code) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(dest, code, function (err) {
            if (err) return reject(err);
            console.log(blue(dest) + ' ' + getSize(code));
            resolve()
        })
    })
}

function getSize(code) {
    return (code.length / 1024).toFixed(2) + 'kb';
}

function logError(e) {
    console.log(e);
}

function blue(str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}
