const path = require('path');
const glob = require('glob');

const testFiles = glob.sync("**/*.test.js")
    .filter(function (element) {
        return element !== "out/test/bundle.test.js"
    })
    .map(function (element) {
        return "./" + element
    });

module.exports = {
    entry: testFiles,
    output: {
        path: path.resolve(__dirname, 'out/test'),
        filename: "bundle.test.js"
    },
    mode: "none"
};