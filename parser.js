const fs = require('fs');
const { Parser } = require('acorn');

const testFilePath = __dirname + '/test-file.js';

const ast = Parser.parse(fs.readFileSync(testFilePath).toString());
console.log(ast);